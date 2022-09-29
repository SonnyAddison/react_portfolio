import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { contactConfig } from '../content_option';


export default function Contact() {
    return (
        <Container>
            <Row className='mb-5 mt-3'>
                <Col lg='8'>
                    <h1 className='display-4 mb-4'>
                        Contact Me
                    </h1>
                </Col>
            </Row>
            <Row className='sec_sp'>
                <Col lg='5' className='mb-5'>
                    <h3 className='color_sec py-4'> Get in touch with me</h3>
                    <address>
                        <strong>Email: sonny.m.addison@hotmail.com</strong>
                        <br />
                        <p>
                        <strong>Phone: 801-347-1220</strong>
                        </p>
                        <p>
                        <strong>Github: https://github.com/SonnyAddison</strong>
                        </p>
                      
                        <p>
                        <strong>LinkedIn: https://www.linkedin.com/in/sonny-addison/</strong>
                        </p>
                    </address>
                    <p>{contactConfig.description}</p>
                </Col>
                <Col lg='7' className='d-flex align-items-center'>
                    <form className='contact__form w-100'>
                        <Row>
                            <Col lg='6' className='form-group'>
                                <input
                                    className='form-control'
                                    id='name'
                                    name='name'
                                    placeholder='Name'
                                    type='text'
                                />
                            </Col>
                            <Col lg='6' className='form-group'>
                                <input
                                    className='form-control rounded-0'
                                    id='email'
                                    name='email'
                                    placeholder='Email'
                                    type='email'
                                />
                            </Col>
                        </Row>
                        <textarea
                            className='form-control rounded-0 id=message'
                            name='message'
                            placeholder='Message'
                            rows='6'
                        ></textarea>
                        <br />
                        <Row>
                            <Col lg='12' className='form-group'>
                                <button className='btn ac_btn' type='submit'>Send</button>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}