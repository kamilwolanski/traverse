import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Card, CardBody, Modal } from "reactstrap";
import { Link as ScrollLink } from "react-scroll";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Lottie from "react-lottie-player";
import lottieBg from "../images/animations/bg - 1.json";
import Slider from "react-slick";
import useWindowSize from "../hooks/useWindowSize";
import useDiscordOnlineUsers from "../hooks/useDiscordOnlineUsers";
import NewsletterForm from "../components/NewsletterForm";
import Seo from "../components/seo";

import SocialBtn from "../components/SocialBtn";
import traverseLogo from "../images/traverse-logo.svg";
import discordBlack from "../images/social-btns-black/discord.svg";
import hex from "../images/nfts-shape-mobile.svg";
import hexRed from "../images/nfts-shape-mobile-red.svg";
import hexSeaBlue from "../images/nfts-shape-mobile-seablue.svg";
import playBtn from "../images/play-rounded-button.svg";
import greyButton from "../images/button-stroke.svg";
import blueButton from "../images/hex-button.svg";
import bgc from "../images/bg.png";
import arrow from "../images/arrow.svg";
import bug1 from "../images/bug_concept.png";
import bug2 from "../images/bug_voxel.png";
import logoWhite from "../images/logo-white-stroke.svg";
import popUpBgc from "../images/popup-glass-shape.svg";
import popUpBgcMob from "../images/bg-glass-shape-mobile.svg";
import heroBgc from "../images/top-bg-shape.svg";
import heroBgcMobile from "../images/top-bg-shape-mobile.svg";
import glassShapeBgcMobile from "../images/bg-glass-shape-mobile.svg";
import glassShapeBgcDesktop from "../images/bg-glass-shape.svg";
import astro from "../images/astro.png";
import repsci from "../images/repsci.png";
import repmin from "../images/repmin.png";
import gamerhashLogo from "../images/gamerhash_logo.svg";
import sandboxLogo from "../images/sandbox_logo.svg";
import x from "../images/x.svg";

