import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBroadcastTower } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import carImage1 from "../../images/CarLeader.png";
import carImage2 from "../../images/TripFinder.png";
import carImage3 from "../../images/weather-app.png";
import "./Projects.css";

const Projects = () => {
  return (
    <div id="projects" className="py-4 project">
      <Container>
        <div className="py-5 project-heading position-relative d-flex justify-content-center align-items-center">
          <h2
            style={{ fontSize: "calc(1.9rem + 8.4vw)" }}
            className="text-24 text-light opacity-4 text-uppercase fw-600 w-100 mb-0 text-center one"
          >
            Projects
          </h2>
          <h2
            style={{ fontSize: "50px" }}
            className="position-absolute portfolio mb-0"
          >
            Portfolio
          </h2>
        </div>
        <Row>
          <Col sm={12} md={6} lg={4}>
            <div className="text-center fs-5 mb-3">CarLeader</div>
            <div className="image position-relative">
              <div className="project-pic">
                <img src={carImage1} alt="car"></img>
              </div>
              <div className="overlay">
                <div className="tech">
                  <p style={{ color: "white" }}>Technologies:</p>
                  <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Material UI</li>
                    <li>Javascript</li>
                    <li>Rest APIs</li>
                    <li>React js</li>
                    <li>Firebase</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                  </ul>
                  <div className="website">
                    <a href="https://caleader-car-dealership.netlify.app/">
                      <FontAwesomeIcon
                        className="icon"
                        icon={faBroadcastTower}
                      />
                      Live Website
                    </a>
                    <a href="https://github.com/RubelShahriar/car-app">
                      <FontAwesomeIcon className="icon1 icon" icon={faGithub} />
                      Client Side Code
                    </a>
                    <a href="https://github.com/RubelShahriar/car-server">
                      <FontAwesomeIcon className="icon1 icon" icon={faGithub} />
                      Server Side Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <div className="text-center fs-5 mb-3">TripFinder</div>
            <div className="image position-relative">
              <div className="project-pic">
                <img src={carImage2} alt="car"></img>
              </div>
              <div className="overlay">
                <div className="tech">
                  <p style={{ color: "white" }}>Technologies:</p>
                  <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Material UI</li>
                    <li>Javascript</li>
                    <li>Rest APIs</li>
                    <li>React js</li>
                    <li>Firebase</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                  </ul>
                  <div className="website">
                    <a href="https://travel-resort-react.netlify.app/">
                      <FontAwesomeIcon
                        className="icon"
                        icon={faBroadcastTower}
                      />
                      Live Website
                    </a>
                    <a href="https://github.com/RubelShahriar/travel-app">
                      <FontAwesomeIcon className="icon1 icon" icon={faGithub} />
                      Client Side Code
                    </a>
                    <a href="https://github.com/RubelShahriar/travel-server">
                      <FontAwesomeIcon className="icon1 icon" icon={faGithub} />
                      Server Side Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <div className="text-center fs-5 mb-3">Weather App</div>
            <div className="image position-relative">
              <div className="project-pic">
                <img src={carImage3} alt="car"></img>
              </div>
              <div className="overlay">
                <div className="tech">
                  <p style={{ color: "white" }}>Technologies:</p>
                  <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>Material UI</li>
                    <li>Javascript</li>
                    <li>Open Weather APIs</li>
                  </ul>
                  <div className="website">
                    <a href="https://rubelshahriar.github.io/weather-app/">
                      <FontAwesomeIcon
                        className="icon"
                        icon={faBroadcastTower}
                      />
                      Live Website
                    </a>
                    <a href="https://github.com/RubelShahriar/weather-app">
                      <FontAwesomeIcon className="icon1 icon" icon={faGithub} />
                      Client Side Code
                    </a>
                    <a href=" ">
                      <FontAwesomeIcon className="icon1 icon" icon={faGithub} />
                      Server Side Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
