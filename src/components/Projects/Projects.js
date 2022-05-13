import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="./projects/Screenshot (26).jpg"
              isBlog={true}
              title="Blog-Ocean"
              description="Blog-Ocean is online blogging plateform, developed using NextJs & Firebase having real time update facility."
              link="https://blog.mukulrai.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="./projects/Screenshot (25).jpg"
              isBlog={false}
              title="College CafeQueria"
              description="Online discussion forum:
              An initiative, launched with a motive to eliminate all the doubts regarding college life and academia."
              link="https://major.mukulrai.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="./projects/Screenshot (24).jpg"
              isBlog={false}
              title="Nityamukt"
              description="Nityamukt is a global online/offline educational institute that is created by a highly motivated team of educators and engineers(IISER/IIT/GBU alumni)."
              link="https://www.nityamukt.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="./projects/Screenshot (27).jpg"
              isBlog={false}
              title="BTRchain"
              description="BTRchain operates exclusively in web application development and cloud native solutions.we specialize in a range of technology to take a scratch project to a full product development."
              link="https://www.btrchain.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
