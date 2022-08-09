import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import discordWhite from "../images/social-btns-white/discord.svg";
import facebookWhite from "../images/social-btns-white/facebook.svg";
import telegramWhite from "../images/social-btns-white/telegram.svg";
import mediumWhite from "../images/social-btns-white/medium.svg";
import twitterWhite from "../images/social-btns-white/twitter.svg";

import discordBlack from "../images/social-btns-black/discord.svg";
import facebookBlack from "../images/social-btns-black/facebook.svg";
import mediumBlack from "../images/social-btns-black/medium.svg";
import twitterBlack from "../images/social-btns-black/twitter.svg";
import ytBlack from "../images/social-btns-black/youtube.svg";

const AVAILABLE_ICONS = {
	Facebook: "facebook",
	Twitter: "twitter",
	Youtube: "youtube",
	Discord: "discord",
	Medium: "medium",
	Telegram: "telegram",
};

const ICONS = {
	white: {
		facebook: {
			img: facebookWhite,
			link: "https://www.facebook.com/GamerHashApp/",
		},
		discord: {
			img: discordWhite,
			link: "https://discord.com/invite/TzbsXdYkjY",
		},
		telegram: {
			img: telegramWhite,
			link: "https://t.me/joinchat/KN7AOBQvrP58x619Fyg95A",
		},
		medium: {
			img: mediumWhite,
			link: "https://medium.com/we-are-the-gamerhash",
		},
		twitter: {
			img: twitterWhite,
			link: "https://twitter.com/GamerHashCom",
		},
	},

	black: {
		facebook: {
			img: facebookBlack,
			link: "https://www.facebook.com/GamerHashApp/",
		},
		discord: {
			img: discordBlack,
			link: "https://discord.com/invite/TzbsXdYkjY",
		},
		medium: {
			img: mediumBlack,
			link: "https://medium.com/we-are-the-gamerhash",
		},
		twitter: {
			img: twitterBlack,
			link: "https://twitter.com/GamerHashCom",
		},
		youtube: {
			img: ytBlack,
			link: "https://www.youtube.com/channel/UCv6axnIN6jczLcLraH4cK6g",
		},
	},
};

const SocialBtn = ({ icon, color, classes }) => {
	const [pickedIcon, setPickedIcon] = useState(null);
	const [cssClasses, setCssClasses] = useState([]);

	const handlePickIcon = iconName => {
		if (!Object.values(AVAILABLE_ICONS).includes(iconName))
			throw new Error(`The icon ${iconName} does not exist, choose one of ${AVAILABLE_ICONS.map(icon => icon)}`);

		return iconName;
	};

	useEffect(() => {
		setPickedIcon(handlePickIcon(icon));
		if (classes) {
			setCssClasses(classes.join(" "));
		}
	}, [icon, color, classes]);

	return (
		pickedIcon && (
			<a href={ICONS[color][pickedIcon].link} className={cssClasses} target='_blank' rel='noreferrer'>
				<img src={ICONS[color][pickedIcon].img} className={`social-btn ${pickedIcon}`} alt={pickedIcon} />
			</a>
		)
	);
};

SocialBtn.propTypes = {
	icon: PropTypes.oneOf(Object.values(AVAILABLE_ICONS)).isRequired,
	color: PropTypes.oneOf(["white", "black"]),
};

export default SocialBtn;
