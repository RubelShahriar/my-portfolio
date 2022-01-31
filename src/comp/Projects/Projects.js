import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBroadcastTower} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import carImage from '../../images/CarLeader.png'
import './Projects.css';

const Projects = () => {
    return (
        <div id='projects' className='py-4 project'>
            <Container>
                <div className='py-5 project-heading position-relative d-flex justify-content-center align-items-center'>
                    <h2 style={{fontSize: 'calc(1.9rem + 8.4vw)'}} className='text-24 text-light opacity-4 text-uppercase fw-600 w-100 mb-0 text-center one'>Projects</h2>
                    <h2 style={{fontSize: '50px'}} className='position-absolute portfolio mb-0'>Portfolio</h2>
                </div>
                <Row>
                    <Col sm={12} md={6} lg={4}>
                            <div className='text-center fs-5 mb-3'>CarLeader</div>
                        <div className='image position-relative'>
                            <div className='project-pic'>
                                <img src={carImage} alt='car'></img>
                            </div>
                            <div className='overlay'>
                                <div className='tech'>
                                    <p style={{color: 'white'}}>Technologies:</p>
                                    <ul>
                                        <li>React.js</li>
                                        <li>Node.js</li>
                                        <li>Express.js</li>
                                        <li>MongoDB</li>
                                    </ul>
                                    <div className='website'>
                                        <a href='#..'><FontAwesomeIcon className='icon' icon={faBroadcastTower}/>Live Website</a>
                                        <a href='#..'><FontAwesomeIcon className='icon1 icon' icon={faGithub}/>GitHub Code</a>
                                        <a href='#..'><FontAwesomeIcon className='icon1 icon' icon={faGithub}/>GitHub Code</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                    <div className='text-center fs-5 mb-3'>CarLeader</div>
                            <div className='image position-relative'>
                            <div className='project-pic'>
                                <img src={carImage} alt='car'></img>
                            </div>
                            <div className='overlay'>
                                <div className='tech'>
                                    <p style={{color: 'white'}}>Technologies:</p>
                                    <ul>
                                        <li>React.js</li>
                                        <li>Node.js</li>
                                        <li>Express.js</li>
                                        <li>MongoDB</li>
                                    </ul>
                                    <div className='website'>
                                        <a href='#.'><FontAwesomeIcon className='icon' icon={faBroadcastTower}/>Live Website</a>
                                        <a href='#.'><FontAwesomeIcon className='icon1 icon' icon={faGithub}/>GitHub Code</a>
                                        <a href='#.'><FontAwesomeIcon className='icon1 icon' icon={faGithub}/>GitHub Code</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                    <div className='text-center fs-5 mb-3'>CarLeader</div>
                            <div className='image position-relative'>
                            <div className='project-pic'>
                                <img src={carImage} alt='car'></img>
                            </div>
                            <div className='overlay'>
                                <div className='tech'>
                                    <p style={{color: 'white'}}>Technologies:</p>
                                    <ul>
                                        <li>React.js</li>
                                        <li>Node.js</li>
                                        <li>Express.js</li>
                                        <li>MongoDB</li>
                                    </ul>
                                    <div className='website'>
                                        <a href='#.'><FontAwesomeIcon className='icon' icon={faBroadcastTower}/>Live Website</a>
                                        <a href='#.'><FontAwesomeIcon className='icon1 icon' icon={faGithub}/>GitHub Code</a>
                                        <a href='#.'><FontAwesomeIcon className='icon1 icon' icon={faGithub}/>GitHub Code</a>
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