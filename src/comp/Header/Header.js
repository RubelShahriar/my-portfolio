import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {faGithub, faLinkedinIn, faFacebook } from '@fortawesome/free-brands-svg-icons'
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => { 
    return (
        <Navbar className='header py-2 smooth-scroll mx-1' style={{background: '#154360', borderRadius: '30px'}} expand="lg" fixed='top'>
            <Container>
                <Navbar.Brand href="#home" className='text-light fw-bold'>RUBEL</Navbar.Brand>
                <Navbar.Toggle aria-controls=""  />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="m-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link className='me-3 text-light link' href="#home">Home</Nav.Link>
                    <Nav.Link className='me-3 text-light link' href="#about">About</Nav.Link>
                    <Nav.Link className='me-3 text-light link' href="#skills">Skills</Nav.Link>
                    <Nav.Link className='me-3 text-light link' href="#projects">Projects</Nav.Link>
                    <Nav.Link className='me-3 text-light link' href="#contact">Contact</Nav.Link>
                </Nav>
                <div style={{marginBottom: '-5px'}}>
                    <a href='https://github.com/RubelShahriar'><FontAwesomeIcon className='icon ms-3 text-light' title='GitHub' icon={faGithub}/></a>
                    <a href='https://www.linkedin.com/in/mrrubelmia/'><FontAwesomeIcon className='icon ms-3 text-light' title='LinkedIn' icon={faLinkedinIn}/></a>
                    <a href='https://www.facebook.com/afradshahriar.rubel'><FontAwesomeIcon className='icon ms-3 text-light' title='Facebook' icon={faFacebook}/></a>
                </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;