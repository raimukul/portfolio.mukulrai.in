import React from "react";
import Card from "react-bootstrap/Card";
import { ImNext } from "react-icons/im";

export default function SelfIntro() {
  return (
    <div>
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Hi Everyone, I am <span className="purple">Mukul Rai </span>
              from{" "}
              <span className="purple"> Greater Noida, Uttar Pradesh, IN.</span>
              <br />I am pursuing master's in Artificial Intelligence & Robotics
              in Gautam Buddha University.
              <br />
              <br />
              Apart from coding, some other activities that I love to do!
            </p>
            <ul>
              <li className="about-activity">
                <ImNext /> Teaching Physics
              </li>
              <li className="about-activity">
                <ImNext /> Writting Tech Blogs
              </li>
              <li className="about-activity">
                <ImNext /> Designing UI components
              </li>
            </ul>
            {/* <p style={{ color: "rgb(155 126 172)" }}>
              "Strive to build things that make a difference!"{" "}
            </p>
            <footer className="blockquote-footer">Soumyajit</footer> */}
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}
