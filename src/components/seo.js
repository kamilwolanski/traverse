import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

const Seo = ({ title, description, image }) => {
	const { site, fileName } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						siteUrl
						keywords
					}
				}
				fileName: file(relativePath: { eq: "meta/og_image.png" }) {
					childImageSharp {
						gatsbyImageData(width: 1024, placeholder: BLURRED, layout: FIXED)
					}
				}
			}
		`
	);

	const siteOgImage = image || fileName.childImageSharp.gatsbyImageData.images.fallback.src;

	const SeoTags = [
		{
			name: "description",
			content: description ? description : site.siteMetadata.description,
		},
		{
			name: "keywords",
			content: site.siteMetadata.keywords,
		},
		{
			property: "og:title",
			content: title ? title : site.siteMetadata.title,
		},
		{
			property: "og:description",
			content: description ? description : site.siteMetadata.description,
		},
		{
			property: "og:image",
			content: siteOgImage,
		},
		{
			property: "og:type",
			content: "website",
		},
		{
			name: "twitter:title",
			content: title ? title : site.siteMetadata.title,
		},
		{
			name: "twitter:description",
			content: description ? description : site.siteMetadata.description,
		},
	];
	return <Helmet title={title ? title : site.siteMetadata.title} meta={SeoTags} htmlAttributes={{ lang: "en" }} />;
};

export default Seo;
