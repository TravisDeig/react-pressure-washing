import React, { Component } from 'react';
import Home from './HomeComponent';
import Footer from './FooterComponent'
import Sidebar from './SideBar'
import Header from './Header';
import History from './HistoryComponent'
import Calendar from './CalendarComponent'
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        services: state.services
    }
}

class Main extends Component {

    render() {
        return (
            <React.Fragment>
                <Header />
                <Sidebar />
                <Switch>
                    <Route path='/home' render={() => <Home services={this.props.services} />}/>
                    <Route exact path='/calendar' component={Calendar} />
                    <Route exact path='/history' component={History} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </React.Fragment>
        );
    }
}

export default connect(mapStateToProps)(Main);