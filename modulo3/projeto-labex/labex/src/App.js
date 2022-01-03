import './App.css';
import React from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import Router from './Route/Router'







const GlobalStyle = createGlobalStyle`
  
    margin: 0;
    padding: 0;
  
`

function App() {
 

  return (
    <div>
    <GlobalStyle/>
    <Router/>
    </div>
  );
}

export default App;
