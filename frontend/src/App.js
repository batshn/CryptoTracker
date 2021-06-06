import React from 'react'
import Layout from './containers/layout'
import {ThemeProvider} from 'styled-components'
import {GlobalStyles} from './styles/global'
import { lightTheme} from './styles/theme'

function App () {
  return (
    <ThemeProvider theme ={lightTheme}>
      <GlobalStyles/>
     <Layout/>      
    </ThemeProvider>
  );
}

export default App;
