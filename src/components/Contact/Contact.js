import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn, FaWhatsapp,  FaTelegram, FaPhone } from "react-icons/fa";
import {AiFillMail} from "react-icons/ai"

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Contact Me </h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://wa.me/+9779849928022"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaWhatsapp />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="tel:+9779849928022"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaPhone />
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
                  href="https://t.me/+9779849928022"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaTelegram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:kiruu1238@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMail />
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
