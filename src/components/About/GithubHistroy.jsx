import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

export default function GithubHistroy() {
  return (
    <div>
      <Row style={{ justifyContent: "center", paddingBottom: "10px"}}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
         <strong className="purple"> Days I Code</strong>
        </h1>
        <GitHubCalendar
          username="raimukul"
          blockSize={15}
          blockMargin={5}
          color="#f15a24"
          fontSize={16}
        />
      </Row>
    </div>
  );
}
