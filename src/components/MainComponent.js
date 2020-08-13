import React, { Component } from 'react';
import Home from './HomeComponent';
import Footer from './FooterComponent'
import Sidebar from './SideBar'
import Header from './Header';
import History from './HistoryComponent'
import Calendar from './CalendarComponent'
import { SERVICES } from '../shared/services'
import { Route, Switch, Redirect } from "react-router-dom";

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
                    <Route exact path='/calendar' component={Calendar} />
                    <Route exact path='/history' component={History} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}

export default Main;