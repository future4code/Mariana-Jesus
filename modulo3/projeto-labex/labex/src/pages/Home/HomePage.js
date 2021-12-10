import React from 'react';
import { useHistory } from 'react-router-dom';
import {Card, Text, Titulo, ButtonAd, Buttons} from './style'

function HomePage() {
  const history = useHistory()

const goToList = ()=>{
  history.push('/trips/list')
}

const goToLog = ()=>{
  history.push('/login')
}

  return (
    <div className="App">
      <Card>
        <Titulo>
          <h1>Venha ser voluntário nessa aventura!</h1>
        </Titulo>

        <Text>
          <p>A Labex foi fundada em 1976, em plena guerra fria, com o objetivo de trazer inovações tecnológicas e alcançar o nosso sistema solar. Você pode nos ajudar a realizar nosso objetivo, ao se voluntariar seu perfil será analisado por nossos treinadores e astronaltas. Sendo aprovado passará por um treinamento intensivo. </p>
          <p>E o melhor de tudo! Você escolhe o planeta e ainda recebe para viajar! </p>
          <p>Te espero no centro de treinamento.</p>
        </Text>
      </Card>


    <Buttons>
      <ButtonAd onClick={goToList}>Ver viagens</ButtonAd>
      <ButtonAd onClick={goToLog}>Administração</ButtonAd>
    </Buttons>
    </div>
  );
}

export default HomePage;