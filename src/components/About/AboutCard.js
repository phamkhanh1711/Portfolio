import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">PhamKhanh JR </span>
            from <span className="purple"> Da Nang, Viet Nam.</span>
            <br />
            I am currently employed as a Web developer
            <br />
            I graduated with a degree in Software Engineering from CMU at Duy Tan University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing FootBall
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Tomorrow is the future.!"{" "}
          </p>
          <footer className="blockquote-footer">PHAMKHANH JR</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
