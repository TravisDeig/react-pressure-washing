import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="site-footer footerWrapper">
            <Container>
                <Row>
                    <Col>
                        <h5 className="mainHead footerHeadText">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Nav.Link href="/home" className="text-light">Home</Nav.Link></li>
                            <li><Nav.Link href="/calendar" className="text-light">Calendar</Nav.Link></li>
                            {/* <li><Nav.Link href="/gallary" className="text-light">Gallery</Nav.Link></li>
                            <li><Nav.Link href="/aboutus" className="text-light">About Us</Nav.Link></li>
                            <li><Nav.Link href="/blog" className="text-light">Blog</Nav.Link></li>
                            <li><Nav.Link href="/contact" className="text-light">Contact</Nav.Link></li> */}
                        </ul>
                    </Col>
                    <Col>
                        <h5 className="mainHead footerHeadText">Contact Us</h5>
                        <ul className="list-unstyled">
                            <li className="text-light">Pressure Washing<br />4444 MadeUp Lane S<br />Jacksonville, FL 32250
                            </li>
                            <li className="my-3">
                                <a role="button" className="btn btn-link text-light" href="tel:+12345678900"><i
                                className="fa fa-phone text-light"></i>1-234-567-8900</a>
                            </li>
                            <li>
                                <a role="button" className="btn btn-link text-light" href="mailto:email@example.com"><i
                                className="fa fa-envelope-o text-light"></i> email@example.com</a>
                            </li>
                        </ul>
                    </Col>
                    <Col>
                        <h5 className="mainHead footerHeadText">Proudly Serving</h5>
                        <ul className="list-unstyled">
                            <li className="text-light">Jacksonville, FL</li>
                            <li className="text-light">Ponte Vedra, FL</li>
                            <li className="text-light">St. Johns County</li>
                            <li className="text-light">Orange Park, FL</li>
                            <li className="text-light">Jacksonville Beach, FL</li>
                            <li className="text-light">Neptune Beach, FL</li>
                            <li className="text-light">Atlantic Beach, FL</li>
                        </ul>

                    </Col>
                </Row>
            </Container >
        </footer >
    )
}

export default Footer;