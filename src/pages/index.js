import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Card, CardBody, Modal } from "reactstrap";
import { Link as ScrollLink } from "react-scroll";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import Lottie from "react-lottie-player";
import lottieBg from "../images/animations/bg - 1.json";
import Slider from "react-slick";
import NewsletterForm from "../components/NewsletterForm";

import logoz from "../images/logoz.svg";
import discord from "../images/social-btns/discord.svg";
import discordOnline from "../images/social-btns/discord_online.svg";
import facebook from "../images/social-btns/facebook.svg";
import telegram from "../images/social-btns/telegram.svg";
import medium from "../images/social-btns/medium.svg";
import twitter from "../images/social-btns/twitter.svg";
import yt from "../images/social-btns/yt.svg";
import hex from "../images/nfts-shape-mobile.svg";
import playBtn from "../images/play-rounded-button.svg";
import greyButton from "../images/button-stroke.svg";
import blueButton from "../images/hex-button.svg";
import bgc from "../images/bg.png";
import arrow from "../images/arrow.svg";
import bug1 from "../images/bug_concept.png";
import bug2 from "../images/bug_voxel.png";
import logoWhite from "../images/logo-white-stroke.svg";
import popUpBgc from "../images/popup-glass-shape.svg";
import heroBgc from "../images/top-bg-shape.svg";
import heroBgcMobile from "../images/top-bg-shape2-mobile.svg";
import useWindowSize from "../hooks/useWindowSize";
import useDiscordOnlineUsers from "../hooks/useDiscordOnlineUsers";

