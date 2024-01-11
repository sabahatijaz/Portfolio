import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/pg.png";
import project from "../assets/projects/project.jpeg";
import myopia from "../assets/myopia.jpeg";
import sentiment from "../assets/sentiment.png";
import HMS from "../assets/HMS.png";
import OSWB from "../assets/OSWB.jpg"
import lift from "../assets/projects/lift.png";
import htm from "../assets/Neuron_comparison.png"
import handwritten from "../assets/handwritten.png"
import krypto from "../assets/projects/krypto.png";
import plants from "../assets/plants.jpg"
import kickstart from "../assets/projects/kickstart.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={htm}
              isBlog={false}
              title="Hierarchical-Temporal-Memory-for-Forecasting-and-Anomaly-Detection"
              description="Real-Time anomaly detection and time -series forecasting"
              ghLink="https://github.com/sabahatijaz/Hierarchical-Temporal-Memory-for-Forecasting-and-Anomaly-Detection"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myopia}
              isBlog={false}
              title="Pathological Myopia Detection Using Fundus Images"
              description="This project is based on computer vision and machine learning, which detects features from images and classify the image as myopic or non-myopic. It detects the myopia based on 5 myopia features: Posterior Staphyloma
              2. Tigroid Fundus
              3. Fuch’s Spots
              4. Lattice Degeneration
              5. Perripapillary Atrophy"
              ghLink="https://github.com/sabahatijaz/pathological_Myopia_Detection_Using_Fundus_Images"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HMS}
              isBlog={false}
              title="Hotel-Management-System"
              description="This platform features a responsive interface built with Reactjs and CSS, allowing users to easily manage their profiles and posts through CRUD activities. The option to follow other users and interact with their posts (like or dislike) is also available, with suggestions for new users to follow. Users can only view posts from their followed users and can only engage in chat with those they follow. The backend is powered by Nodejs and Expressjs server, while MongoDB is utilized as the database."
              ghLink="https://github.com/sabahatijaz/Hotel-Mangement-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentiment}
              isBlog={false}
              title="Sentiment Analysis"
              description="This ecommerce website utilizes a REST API built with Nodejs and Expressjs, allowing for easy CRUD operations on user profiles, products and admin panel. The user interface is designed for efficient product management and includes a complete purchase process. The admin panel, accessible for CRUD on users and products, includes a chart for statistics display. Stripe API is integrated to handle customer payments. The website uses MongoDB and Firebase as the database."
              ghLink="https://github.com/sabahatijaz/Sentiment_Analysis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OSWB}
              isBlog={false}
              title="Online Shopping Website"
              description="This blogging application features a RESTful API server built with Nodejs and Expressjs. The data is retrieved from the API server and displayed on a user-friendly interface designed using React, Redux, and styled-components for a seamless experience."
              ghLink="https://github.com/sabahatijaz/Online_Shopping_Website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={handwritten}
              isBlog={false}
              title="Hand Written Digit Recognition"
              description="Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum."
              ghLink="https://github.com/sabahatijaz/Hand_Written_Digit_Recognition_Using_CNN"
              // demoLink="https://project-krypto.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plants}
              isBlog={false}
              title="NDVI_AGRO_WEATHER_MONITORING"
              description="Solidity Kickstart is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It includes all the functionality of a kickstart platform, enabling users to interact with their Metamask wallet, transfer Ethereum and participate in kickstart campaigns."
              ghLink="https://github.com/sabahatijaz/NDVI_AGRO_WEATHER_MONITORING"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects