import React from 'react';
import './About.css';
import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div id='about' className='py-4 about'>
            <Container>
                {/* about header */}
                <div className='py-5 position-relative d-flex justify-content-center align-items-center'>
                    <h2 style={{fontSize: 'calc(1.9rem + 8.4vw)'}} className='text-24 text-light opacity-4 text-uppercase fw-600 w-100 mb-0 text-center'>About Me</h2>
                    <h2 style={{fontSize: '50px'}} className='position-absolute know-me mb-0'>Know Me More</h2>
                </div>
                {/* about text middle */}
                <div className='row'>
                    <div className='col-lg-8 left'>
                        <h2>I'm <span className='span'>Rubel Mia,</span> a web developer</h2>
                        <p>Hey! Welcoming you to my portfolio. i am Rubel Mia, a front-end web developer with 2 years of  experience with real world projects. Recently i am working on React Node Express, and MongoDB. i am interested to learn new technologies every time.  </p>
                        <p>For me, Programming is an intersting thing. i enjoy it while i work on. As a web developer focused on customer satisfaction, I manage all aspects of web development from concept to requirements definition, design, development, launch, maintenance, and user support. I enjoy the client-facing role and working closely with team members to produce high-quality deliverables. I am very passionate and dadicated to my work. </p>
                    </div>
                    <div className='col-lg-4 right'>
                        <p><span className='fw-bold' >Name: </span>Rubel Mia</p><hr></hr>
                        <p><span className='fw-bold' >Email: </span><a href='mailto:mr.miarubel@gmail.com' className='email'>mr.miarubel@gmail.com</a></p><hr></hr>
                        <p><span className='fw-bold' >Age: </span>21</p><hr></hr>
                        <p className='mb-5'><span className='fw-bold' >From: </span>Sylhet, Bangladesh</p>
                        <a href='https://www.linkedin.com/in/mrrubelmia/' className='px-4 hire py-2 text-decoration-none rounded-pill fs-5 fw-bold'>Hire Me</a>
                    </div>
                </div> 
                <div className='experience mt-5 text-center'>
                    <Row>
                        <Col className='border-end mb-3'>
                            <p style={{fontSize: '50px', color:'#6c757d'}} className='mb-0 fw-bold'>02+</p>
                            <p className='fs-5'>Years Project experience</p>
                        </Col>
                        <Col className='border-end mb-3'>
                            <p style={{fontSize: '50px', color:'#6c757d'}} className='mb-0 fw-bold'>20+</p>
                            <p className='fs-5'>Latest Technologies</p>
                        </Col>
                        <Col className='border-end mb-3'>
                            <p style={{fontSize: '50px', color:'#6c757d'}} className='mb-0 fw-bold'>21+</p>
                            <p className='fs-5'>GitHub Projects</p>
                        </Col>
                        <Col className='border-end mb-3'>
                            <p style={{fontSize: '50px', color:'#6c757d'}} className='mb-0 fw-bold'>02+</p>
                            <p className='fs-5'>Web Certifications</p>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default About;