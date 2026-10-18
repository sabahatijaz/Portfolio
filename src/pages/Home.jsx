import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeLogo from '../assets/about.png'
import Particle from '../components/Particle';
import About from '../components/Home/About';
import Experience from '../components/Home/Experience';
import Type from '../components/Home/Type';

const Home = () => {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center">
            <Col md={7} className="home-header">
              <p className="hero-kicker">Senior AI Engineer · Generative AI</p>
              <h1 className="heading-name">
                Sabahat <strong className="main-name">Ijaz</strong>
              </h1>
              <p className="hero-lead">
                I build production AI products: legal assistants, virtual try-on, and the Python services behind them.
              </p>
              <div className="hero-type">
                <Type />
              </div>
              <div className="hero-actions">
                <Link className="hero-btn hero-btn-primary" to="/project">See the work</Link>
                <Link className="hero-btn hero-btn-ghost" to="/resume">Resume</Link>
                <a
                  className="hero-btn hero-btn-ghost"
                  href="https://www.linkedin.com/in/sabahat-ijaz-887970150"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </div>
              <ul className="hero-chips">
                <li>LLMs and RAG</li>
                <li>AI agents</li>
                <li>FastAPI</li>
                <li>Diffusion models</li>
              </ul>
            </Col>

            <Col md={5} className="hero-visual" style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="Illustration of a developer workspace"
                className="img-fluid hero-art"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
      <Experience />
    </section>
  );
}

export default Home
