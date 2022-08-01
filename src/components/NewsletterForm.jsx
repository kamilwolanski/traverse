import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import blueButton from "../images/hex-button.svg";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { Container, Row, Col } from "reactstrap";

const NewsletterForm = ({ toggleModal }) => {
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
		console.log("values", values);
		const options = {
			method: "POST",
			data: values,
			url: "https://us-central1-traverse-serverless.cloudfunctions.net/createNewContact",
		};

		axios(options)
			.then(response => {
				console.log("response", response);
				toggleModal();
			})
			.catch(error => {
				console.log("error", error);
			});
	};

	return (
		<Container>
			<Row className='justify-content-center'>
				<Col md={{ size: 6 }}>
					<h2 className='light-blue text-center text-md-left'>get traverse updates</h2>
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
							can withdraw your consent at any time. To learn more about how we process your personal data, check
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
