import React from "react";
import { Container, Row, Col, Card, Nav, Image } from 'react-bootstrap';
import './footer.scss';
// import HomeSvg from '../../Images/home.svg';
function Footer() {
    return (
        <div className="footerSection">
            <Container >
                <Row className="py-5">
                    <Col xs={12} sm={6} md={3}>
                        <Card.Title>TOUR GOA</Card.Title>
                        <Card.Text>
                            Goa is an ideal place for water sports and fun lovers. It offers ample opportunities to adventure enthusiasts to enjoy in water in various ways.
                        </Card.Text>
                    </Col>                    
                    <Col xs={12} sm={6} md={3}>
                        <Card.Title>ADDRESS</Card.Title>
                        <ul class="list-unstyled">
                            <li>
                                <p>
                                    <Image src={'/goa-tour/Images/home.svg'} /> New York, NY 10012, US</p>
                            </li>
                            <li>
                                <p>
                                    <Image src={'/goa-tour/Images/mail.svg'} /> info@example.com</p>
                            </li>
                            <li>
                                <p>
                                    <Image src={'/goa-tour/Images/call.svg'} /> + 01 234 567 88</p>
                            </li>
                            <li>
                                <p>
                                    <Image src={'/goa-tour/Images/fax.svg'} /> + 01 234 567 89</p>
                            </li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <Card.Title>ABOUT</Card.Title>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="/home">About us</Nav.Link>
                            <Nav.Link eventKey="link-1">Tour</Nav.Link>
                        </Nav>
                    </Col>
                    <Col xs={12} sm={6} md={3}>
                        <Card.Title>FOLLOW US</Card.Title>
                        <ul class="list-unstyled follow">
                            <li>
                                <a href='http://facebook.com'>
                                    <Image src={'/goa-tour/Images/facebook.svg'} />
                                </a>
                            </li>
                            <li>
                                <a href='http://instagram.com'>
                                    <Image src={'/goa-tour/Images/instagram.svg'} />
                                </a>
                            </li>
                            <li>
                                <a href='http://google.com'>
                                    <Image src={'/goa-tour/Images/google.svg'} />
                                </a>
                            </li>
                            <li>
                                <a href='http://twitter.com'>
                                    <Image src={'/goa-tour/Images/twitter.svg'} />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div class="footer-copyright text-center py-3">© 2020 Copyright:
                            <a href="/"> GoaTour.com</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;