import React, { Component } from 'react';
import Home2 from './HomeComponent2';
import Footer from './FooterComponent'
import Sidebar from './SideBar'
import { SERVICES } from '../shared/services'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from './Header';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: SERVICES
        }
    }
    render() {
        return (
            <React.Fragment>
                <Router>
                    <Header />
                    <Sidebar />
                    <Home2 services={this.state.services} />
                    <Footer />
                </Router>
            </React.Fragment>
        );
    }
}

export default Main;