const TraversePage = () => {
	const { width } = useWindowSize();
	const onlineUsers = useDiscordOnlineUsers("https://discord.com/api/guilds/400320103830388736/widget.json");
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [subscribedModalCopy, setSubscribedModalCopy] = useState("");
	const [isSubscibedModalOpen, setIsSubscribedModalOpen] = useState(false);
	const [embedUrl, setEmbedUrl] = useState(null);

	const settings = {
		className: "center",
		centerMode: false,
		infinite: true,
		centerPadding: "60px",
		slidesToShow: 1,
		speed: 500,
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
					slidesPerRow: 2,
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

	const renderRow = rowNumber => {
		const slidesToRender = [];

		const rows = ["first", "second", "third"];
		const handleHex = () => {
			if (rowNumber === 1) {
				return hex;
			} else if (rowNumber === 2) {
				return hexRed;
			} else if (rowNumber === 3) {
				return hexSeaBlue;
			} else {
				return hex;
			}
		};

		for (let index = 0; index < 10; index++) {
			slidesToRender.push(
				<div
					className='box'
					onMouseOver={e => handleBox(e)}
					onMouseOut={e => handleBox(e)}
					onFocus={e => handleBox(e)}
					onBlur={e => handleBox(e)}
					role='button'
					tabIndex={0}
					key={index}>
					<div className='wrapper'>
						<StaticImage src='../images/blurred.png' quality={10} alt='' className='slider-asset' />
						{rowNumber && (
							<span>
								{rows[rowNumber - 1]}
								<br />
								drop
							</span>
						)}
						<img src={handleHex()} alt='' />
					</div>
				</div>
			);
		}

		return slidesToRender;
	};

	const toggleSubscribedModal = modalCopy => {
		setSubscribedModalCopy(modalCopy);
		setIsSubscribedModalOpen(!isSubscibedModalOpen);
	};

	const handleVideo = url => {
		setEmbedUrl(url);
		setIsModalOpen(true);
	};

	return (
		<Layout page='traverse'>
			<Seo />
			<div className='hero'>
				<Lottie loop animationData={lottieBg} play className='d-none d-lg-block' ale='' />
				<img src={heroBgc} alt='' className='hero-bgc d-none d-sm-block' />
				<img src={heroBgcMobile} alt='' className='d-sm-none w-100' />
				<div className='hero-content-wrapper'>
					<Container>
						<Row>
							<Col className='text-center'>
								<div className='logo mx-auto'>
									<img src={traverseLogo} className='w-100' alt='' />
								</div>
								<Row className='justify-content-center'>
									<Col xs={{ size: 11 }} sm={{ size: 12 }} md={{ size: 10 }} xxl={{ size: 6 }}>
										<p className='mt-3 mt-xxl-5 pt-3 mt-sm-0 pt-sm-0 mt-md-3 description light-blue'>
											2055. Mankind is being forced to seek for new sources of energetic elements and habitats outside the Earth.
											The most obvious choice is uninhabited planet - Mars. Experienced space traveller - Astro and his crew are
											a part of first mission being sent to examine possible location for new colony. What seemed like a simple
											task soon will become a dangerous adventure and a reveal of huge conspiracy...
										</p>
									</Col>
								</Row>
								<ScrollLink to='newsletter' smooth={true} duration={600} className='d-md-none'>
									<button className='mt-3 mt-sm-0 mb-5 blue-button'>
										<img src={blueButton} alt='' />
										<p>subscribe</p>
									</button>
								</ScrollLink>
								<ScrollLink to='newsletter2' smooth={true} duration={600} className='d-none d-md-block'>
									<button className='mt-4 mt-xl-5 mb-5 blue-button'>
										<img src={blueButton} alt='' />
										<p>subscribe</p>
									</button>
								</ScrollLink>
							</Col>
						</Row>
					</Container>
				</div>
				<img src={astro} alt='atro guy' placeholder='tracedSVG' className='astro' />
				<div className='social-btns z-index-1'>
					<SocialBtn icon='discord' color='white' />
					<SocialBtn icon='facebook' color='white' />
					<SocialBtn icon='telegram' color='white' />
					<SocialBtn icon='medium' color='white' />
					<SocialBtn icon='twitter' color='white' />
				</div>
				<div className='d-flex common-logo align-items-center justify-content-center'>
					<a href='https://gamerhash.com/en' target='_blank' rel='noreferrer'>
						<img src={gamerhashLogo} alt='gamerhash logo' />
					</a>
					<img src={x} className='x' alt='x' />
					<a href='https://www.sandbox.game/en/' target='_blank' rel='noreferrer'>
						<img src={sandboxLogo} alt='sandbox logo' />
					</a>
				</div>
			</div>
			<hr />
			<section className='articles'>
				<h1 className='text-center'>the press</h1>
				<Container>
					<Row className='justify-content-center'>
						<Col xs={{ size: 12 }} sm='8' md='7' lg='3'>
							<a
								href='https://sandboxgame.medium.com/gamerhash-partners-with-the-sandbox-to-bring-700-000-gamers-to-the-metaverse-1e72f20c7d52'
								target='_blank'
								rel='noreferrer'>
								<Card>
									<CardBody>
										<StaticImage
											src='../images/articles-imgs/article1.png'
											alt='Card image cap'
											placeholder='tracedSVG'
											quality={100}
										/>
										<p className='author'>The Sandbox</p>

										<h3>The first Polish Studio developing in The Sandbox Metaverse!</h3>

										<p>
											We are happy to announce our new partnership with GamerHash, an ecosystem that allow its users share their
											computing power by simply running the GamerHash app in the background to receive cryptocurrencies in
											return!
										</p>
									</CardBody>
								</Card>
							</a>
						</Col>
						<Col xs='12' sm='8' md='7' lg='3' className='mt-4 mt-lg-0'>
							<a
								href='https://medium.com/thesandboxkorea/더-샌드박스-파트너-게이머해시를-소개합니다-6a888ca8605'
								target='_blank'
								rel='noreferrer'>
								<Card>
									<CardBody>
										<StaticImage
											src='../images/articles-imgs/article2.png'
											alt='Card image cap'
											placeholder='tracedSVG'
											quality={100}
										/>
										<p className='author'>더 샌드박스 코리아</p>

										<h3>더 샌드박스 파트너 ‘게이머해시’를 소개합니다</h3>

										<p>
											안녕하세요, 게이머해시 CMO를 맡고 있는 아서 스졸코우스키(Artur Pszczolkowski)입니다. 저는 지난 15년간
											디지털 산업에 몸담아 왔습니다. 5년 전, 암호화폐를 처음 알게 된 순간부터 이게 바로 제 능력을 발휘해야 할
											분야라고 생각했죠.
										</p>
									</CardBody>
								</Card>
							</a>
						</Col>
						<Col xs='12' sm='8' md='7' lg='3' className='mt-4 mt-lg-0'>
							<a href='https://www.binance.com/en/news/top/7127633' target='_blank' rel='noreferrer'>
								<Card>
									<CardBody>
										<StaticImage
											src='../images/articles-imgs/article3.jpeg'
											alt='Card image cap'
											placeholder='tracedSVG'
											quality={100}
										/>
										<p className='author'>Hassan Maishera</p>

										<h3>Binance: The Sandbox partners with GamerHash</h3>

										<p>
											The Sandbox announced on Tuesday that it has partnered with GamerHash to bring over 700,000 gamers to the
											metaverse. GamerHash is an ecosystem that allows its users to share their computing power by simply running
											the GamerHash app in the background to receive cryptocurrencies in return.
										</p>
									</CardBody>
								</Card>
							</a>
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
									<img src={logoWhite} alt='logo white' />
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
										<Row className='justify-content-center'>
											<Col xs='12' md={{ size: 12 }} lg='10' className='mx-auto'>
												<img src={glassShapeBgcMobile} alt='' className='w-100 d-md-none' />
												<img src={glassShapeBgcDesktop} alt='' className='w-100 d-none d-md-block' />
												<div className='glass-copy'>
													<Row className='justify-content-center'>
														<Col xs='11' lg='8' xl='7' xxl='6' className='mt-3 mt-lg-0 mt-xl-5'>
															<StaticImage
																src='../images/av-logo.png'
																placeholder='tracedSVG'
																className='logo-white'
																alt='logo-white'
															/>

															<h1 className='white mt-4'>mars underground facility</h1>

															<p className='light-blue'>
																Established three thousand years ago under the surface of Mars by group of Reptillian
																colonizers. In the beginning as a simple mine of the most energetic element - GHXIUM then
																became one of the most sophisticated research and development facility in Solar system.
															</p>
															<p className='light-blue'>
																Currently AV employs over 100,000 Reptillians in the whole Solar system who create cutting
																edge technologies that are being used on many other planets. From everyday items, through
																mining equipment, to cloaking devices, facility became a self-sufficient place to live and
																work for its happy employees. AV provides all basic services, has it's own canteen and a
																large museum with changeable exhibitions to keep Reptillians entertained. AV takes care of
																the Earth by secretly providing it with political and community leaders.
															</p>
															<p className='pb-5 mb-5 light-blue'>
																Want to know more about AV? Please sign up for the tour and get all the news about the
																facility and its development!
															</p>
														</Col>
													</Row>
												</div>
											</Col>
										</Row>
									</div>
									<StaticImage
										src='../images/repsec.png'
										placeholder='tracedSVG'
										className='d-none d-sm-block d-md-none d-lg-block repsec'
										alt='repsec'
									/>

									<StaticImage
										src='../images/map.png'
										placeholder='tracedSVG'
										className='map d-none d-sm-block'
										width={350}
										quality={100}
										alt='map'
									/>
								</div>
							</Col>
						</Row>
					</Container>
					<Container className='mt-5 mt-lg-0'>
						<div className='quarry'>
							<Row className='justify-content-center'>
								<Col xs='6' sm='5' xxl='5' className='d-flex justify-content-center'>
									<StaticImage src='../images/concept-museum.png' placeholder='tracedSVG' quality={100} />
								</Col>
							</Row>
							<Row className='second-row justify-content-center mt-2 mt-lg-3 mt-xl-1'>
								<Col xs='6' sm='5' xxl='5' className='d-flex justify-content-end'>
									<StaticImage src='../images/quarry-hall.png' placeholder='tracedSVG' className='pr-2' quality={100} />
								</Col>
								<Col xs='6' sm='5' xxl='5' className='d-flex justify-content-start'>
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
							<Row className='d-none d-lg-flex justify-content-center'>
								<Col widths={["md", "xxxl"]} md='4' xxxl='3'>
									<StaticImage src='../images/quarry-hall-museum.png' placeholder='tracedSVG' quality={100} />
								</Col>
								<Col widths={["md", "xxxl"]} md='4' xxxl='3'>
									<div className='museum-2-wrapper'>
										<StaticImage src='../images/museum-level2.png' placeholder='tracedSVG' quality={100} />
										<h2>
											museum <br /> level -2
										</h2>
									</div>
								</Col>
								<Col widths={["md", "xxxl"]} md='4' xxxl='3'>
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
									<StaticImage src='../images/lab-b-outside.png' placeholder='tracedSVG' quality={100} alt='' />
									<img src={repsci} className='rep rep-scientis' alt='repsci' />
								</div>
								<div className='text-center pt-5 mt-2 mt-sm-5'>
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
									<img src={repmin} className='rep rep-miner' alt='repmin' />
								</div>
								<div className='text-center pt-5 mt-2 mt-sm-5'>
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
											<StaticImage src='../images/hall-lobby_new.png' placeholder='tracedSVG' quality={100} alt='' />
										</div>
									</Col>
								</Row>
								<Row className='second-row justify-content-center mt-2 mt-lg-3 mt-xl-1'>
									<Col xs='6' sm='5' lg='6' className='d-flex justify-content-end'>
										<div className='labs-1-wrapper'>
											<StaticImage src='../images/screening.png' placeholder='tracedSVG' quality={100} alt='' />
											<h2>
												labs <br /> level -1
											</h2>
										</div>
									</Col>
									<Col xs='6' sm='5' lg={{ size: 6 }} className='d-flex justify-content-center'>
										<StaticImage src='../images/quarry_lab_idea_a.png' placeholder='tracedSVG' quality={100} alt='' />
									</Col>
								</Row>
							</div>
							<Row className='d-none d-lg-flex justify-content-center'>
								<Col widths={["md", "xxxl"]} md='4' xxxl='3'>
									<StaticImage src='../images/hall-lobby_new.png' placeholder='tracedSVG' quality={100} alt='' />
								</Col>
								<Col widths={["md", "xxxl"]} md='4' xxxl='3'>
									<div className='labs-1-wrapper'>
										<StaticImage src='../images/screening.png' placeholder='tracedSVG' quality={100} alt='' />
										<h2>
											labs <br /> level -1
										</h2>
									</div>
								</Col>
								<Col widths={["md", "xxxl"]} md='4' xxxl='3'>
									<StaticImage src='../images/quarry_lab_idea_a.png' placeholder='tracedSVG' quality={100} alt='' />
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
								<StaticImage src='../images/surface.png' placeholder='tracedSVG' quality={100} alt='' />
							</Col>
							<Col xs='6' lg='4'>
								<div className='surface-0-wrapper'>
									<StaticImage src='../images/surface2.png' placeholder='tracedSVG' quality={100} alt='' />
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
					{renderRow(1)}
				</Slider>
				<Slider {...settings} className='mt-0'>
					{renderRow(2)}
				</Slider>
				<Slider {...settings} className='mt-0'>
					{renderRow(3)}
				</Slider>
				<div className='text-center mt-lg-5 d-md-none'>
					<ScrollLink to='newsletter' smooth={true} duration={300}>
						<button>
							<img src={greyButton} alt='stay tuned' />
							<p>stay tuned</p>
						</button>
					</ScrollLink>
				</div>
				<div className='text-center mt-lg-5 d-none d-md-block'>
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
					<div className='videos'>
						<Container>
							<div className='default-skew'>
								<h1 className='light-blue text-center'>dive into metaverse &amp; nft</h1>
								<div className='mt-5 pt-4'>
									<Row className='justify-content-center'>
										<Col xs='12' sm='8' md='9' lg='4'>
											<div
												className='video-wrapper'
												onClick={() => handleVideo("https://www.youtube.com/embed/ZOQvoptsPiU")}
												onKeyDown={() => handleVideo("https://www.youtube.com/embed/ZOQvoptsPiU")}
												role='button'
												tabIndex={0}>
												<StaticImage
													src='../images/youtube-thumbnails/video_1.jpg'
													alt='video-thumbnail'
													placeholder='tracedSVG'
												/>
												<img className='play-btn' src={playBtn} alt='play' />
											</div>
										</Col>
										<Col xs='12' sm='8' md='9' lg='4' className='mt-4 mt-lg-0'>
											<div
												className='video-wrapper'
												onClick={() => handleVideo("https://www.youtube.com/embed/LpvMYmzwoBg")}
												onKeyDown={() => handleVideo("https://www.youtube.com/embed/LpvMYmzwoBg")}
												role='button'
												tabIndex={0}>
												<StaticImage
													src='../images/youtube-thumbnails/video_2.jpg'
													alt='video-thumbnail'
													placeholder='tracedSVG'
												/>
												<img className='play-btn' src={playBtn} alt='play' />
											</div>
										</Col>
										<Col xs='12' sm='8' md='9' lg='4' className='mt-4 mt-lg-0'>
											<div
												className='video-wrapper'
												onClick={() => handleVideo("https://www.youtube.com/embed/0pL95-KAZfA")}
												onKeyDown={() => handleVideo("https://www.youtube.com/embed/0pL95-KAZfA")}
												role='button'
												tabIndex={0}>
												<StaticImage
													src='../images/youtube-thumbnails/video_3.jpg'
													alt='video-thumbnail'
													placeholder='tracedSVG'
												/>
												<img className='play-btn' src={playBtn} alt='play' />
											</div>
										</Col>
									</Row>
								</div>
								<a
									href='https://www.youtube.com/watch?v=0pL95-KAZfA&list=PLXxb0QHKZrpmOc8uD8l5Yt1MS_L23Zb_n'
									target='_blank'
									rel='noreferrer'>
									<p className='text-center white mt-5'>go to full playlist</p>
								</a>
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
										<div className='arrows overflow-hidden d-flex align-items-center h-100'>
											<img src={arrow} alt='arrow' />
											<img src={arrow} alt='arrow' />
											<img src={arrow} alt='arrow' />
											<img src={arrow} alt='arrow' />
											<img src={arrow} alt='arrow' />
											<img src={arrow} alt='arrow' />
											<img src={arrow} alt='arrow' />
											<img src={arrow} alt='arrow' />
											<img src={arrow} alt='arrow' />
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
									<img src={bgc} className='w-100' alt='' />
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
										<img src={arrow} alt='' />
										<img src={arrow} alt='' />
										<img src={arrow} alt='' />
										<img src={arrow} alt='' />
										<img src={arrow} alt='' />
										<img src={arrow} alt='' />
										<img src={arrow} alt='' />
										<img src={arrow} alt='' />
										<img src={arrow} alt='' />
									</div>
									<Row className='vehicles'>
										<Col xs='6' lg={{ size: 3, offset: 2 }}>
											<StaticImage src='../images/vehicle_1.png' alt='vehicle' className='vehicle' placeholder='tracedSVG' />
										</Col>
										<Col xs='6' lg={{ size: 3, offset: 2 }}>
											<StaticImage src='../images/vehicle_2.png' alt='vehicle' className='vehicle' placeholder='tracedSVG' />
										</Col>
									</Row>
								</div>
								<div className='newsletter-wrapper' id='newsletter2'>
									<NewsletterForm toggleModal={toggleSubscribedModal} />
								</div>
							</Container>
							<div className='bottom-bgc'>
								<img src={bgc} className='w-100' alt='' />
								<img src={bug1} className='bug bug-1' alt='' />
								<img src={bug2} className='bug bug-2' alt='' />
								<img src={logoWhite} className='logo-white' alt='logo' />
							</div>
						</div>
					</div>
				</section>
				<hr />
			</div>
			<section className='metaverse-lands-section'>
				<div className='wrapper'>
					<Container>
						<Row className='justify-content-center'>
							<h1 className='text-center white'>the journey has just begun...</h1>
							<Col md={{ size: 6 }} xxl={{ size: 7 }}>
								<div className='text-center'>
									<StaticImage
										src='../images/metaverse_lands.png'
										quality={100}
										alt=''
										placeholder='tracedSVG'
										className='metaverse-lands w-100'
									/>
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
							<Col xs='12'>
								<div className='text-center mt-5'>
									<div className='d-flex logo-bottom align-items-center justify-content-center'>
										<a href='https://gamerhash.com/en' target='_blank' rel='noreferrer'>
											<img src={gamerhashLogo} alt='gamerhash logo' />
										</a>
										<img src={x} className='x' alt='x' />
										<a href='https://www.sandbox.game/en/' target='_blank' rel='noreferrer'>
											<img src={sandboxLogo} alt='sandbox logo' />
										</a>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</div>
				<hr className='mt-5' />
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
				<div className='d-flex'>
					<img src={width > 576 ? popUpBgc : popUpBgcMob} alt='popup-glass-shape' className='mx-auto' />
					<div className='content'>
						<Container>
							<Row>
								<Col>
									<h1 className='text-center white'>{subscribedModalCopy[0]}</h1>
									<h2 className='text-center white'>{subscribedModalCopy[1]}</h2>
									<p className='text-center mt-4 light-blue'>{subscribedModalCopy[2]}</p>
									<div className='text-center mt-4 mt-md-5'>
										<button className='mt-3 mt-lg-5 mb-5 blue-button' onClick={toggleSubscribedModal}>
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
