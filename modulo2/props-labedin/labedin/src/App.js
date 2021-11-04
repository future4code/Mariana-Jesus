import React from 'react';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';

import ImagemButton from './components/ImagemButton/ImagemButton';
import imagemMe from './components/imagem.png'
import styled, { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
  margin: 0;
  box-sizing: border-box;
  }
`

const EstilizandoApp = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

.page-section-container{
  width: 40vw;
  margin: 10px 0;
}

h2{
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
`


function App() {
  return (
    <EstilizandoApp>
      <GlobalStyle/>
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={imagemMe} 
          nome="Mariana" 
          descricao="Oi, eu sou a Mariana. Sou estudante de desenvolvimento full-stack na Labenu. Tenho experiência na área educacional e administrativa, tendo aulixiado em sala de aula de uma escola infantil assim como trabalhado como auxiliar de secretaria."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
      
    <CardPequeno
      imagem ="https://cdn-icons-png.flaticon.com/512/25/25694.png"
      texto=  "Email: marialgo@gmail.com"
      />
      </div>
      <div className="page-section-container">
      
    <CardPequeno
    imagem="https://cdn-icons-png.flaticon.com/512/25/25236.png"
      texto="Endereço: Rua Labenu"
      />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </EstilizandoApp>
  );
}

export default App;
