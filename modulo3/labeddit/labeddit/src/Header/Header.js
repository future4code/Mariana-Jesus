import React from "react";
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
import Imagem from '../Header/download.jpg'


const Headerd = styled.div`
  background-color: #FABB51;
  display: flex;
  height: 65px;
  align-items: center;
  
  
`

const Logo = styled.button`
  background-color: #FAEDC6;
  display: flex;
  align-items: center;
  height: 100%;
  width: 30%;
  border: hidden;
  cursor: pointer;

  img{
      width: 70%;
      height: 70%;
      border-radius: 50%;
  }
`


function Header() {



  const history = useHistory()

  const goToHome = ()=>{
    history.push('/')
  }

    return (

    <Headerd>
        <Logo onClick={goToHome}>
            
            <img src={Imagem} alt="logo"/>
            <p>Labeddit</p>
        </Logo>
    </Headerd>

    )
}
export default Header; 