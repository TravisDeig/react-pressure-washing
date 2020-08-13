import React from 'react';
import styled from "styled-components";
import NavItem from './NavItemComponent';

const StyledSideNav = styled.div`
  position: fixed;
  height: 100%;
  width: 75px;
  z-index: 1;
  top: 3.4em;
  background-color: rgb(255, 255, 255);
  overflow-x: hidden;
  padding-top: 10px;
  border-width: medium;
  box-shadow: 3px 5px 6px grey;
`;



class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activePath: '/',
            items: [
                {
                    path: '/home',
                    name: 'Home',
                    css: 'fa fa-fw fa-home',
                    key: 1 
                },
                {
                    path: '/calendar',
                    name: 'Calendar',
                    css: 'fa fa-fw fa-calendar',
                    key: 2
                },
                // {
                //     path: '',
                //     name: '',
                //     css: '',
                //     key: 3
                // },
            ]
        }
    }

    onItemClick = (path) => {
        this.setState({ activePath: path }); 
    }

    render() {
        const { items, activePath } = this.state;
        return (
            <StyledSideNav>
                {
                    items.map((item) => {
                        return (
                            <NavItem path={item.path} css={item.css} onItemClick={this.onItemClick} active={item.path === activePath} key={item.key} />
                        )
                    })
                }
            </StyledSideNav>
        );
    }
}

export default class Sidebar extends React.Component {
    render() {
        return (
            <SideNav></SideNav>
        );
    }
}