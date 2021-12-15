import React from 'react'
import Router from './Router/Router';
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  
    margin: 0;
    padding: 0;
`

function App() {
  return (
    <div >
    <GlobalStyle/>
    <Router/>
      Oi
    </div>
  );
}

export default App;
