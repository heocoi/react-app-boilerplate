// @flow

import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import logo from "../../statics/images/logo.svg";

const logoSpin = keyframes`
    from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Logo = styled.img`
  animation: ${logoSpin} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const StyledLink = styled.a`
  color: #61dafb;
`;

type Props = {};

class Homepage extends Component<Props> {
  render() {
    return (
      <div>
        <StyledHeader>
          <Logo src={logo} alt="logo" />
          <h3>
            App version: {process.env.REACT_APP_VERSION} ({process.env.NODE_ENV}
            )
          </h3>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <StyledLink
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </StyledLink>
        </StyledHeader>
      </div>
    );
  }
}

export default Homepage;
