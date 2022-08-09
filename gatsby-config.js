module.exports = {
	siteMetadata: {
		title: "Traverse: Mars is Mine | Play&Earn game in the Sandbox",
		description:
			"Traverse: Mars is Mine is a play&earn game in the Sandbox Metaverse. You’ve gone a mission to Mars, at least that’s what you thought... Escape ain’t easy...",
		siteUrl: "https://gamerhash.com/traverse",
		keywords: "traverse, mars is mine, play & earn game, play&earn, p&e, the sandbox game",
	},
	pathPrefix: "/traverse",
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		`gatsby-plugin-image`,
		`gatsby-transformer-sharp`,
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/meta/android-chrome-256x256.png",
			},
		},
		"gatsby-plugin-sharp",
		{
			resolve: `gatsby-plugin-sharp`,
			options: {
				defaults: {
					backgroundColor: `transparent`,
				},
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
	],
};
