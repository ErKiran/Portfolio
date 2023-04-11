import React, {useEffect, useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from 'react-router-dom';
import  Quotes  from "../Assets/quotes/data.json"
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
  const [quote, setQuote] = useState({});
  const fetchNewQuote = () => {
    // Get a random quote from the Quotes array
    const randomIndex = Math.floor(Math.random() * Quotes.length);
    const randomQuote = Quotes[randomIndex];

    // Set the new quote as the state
    setQuote(randomQuote);
  }
  const location = useLocation();
  useEffect(() => {
    fetchNewQuote();
  }, [location.pathname]); // Reload the footer component when the pathname changes

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>&lt;{quote.quote}/&gt; - "{quote.author}"</h3>
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
