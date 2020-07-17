import React, { Component } from 'react';
import { Nav, Navbar, Button } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        // this.toggleNav = this.toggleNav.bind(this);
        // this.toggleModal = this.toggleModal.bind(this);
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark sticky="top" className="container-fluid">
                        <div className="row">
                            <div className="col">
                                <a role="button" className="btn btn-link text-light d-none d-sm-none d-md-block"
                                    href="tel:+12345678900"><i class="fa fa-phone text-light mr-1"></i>1-234-567-8900</a>
                            </div>
                            <div class="col">
                                <a role="button" class="btn btn-link text-light d-none d-sm-none d-md-block"
                                    href="mailto:email@example.com"><i
                                        class="fa fa-envelope-o text-light mr-1"></i>email@example.com</a>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <a role="button"
                                    class="btn btn-link text-light fa fa-envelope-o text-light d-none d-sm-block d-md-none d-block"
                                    href="mailto:email@example.com"></a>
                            </div>
                            <hr className="roundedVertical  d-none d-sm-block d-md-none d-block" />
                                <div class="col">
                                    <a role="button"
                                        class="btn btn-link text-light fa fa-phone text-light d-none d-sm-block d-md-none d-block"
                                        href="tel:+12345678900"></a>
                                </div>
                        </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;