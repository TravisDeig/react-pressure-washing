import React from 'react';
import { Navbar, Col, Button, Modal, Form } from 'react-bootstrap';
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


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    // [show, setShow] = useState(false);

    // handleClose = () => setShow(false);
    // handleShow = () => setShow(true);

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleModal();
        event.preventDefault();
        console.log('it works')
    }


    render() {
        return (
            <>
            <StyledHeaderNav>
                <Navbar expand="lg">
                    <Navbar.Brand href="/"><img height="40" width="118" src="asset/images/logoFull.svg" /></Navbar.Brand>
                    <Col>
                        <Button onClick={this.toggleModal} className="right" variant="light" md={{ span: 4, offset: 4 }}>
                            <i className="fa fa-sign-in fa-lg" /> Login
            </Button>
                    </Col>
                </Navbar>

            </StyledHeaderNav>
            <Modal show={this.state.isModalOpen} onHide={this.toggleModal} animation={false}>
                    <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={this.handleLogin}>
                            <Form.Group>
                                <Form.Label htmlFor="username">Username</Form.Label>
                                <Form.Control type="text" id="username" name="username" innerRef={input => this.username = input} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="password">Password</Form.Label>
                                <Form.Control type="password" id="password" name="password" innerRef={input => this.password = input} />
                            </Form.Group>
                            <Form.Group check>
                                    <Form.Check type="checkbox" name="remember" innerRef={input => this.remember = input} label="Remember me" />
                            </Form.Group>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}


export default Header;