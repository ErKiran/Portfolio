import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiOutlineMedium,
} from "react-icons/ai";

import {
SiHackerrank,
SiLeetcode,
SiStackoverflow,
} from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>First, solve the problem. Then, write the code</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>{year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/ErKiran"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/KiranAdhikariEr"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/kiranadhikarier/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://medium.com/@kiruu1238"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineMedium />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.hackerrank.com/kiruu1238"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiHackerrank />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://leetcode.com/ErKiran/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiLeetcode />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://stackoverflow.com/users/6414982/kiran-adhikari"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <SiStackoverflow />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
