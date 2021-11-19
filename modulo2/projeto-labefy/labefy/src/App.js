import React from "react"
import Detalhe from "./components/Detalhe";
import Playlists from './components/Playlists';
import styled from "styled-components";


const Div = styled.div`
  display: flex;
  height: 100vh;
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
      <Div>
        <nav>
          <Playlists/>
        </nav>
        <main>
          <Detalhe/>
        </main>
        {/* {this.escolheTela()} */}
      </Div>
    );
  }
}