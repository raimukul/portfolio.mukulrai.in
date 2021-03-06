import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div>
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
          <a
                href="mailto:gbu.mukul@gmail.com"
                style={{ color: "white", textDecoration:"none" }}
                target="_blank"
                rel="noopener noreferrer"
              ><h3>Email to mukul</h3></a>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year} mukulrai.in</h3>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <a
                href="https://github.com/raimukul"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="social-icons">
                  <AiFillGithub />
                </li>
              </a>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Araimukul"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/raimukul/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/gbu.mukul"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
