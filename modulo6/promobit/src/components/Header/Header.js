import React from 'react'
import Logo from '../../image/Vector.png'
import styled from 'styled-components'


const Div = styled.div`
    background-color: #5C16C5;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
`



export default function Header() {
  return (
    <Div>
        <img src={Logo}></img>
    </Div>
  )
}
