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

const projects = [
  {
    imgPath: aila,
    title: "AILA — AI Legal Assistant",
    description:
      "Backend for Quillio, an assistant lawyers use for document review, legal research, drafting, and intake. Multiple LLM providers, retrieval-augmented chat over case files, multi-document analysis with live updates, and voice input and output. Includes cost tracking and load balancing across providers.",
    stack: "Python, FastAPI, MongoDB, Redis, Weaviate, Celery, LangChain, LlamaIndex, OpenAI, Anthropic, Gemini, AWS Bedrock, Docker",
    demoLink: "https://quillio.au",
  },
  {
    imgPath: propto,
    title: "ProptoXchange",
    description:
      "Multi-tenant API for Reclosure's platform for tokenizing and trading real-world assets. Auth0 and role-based access, tenant-scoped marketplace and property APIs, KYC/KYB, S3 document upload, XRPL integrations, and scheduled compliance and ledger jobs.",
    stack: "Python, FastAPI, Pydantic, SQLAlchemy, PostgreSQL, Alembic, Auth0, AWS S3, APScheduler, Docker",
    demoLink: "https://www.propto.com/",
  },
  {
    imgPath: stylar,
    title: "Stylar",
    description:
      "Virtual try-on where a shopper selects a product and sees it on themselves. Built on Stable Diffusion, ControlNet, BLIP, and ChatCaptioner, with outpainting, synthetic data generation, and an SDXL model fine-tuned for shoe styles.",
    stack: "Python, Stable Diffusion, SDXL, ControlNet, Hugging Face, OpenCV",
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
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
