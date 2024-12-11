import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectData.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath}
                isBlog={project.isBlog}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

const projectData = [
  {
    imgPath: require("../../Assets/Projects/snkr.png"),
    isBlog: false,
    title: "Sneaker Heads",
    description: ` Developed a feature-rich e-commerce-website tailored specifically for sneaker enthusiasts, offering an intuitive, fast, and secure shoppingexperience.`,
    ghLink: "https://github.com/Jaimin1999/sneakerhds",
    demoLink: "https://visionary-cajeta-ff3815.netlify.app/",
  },
  {
    imgPath: require("../../Assets/Projects/crypto.png"),
    isBlog: false,
    title: "Crypto Tracker",
    description: `A crypto-info website provides users with information, data and resources related to cryptocurreccies`,
    ghLink: "https://github.com/Jaimin1999/crypto-tracker77",
    demoLink: "https://crypto-tracker77.netlify.app/",
  },
  {
    imgPath: require("../../Assets/Projects/keeper.png"),
    isBlog: false,
    title: "Keeper App",
    description:
      "A keeper clone website aimes to replicate the features and functionality of the application called Google Keep",
    ghLink: "https://github.com/Jaimin1999/keeper-app",
    demoLink: "https://jaimin1999.github.io/keeper-app/",
  },
  // {
  //   imgPath: require("../../Assets/Projects/leaf.png"),
  //   isBlog: false,
  //   title: "Plant AI",
  //   description:
  //     "Trained an image classifier model using PyTorch and Transfer Learning. Achieved 98% accuracy in detecting diseased and healthy leaves of 14 unique plants.",
  //   ghLink: "https://github.com/soumyajit4419/Plant_AI",
  //   demoLink: "https://plant49-ai.herokuapp.com/",
  // },
  // {
  //   imgPath: require("../../Assets/Projects/suicide.png"),
  //   isBlog: false,
  //   title: "AI For Social Good",
  //   description:
  //     "Used NLP for detecting suicide-related posts and user's ideation in cyberspace to assist in suicide prevention.",
  //   ghLink: "https://github.com/soumyajit4419/AI_For_Social_Good",
  //   demoLink: "", // Add demo link here
  // },
  // {
  //   imgPath: require("../../Assets/Projects/emotion.png"),
  //   isBlog: false,
  //   title: "Face Recognition and Emotion Detection",
  //   description:
  //     "Trained a CNN classifier using FER-2013 dataset with Keras and TensorFlow. Achieved 60.1% accuracy and integrated face detection using OpenCV.",
  //   ghLink: "https://github.com/soumyajit4419/Face_And_Emotion_Detection",
  //   demoLink: "", // Add demo link here
  // },
];
