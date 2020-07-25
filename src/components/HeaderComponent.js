import React, { Component } from 'react';
import { Navbar, NavbarBrand, Container, Nav, Col, Row } from 'react-bootstrap';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        };
    }

    render() {
        return (
            <div>
                <Container fluid className="navbar-dark sticky-top">
                    <Row>
                        <Col>
                            <a role="button" class="btn btn-link text-light d-none d-sm-none d-md-block"
                                href="tel:+12345678900"><i class="fa fa-phone text-light mr-1"></i>1-234-567-8900</a>
                        </Col>
                        <Col>
                            <a role="button" class="btn btn-link text-light d-none d-sm-none d-md-block"
                                href="mailto:email@example.com"><i
                                    class="fa fa-envelope-o text-light mr-1"></i>email@example.com</a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <a role="button"
                                className="btn btn-link text-light fa fa-envelope-o text-light d-none d-sm-block d-md-none d-block"
                                href="mailto:email@example.com"
                            />
                        </Col>
                        <hr className="roundedVertical  d-none d-sm-block d-md-none d-block" />
                        <Col>
                            <a role="button"
                                className="btn btn-link text-light fa fa-phone text-light d-none d-sm-block d-md-none d-block"
                                href="tel:+12345678900"
                            />
                        </Col>
                    </Row>
                </Container>

                <header className="mainHeader">
                    <Navbar expand="sm">
                        <Container>
                            <NavbarBrand
                                className="navbar-brand"
                                href="/">
                                <img
                                    src="asset/images/logoFull.svg" alt="Pressure Washing logo."
                                />
                            </NavbarBrand>
                            <Navbar.Toggle onClick={this.toggleNav} />
                            <Navbar.Collapse>
                                <Nav.Link href="/home" className="navText">Home</Nav.Link>
                                <Nav.Link href="/Services" className="navText">Services</Nav.Link>
                                <Nav.Link href="/gallery" className="navText">Gallery</Nav.Link>
                                <Nav.Link href="/about" className="navText">About</Nav.Link>
                                <Nav.Link href="/blog" className="navText">Blog</Nav.Link>
                                <Nav.Link href="/Contact" className="navText">Contact</Nav.Link>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </header>
            </div>
        );
    }
}

export default Header;