import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Senior Software Engineer",
              "Generative AI Engineer",
              "LLM, RAG, and AI Agents",
              "Python and FastAPI Backend",
              "Machine Learning Engineer"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type
