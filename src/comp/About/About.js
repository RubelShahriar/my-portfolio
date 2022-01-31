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
                        <h2>I'm <span style={{color: '#20c997'}}>Rubel Mia,</span> a web developer</h2>
                        <p>Hei i am rubel ,i am afront end developer I like to read, I like to write; I like to think, I like to dream; I like to talk, I like to listen. I like to see the sunrise in the morning, I like to see the  i am working sincce 2019 i am fast learner and entu</p>
                        <p>i am Rubel Mia. i am a junior front end developer with 2 years of working experience on multiple Projects. Recently i am working on React Node Express, and MongoDB. i am interested to learn new technologies every time. i have done some junior qualities project  </p>
                    </div>
                    <div className='col-lg-4 right'>
                        <p><span className='fw-bold' >Name: </span>Rubel Mia</p><hr></hr>
                        <p><span className='fw-bold' >Email: </span>mr.miarubel@gmail.com</p><hr></hr>
                        <p><span className='fw-bold' >Age: </span>21</p><hr></hr>
                        <p className='mb-5'><span className='fw-bold' >From: </span>Sylhet, Bangladesh</p>
                        <a href='https://www.linkedin.com/in/mrrubelmia/' style={{border: '2px solid #20c997', color: '#2E4053'}} className='px-4 hire py-2 text-decoration-none rounded-pill fs-5 fw-bold'>Hire Me</a>
                    </div>
                </div> 
                <div className='experience mt-5 text-center'>
                    <Row>
                        <Col className='border-end mb-3'>
                            <p style={{fontSize: '50px', color:'#6c757d'}} className='mb-0 fw-bold'>02+</p>
                            <p className='fs-5'>Years Experience</p>
                        </Col>
                        <Col className='border-end mb-3'>
                            <p style={{fontSize: '50px', color:'#6c757d'}} className='mb-0 fw-bold'>20+</p>
                            <p className='fs-5'>Latest Technologies</p>
                        </Col>
                        <Col className='border-end mb-3'>
                            <p style={{fontSize: '50px', color:'#6c757d'}} className='mb-0 fw-bold'>31+</p>
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