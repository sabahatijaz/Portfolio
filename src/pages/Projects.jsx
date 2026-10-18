import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import aila from "../assets/projects/aila.svg";
import propto from "../assets/projects/propto.svg";
import stylar from "../assets/projects/stylar.svg";
import yhat from "../assets/projects/yhat.svg";
import emailAgent from "../assets/projects/email-agent.svg";
import genai from "../assets/projects/genai.svg";
import myopia from "../assets/myopia.jpeg";
import sentiment from "../assets/sentiment.png";
import HMS from "../assets/HMS.png";
import OSWB from "../assets/OSWB.jpg";
import htm from "../assets/Neuron_comparison.png";
import handwritten from "../assets/handwritten.png";
import plants from "../assets/plants.jpg";

const projects = [
  {
    imgPath: aila,
    title: "AILA — AI Legal Assistant",
    description:
      "Backend for an assistant lawyers use for document review, legal research, drafting, and intake. Multiple LLM providers, retrieval-augmented chat over case files, multi-document analysis with live updates, and voice input and output. Includes cost tracking and load balancing across providers.",
    stack: "Python, FastAPI, MongoDB, Redis, Weaviate, Celery, LangChain, LlamaIndex, OpenAI, Anthropic, Gemini, AWS Bedrock, Docker",
    demoLink: "https://app.legalassistant.au/",
    featured: true,
  },
  {
    imgPath: propto,
    title: "ProptoXchange",
    description:
      "Multi-tenant API for tokenizing and trading real-world assets. Auth0 and role-based access, tenant-scoped marketplace and property APIs, KYC/KYB, S3 document upload, XRPL integrations, and scheduled compliance and ledger jobs.",
    stack: "Python, FastAPI, Pydantic, SQLAlchemy, PostgreSQL, Alembic, Auth0, AWS S3, APScheduler, Docker",
    demoLink: "https://invest.tblocks.io/",
    featured: true,
  },
  {
    imgPath: stylar,
    title: "Stylar",
    description:
      "Virtual try-on where a shopper selects a product and sees it on themselves. Built on Stable Diffusion, ControlNet, BLIP, and ChatCaptioner, with outpainting, synthetic data generation, and an SDXL model fine-tuned for shoe styles.",
    stack: "Python, Stable Diffusion, SDXL, ControlNet, Hugging Face, OpenCV",
    demoLink: "https://www.stylar.com/",
    featured: true,
  },
  {
    imgPath: genai,
    title: "GenAI Superficial",
    description:
      "Image-generation platform on Stable Diffusion and OpenAI models: captioning, inpainting, background removal and replacement, outpainting, image-to-image, and text-to-image.",
    stack: "Python, Stable Diffusion, ControlNet, BLIP, Hugging Face, OpenAI",
  },
  {
    imgPath: emailAgent,
    title: "Automatic Email Agent",
    description:
      "An agent that tags incoming mail and drafts replies, with a related multi-agent SWOT analyzer that returns an analysis and the top competitors for a company, product, or topic.",
    stack: "Python, LangChain, Phidata, Groq, Pinecone, OpenAI, Streamlit",
  },
  {
    imgPath: yhat,
    title: "Y-Hat",
    description:
      "Automated time-series forecasting product. It ingests data, runs preprocessing, feature engineering, feature selection, and model training, then deploys the best model in one click. Models include LSTM, SARIMAX, and hybrid SARIMAX-LSTM.",
    stack: "Python, Flask, PostgreSQL, React, AWS, Jenkins, Pandas",
  },
  {
    imgPath: htm,
    title: "Hierarchical-Temporal-Memory-for-Forecasting-and-Anomaly-Detection",
    description: "Real-Time anomaly detection and time-series forecasting",
    ghLink: "https://github.com/sabahatijaz/Hierarchical-Temporal-Memory-for-Forecasting-and-Anomaly-Detection",
  },
  {
    imgPath: myopia,
    title: "Pathological Myopia Detection Using Fundus Images",
    description:
      "This project is based on computer vision and machine learning, which detects features from images and classifies the image as myopic or non-myopic. It detects the myopia based on 5 myopia features: Posterior Staphyloma, Tigroid Fundus, Fuch's Spots, Lattice Degeneration, and Peripapillary Atrophy.",
    ghLink: "https://github.com/sabahatijaz/pathological_Myopia_Detection_Using_Fundus_Images",
  },
  {
    imgPath: HMS,
    title: "Hotel-Management-System",
    description:
      "This platform features a responsive interface built with Reactjs and CSS, allowing users to easily manage their profiles and posts through CRUD activities. The option to follow other users and interact with their posts (like or dislike) is also available, with suggestions for new users to follow. Users can only view posts from their followed users and can only engage in chat with those they follow. The backend is powered by Nodejs and Expressjs server, while MongoDB is utilized as the database.",
    ghLink: "https://github.com/sabahatijaz/Hotel-Mangement-System",
  },
  {
    imgPath: sentiment,
    title: "Sentiment Analysis",
    description:
      "This ecommerce website utilizes a REST API built with Nodejs and Expressjs, allowing for easy CRUD operations on user profiles, products and admin panel. The user interface is designed for efficient product management and includes a complete purchase process. The admin panel, accessible for CRUD on users and products, includes a chart for statistics display. Stripe API is integrated to handle customer payments. The website uses MongoDB and Firebase as the database.",
    ghLink: "https://github.com/sabahatijaz/Sentiment_Analysis",
  },
  {
    imgPath: OSWB,
    title: "Online Shopping Website",
    description:
      "This blogging application features a RESTful API server built with Nodejs and Expressjs. The data is retrieved from the API server and displayed on a user-friendly interface designed using React, Redux, and styled-components for a seamless experience.",
    ghLink: "https://github.com/sabahatijaz/Online_Shopping_Website",
  },
  {
    imgPath: handwritten,
    title: "Hand Written Digit Recognition",
    description:
      "Project Krypto is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It allows users to interact with their Metamask wallet and send Ethereum.",
    ghLink: "https://github.com/sabahatijaz/Hand_Written_Digit_Recognition_Using_CNN",
  },
  {
    imgPath: plants,
    title: "NDVI_AGRO_WEATHER_MONITORING",
    description:
      "Solidity Kickstart is a Web 3 project that utilizes an Ethereum smart contract created using Solidity. It includes all the functionality of a kickstart platform, enabling users to interact with their Metamask wallet, transfer Ethereum and participate in kickstart campaigns.",
    ghLink: "https://github.com/sabahatijaz/NDVI_AGRO_WEATHER_MONITORING",
  },
];

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent <strong className="yellow">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Production work in generative AI, backends, and forecasting.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projects.map((project) => (
            <Col md={4} className="project-card" key={project.title}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={false}
                title={project.title}
                description={project.description}
                stack={project.stack}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
                featured={project.featured}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
