import Etapa1 from './components/Etapa1'
import Etapa2 from '../src/components/Etapa2'
import Etapa3 from '../src/components/Etapa3'
import Final from '../src/components/Final'
import './App.css';
import React from 'react'
 import styled from 'styled-components'

const Button = styled.div`
  margin: auto 0;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`


export default class App extends React.Component 
{

  state = {
    etapa: 1
  }

  renderizaEtapa = () =>{
    switch(this.state.etapa){
      case 1:
        return <Etapa1/>

      case 2:
        return <Etapa2/>

      case 3:
        return <Etapa3/>

      case 4:
        return <Final/>

      default:
        <p>Volte tudo!</p>
    }
  }

  irParaProximaEtapa = () =>{
    this.setState({etapa: this.state.etapa +1})
  }

  render(){
  return (
    <div >
      {this.renderizaEtapa()}
      <Button>
      {this.state.etapa < 4 && <button onClick={this.irParaProximaEtapa}>Próxima etapa</button>}
      </Button>
    </div>
  );
}
}


