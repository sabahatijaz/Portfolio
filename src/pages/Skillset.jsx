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
        <div className="skill-groups">
          <div className="skill-group">
            <h2>Generative AI</h2>
            <p>OpenAI, Anthropic Claude, Gemini, AWS Bedrock, Groq, Stable Diffusion, SDXL, ControlNet</p>
          </div>
          <div className="skill-group">
            <h2>RAG and agents</h2>
            <p>LangChain, LlamaIndex, Phidata, Weaviate, Pinecone, streaming, tool use</p>
          </div>
          <div className="skill-group">
            <h2>Backend</h2>
            <p>Python, FastAPI, PostgreSQL, MongoDB, Redis, Celery, Docker, Auth0</p>
          </div>
          <div className="skill-group">
            <h2>Machine learning</h2>
            <p>Time-series forecasting, computer vision, NLP, TensorFlow, scikit-learn</p>
          </div>
        </div>

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