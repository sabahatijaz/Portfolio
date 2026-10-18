import React from "react";
import { Container } from "react-bootstrap";

import Particle from '../components/Particle'
import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";
import Leetcode from "../components/Skillset/Leetcode";
import Github from "../components/Skillset/Github";

const Skillset = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="yellow">Skillset </strong>
        </h1>
        <p className="skill-summary">
          Generative AI for production: OpenAI, Anthropic Claude, Google Gemini, AWS Bedrock, and Groq.
          Retrieval-augmented generation and agents with LangChain, LlamaIndex, Phidata, Weaviate, and Pinecone.
          Backends in Python with FastAPI, PostgreSQL, MongoDB, Redis, Celery, and Docker.
          Also diffusion models (Stable Diffusion, SDXL, ControlNet) and classical machine learning, including time-series forecasting.
        </p>

        <Techstack />

        <h1 className="project-heading">
          <strong className="yellow">Tools</strong> I use
        </h1>
        <Toolstack />

        {/* <Leetcode /> */}
        <Github />
      </Container>
    </Container>
  )
}

export default Skillset