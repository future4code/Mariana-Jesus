import React from "react"
import Detalhe from "./components/Detalhe";
import Playlists from './components/Playlists';
import styled, { createGlobalStyle } from "styled-components";



const Div = styled.div`
  display: flex;
 
  /* background: #bdc3c7; 
  background: -webkit-linear-gradient(to top, #bdc3c7, #2c3e50); 
  background: linear-gradient(to top, #bdc3c7, #2c3e50);  */

  background: #1F1C2C;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #928DAB, #1F1C2C);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #928DAB, #1F1C2C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

`

const Nav = styled.nav`
  max-height: 94vh;
  overflow-y: auto;
  width: 840px;
  background-color: #51485F ;
`

const Main = styled.main`
  display: flex;
  flex-direction: row;
  
`

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  
}
`


export default class App extends React.Component {
  state = {
    telaAtual: 'playlists'
  }

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case 'detalhe':
        return <Detalhe irParaPlaylists={this.irParaPlaylists} />;
      case 'playlists':
        return <Playlists irParaDetalhe={this.irParaDetalhe} />;
      default:
        return <div>Erro!</div>
    }
  }

  irParaDetalhe = () => {
    this.setState({ telaAtual: 'detalhe' })
  }

  irParaPlaylists = () => {
    this.setState({ telaAtual: 'playlists' })
  }


  render() {
    return (
      <div>
        <GlobalStyle/>
      <Div>
        
        <Nav>
          <Playlists/>
        </Nav>
        <Main>
          <Detalhe/>
        </Main>
        {/* {this.escolheTela()} */}
      </Div>
      </div>
    );
  }
}