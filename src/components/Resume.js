import React from "react";
import {
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaNode,
  FaReact,
  FaNpm,
  FaSass,
} from "react-icons/fa";
import { DiJqueryLogo, DiMongodb } from "react-icons/di";
import {
  SiMysql,
  SiHeroku,
  SiWebpack,
  SiRedux,
  SiReactrouter,
  SiGraphql,
} from "react-icons/si";
import { Container, Row, Col } from "react-bootstrap";

const styles = {
  background: {
    margin: 20,
    background: 'aliceblue'
  },
  container:{
    width: '85%',
    maxwidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
    background: 'aliceblue'
  }
};


function Resume() {
  return (
    <section>
    <p className="content" class="space" style={styles.background}>
      <h5>Resume</h5>
      <a className="button is-primary" href={process.env.PUBLIC_URL + "/Lynn Sadler Resume.pdf"} target="_blank" rel="noreferrer">
          <span className="icon">
            <i className="fas fa-download"></i>
          </span>
          <span >Download My Resume</span>
        </a></p>
    <p className="content" class="space" style={styles.background}>
      <h5>Skills</h5>
      <Container style={styles.container} className="container my-5">
      <Row>
        <br></br>
        <Col>
        <h5>Technologies:</h5>
          <br></br>
          <h5>
            • GitHub <FaGithub />
          </h5>
          <h5>
            • Git <FaGitAlt />
          </h5>
          <h5>
            • Heroku <SiHeroku />
          </h5>
          <h5>
            • Webpack <SiWebpack />
          </h5>
          <br></br>
        </Col>

        <Col>
          <h5>Front-end:</h5>
          <br></br>
          <h5>
            • HTML
            <FaHtml5 />
          </h5>
          <h5>
            • CSS
            <FaCss3Alt />
          </h5>
          <h5>
            • JavaScript
            <FaJsSquare />
          </h5>
          <h5>
            • jQuery
            <DiJqueryLogo />
          </h5>
          <h5>
            • React
            <FaReact /> <SiReactrouter /> <SiRedux />
          </h5>
          <h5>
            • Bootstrap
            <FaBootstrap />
          </h5>
          <h5>
          • SASS
            <FaSass/>
          </h5>
          <h5>
          • Jest
          </h5>
        </Col>

        <Col>
          <h5>Back-end:</h5>
          <br></br>
          <h5>• APIs</h5>
          <h5>
            • Node
            <FaNode /> <FaNpm />
          </h5>
          <h5>• Express
          </h5>
          <h5>
            • MySQL, Sequelize <SiMysql />
          </h5>
          <h5>
            • MongoDB, Mongoose
            <DiMongodb />
          </h5>
          <h5>• REST</h5>
          <h5>
            • GraphQL
            <SiGraphql />
          </h5>
        </Col>
      </Row>
    </Container>
    </p>
  </section>

  );
}

export default Resume;