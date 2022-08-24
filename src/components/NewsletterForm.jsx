import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import blueButton from "../images/hex-button.svg";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

const NewsletterForm = ({ toggleModal }) => {
	let [loading, setLoading] = useState(false);
	const SignupSchema = Yup.object().shape({
		nickname: Yup.string()
			.required("Add your nickname and hit the button to subscribe")
			.min(2, "Your nickname must be 2-30 characters - check it, correct it, and hit the button to subscribe.")
			.max(30, "Your nickname must be 2-30 characters - check it, correct it, and hit the button to subscribe."),
		email: Yup.string()
			.email("Your email address format looks incorrect - check it, correct it, and hit the button to subscribe.")
			.required("Add your email and hit the button to subscribe."),
	});

	const { handleSubmit, handleChange, values, errors, touched } = useFormik({
		initialValues: {
			nickname: "",
			email: "",
		},
		validationSchema: SignupSchema,
		onSubmit: values => handleOnSubmit(values),
	});

	const handleOnSubmit = values => {
		setLoading(true)
		const data = {
			email: values.email,
			fieldValues: [
				{
					field: 1,
					value: values.nickname,
				},
			],
		};

		const options = {
			method: "POST",
			data: data,
			url: "https://us-central1-traverse-serverless-9959d.cloudfunctions.net/createNewContact",
		};

		axios(options)
			.then(response => {
				setLoading(false)
				toggleModal(["confirmation sent", "", "Check your mailbox and confirm your subscription."]);
			})
			.catch(error => {
				setLoading(false)
				if(error.response.data.status === 422) {
					toggleModal(["", error.response.data.response.errors[0].title, ""]);

				} else {
					toggleModal(["", "Something went wrong, please try again later", ""]);
				}
			});
	};

	return (
		<Container>
			<Row className='justify-content-center'>
				<Col md={{ size: 6 }} className="position-relative">
					<h2 className='light-blue text-center text-md-left'>get traverse updates</h2>
					<ClipLoader color='#ffffff' loading={loading} className="spinner" />
					<Form onSubmit={handleSubmit} className='mt-4 mt-md-0'>
						<FormGroup>
							<Label for='name'>Nickname *</Label>
							<Input type='text' name='nickname' id='nickname' onChange={handleChange} value={values.nickname} />
							{errors.nickname && touched.nickname ? <span>{errors.nickname}</span> : null}
						</FormGroup>
						<FormGroup>
							<Label for='examplePassword'>Email Address *</Label>
							<Input type='email' name='email' id='email' onChange={handleChange} value={values.email} />
							{errors.email && touched.email ? <span>{errors.email}</span> : null}
						</FormGroup>
						<Label className='mt-4'>
							By filling in this form and clicking “SUBSCRIBE” you give us your consent to process your personal data, provided in
							this form, to get educational, promotional and sales information in the newsletter format. Please be informed that you
							can withdraw your consent at any time. To learn more about how we process your personal data,
							<a href='https://gamerhash.com/en/privacy' target='_blank' rel='noreferrer'>
								{" "}
								check
							</a>
							.
						</Label>
						<div className='text-center text-lg-start'>
							<button className='mt-4 mt-md-5 blue-button'>
								<img src={blueButton} alt='' />
								<p>subscribe</p>
							</button>
						</div>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default NewsletterForm;
