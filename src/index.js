// @flow
import React from "react";
import { Helmet } from "react-helmet";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import configureAppStore from "./redux/configureStore";
import { Provider } from "react-redux";
const store = configureAppStore();

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`;

const renderApp = () => {
  const root = document.getElementById("root");
  if (root !== null) {
    ReactDOM.render(
      <Router>
        <Provider store={store}>
          <Helmet>
            <title>App Title</title>
          </Helmet>
          <GlobalStyle />
          <App />
        </Provider>
      </Router>,
      root
    );
  }
};
renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
