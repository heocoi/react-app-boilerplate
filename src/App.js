import { createMuiTheme } from '@material-ui/core/styles';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Homepage from './screens/Homepage';

// using createMuiTheme from @material-ui/core to create theme props
// then, pass these props to ThemeProvider of styled-components
const theme = createMuiTheme({
  mode: 'light',
  typography: {
    useNextVariants: true
  }
});

// router config
const routes = [
  {
    path: '/',
    exact: true,
    component: Homepage
  }
];

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

const MainWrapper = styled.div`
  text-align: 'center';
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <MainWrapper>
          <React.Fragment>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </React.Fragment>
        </MainWrapper>
      </ThemeProvider>
    );
  }
}

export default App;
