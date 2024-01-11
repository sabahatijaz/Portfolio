import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Data Scientist",
              "Machine Learning Engineer",
              "Computer Vision Engineer",
              "Natural Language Processing Engineer",
              "Solution Archtect",
              "Junior-Mid Level ReactJS dev",
              "Python (FAST and FLASK) Backend Developer",
              "Effective Problem Solver"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type