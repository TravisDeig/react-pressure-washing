import React from 'react';
import styled from "styled-components";

const StyledSideNav = styled.div`
  position: fixed;
  height: 100%;
  width: 150px;
  z-index: 1;
  top: 3.4em;
  background-color: rgb(240, 240, 240);
  overflow-x: hidden;
  padding-top: 10px;
  border-width: medium;
  box-shadow: 5px 5px 6px grey;
`;



class SideNav extends React.Component {
    render() {
        return (
        <StyledSideNav></StyledSideNav>
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