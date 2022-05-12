import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAdobeillustrator,
  SiSelenium,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiJira,
  SiVercel,

} from "react-icons/si";
import { VscGithub } from "react-icons/vsc";

export default function ToolUse() {
  return (
    <div>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
          <SiVisualstudiocode />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <VscGithub />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiPostman />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiVercel />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiHeroku />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiAdobeillustrator />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiSelenium />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiJira />
        </Col>
      </Row>
    </div>
  );
}
