import React from "react";
import styled from "styled-components";
import { useHistory } from 'react-router-dom';


const Headerd = styled.div`
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


function Header() {
    


  const history = useHistory()
  
  const goToHome = ()=>{
    history.push('/')
  }

    return (

    <Headerd>
        <Logo onClick={goToHome}>
            <Amarelo>L</Amarelo><Branco>abeX</Branco>
        </Logo>
    </Headerd>

    )
}
export default Header;