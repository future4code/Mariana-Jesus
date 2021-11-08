import React from 'react'
 import styled from 'styled-components'
 import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
    }
`

const Corpo = styled.div`
    margin: auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

class Etapa3 extends React.Component{

    render(){

    
    return(
        
        <Corpo>
            <GlobalStyle/>
            <h1>
            O FORMULÁRIO ACABOU
            </h1>
            <p>Muito obrigado por participar! Entraremos em contato!</p>
                <br/>
        </Corpo>
    );
}
}
export default Etapa3