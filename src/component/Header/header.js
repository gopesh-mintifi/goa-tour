import React from "react";
import {Container,Row,Col,Image,Nav} from 'react-bootstrap';
import './header.scss';
function Header (){
return(
    <div className="header-div">
        <Container>
            <Row>
                <Col className="d-flex" sm={2} lg={6}>
                    <Image className="logo" src={'/goa-tour/Images/logo.png'} />
                </Col>
                <Col sm={10} lg={6}>
                    <Nav defaultActiveKey="/goa-tour/home" as="ul" className="listHeader">
                        <Nav.Item as="li">
                            <Nav.Link href="/goa-tour/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/goa-tour/about">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="treval">Treval</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        </Container>
    </div>
);
}

export default Header;