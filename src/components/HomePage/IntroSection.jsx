import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function IntroSection() {
  return (
    <div>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                GLAD TO <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I’m a recently completed master's in{" "}
                <span className="purple">
                  Artificial Intelligence & Robotics
                </span>{" "}
                from Gautam Buddha University.
                <br />
                <br />
                <i>
                  <b className="purple"> C, Javascript, and Python </b>
                </i>
                are among my programming languages of choice.
                <br />
                <br />
                My field of Interest's are building new &nbsp;
                <i>
                  <b className="purple">Web Technologies and Products </b> and
                  also in areas related to{" "}
                  <b className="purple">
                    Deep Learning and Natural Launguage Processing.
                  </b>
                </i>
                <br />
                <br />
                Whenever possible, I also apply my passion for developing
                products with <b className="purple">Node.js</b> and
                <i>
                  <b className="purple">
                    {" "}
                    Modern Javascript Library and Frameworks
                  </b>
                </i>
                &nbsp; like
                <i>
                  <b className="purple"> React.js and Next.js</b>
                </i>
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img
                  src="./img/mukulrai.jpeg"
                  className="img-fluid w-50"
                  alt="avatar"
                />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/raimukul"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://twitter.com/Araimukul"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/raimukul"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.instagram.com/gbu.mukul"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillInstagram />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
