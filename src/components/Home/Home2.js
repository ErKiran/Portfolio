import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineMedium
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <p className="home-about-body">
            👋 Hi there! 
            My name is Kiran Adhikari and I come from the beautiful ⛰️ mountains country of Nepal 🇳🇵.
            As an experienced software engineer 💻, I have specialized in backend development and am well-versed in programming languages such as &nbsp; 
            <i>
                <b className="purple"> 
                Golang, 
                JavaScript, 
                and 
                TypeScript.
                 </b>
              </i> 
              <br />
              <br />
              My field of Interest's are  &nbsp;
              <i>
                <b className="purple">Software Engineering </b> and
                also in areas related to{" "}
                <b className="purple">
                  Web 2.0 and Web 3.0
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Golang, Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                 play new shiny tools and software
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> ChatGPT, Generative AI's</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ErKiran"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/KiranAdhikariEr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kiranadhikarier/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://medium.com/@kiruu1238"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMedium />
                </a>
              </li>
            </ul>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
