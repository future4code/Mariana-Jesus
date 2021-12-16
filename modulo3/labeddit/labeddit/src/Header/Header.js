import React from "react";
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
import Imagem from '../Header/download.jpg'
import { Button, ButtonGroup } from '@chakra-ui/react'


const Headerd = styled.div`
  background-color: #FDA65D;
  display: flex;
  height: 65px;
  align-items: center;
  
  img{
      width: 70%;
       height: 70%;
       border-radius: 60%;
   }
`

// const Button = styled.button`
//   background-color: #FAEDC6;
//   display: flex;
//   align-items: center;
//   height: 100%;
//   width: 30%;
//   border: hidden;
//   cursor: pointer;

//   img{
//       width: 70%;
//       height: 70%;
//       border-radius: 50%;
//   }
// `


function Header() {



  const history = useHistory()

  const goToHome = ()=>{
    history.push('/')
  }

    return (

    <Headerd>
        <Button height={'100%'} 
        colorScheme='transparent' variant='solid' 
        onClick={goToHome}>
            
            <img src={Imagem} alt="logo"/>
            <h1>LabEddit</h1>
        </Button>
    </Headerd>

    )
}
export default Header; 