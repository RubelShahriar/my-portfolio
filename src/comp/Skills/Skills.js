import React from 'react';
import { Col, Container, Row, ProgressBar } from 'react-bootstrap';
import './Skills.css';

const Skills = () => {
    return (
        <div id='skills' className='py-4 bg-light skills'>
            <Container>
                <div className='py-5 position-relative d-flex justify-content-center align-items-center'>
                    <h2 style={{fontSize: 'calc(1.9rem + 8.4vw)', color: '#f1f1f1'}} className='text-24 opacity-4 text-uppercase fw-600 w-100 mb-0 text-center'>Skills</h2>
                    <h2 style={{fontSize: '50px'}} className='position-absolute  skill-after mb-0'>What I Khow</h2>
                </div>
                    <Row>
                        <Col sm={12} md={6} lg={6}>
                            <p className='mt-2 fw-bold fs-5'>React <span className='float-end'>80%</span></p>
                            <ProgressBar now={80} />
                            <p className='mt-2 fw-bold fs-5'>Javascript <span className='float-end'>85%</span></p>
                            <ProgressBar now={85} />
                            <p className='mt-2 fw-bold fs-5'>Node Js <span className='float-end'>80%</span></p>
                            <ProgressBar now={80} />
                            <p className='mt-2 fw-bold fs-5'>Express Js <span className='float-end'>85%</span></p>
                            <ProgressBar now={85} />
                            <p className='mt-2 fw-bold fs-5'>MongoDB <span className='float-end'>80%</span></p>
                            <ProgressBar now={80} />
                            <p className='mt-2 fw-bold fs-5'>Tailwind <span className='float-end'>85%</span></p>
                            <ProgressBar now={85} />
                        </Col>
                        <Col sm={12} md={6} lg={6}>
                            <p className='mt-2 fw-bold fs-5'>Bootstrap <span className='float-end'>85%</span></p>
                            <ProgressBar now={85} />
                            <p className='mt-2 fw-bold fs-5'>Metarial UI <span className='float-end'>90%</span></p>
                            <ProgressBar now={90} />
                            <p className='mt-2 fw-bold fs-5'>API <span className='float-end'>80%</span></p>
                            <ProgressBar now={80} />
                            <p className='mt-2 fw-bold fs-5'>JSON <span className='float-end'>85%</span></p>
                            <ProgressBar now={85} />
                            <p className='mt-2 fw-bold fs-5'>HTML5 <span className='float-end'>90%</span></p>
                            <ProgressBar now={90} />
                            <p className='mt-2 fw-bold fs-5'>CSS3 <span className='float-end'>85%</span></p>
                            <ProgressBar now={85} />
                        </Col>
                    </Row>
            </Container>
        </div>
    );
};

export default Skills; 