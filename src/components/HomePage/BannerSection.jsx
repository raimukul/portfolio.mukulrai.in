import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Type from "./Type";

export default function BannerSection() {
  return (
    <div>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Namaste Viewer!{" "}
                <span className="wave text-lg-center" role="img" aria-labelledby="wave">
                  🙏
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> MUKUL RAI</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src="./img/homebgNew.svg"
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
