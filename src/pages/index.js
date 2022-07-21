import React from "react";
import { Container, Row, Col } from "reactstrap";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import windowsShape from "../images/window-shape.svg";
// import topBgc from "../images/top-bg-shape.png";

const TraversePage = () => {
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
  const image = getImage(placeholderImage);

  // Use like this:
  const bgImage = convertToBgImage(image);
  return (
    <Layout page="traverse">
      <div className="hero">
        <BackgroundImage Tag="section" {...bgImage} className="pt-5 pb-5 xxx">
          <Container>
            <Row>
              <Col className="text-center">
                <StaticImage
                  src="../images/logo.png"
                  alt="logo"
                  className="logo mt-5"
                  placeholder="tracedSVG"
                />
                <Row>
                  <Col md={{ size: 6, offset: 3 }}>
                    <p className="mt-5 pt-3">
                      2055. Mankind is being forced to seek for new sources of
                      energetic elements and habitats outside the Earth. The
                      most obvious choice is uninhabited planet - Mars.
                      Experienced space traveller - Astro and his crew are a
                      part of first mission being sent to examine possible
                      location for new colony. What seemed like a simple task
                      soon will become a dangerous adventure and a reveal of
                      huge conspiracy...
                    </p>
                  </Col>
                </Row>
                <button className="mt-5 mb-5">
                  <StaticImage
                    src="../images/button.png"
                    alt="subscribe btn"
                    placeholder="tracedSVG"
                  />
                </button>
              </Col>
            </Row>
          </Container>
        </BackgroundImage>
      </div>
      <hr />
    </Layout>
  );
};

export default TraversePage;
