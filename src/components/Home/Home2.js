import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello! I am a passionate{" "}
              <span className="purple">React.js Developer</span> who loves
              crafting modern web applications.
              <br />
              <br />I specialize in
              <i>
                <b className="purple"> React.js, JavaScript, and Next.js</b>
              </i>
              , and I'm always exploring the latest trends in web development.
              <br />
              <br />
              My interests lie in building
              <i>
                <b className="purple">
                  {" "}
                  interactive, user-friendly web experiences{" "}
                </b>
              </i>
              and leveraging <b className="purple">React.js</b> to create
              seamless UI components.
              <br />
              <br />I enjoy collaborating on projects involving
              <i>
                <b className="purple"> front-end technologies </b>
              </i>
              and applying my skills to solve challenging problems.
              <br />
              <br />
              Let’s connect and build something amazing!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Jaimin1999/keeper-app/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jaimin-kharadi-737294242/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
