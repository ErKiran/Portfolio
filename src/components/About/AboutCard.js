import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          Greetings, esteemed visitors!
           My name is <span className="purple">Kiran Adhikari</span>, a software engineer hailing from the beautiful country of Nepal. 
           Armed with a Bachelor's degree in Electronics and Communication, 
           I am a highly skilled backend specialist with a strong passion for delivering innovative solutions to complex problems.
            <br/>
            <br />
            My professional journey is characterized by a steadfast commitment to pushing the boundaries of cutting-edge technology, 
            utilizing state-of-the-art tools such as Node.js, Golang, and TypeScript to engineer world-class solutions.
            My expertise in developing highly scalable and robust systems is backed by a thorough understanding of 
            software development methodologies, including Agile and Scrum.
            <br />
            <br />
            In essence, I am a self-motivated and result-driven individual who takes pride in delivering innovative and effective solutions that exceed client expectations. 
            Thank you for taking the time to learn more about me, and I look forward to the possibility of working with you in the future.
            <br/>
            <br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games (Cricket 🏏 | Football ⚽ | Ping Pong 🏓)
            </li>
            <li className="about-activity">
              <ImPointRight /> Binge Watching 🍿
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling 🛵
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Kiran</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
