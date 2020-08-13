import React, { Component } from 'react'
import { BrowserRouter as Route, Link } from "react-router-dom";
import styled from 'styled-components';



const StyledNavItem = styled.div`
height: 70px;
width: 75px;
text-align: center;
margin-bottom: 0; 
a {
  font-size: 2.05em;
  color: ${(props) => props.active ? "#b4d2ee" : "#588cdb"};
  :hover {
    opacity: 0.7;
    text-decoration: none;
  }  
}
`;




class NavItem extends Component {

  handleClick = () => {
    const { path, onItemClick } = this.props;
    onItemClick(path);
  }

  render() {
    const { active } = this.props;
    return (
      <React.Fragment>
        <StyledNavItem active={active}>
            <Link to={this.props.path} className={this.props.css} onClick={this.handleClick}>{this.props.name}
            </Link>
          </StyledNavItem>
      </React.Fragment>

    );
  }
}

export default NavItem;