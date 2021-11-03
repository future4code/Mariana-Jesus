import React from 'react';
import styled from 'styled-components'

const EstilizandoCardPequeno = styled.div`
  display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 10px;
    margin: 10px auto;
    height: 70px;
    width: 550px;

    img{
      width: 35px;
    height: 35px;
    }

    div{
      display: flex;
      align-items: center;
      padding: 8px;
    }
`


function CardPequeno(props) {
    return (
        <EstilizandoCardPequeno>
            <img src={props.imagem}/>
            <div>
                <p>{ props.texto}</p>
            </div>
        </EstilizandoCardPequeno>
    )
}

export default CardPequeno;