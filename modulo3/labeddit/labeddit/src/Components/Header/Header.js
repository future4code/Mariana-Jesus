import React from "react";
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
import Imagem from '../Header/download.jpg'
import { Button, ButtonGroup } from '@chakra-ui/react'
import {useState} from 'react'


const Headerd = styled.div`
  background-color: #FDA65D;
  display: flex;
  height: 65px;
  align-items: center;
  justify-content: space-between;
  
  img{
      width: 70%;
       height: 70%;
       border-radius: 60%;
   }
`

const Button1 = styled.button`
  height: 100%;
  width: 15%;
  border: hidden;
  cursor: pointer;
  background-color: #FDA65D;
  color: white;

  @media(min-width: 800px){
    width: 10%;
    }
  `


function Header() {


  const token = localStorage.getItem('token')
  const [rightButton, setRightButton] = useState(token ? 'Logout' : 'Login')
  const history = useHistory()

  const goToHome = ()=>{
    history.push('/')
  }


    const goToLogin = ()=>{
        history.push(`/login`)
    }

  const logout = ()=>{
    localStorage.clear('token')
  }

  const buttonActive = ()=>{
    if(token){
      logout()
      setRightButton('Login')
      goToLogin(history)
    }else{
      goToLogin(history)
      setRightButton('Logout')
    }
  }

    return (

    <Headerd>
        <Button height={'100%'} 
        colorScheme='transparent' variant='solid' 
        onClick={goToHome}>
            
            <img src={Imagem} alt="logo"/>
            <h1>LabEddit</h1>
        </Button>
        <Button1 onClick={buttonActive}>{rightButton}</Button1>
    </Headerd>

    )
}
export default Header; 