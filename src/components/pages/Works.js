import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import background from '../../images/works.jpg';
import ammino from '../../images/aminoDis.jpg';
import parent from '../../images/parentView.jpg';
import mini from '../../images/textEditor.jpg';
import social from '../../images/socialAPI.jpg';
import retail from '../../images/retail.jpg';
import portfolio from '../../images/homePage.jpg';


export default function Works() {
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
                            <h1 className='display-4 mb-4' style={{
                                color: '#666699',
                            }}> 
                             My Work
                            </h1>
                        </Col>
                    </Row>
                    <Row className='sec_sp'>
                        <Col lg='5' className='mb-5'>
                            <Row>
                            <h2 style={{
                                color: '#997a8d',}}>
                                    Collaberation Projects
                            </h2>
                            </Row>
                            <Row>
                            <a href='https://sonnyaddison.github.io/react_portfolio_build/' target='_blank' rel='noreferrer'>   
                            <img src={portfolio} alt='Parent' style={{
                                card: '5px solid white',                                
                                cardImageTop: 'true',
                                width: '75%',
                                height: '80%',
                                marginTop: '25px',
                                marginBottom: '25px',
                            }}>                       
                            </img>
                            </a>
                            </Row>
                            <Row>
                            <a href='https://glacial-sierra-66630.herokuapp.com/login' target='_blank' rel='noreferrer'>'   
                            <img src={parent} alt='Parent' style={{
                                card: '5px solid white',                                
                                cardImageTop: 'true',
                                width: '75%',
                                height: '80%',
                                marginTop: '25px',
                                marginBottom: '25px',
                            }}>                       
                            </img>
                            </a>
                            </Row>
                            <Row> 
                            <a href='https://sonnyaddison.github.io/amminoDisrespect/index.html' target='_blank' rel='noreferrer'>    
                            <img src={ammino} alt='Amino' style={{
                                card: '5px solid white',
                                cardImageTop: 'true',
                                width: '75%',
                                height: '100%',
                                marginTop: '25px',
                                marginBottom: '25px',
                                }}>
                             </img>
                            </a>
                            </Row>
                        </Col>
                        <Col lg='7' className='mb-5'>
                        <Row>
                            <h2 style={{
                                color: '#997a8d'}}>
                                    Individual Projects
                            </h2>
                        </Row>
                        <Row>
                           <h3> </h3>  
                           <a href='https://nameless-reaches-04274.herokuapp.com' target='_blank' rel='noreferrer'>    
                            <img src={ mini} alt='J.A.T.E' style={{
                                card: '5px solid white',
                                cardImageTop: 'true',
                                width: '50%',
                                height: '100%',
                                marginTop: '25px',
                                marginBottom: '25px',
                                }}>
                             </img>
                            </a>
                        </Row>
                        <Row>
                            <h3> </h3>                                 
                            <a href='https://drive.google.com/file/d/1ZzENZLaNXK-FVGqUWs76CrsMKR_Q0o0e/view' target='_blank' rel='noreferrer'>    
                            <img src={social} alt='SocialDB' style={{
                                card: '5px solid white',
                                cardImageTop: 'true',
                                width: '50%',
                                height: '100%',
                                marginTop: '25px',
                                marginBottom: '25px',
                                }}>
                             </img>
                            </a>
                        </Row>
                        <Row>
                            <h3> </h3>  
                            <a href='https://drive.google.com/file/d/1n51DSva_1pPscCv8n9ExgEuIJMc_FHLQ/view' target='_blank' rel='noreferrer'>    
                            <img src={retail} alt='SocialDB' style={{
                                card: '5px solid white',
                                cardImageTop: 'true',
                                width: '50%',
                                height: '100%',
                                marginTop: '25px',
                                marginBottom: '25px',
                                }}>
                             </img>
                            </a>
                        </Row>
                        </Col>
                    </Row>
                </Container>
        </div>
    );
}
