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
            ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO
            </h1>
            <div>
                <p>5. Porque você não terminou um curso de graduação?</p>
                <input></input>
            </div>
            <div>
                <p>6. Você fez algum curso complementar?</p>
                <select>
                    <option value='Nenhum'>Nenhum</option>
                    <option value='Curso técnico'>Curso técnico</option>
                    <option value='Curso de inglês'>Curso de inglês</option>
                </select>
            </div>
                <br/>
            

        </Corpo>
    );
}
}
export default Etapa3