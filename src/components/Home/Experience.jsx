import React from "react";
import { Container } from "react-bootstrap";

const roles = [
  {
    title: "Senior Software Engineer",
    company: "Quillio",
    dates: "March 2025 – Present",
    summary:
      "Building an AI legal assistant for document review, research, drafting, and client intake. Multi-provider LLMs, retrieval-augmented chat, multi-document analysis, and voice.",
  },
  {
    title: "Senior Software Engineer, Team Lead",
    company: "Expert System Solution",
    dates: "March 2023 – March 2025",
    summary:
      "Led Python backend and generative AI delivery for remote clients in the USA, Los Angeles, and Turkey, including production image-generation and virtual try-on systems.",
  },
  {
    title: "Software Engineer",
    company: "Reclosure (ProptoXchange)",
    dates: "March 2024 – February 2025",
    summary:
      "Built the multi-tenant API for a real-world-asset tokenization platform: role-based access, marketplace and property APIs, KYC/KYB, documents, compliance jobs, and XRPL integrations.",
  },
  {
    title: "Team Lead and Data Scientist",
    company: "Odyssey Solutions",
    dates: "August 2022 – March 2023",
    summary:
      "Led Y-Hat, an automated time-series product covering preprocessing, feature engineering, model training, and one-click deployment of the best model.",
  },
  {
    title: "Data Science Engineer",
    company: "Odyssey Solutions",
    dates: "November 2021 – July 2022",
    summary:
      "Built product features and proofs of concept for cryptocurrency and power-price forecasting, and automated classification, regression, and time-series workflows.",
  },
  {
    title: "Machine Learning Engineer",
    company: "Ecologix US",
    dates: "July 2020 – October 2021",
    summary:
      "Distributed computing and file storage, time-series prediction, Hierarchical Temporal Memory, an eBay category hierarchy in Neo4j, and live video-stream analysis.",
  },
];

const Experience = () => {
  return (
    <Container fluid className="experience-section" id="experience">
      <Container>
        <h1 className="project-heading">
          Work <strong className="yellow">Experience</strong>
        </h1>
        <div className="exp-list">
          {roles.map((role) => (
            <article className="exp-item" key={`${role.company}-${role.dates}`}>
              <h3>{role.title}</h3>
              <p className="exp-meta">
                <span className="yellow">{role.company}</span>
                <span> · {role.dates}</span>
              </p>
              <p>{role.summary}</p>
            </article>
          ))}
        </div>
      </Container>
    </Container>
  );
};

export default Experience;
