import React from 'react'
import Layout from './containers/layout'
import {ThemeProvider} from 'styled-components'
import {GlobalStyles} from './styles/global'
import { lightTheme} from './styles/theme'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './components/Main/Main'
import Tracker from './components/LiveTracker/Tracker'

function App () {
  return (
    <ThemeProvider theme ={lightTheme}>
      <GlobalStyles/>
      <Router>
      <Layout />
          <Switch>
            <Route path="/" component={Main} exact />
            <Route path="/live" component={Tracker} />
          </Switch>
      </Router>


    </ThemeProvider>
  );
}

export default App;
