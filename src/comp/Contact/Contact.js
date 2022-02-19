import React, { useRef, useState } from 'react';
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelope, faPhoneAlt, faPaperPlane, faAngleDoubleUp} from '@fortawesome/free-solid-svg-icons'
import './Contact.css';

const Contact = () => {
    const [success, setSuccess] = useState(false)
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jcq6j5b', 'template_z73yt3i', form.current, 'user_FABCJlwtkvbXFvDp1vj9U')
      .then((result) => {
          setSuccess(true)
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

    return (
        <div id='contact' className='pt-4 bg-light contact'>
            <Container>
                <div className='pt-5 position-relative d-flex justify-content-center align-items-center'>
                    <h2 style={{fontSize: 'calc(1.9rem + 8.4vw)', color: '#f1f1f1'}} className='text-24 under-text opacity-4 text-uppercase fw-600 w-100 mb-0 text-center'>Contact</h2>
                    <h2 style={{fontSize: '50px'}} className='position-absolute contact-after mb-0'>Contact</h2>
                </div>
                <Row>
                    <Col sm={12} md={5} lg={4}>
                        <div className=''>
                            <p className='fs-4 fw-bold dont mb-3'>IF INTERESTED!</p>
                            <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                        </div>
                        <div className='left'>
                            <div className='item'>
                                <div className='map-pin'><FontAwesomeIcon className='icon' icon={faMapMarkerAlt}/></div>
                                <p className='fw-bold mb-1'>ADDRESS:</p>
                                <p>Syhet, Bangladesh</p>
                            </div>
                            <div className='item'>
                                <div className='map-pin'><FontAwesomeIcon className='icon' icon={faEnvelope}/></div>
                                <p className='fw-bold mb-1'>EMAIL:</p>
                                <p>mr.miarubel@gmail.com</p>
                            </div>
                            <div className='item'>
                                <div className='map-pin'><FontAwesomeIcon className='icon' icon={faPhoneAlt}/></div>
                                <p className='fw-bold mb-1'>CALL ME:</p>
                                <p>+8801793977498</p>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={7} lg={8}>
                        <div className='right'>
                            <form ref={form} onSubmit={sendEmail}>
                                <Form.Control className='input' type="text" placeholder='Name' name="name"  required/>
                                <Form.Control className='input' type="email" placeholder='Email' name="email"  required/>
                                <Form.Control className='input' type="text" placeholder='subject' name="subject"  required/>
                                <Form.Control as='textarea' className='input1'  placeholder='Message' name="message"  required/>
                                <Button className='mt-3 fw-bold fs-5 send' type="submit" value="Send">Send <FontAwesomeIcon className='icon' icon={faPaperPlane}/></Button>
                            </form>
                            {success && 
                                <Alert className='input alert mt-3' style={{background: '#d1e7dd', border: '1px solid #badbcc', fontSize: '16px'}} variant={success}>
                                    Thank You! For Your valuable Message.
                                </Alert>
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
            <div className=''>
                <nav style={{background: '#154360', marginTop: '80px', position: 'relative'}} className='footer-bottom py-2'>
                    <Container className='footer-nav'>
                        <p className='footer-bottom text-light mb-0'>Copyrght &copy;{new Date().getFullYear()} RUBEL MIA. All Rights Reserved</p>
                        <a href='#home' style={{bottom: '30px', left: '50%', transform: 'translateX(-50%)'}} className=' position-absolute back-to-top px-3 py-2 fs-4 fw-bold text-light'><FontAwesomeIcon icon={faAngleDoubleUp}/></a>
                    </Container>
                </nav>
            </div>
        </div>
    );
};

export default Contact;