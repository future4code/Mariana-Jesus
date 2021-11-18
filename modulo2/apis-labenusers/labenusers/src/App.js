
import React from "react";
import axios from "axios";
import ListaUsuarios from "./components/ListaUsuarios";
import CadastroUsuarios from './components/CadastroUsuarios'

export default class App extends React.Component {
  state = {
    telaAtual: 'cadastro'
  }

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case 'cadastro':
        return <ListaUsuarios irParaLista={this.irParaLista} />;
      case 'lista':
        return <CadastroUsuarios irParaCadastro={this.irParaCadastro} />;
      default:
        return <div>Erro!</div>
    }
  }

  irParaCadastro = () => {
    this.setState({ telaAtual: 'cadastro' })
  }

  irParaLista = () => {
    this.setState({ telaAtual: 'lista' })
  }


  render() {
    return (
      <div className="App">
        {this.escolheTela()}
      </div>
    );
  }
}
