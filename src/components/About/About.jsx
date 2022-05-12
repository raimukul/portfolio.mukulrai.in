import React from "react";
import SelfIntro from "./SelfIntro";
import ProSkillSet from "./ProSkillSet";
import ToolUse from "./ToolUse";
import GithubHistroy from "./GithubHistroy";
import { Col, Container, Row } from "react-bootstrap";

export default function About() {
  return (
    <div>
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
                Know Who <strong className="purple">I'M</strong>
              </h1>
              <SelfIntro />
            </Col>
            
            <Col
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src='./img/developer.svg' alt="about" className="img-fluid" />
            </Col>
          </Row>
          <GithubHistroy/>
          <h1 className="project-heading">
            Professional <strong className="purple">Skillset </strong>
          </h1>
          <ProSkillSet />
          <h1 className="project-heading">
            <strong className="purple">Tools</strong> I use
          </h1>
          <ToolUse />
        </Container>
       
      </Container>
    </div>
  );
}
