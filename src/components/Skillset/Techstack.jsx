import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
} from "react-icons/di";
import {
  SiMaterialui,
  SiFlask,
  SiFastapi,
  SiGraphql,
  SiSolidity,
  SiRedux,
  SiPython,
  SiMongodb,
  SiMysql,
  SiHtml5
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGraphql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi />
      </Col>
    </Row>
  );
}

export default Techstack;
