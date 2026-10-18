import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 I'm <span className="yellow">Sabahat Ijaz</span>, a senior software engineer in
                 <span className="yellow"> Lahore, Pakistan</span>.
                <br />
                <br />
                  I build production <b className="yellow">Python backends and generative AI products</b>.
                  Right now that is Quillio, an AI legal assistant lawyers use for document review, research, drafting, and intake.
                  <br />
                  <br />
                  The work covers multi-provider LLMs, retrieval-augmented generation, multi-agent workflows, and the APIs around them:
                  <b className="yellow"> FastAPI, PostgreSQL, vector search, and Docker</b>.
                  <br />
                  <br />
                  Before Quillio I led generative AI delivery for clients in the United States and Turkey, built the multi-tenant API for
                  <b className="yellow"> ProptoXchange</b> (tokenized real-world assets), and led
                  <b className="yellow"> Y-Hat</b>, an automated time-series forecasting product.
                  <br />
                  <br />
                  MS Data Science and BS Computer Science, FAST NUCES Lahore.
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/sabahatijaz"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/sabahat-ijaz-887970150"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://instagram.com/sabitomontoreo?igshid=MGNiNDI5ZTU="
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About
