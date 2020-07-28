import React, { Component } from 'react';
import { Card, Container, Button, Row, Col } from 'react-bootstrap';

class Home2 extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const home = this.props.services.map(service => {
            return (
                <Col key={service.id} lg className="text-center mb-4 mt-4">
                    <Card className="h-100">
                        <Card.Img variant="top" className="img-thumbnail" src={service.image} />
                        <Card.Body className="align-self-center">
                            <Card.Title>{service.name}</Card.Title>
                            <Row className="justify-content-center">
                                <Button className="">Learn More</Button>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            );
        })

        return (
            <div className="dark gridWrapper">
                <Container>
                    <Row sm="2">
                        {home}
                    </Row>
                </Container>
            </div>

        );
    }
}



export default Home2;