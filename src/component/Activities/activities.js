import React from "react";
import { Col, Container, Row,Card,Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Activities (){
    const navigate = useNavigate();
    const goToSchedule = () => {
        navigate("/goa-tour/schedule");
    }
return(
    <div className="activities">
        <Container>
            <Row>
                <Col xs={12} sm={6} lg={4} className="mt-4">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" height="200px" src="/goa-tour/Images/Culture-of-Goa.jpg" />
                    <Card.Body>
                        <Card.Title>Cultural Exploration</Card.Title>
                        <Card.Text>
                         Activities or projects that promote global citizenship, critical, multicultural understandings of the world, and self‐awareness of one's cultural orientations
                        </Card.Text>
                        <Button variant="primary" onClick={()=>goToSchedule()}>Fix Schedule</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} lg={4} className="mt-4">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" height="200px" src="/goa-tour/Images/local-market.webp" />
                    <Card.Body>
                        <Card.Title>Local market</Card.Title>
                        <Card.Text>
                        Anjuna Flea Market · Panaji Market · Mackie's Night Bazaar · Night Market in Arpora · Baga Market · Calangute Market Square · Club. 
                        </Card.Text>
                        <Button variant="primary" onClick={()=>goToSchedule()}>Fix Schedule</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} lg={4} className="mt-4">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" height="200px" src="/goa-tour/Images/Mandovi River.jpeg" />
                    <Card.Body>
                        <Card.Title>Mandovi River</Card.Title>
                        <Card.Text>
                        The river has a total length of 81 kilometres (50 miles); 35 kilometres (22 miles) in Karnataka, 1 kilometre (0.62 miles) in Maharashtra and 45 kilometres (28 miles) in Goa.
                        </Card.Text>
                        <Button variant="primary" onClick={()=>goToSchedule()}>Fix Schedule</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} lg={4} className="mt-4">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" height="200px" src="/goa-tour/Images/waterSport.jpg" />
                    <Card.Body>
                        <Card.Title>Water sports at Grand island </Card.Title>
                        <Card.Text>
                            Windsurfing · Jet skiing · Speed boats · Scuba Diving & Snorkeling · Banana tube boat ride · Knee-and-Wake boarding · Kayaking.
                        </Card.Text>
                        <Button variant="primary" onClick={()=>goToSchedule()}>Fix Schedule</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} lg={4} className="mt-4">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" height="200px" src="/goa-tour/Images/club.webp" />
                    <Card.Body>
                        <Card.Title>Clubbing at Tito's lane </Card.Title>
                        <Card.Text>
                        Club Titos is Goa's most famous and popular nightclub. It is located at Titos Lane in Baga, very close to the beach. One of Goa's first discos
                        </Card.Text>
                        <Button variant="primary" onClick={()=>goToSchedule()}>Fix Schedule</Button>
                    </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} lg={4} className="mt-4">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" height="200px" src="/goa-tour/Images/bagaBeach.webp" />
                    <Card.Body>
                        <Card.Title>Baga Beach</Card.Title>
                        <Card.Text>
                        Located at the north end of the contiguous beach stretch that starts from Sinquerim, Candolim, leads to Calangute, and then to Baga.
                        </Card.Text>
                        <Button variant="primary" onClick={()=>goToSchedule()}>Fix Schedule</Button>
                    </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
);
}

export default Activities;