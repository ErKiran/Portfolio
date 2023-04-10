import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import RedditSimple from "../../Assets/Projects/reddit-simple.png"
import MergeThemAll from "../../Assets/Projects/mergethemall.png"
import PlantAI from "../../Assets/Projects/plant-disease.png"
import NepalPolitical from "../../Assets/Projects/nepal-political.png"
import NepalEPassport from  "../../Assets/Projects/epassport.png"
import TVGuide from "../../Assets/Projects/tv-guide.png"
import ElectionVis from "../../Assets/Projects/election.png"
import Nepse from "../../Assets/Projects/stocks.png"
import ManyMore from "../../Assets/Projects/manymore.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TVGuide}
              isBlog={false}
              title="TV Guide"
              description="In a spare time I would love to binge watch. This small CLI app will update me what's on the TV and what's next on line whenever I feel to binge watch."
              ghLink="https://github.com/ErKiran/tv-guide"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NepalEPassport}
              isBlog={false}
              title="E-passport Date Available"
              description="Getting a appointment for a E-Passport in Nepal is quite a hassle. I create this simple CLI application to check if the date is avaibale or not. Inorder to check the date itself we need to fill the form with additional info. This will save alot of time. "
              ghLink="https://github.com/ErKiran/nepal-e-passport-date"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MergeThemAll}
              isBlog={false}
              title="MergeThemAll"
              description="Merge all the pending PRs on the user repo. It uses github cli `gh` and merge the all mergeable PRs."
              ghLink="https://github.com/ErKiran/MergeThemAll"
              demoLink="https://github.com/ErKiran/MergeThemAll"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Nepse}
              isBlog={false}
              title="Execelize Nepse"
              description="Fundamental and Market Analysis of Nepali Stock Exchange Nepse with lot's of Excel files and HTML visualization to better understand the fundamental of the stocks and to understand the if the stocks are being pumped or dumped."
              ghLink="https://github.com/ErKiran/execelizeNepse"
              demoLink="https://www.youtube.com/watch?v=If3bPmdnk_8"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ElectionVis}
              isBlog={false}
              title="2074 & 2079 Election Data and Visualization"
              description="Collected the Election Result data. Convert them in a programmable data format and create a visualization charts from Go Echarts"
              ghLink="https://github.com/ErKiran/election-data-2074/tree/visualize"
              demoLink="https://www.youtube.com/watch?v=dz2pCY8vCck"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={NepalPolitical}
              isBlog={false}
              title="Nepal Political"
              description="A minimum npm package that contains the political division of Nepal. Handy package that contains ward level info of all local bodies (Municipality and Rural Municipality)"
              ghLink="https://github.com/ErKiran/nepal_political"
              demoLink="https://elegant-brown-f813c9.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RedditSimple}
              isBlog={false}
              title="Reddit-Simple"
              description="A dead simple wrapper over the Reddit API without any overhead of Authentication and Rate Limit as a NPM package"
              ghLink="https://github.com/ErKiran/reddit-simple"
              demoLink="https://www.npmjs.com/package/reddit-simple"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PlantAI}
              isBlog={false}
              title="Plant Disease Detection"
              description="Final year college project. A combination of Hardware (Agrobots), AI (Image Recognization) and Microservices (Frontend, Backend and AI Models) to develop a PoC agrobot which can detects the plant disease on the go in realtime "
              ghLink="https://github.com/ErKiran/Plant-Disease-Frontend-"
              demoLink="https://agrohacks.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ManyMore}
              isBlog={false}
              title="And ManyMore......"
              description="I love to develop useless stuffs on the free time so there are manymore on my github repo. If you wanna check"
              ghLink="https://github.com/ErKiran"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
