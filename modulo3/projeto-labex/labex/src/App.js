import './App.css';
import React from 'react';
import Form from './pages/ApplicationFormPage'
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components'
import Home from './pages/AdminHomePage'




const GlobalStyle = createGlobalStyle`
  
    margin: 0;
    padding: 0;
  
`

const Header = styled.div`
  background-color: #091353;
  display: flex;
  height: 70px;
  align-items: center;
  
  
`

const Logo = styled.button`
  background-color: #090343;
  display: flex;
  align-items: center;
  height: 100%;
  width: 160px;
  border: hidden;
  cursor: pointer;
`

const Amarelo = styled.p`
  color: #FFD523;
  font-size: 40px;
  margin-left: 15px;
`

const Branco = styled.p`
  color: white;
  font-size: 40px;
`

function App() {
  return (
    
    <div className="App">
    <GlobalStyle/>
    <Header>
    <Logo>
    <Amarelo>L</Amarelo><Branco>abeX</Branco>
    </Logo>
    </Header>

      <Home/>
      {/* <Form/> */}
      
    </div>
  );
}

export default App;
