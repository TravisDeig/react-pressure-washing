import React from 'react';
import { Navbar, Col, Button } from 'react-bootstrap';
import styled from 'styled-components';

const StyledHeaderNav = styled.div`
    position: fixed;
    height: 3.39em;
    width: 100%;
    z-index: 1;
    top: 0em;
    background-color: rgb(240, 240, 240); 
    overflow-y: hidden;
    box-shadow: 3px 3px 3px grey;
`;
export const Header = () => (
    <StyledHeaderNav>
        <Navbar expand="lg">
            <Navbar.Brand href="/"><img height="40" width="118" src="asset/images/logoFull.svg" /></Navbar.Brand>
            <Col>
            <Button className="right" variant="light" md={{span:4, offset:4}}>
                <i className="fa fa-sign-in fa-lg" /> Login
            </Button>
            </Col>
        </Navbar>

    </StyledHeaderNav>
)


