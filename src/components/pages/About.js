import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import background from '../../images/American-Flag.jpeg';
import sonny from '../../images/Sonny.jpg';


export default function About() {
    return (
        <div style={{ 
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            width: '100vw',
            overflow: 'hidden',
            }}>
            <Container>
                <Row className='mb-5 mt-3'>
                    <Col lg='8'>
                        <h1 style={{
                        color: 'white',
                        fontSize: '100px', 
                        textAlign: 'center', 
                        paddingTop: '200px'}}>
                            About Me
                        </h1>
                        <row>
                            <Col lg='12'>
                                <p style={{
                                color: 'white',
                                fontSize: '30px',
                                marginTop: '65px', 
                                }}>
                                I am a Full Stack Web Developer with a background in the United States Army, 
                                Project Management and Product Management. I truely enjoy learning new things, 
                                and spend a portion of each day outside of my comfort zone. I am currently enrolled in the 
                                University of Arizona's Full Stack Web Development Bootcamp. 
                                </p> 
                            </Col>
                        </row>
                    </Col>
                    <Col>
                        <img src={sonny} alt='Sonny' style={{
                           display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            border: '5px solid white',
                            marginTop: '175px',
                            marginBottom: '50px'
                        }}></img>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}