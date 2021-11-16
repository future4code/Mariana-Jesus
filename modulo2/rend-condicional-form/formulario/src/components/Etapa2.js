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

class Etapa2 extends React.Component{

    render(){

    
    return(
        
        <Corpo>
            <GlobalStyle/>
            <h1>
            ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR
            </h1>
            <div>
                <p>5. Qual curso?</p>
                <input></input>
            </div>
            <div>
                <p>6. Qual a unidade de ensino?</p>
                <input></input>
            </div>
                <br/>
            

        </Corpo>
    );
}
}
export default Etapa2