import React from "react";
import { Container } from "react-bootstrap";

const roles = [
  {
    title: "Senior AI Engineer",
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
    dates: "November 2021 – March 2023",
    summary:
      "Led Y-Hat, an automated time-series product covering preprocessing, feature engineering, model training, and one-click deployment of the best model.",
  },
  {
    title: "Machine Learning Engineer",
    company: "Ecologix US",
    dates: "January 2021 – October 2021",
    summary:
      "Worked on internal products and outsourced projects: distributed computing and file storage, time-series prediction, Hierarchical Temporal Memory, an eBay category hierarchy in Neo4j, and live video-stream analysis.",
  },
];

const Experience = () => {
  return (
    <Container fluid className="experience-section" id="experience">
      <Container>
        <h1 className="project-heading">
          Work <strong className="yellow">Experience</strong>
        </h1>
        <div className="exp-grid">
          {roles.map((role) => (
            <article className="exp-card" key={`${role.company}-${role.dates}`}>
              <p className="exp-dates">{role.dates}</p>
              <h3>{role.title}</h3>
              <p className="exp-company">{role.company}</p>
              <p>{role.summary}</p>
            </article>
          ))}
        </div>
      </Container>
    </Container>
  );
};

export default Experience;
