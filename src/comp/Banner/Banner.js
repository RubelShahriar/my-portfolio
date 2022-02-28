import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Typewriter } from 'react-simple-typewriter';
// import Particles from "react-tsparticles";
import { faDownload, faChevronDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import rubel from '../../images/rubel-square.png'
import './Banner.css';

const Banner = () => {
    return (
        <div id='home' className='banner'>
            <Container>
                    <div className='profile'>
                        <div className='image'>
                            <img src={rubel} alt='rubel'></img>
                        </div>  
                    </div>
                    <div className='info'>
                        <div className='left'>
                            <p className='mt fs-4'>Hey there!</p>
                            <h5 className='inner-text'>
                                {' I\'m '}
                                <span className='inner-text'>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Rubel Mia', 'a React Developer', 'a Front-end Developer', 'a Mern Stack Developer']}
                                    loop='true'
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={100} 
                                    deleteSpeed={80}
                                    delaySpeed={1000}
                                />
                                </span> 
                            </h5>
                            <p className='mt-2 fs-5' >Creative Frontend Developer</p>
                            <p className='fs-6 my-info'>Hey! Welcoming you to my portfolio. i am Rubel Mia, a front-end web developer with 2 years of  experience with real world projects. Recently i am working on React Node Express, and MongoDB. i am interested to learn new technologies every time. i am capable to build up any Frontend project with latest technologies and frameworks.</p>
                            <div>
                                <Button className='py-2 px-3 resume rounded-pill'>
                                    <a href='https://drive.google.com/uc?id=12KPn01h_ogWis6MIEQBo-WlryqPPrAxX&export=download' style={{color: 'white'}} className='fs-6 fw-bold text-decoration-none '>Download Resume <FontAwesomeIcon className='icon d-icon ms-2 fa-twitter' style={{color: 'white'}} icon={faDownload}/></a>
                                </Button>
                            </div>
                            <div className='ani'>
                                <a href='#about' className='div fs-5'>
                                    <FontAwesomeIcon style={{color: 'black'}} className=' smooth-scroll' icon={faChevronDown}/>
                                </a>
                            </div>
                        </div>
                    </div>  
            </Container>
        </div>
    );
};


export default Banner;