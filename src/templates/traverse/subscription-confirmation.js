import React from "react";
import { navigate } from "gatsby";
import { Container, Row, Col } from "reactstrap";
import Layout from "../../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import useDiscordOnlineUsers from "../../hooks/useDiscordOnlineUsers";
import Seo from "../../components/seo";

import SocialBtn from "../../components/SocialBtn";
import discordBlack from "../../images/social-btns-black/discord.svg";
import blueButton from "../../images/hex-button.svg";
import logoWhite from "../../images/logo-white-stroke.svg";
import gamerhashLogoWhite from "../../images/gamerhash_logo_white.svg";
import sandboxLogoWhite from "../../images/sandbox_logo_white.svg";
import x from "../../images/x_white.svg";

const TraversePage = () => {
	const onlineUsers = useDiscordOnlineUsers("https://discord.com/api/guilds/400320103830388736/widget.json");

	return (
		<Layout page='subscription-confirmation'>
			<Seo />
			<header>
				<Container>
					<Row>
						<Col xs='12'>
							<div className='d-flex common-logo align-items-center justify-content-center d-md-none'>
								<a href='https://gamerhash.com/en' target='_blank' rel='noreferrer'>
									<img src={gamerhashLogoWhite} alt='gamerhash logo' />
								</a>
								<img src={x} className='x' alt='x' />
								<a href='https://www.sandbox.game/en/' target='_blank' rel='noreferrer'>
									<img src={sandboxLogoWhite} alt='sandbox logo' />
								</a>
							</div>
						</Col>
					</Row>
					<Row className='mt-4'>
						<Col xs={{ size: 6, offset: 3 }} md={{ size: 2, offset: 5 }}>
							<img src={logoWhite} alt='logo white' className='w-100 pt-md-4' />
						</Col>
					</Row>
				</Container>
			</header>
			<section className='d-none d-md-block pb-md-2'>
				<Container fluid>
					<Row>
						<Col xs={{ size: 4, offset: 8 }} className='p-0'>
							<StaticImage src='../../images/quarry.png' alt='quarry' quality={100} placeholder='tracedSVG'/>
						</Col>
					</Row>
				</Container>
			</section>
			<section className='pt-md-0'>
				<Container>
					<Row>
						<Col md='12'>
							<h1 className='text-center light-blue'>thank you for joining the ride!</h1>
						</Col>
						<Col xs={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
							<p className='text-center white line-height-30'>
								You’ve successfully subscribed for the TRAVERSE: Mars is Mine newsletter. We’ll keep you posted!
							</p>
						</Col>
					</Row>
					<Row>
						<Col xs='12' className='d-flex justify-content-center'>
							<a href='https://gamerhash.com/' target='_blank' rel='noreferrer'>
								<button className='mt-3 mt-md-4 mt-sm-0 mb-3 blue-button'>
									<img src={blueButton} alt='' />
									<p>visit gamerhash</p>
								</button>
							</a>
						</Col>
						<Col xs='12' className='d-flex justify-content-center'>
							<p className='go-back mt-md-2 z-index-1 white d-block text-center d-inline-block' onClick={() => navigate(-1)}>
								GO BACK
							</p>
						</Col>
					</Row>
				</Container>
			</section>

			<section className='d-none d-md-block pt-md-2'>
				<Container fluid>
					<Row>
						<Col xs={{ size: 4 }} className='p-0'>
							<StaticImage src='../../images/museum.png' alt='museum' quality={100} placeholder='tracedSVG'/>
						</Col>
					</Row>
				</Container>
			</section>

			<section className='d-md-none'>
				<Row>
					<Col xs='8'>
						<StaticImage src='../../images/museum.png' alt='museum' quality={100} placeholder='tracedSVG'/>
					</Col>
				</Row>
				<Row>
					<Col xs={{ size: 8, offset: 4 }}>
						<StaticImage src='../../images/quarry.png' alt='quarry' quality={100} placeholder='tracedSVG'/>
					</Col>
				</Row>
			</section>

			<section className='d-none d-md-block'>
				<Container>
					<Row>
						<Col>
							<div className='d-flex common-logo align-items-center justify-content-center'>
								<a href='https://gamerhash.com/en' target='_blank' rel='noreferrer'>
									<img src={gamerhashLogoWhite} alt='gamerhash logo' />
								</a>
								<img src={x} className='x' alt='x' />
								<a href='https://www.sandbox.game/en/' target='_blank' rel='noreferrer'>
									<img src={sandboxLogoWhite} alt='sandbox logo' />
								</a>
							</div>
						</Col>
					</Row>
				</Container>
			</section>

			<footer className='d-none d-lg-block'>
				<Container className='d-flex justify-content-between justify-content-xxl-end align-items-end h-100'>
					<div className='d-xxl-none'>
						<p className='bigger'>© 2022 CoinAxe sp. z o.o.</p>
					</div>
					<div className='z-index-1'>
						<div className='social-btns mb-2'>
							<SocialBtn icon='facebook' color='black' classes={["mx-2", "d-inline-flex"]} />
							<SocialBtn icon='youtube' color='black' classes={["mx-2", "d-inline-flex"]} />
							<SocialBtn icon='medium' color='black' classes={["mx-2", "d-inline-flex"]} />
							<SocialBtn icon='twitter' color='black' classes={["mx-2", "d-inline-flex"]} />

							<a href='https://discord.com/invite/TzbsXdYkjY' className='mx-2 d-inline-flex'>
								<img src={discordBlack} className='social-btn z-index-1 discord' alt='discord' />
								<div className='online-users-discord'>
									<p>ONLINE:{onlineUsers}</p>
								</div>
							</a>
						</div>
					</div>
				</Container>
				<div className='copyright d-none d-xxl-block'>
					<p className='bigger'>© 2022 CoinAxe sp. z o.o.</p>
				</div>
			</footer>
			<footer className='d-lg-none d-flex align-items-end'>
				<Container className='d-flex flex-column align-items-center'>
					<div className='z-index-1'>
						<div className='social-btns mb-2'>
							<SocialBtn icon='facebook' color='black' classes={["mx-1", "mx-lg-2", "d-inline-flex"]} />
							<SocialBtn icon='youtube' color='black' classes={["mx-1", "mx-lg-2", "d-inline-flex"]} />
							<SocialBtn icon='medium' color='black' classes={["mx-1", "mx-lg-2", "d-inline-flex"]} />
							<SocialBtn icon='twitter' color='black' classes={["mx-1", "mx-lg-2", "d-inline-flex"]} />

							<a href='https://discord.com/invite/TzbsXdYkjY' className='mx-1 mx-lg-2 d-inline-flex'>
								<img src={discordBlack} className='social-btn z-index-1 discord' alt='discord' />
								<div className='online-users-discord'>
									<p>ONLINE:{onlineUsers}</p>
								</div>
							</a>
						</div>
					</div>
					<div className='copyright w-100 position-relative'>
						<p className='bigger text-center'>© 2022 CoinAxe sp. z o.o.</p>
					</div>
				</Container>
			</footer>
		</Layout>
	);
};

export default TraversePage;
