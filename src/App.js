import { createMuiTheme } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import './App.css';
import logo from './logo.svg';

// using createMuiTheme from @material-ui/core to create theme props
// then, pass these props to ThemeProvider of styled-components
const theme = createMuiTheme({ mode: 'light' });

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
