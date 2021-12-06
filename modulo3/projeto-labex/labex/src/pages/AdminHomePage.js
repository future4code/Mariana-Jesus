import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  /* position: relative; */
  bottom: -80px;
  margin: 0 auto;
  width: 50%;
  height: 400px;
  border-radius: 50px;
  background-color: #FFD523;
  margin-top: 70px;
`

const Text = styled.div`
  margin: 20px;
  padding-top: 10px;
  font-size: large;
`
const Titulo = styled.div`
  padding-top: 25px;
  font-size: large;
`

const ButtonAd = styled.button`
  width: 35%;
  height: 40px;
  margin-top: 15px;
  cursor: pointer;
  font-size: large;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-radius: 10px;
  background-color: #091353;
  border-style: hidden;
  color: #FFD523;
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
  margin: 0 auto;
  margin-top: 10px;
  align-items: center;
  
`

// const Div = styled.div`
//   display: flex;
//   flex-direction: column;
// `


function AdminHomePage() {
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
      <ButtonAd>Ver viagens</ButtonAd>
      <ButtonAd>Administração</ButtonAd>
    </Buttons>
    </div>
  );
}

export default AdminHomePage;