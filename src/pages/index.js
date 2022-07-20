import React from "react";
import { Container, Row, Col } from "reactstrap";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const TraversePage = () => {
  return (
    <Layout page="traverse">
      <section className="hero">
        <div className="window mt-5 pt-5 pb-5">
          <Container>
            <Row>
              <Col className="text-center">
                <StaticImage
                  src="../images/logo.png"
                  alt="logo"
                  className="logo"
                  placeholder="tracedSVG"
                />
                <Row>
                  <Col md={{ size: 6, offset: 3 }}>
                    <p className="mt-5 pt-5">
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
                <button className="mt-5">
                  <StaticImage
                    src="../images/button.png"
                    alt="subscribe btn"
                    placeholder="tracedSVG"
                  />
                </button>
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <hr/>
    </Layout>
  );
};

export default TraversePage;