const TraversePage = () => {
	const { width } = useWindowSize();
	const onlineUsers = useDiscordOnlineUsers("https://discord.com/api/guilds/400320103830388736/widget.json");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isSubscibedModalOpen, setIsSubscribedModalOpen] = useState(false);
	const [embedUrl, setEmbedUrl] = useState(null);

	const { placeholderImage } = useStaticQuery(
		graphql`
			query {
				placeholderImage: file(relativePath: { eq: "top-bg-shape.png" }) {
					childImageSharp {
						gatsbyImageData(layout: FULL_WIDTH, quality: 100)
					}
				}
			}
		`
	);

	console.log("width", width);
	console.log("onlineMembers", onlineUsers);
	useEffect(() => {
		const elems = document.getElementsByClassName("slick-slide");
		Array.from(elems).forEach(v => {
			// console.log('v', v.childNodes)
			v.childNodes.forEach((x, index) => {
				x.addEventListener("mouseover", e => {
					Array.from(elems).forEach(v => {
						v.childNodes[index].childNodes.forEach(box => {
							box.style.transform = "scale(1.03)";
						});
					});
				});

				x.addEventListener("mouseout", e => {
					console.log("index", index);
					Array.from(elems).forEach(v => {
						v.childNodes[index].childNodes.forEach(box => {
							box.style.transform = "scale(1)";
						});
					});
				});
			});
		});
	}, []);
	const image = getImage(placeholderImage);

	// Use like this:
	const bgImage = convertToBgImage(image);

	const settings = {
		className: "center",
		centerMode: true,
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 1,
		speed: 500,
		rows: 3,
		slidesPerRow: 5,
		focusOnSelect: false,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					className: "center",
					centerMode: true,
					infinite: true,
					centerPadding: "60px",
					slidesToShow: 1,
					speed: 500,
					rows: 3,
					slidesPerRow: 3,
					focusOnSelect: false,
				},
			},
		],
	};

	const handleBox = e => {
		const eventType = e.type;
		if (eventType === "mouseover") {
			e.currentTarget.classList.add("active");
		} else if (eventType === "mouseout") {
			e.currentTarget.classList.remove("active");
		}
	};

	const renderSliderBoxes = () => {
		const arrayOfBoxes = [];
		for (let i = 0; i < 3; i++) {
			for (let j = 1; j <= 15; j++) {
				arrayOfBoxes.push(
					<div className='box' onMouseOver={e => handleBox(e)} onMouseOut={e => handleBox(e)}>
						<div className='wrapper'>
							<p>{j}</p>
							<img src={hex} />
						</div>
						<h3>{j}</h3>
					</div>
				);
			}
		}
		return arrayOfBoxes;
	};

	const toggleSubscribedModal = () => {
		setIsSubscribedModalOpen(!isSubscibedModalOpen);
	};

	const handleVideo = url => {
		setEmbedUrl(url);
		setIsModalOpen(true);
	};

	return (
		<Layout page='traverse'>
			<div className='hero'>
				<Lottie loop animationData={lottieBg} play />
				{/* <BackgroundImage Tag="section" {...bgImage} > */}
				<img src={heroBgc} alt='' className='grey-bgc d-none d-md-block' />
				<img src={heroBgcMobile} alt='' className='d-md-none w-100' />
				<div className='zxc'>
					<Container>
						<Row>
							<Col className='text-center'>
								<div className='logo mx-auto'>
									<img src={logoz} className='w-100' />
								</div>
								<Row className='justify-content-center'>
									<Col xs={{ size: 11 }} md={{ size: 10, offset: 1 }} xxl={{ size: 6, offset: 3 }}>
										<p className='mt-3 mt-xxl-5 pt-3 description'>
											2055. Mankind is being forced to seek for new sources of energetic elements and habitats outside the Earth.
											The most obvious choice is uninhabited planet - Mars. Experienced space traveller - Astro and his crew are
											a part of first mission being sent to examine possible location for new colony. What seemed like a simple
											task soon will become a dangerous adventure and a reveal of huge conspiracy...
										</p>
									</Col>
								</Row>
								<ScrollLink to='newsletter' smooth={true} duration={600} className='d-md-none'>
									<button className='mt-5 mb-5 blue-button'>
										<img src={blueButton} alt='' />
										<p>subscribe</p>
									</button>
								</ScrollLink>
								<ScrollLink to='newsletter2' smooth={true} duration={600} className='d-none d-md-block'>
									<button className='mt-5 mb-5 blue-button'>
										<img src={blueButton} alt='' />
										<p>subscribe</p>
									</button>
								</ScrollLink>
							</Col>
						</Row>
					</Container>
				</div>
				{/* </BackgroundImage> */}
				<StaticImage src='../images/astro.png' alt='atro guy' placeholder='tracedSVG' className='astro' />
				<div className='social-btns'>
					<a href='https://discord.com/invite/TzbsXdYkjY'>
						<img src={discord} className='social-btn' />
					</a>
					<a href='https://www.facebook.com/GamerHashApp/'>
						<img src={facebook} className='social-btn' />
					</a>
					<a href='https://t.me/joinchat/KN7AOBQvrP58x619Fyg95A'>
						<img src={telegram} className='social-btn' />
					</a>
					<a href='https://medium.com/we-are-the-gamerhash'>
						<img src={medium} className='social-btn' />
					</a>
					<a href='https://twitter.com/GamerHashCom'>
						<img src={twitter} className='social-btn' />
					</a>
				</div>
				<StaticImage
					src='../images/gamer-hash-sandbox-logo.png'
					alt='gamer hash and sandbox logo'
					placeholder='tracedSVG'
					className='logos'
					quality={100}
				/>
			</div>
			<hr />
			<section className='articles'>
				<h1 className='text-center'>the press</h1>
				<Container>
					<Row className='justify-content-center'>
						<Col xs={{ size: 12 }} sm='8' md='7' lg='3'>
							<Card>
								<CardBody>
									<StaticImage src='../images/article1.png' alt='Card image cap' placeholder='tracedSVG' quality={100} />
									<p className='author'>ASTRO’S</p>
									<h3>Hello World?</h3>
									<p>
										This is a wider card with supporting text below as a natural lead-in to additional content. This content is a
										little bit longer.
									</p>
								</CardBody>
							</Card>
						</Col>
						<Col xs='12' sm='8' md='7' lg='3' className='mt-4 mt-lg-0'>
							<Card>
								<CardBody>
									<StaticImage src='../images/article2.png' alt='Card image cap' placeholder='tracedSVG' quality={100} />
									<p className='author'>GAMERHASH</p>
									<h3>We’ve entered the Metaverse.</h3>
									<p>
										This is a wider card with supporting text below as a natural lead-in to additional content. This content is a
										little bit longer.
									</p>
								</CardBody>
							</Card>
						</Col>
						<Col xs='12' sm='8' md='7' lg='3' className='mt-4 mt-lg-0'>
							<Card>
								<CardBody>
									<StaticImage src='../images/article3.png' alt='Card image cap' placeholder='tracedSVG' quality={100} />
									<p className='author'>THE SANDBOX</p>
									<h3>Welcome to the family of builders!</h3>
									<p>
										This is a wider card with supporting text below as a natural lead-in to additional content. This content is a
										little bit longer.
									</p>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>
			<hr className='hr hr-2' />
			<section className='promo pb-5'>
				<div className='default-skew'>
					<Container>
						<Row>
							<Col sm={{ size: 10, offset: 1 }} xxl={{ size: 4, offset: 4 }} className='mt-5'>
								<div className='text-center'>
									<StaticImage src='../images/logo-white-stroke.png' placeholder='tracedSVG' class='stroke-logo' />
								</div>
								<p className='text-center white mt-lg-5 pt-5'>
									"TRAVERSE. MARS IS MINE" is a free action-adventure game set in the alternative voxel world powered by The
									Sandbox
								</p>
								<p className='text-center white mt-3'>
									This game will take you through the large facility under the surface of Mars. There will be puzzles,
									environmental quests and lots of entertaining stories with good jokes building a rich lore of "TRAVERSE"
									universe.
								</p>
							</Col>
						</Row>
						<Row>
							<Col lg={{ size: 12 }}>
								<div className='glass-wrapper text-center'>
									<div className='glass-content'>
										<StaticImage src='../images/av-logo.png' placeholder='tracedSVG' className='mt-3 mt-lg-5 logo-white' />
										<Row>
											<Col lg={{ size: 8, offset: 2 }}>
												<h1 className='white mt-4'>mars underground facility</h1>
											</Col>
										</Row>
										<Row className='justify-content-center'>
											<Col xs='10' lg={{ size: 5 }} className='mx-auto'>
												<p>
													Established three thousand years ago under the surface of Mars by group of Reptillian colonizers. In
													the beginning as a simple mine of the most energetic element - GHXIUM then became one of the most
													sophisticated research and development facility in Solar system.
												</p>
												<p>
													Currently AV employs over 100.000 Reptillians in the whole Solar system who create cutting edge
													technologies that are being used on many other planets. From everyday items, through mining
													equipment, to cloaking devices, facility became a self-sufficient place to live and work for its
													happy employees. AV provides all basic services, has it's own canteen and a large museum with
													changeable exhibitions to keep Reptillians entertained. AV takes care of the Earth by secretly
													providing it with political and community leaders.
												</p>
												<p className='pb-5 mb-5'>
													Want to know more about AV? Please sign up for the tour and get all the news about the facility and
													its development!
												</p>
											</Col>
										</Row>
									</div>
									<StaticImage
										src='../images/repsec.png'
										placeholder='tracedSVG'
										className='d-none d-lg-block repsec'
										width={270}
									/>
									<StaticImage src='../images/map.png' placeholder='tracedSVG' className='map' width={350} />
								</div>
							</Col>
						</Row>
					</Container>
					<Container fluid className='mt-5 mt-lg-0'>
						<div className='quarry'>
							<Row className='justify-content-center'>
								<Col xs='6' sm='5' xxl={{ size: 6 }} className='d-flex justify-content-center'>
									<StaticImage src='../images/concept-museum.png' placeholder='tracedSVG' quality={100} />
								</Col>
							</Row>
							<Row className='second-row justify-content-center'>
								<Col xs='6' sm='5' xxl='6' className='d-flex justify-content-end'>
									<StaticImage src='../images/quarry-hall.png' placeholder='tracedSVG' className='pr-2' quality={100} />
								</Col>
								<Col xs='6' sm='5' xxl='6' className='d-flex justify-content-start'>
									<div className='quarry-3-wrapper'>
										<StaticImage src='../images/quarry-3.png' placeholder='tracedSVG' className='pl-2' quality={100} />
										<h2>
											quarry <br /> level -3
										</h2>
									</div>
								</Col>
							</Row>
							<Row>
								<Col sm={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }}>
									<p className='text-center white mt-3 mt-sm-5'>
										The giant underground open pit mining quarry is a one of a kind structure. The space is filled with GHXium in
										crystal and lava form, held by 4 huge pillars, that keep it from collapsing and enable the flow of energy from
										the core up the planet’s ground.
									</p>
								</Col>
							</Row>
						</div>
					</Container>
					<Container fluid>
						<div className='museum px-lg-5 mt-5 pt-5'>
							<div className='d-lg-none'>
								<Row className='second-row justify-content-center'>
									<Col xs='6' sm='5' lg='6' className='d-flex justify-content-end'>
										<div className='museum-2-wrapper'>
											<StaticImage src='../images/museum-level2.png' placeholder='tracedSVG' className='pr-2' quality={100} />
											<h2>
												museum <br /> level -2
											</h2>
										</div>
									</Col>
									<Col xs='6' sm='5' lg='6' className='d-flex justify-content-start'>
										<div className='museum-2-wrapper'>
											<StaticImage src='../images/quarry-hall-museum.png' placeholder='tracedSVG' quality={100} />
										</div>
									</Col>
								</Row>
								<Row className='justify-content-center'>
									<Col xs='6' sm='5' lg={{ size: 6 }} className='d-flex justify-content-center'>
										<StaticImage src='../images/quarry-lab_idea.png' placeholder='tracedSVG' className='pl-2' quality={100} />
									</Col>
								</Row>
							</div>
							<Row className='d-none d-lg-flex'>
								<Col md='4'>
									<StaticImage src='../images/quarry-hall-museum.png' placeholder='tracedSVG' quality={100} />
								</Col>
								<Col md='4'>
									<div className='museum-2-wrapper'>
										<StaticImage src='../images/museum-level2.png' placeholder='tracedSVG' quality={100} />
										<h2>
											museum <br /> level -2
										</h2>
									</div>
								</Col>
								<Col md='4'>
									<StaticImage src='../images/quarry-lab_idea.png' placeholder='tracedSVG' quality={100} />
								</Col>
							</Row>
							<Row>
								<Col sm={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }}>
									<p className='text-center white mt-3 mt-sm-5'>
										When moving out of the excavations the feeling is changing. Suddenly Astro and a player found themselves in an
										educational area. Great library, contemporary exhibitions, living fauna and flora. There is no better place to
										deepen the mysteries of Reptilians. Are they like us? Or we are like them?
									</p>
									<div className='frame-box mt-5'>
										<p className='white m-0 text-center'>
											At the heart of the alien facility, there is a huge museum of humanity, that will host some of the coolest
											NFT assets in The Sandbox Metaverse
										</p>
									</div>
								</Col>
							</Row>
						</div>
					</Container>
					<hr />
					<Container className='mt-5'>
						<Row className='justify-content-center'>
							<Col lg={{ size: 7 }}>
								<h1 className='white mt-5 text-center'>...who are you going to help?</h1>
								<p className='text-center white'>
									Reptillian society isn't homogeneous, there are diffrent groups that share same agenda and are hostile or dislike
									each other. Choose your side and your decision will lead to a different outcome.
								</p>
							</Col>
						</Row>
						<Row className='justify-content-center mt-lg-5 pt-lg-5'>
							<Col xs='6' lg={{ size: 4 }}>
								<div className='scientis mt-5'>
									<StaticImage src='../images/lab-b-outside.png' placeholder='tracedSVG' quality={100} />
									<StaticImage src='../images/repsci.png' placeholder='tracedSVG' quality={100} className='rep rep-scientis' />
								</div>
								<div className='text-center pt-5 mt-5'>
									<h2>scientists</h2>
									<p className='white mt-3'>
										Befriend scientists and you will get access to cutting edge technologies that will help you achieve your
										goals!
									</p>
								</div>
							</Col>
							<Col xs='6' lg={{ size: 4 }}>
								<div className='miner mt-5'>
									<StaticImage src='../images/quarry-hiddenPlace-idea-A.png' placeholder='tracedSVG' quality={100} />
									<StaticImage src='../images/repmin.png' placeholder='tracedSVG' quality={100} className='rep rep-miner' />
								</div>
								<div className='text-center pt-5 mt-5'>
									<h2>miners</h2>
									<p className='white mt-3'>
										Work for miners and they will provide you with sheer manpower that overcomes any obstacle on your way out of
										the facility.
									</p>
								</div>
							</Col>
						</Row>
					</Container>
					<hr />
					<Container fluid className='mt-lg-5 pt-5'>
						<div className='labs px-lg-5 mt-lg-5 pt-lg-5'>
							<div className='d-lg-none'>
								<Row className='justify-content-center'>
									<Col xs='6' sm='5' lg='6' className='d-flex justify-content-start'>
										<div className='museum-2-wrapper'>
											<StaticImage src='../images/hall-lobby_new.png' placeholder='tracedSVG' quality={100} />
										</div>
									</Col>
								</Row>
								<Row className='second-row justify-content-center'>
									<Col xs='6' sm='5' lg='6' className='d-flex justify-content-end'>
										<div className='labs-1-wrapper'>
											<StaticImage src='../images/screening.png' placeholder='tracedSVG' quality={100} />
											<h2>
												labs <br /> level -1
											</h2>
										</div>
									</Col>
									<Col xs='6' sm='5' lg={{ size: 6 }} className='d-flex justify-content-center'>
										<StaticImage src='../images/Quarry_Lab_idea-A.png' placeholder='tracedSVG' quality={100} />
									</Col>
								</Row>
							</div>
							<Row className='d-none d-lg-flex'>
								<Col lg='4'>
									<StaticImage src='../images/hall-lobby_new.png' placeholder='tracedSVG' quality={100} />
								</Col>
								<Col lg='4'>
									<div className='labs-1-wrapper'>
										<StaticImage src='../images/screening.png' placeholder='tracedSVG' quality={100} />
										<h2>
											labs <br /> level -1
										</h2>
									</div>
								</Col>
								<Col lg='4'>
									<StaticImage src='../images/Quarry_Lab_idea-A.png' placeholder='tracedSVG' quality={100} />
								</Col>
							</Row>
							<Row className='justify-content-center'>
								<Col sm={{ size: 10, offset: 1 }} lg={{ size: 6 }}>
									<p className='text-center white mt-3 mt-sm-5'>
										The higher in the facility, the more technological progression unfolds. This is a habitat where Reptilians
										show their inner nature. Labs are beyond imagination but experiments they follow are morally questionable.
										Each room shares a different story. Do you want to become enlightened? Open his eyes!
									</p>
								</Col>
							</Row>
						</div>
					</Container>
					<Container>
						<Row className='justify-content-center mt-lg-5 pt-5'>
							<Col xs='6' lg='4'>
								<StaticImage src='../images/surface.png' placeholder='tracedSVG' quality={100} />
							</Col>
							<Col xs='6' lg='4'>
								<div className='surface-0-wrapper'>
									<StaticImage src='../images/surface2.png' placeholder='tracedSVG' quality={100} />
									<h2>
										surface <br /> level -0
									</h2>
								</div>
							</Col>
						</Row>
						<Row className='justify-content-center'>
							<Col lg={{ size: 6 }}>
								<p className='text-center white mt-4 mt-lg-5'>
									Time to find the rocket, take what’s needed and move out of Mars’ surface. We are not the only ones who know what
									happened there! There’s one more person that knows exactly what’s going on.
								</p>
							</Col>
						</Row>
					</Container>
				</div>
			</section>
			<section className='animated-section'>
				<Container>
					<Row>
						<Col lg={{ size: 8, offset: 2 }}>
							<h1 className='text-center extra-margin'>traverse nft drops in one place</h1>
							<p className='bigger text-center grey'>
								We’re collectors &amp; builders at heart. We couldn’t leave you without a way to get a piece of our game as a
								collectible. That’s why we’re publishing some of the assets that you’ll find in the game as NFTs.
							</p>
							<p className='bigger text-center grey'>
								The NFTs will be dropped in 3 phases - each one with different utilities that you’ll get to know more when we
								announce the drops. Keep tuned &amp; sign up to our newsletter to stay in the loop.
							</p>
						</Col>
					</Row>
				</Container>
				<Slider {...settings} className='mt-5'>
					{renderSliderBoxes()}
				</Slider>
				<div className='text-center mt-5 d-md-none'>
					<ScrollLink to='newsletter' smooth={true} duration={300}>
						<button>
							<img src={greyButton} alt='stay tuned' />
							<p>stay tuned</p>
						</button>
					</ScrollLink>
				</div>
				<div className='text-center mt-5 d-none d-md-block'>
					<ScrollLink to='newsletter2' smooth={true} duration={300}>
						<button>
							<img src={greyButton} alt='stay tuned' />
							<p>stay tuned</p>
						</button>
					</ScrollLink>
				</div>
			</section>
			<div className='red-section-wrapper'>
				<section className='red-section'>
					<div className='v'>
						<Container>
							<div className='default-skew'>
								<h1 className='light-blue text-center'>dive into metaverse &amp; nft</h1>
								<div className='mt-5 pt-4'>
									<Row className='justify-content-center'>
										<Col xs='12' sm='8' md='9' lg='4'>
											<div className='video-wrapper' onClick={() => handleVideo("https://www.youtube.com/embed/ZOQvoptsPiU")}>
												<StaticImage src='../images/video_1.jpg' />
												<img className='play-btn' src={playBtn} />
											</div>
										</Col>
										<Col xs='12' sm='8' md='9' lg='4' className='mt-4 mt-lg-0'>
											<div className='video-wrapper' onClick={() => handleVideo("https://www.youtube.com/embed/LpvMYmzwoBg")}>
												<StaticImage src='../images/video_2.jpg' />
												<img className='play-btn' src={playBtn} />
											</div>
										</Col>
										<Col xs='12' sm='8' md='9' lg='4' className='mt-4 mt-lg-0'>
											<div className='video-wrapper' onClick={() => handleVideo("https://www.youtube.com/embed/0pL95-KAZfA")}>
												<StaticImage src='../images/video_3.jpg' />
												<img className='play-btn' src={playBtn} />
											</div>
										</Col>
									</Row>
								</div>
								<p className='text-center white mt-5'>go to full playlist</p>
							</div>
						</Container>
						<div className='newsletter overflow-hidden d-lg-none'>
							<div className='default-skew'>
								<Container fluid className='m-0 p-0'>
									<Row>
										<Col xs={{ size: 8, offset: 2 }}>
											<h1 className='text-center light-blue'>turning concepts into metaverse assets</h1>
										</Col>
									</Row>
									<div className='section-3d'>
										<div className='arrows overflow-hidden'>
											<img src={arrow} />
											<img src={arrow} />
											<img src={arrow} />
											<img src={arrow} />
											<img src={arrow} />
											<img src={arrow} />
											<img src={arrow} />
											<img src={arrow} />
											<img src={arrow} />
										</div>
										<Row className='vehicles'>
											<Col xs='6' lg={{ size: 3, offset: 2 }} className='text-center text-lg-left'>
												<StaticImage src='../images/vehicle_1.png' alt='' className='vehicle' placeholder='tracedSVG' />
											</Col>
											<Col xs='6' lg={{ size: 3, offset: 2 }} className='text-center text-lg-left'>
												<StaticImage src='../images/vehicle_2.png' alt='' className='vehicle' placeholder='tracedSVG' />
											</Col>
										</Row>
									</div>
									<div className='newsletter-wrapper' id='newsletter'>
										<NewsletterForm toggleModal={toggleSubscribedModal} />
									</div>
								</Container>
								<div className='bottom-bgc'>
									<img src={bgc} className='w-100' />
									<img src={bug1} className='bug bug-1' alt='' />
									<img src={bug2} className='bug bug-2' alt='' />
								</div>
							</div>
						</div>
					</div>
					<div className='newsletter overflow-hidden d-none d-lg-block'>
						<div className='default-skew'>
							<Container fluid className='m-0 p-0'>
								<h1 className='text-center light-blue'>turning concepts into metaverse assets</h1>
								<div className='section-3d'>
									<div className='arrows overflow-hidden'>
										<img src={arrow} />
										<img src={arrow} />
										<img src={arrow} />
										<img src={arrow} />
										<img src={arrow} />
										<img src={arrow} />
										<img src={arrow} />
										<img src={arrow} />
										<img src={arrow} />
									</div>
									<Row className='vehicles'>
										<Col xs='6' lg={{ size: 3, offset: 2 }}>
											<StaticImage src='../images/vehicle_1.png' alt='' className='vehicle' />
										</Col>
										<Col xs='6' lg={{ size: 3, offset: 2 }}>
											<StaticImage src='../images/vehicle_2.png' alt='' className='vehicle' />
										</Col>
									</Row>
								</div>
								<div className='newsletter-wrapper' id='newsletter2'>
									<NewsletterForm toggleModal={toggleSubscribedModal} />
								</div>
							</Container>
							<div className='bottom-bgc'>
								<img src={bgc} className='w-100' />
								<img src={bug1} className='bug bug-1' alt='' />
								<img src={bug2} className='bug bug-2' alt='' />
								<img src={logoWhite} className='logo-white' />
							</div>
						</div>
					</div>
				</section>
				<hr />
			</div>
			<section className='black'>
				<div className='wrapper'>
					<Container>
						<Row>
							<h1 className='text-center white'>the journey has just begun...</h1>
							<Col md={{ size: 6, offset: 3 }} xxl={{ size: 8, offset: 2 }}>
								<div className='text-center'>
									<StaticImage src='../images/metaverse_lands.png' quality={100} alt='' className='metaverse-lands' />
								</div>
							</Col>
						</Row>
						<Row className='justify-content-center'>
							<Col lg={{ size: 5 }}>
								<p className='text-center mt-5'>
									We have plenty of fuel to boost ourselves into the Metaverse & explore the unknown together with our community!
									Join us on this beautiful adventure through the LANDS of The Sandbox Metaverse.
								</p>
							</Col>
						</Row>
						<Row>
							<Col>
								<div className='text-center mt-5'>
									<StaticImage
										src='../images/gamer-hash-sandbox-logo.png'
										alt='gamer hash and sandbox logo'
										placeholder='tracedSVG'
										quality={100}
									/>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
				<hr className='mt-5' />
			</section>
			<footer className='d-none d-lg-block'>
				<Container className='d-flex justify-content-between align-items-end h-100'>
					<div></div>
					<div className='z-index-1'>
						<div className='social-btns mb-2'>
							<a href='https://www.facebook.com/GamerHashApp/' className='mx-2 d-inline-flex'>
								<img src={facebook} className='social-btn' />
							</a>
							<a href='https://www.youtube.com/channel/UCv6axnIN6jczLcLraH4cK6g' className='mx-2 d-inline-flex'>
								<img src={yt} className='social-btn' />
							</a>
							<a href='https://medium.com/we-are-the-gamerhash' className='mx-2 d-inline-flex'>
								<img src={medium} className='social-btn' />
							</a>
							<a href='https://twitter.com/GamerHashCom' className='mx-2 d-inline-flex'>
								<img src={twitter} className='social-btn' />
							</a>
							<a href='https://t.me/joinchat/KN7AOBQvrP58x619Fyg95A' className='mx-2 d-inline-flex'>
								<img src={discord} className='social-btn z-index-1' />
								<div id='test'>
									<p>ONLINE:{onlineUsers}</p>
								</div>
							</a>
						</div>
					</div>
				</Container>
				<div className='copyright'>
					<p className='bigger'>© 2022 CoinAxe sp. z o.o.</p>
				</div>
			</footer>
			<footer className='d-lg-none d-flex align-items-end'>
				<Container className='d-flex flex-column align-items-center'>
					<div></div>
					<div className='z-index-1'>
						<div className='social-btns mb-2'>
							<a href='https://www.facebook.com/GamerHashApp/' className='mx-2 d-inline-flex'>
								<img src={facebook} className='social-btn' />
							</a>
							<a href='https://www.youtube.com/channel/UCv6axnIN6jczLcLraH4cK6g' className='mx-2 d-inline-flex'>
								<img src={yt} className='social-btn' />
							</a>
							<a href='https://medium.com/we-are-the-gamerhash' className='mx-2 d-inline-flex'>
								<img src={medium} className='social-btn' />
							</a>
							<a href='https://twitter.com/GamerHashCom' className='mx-2 d-inline-flex'>
								<img src={twitter} className='social-btn' /> 
							</a>
							<a href='https://t.me/joinchat/KN7AOBQvrP58x619Fyg95A' className='mx-2 d-inline-flex'>
								<img src={discord} className='social-btn z-index-1' />
								<div id='test'>
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

			<Modal isOpen={isModalOpen} toggle={() => setIsModalOpen(false)} centered size='xl'>
				<iframe
					width='100%'
					height={width > 500 ? "700" : "300"}
					src={embedUrl + "?&autoplay=1"}
					title='YouTube video player'
					frameborder='0'
					allow='autoplay; fullscreen; picture-in-picture'
					allowfullscreen></iframe>
			</Modal>

			<Modal isOpen={isSubscibedModalOpen} toggle={toggleSubscribedModal} centered size='lg' className='subscribe-modal'>
				<div>
					<img src={popUpBgc} alt='popup-glass-shape' />
					<div className='content'>
						<Container>
							<Row>
								<Col>
									<h1 className='text-center white'>confirmation sent</h1>
									<p className='text-center mt-4'>Check your mailbox and confirm your subscription.</p>
									<div className='text-center mt-5'>
										<button className='mt-5 mb-5 blue-button' onClick={toggleSubscribedModal}>
											<img src={blueButton} alt='' />
											<p>ok</p>
										</button>
									</div>
								</Col>
							</Row>
						</Container>
					</div>
				</div>
			</Modal>
		</Layout>
	);
};

export default TraversePage;
