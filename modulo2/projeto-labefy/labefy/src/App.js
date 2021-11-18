import React from "react"
import Detalhe from "./components/Detalhe";
import Playlists from './components/Playlists'

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
      <div className="App">
        {this.escolheTela()}
      </div>
    );
  }
}