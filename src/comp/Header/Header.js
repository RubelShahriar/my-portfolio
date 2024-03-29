import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  return (
    <Navbar className="header py-1 smooth-scroll" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="logo fw-bold">
          R<span className="letter1">U</span>
          <span className="letter2">B</span>
          <span className="letter3">E</span>
          <span className="letter4">L</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="">
          <FontAwesomeIcon className="text-light" icon={faBars} />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="me-3 text-light link" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="me-3 text-light link" href="#about">
              About
            </Nav.Link>
            <Nav.Link className="me-3 text-light link" href="#skills">
              Skills
            </Nav.Link>
            <Nav.Link className="me-3 text-light link" href="#projects">
              Projects
            </Nav.Link>
            <Nav.Link className="me-3 text-light link" href="#contact">
              Contact
            </Nav.Link>
          </Nav>
          <div className="icon-div" style={{ marginBottom: "-5px" }}>
            <a href="https://github.com/RubelShahriar">
              <FontAwesomeIcon
                className="icon text-light"
                title="GitHub"
                icon={faGithub}
              />
            </a>
            <a href="https://www.linkedin.com/in/mrrubelmia/">
              <FontAwesomeIcon
                className="icon ms-3 text-light"
                title="LinkedIn"
                icon={faLinkedinIn}
              />
            </a>
            <a href="https://www.instagram.com/mdrubelshahriar/">
              <FontAwesomeIcon
                className="icon ms-3 text-light"
                title="Instagram"
                icon={faInstagram}
              />
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
