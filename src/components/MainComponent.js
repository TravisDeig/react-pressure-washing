import React from 'react';
import Header from './HeaderComponent';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <Header />
            </div>
        );
    }
}

export default Main;