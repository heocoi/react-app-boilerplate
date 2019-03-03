// @flow

import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled, { keyframes } from "styled-components";
import { add, increment } from "../../redux/modules/counter";
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

function Homepage({ counter, onIncrement }) {
  return (
    <div>
      <StyledHeader>
        <Logo src={logo} alt="logo" />
        <h4>
          App version: {process.env.REACT_APP_VERSION} ({process.env.NODE_ENV})
        </h4>
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

        <p>
          <b>Redux example</b> <br />
          <b>Counter</b>: {counter} &nbsp;&nbsp;
          <button onClick={() => onIncrement()}>Increment</button>
        </p>
      </StyledHeader>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  // ... computed data from state and optionally ownProps
  counter: state.counter
});

const mapDispatchToProps = dispatch => ({
  // ... normally is an object full of action creators
  onIncrement: bindActionCreators(increment, dispatch),
  onAdd: bindActionCreators(add, dispatch)
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
