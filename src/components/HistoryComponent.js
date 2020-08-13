import React, { Component } from 'react';
import { Card, Container, Button, Row, Col, Table } from 'react-bootstrap';
import { INVOICES } from '../shared/invoices'

class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            invoices: INVOICES
        }
    }

    render() {
        return (
            <div className="dark gridWrapper">
                <Container>
                    <h2 className="mainHead footerHeadText">-- See what we've done for you --</h2>
                </Container>
            </div>
        );
    };
}

export default History;
