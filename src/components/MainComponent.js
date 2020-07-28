import React, { Component } from 'react';
import Home from './HomeComponent';
import Footer from './FooterComponent'
import Sidebar from './SideBar'
import { SERVICES } from '../shared/services'
import { Route, Switch } from "react-router-dom";
import Header from './Header';

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
                <Header />
                <Sidebar />
                <Switch>
                    <Route path='/home' render={() => <Home services={this.state.services} />}/>
                </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;