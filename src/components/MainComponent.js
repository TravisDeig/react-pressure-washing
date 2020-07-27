import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent'
import { SERVICES } from '../shared/services'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state={
            services: SERVICES
            }
    }
    render() {
        return (
            <div>
                <Header />
                <Home services={this.state.services}/>
                <Footer />
            </div>
        );
    }
}

export default Main;