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

class Etapa1 extends React.Component{

    render(){

    
    return(
        
        <Corpo>
            <GlobalStyle/>
            <h1>
            ETAPA 1. DADOS GERAIS
            </h1>
            <div>
                <p>1. Qual o seu nome?</p>
                <input></input>
            </div>
            <div>
                <p>2. Qual sua idade?</p>
                <input></input>
            </div>
            <div>
                <p>3. Qual seu email?</p>
                <input></input>
            </div>
            <div>
                <p>4. Qual a sua escolaridade?</p>
                <select>
                    <option value='Ensino médio incompleto'>Ensino médio incompleto</option>
                    <option value='Ensino médio completo'>Ensino médio completo</option>
                    <option value='Ensino superior incompleto'>Ensino superior incompleto</option>
                    <option value='Ensino superior completo'>Ensino superior completo</option>
                </select>
                <br/>
            </div>

        </Corpo>
    );
}
}
export default Etapa1