import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Math.random(),
          texto: 'Lavar louça',
          completa: false
        },
        {
          id: Math.random(),
          texto: 'Fazer trilha',
          completa: true
        }
      ],
      inputValue: '',
      filtro: 'Completas'
    }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tarefas === this.state.tarefas){
      this.salvarLocalStorage()
      
    }
  };

  salvarLocalStorage = ()=>{
    localStorage.setItem('tarefas', JSON.stringify(this.state.tarefas))
   }

   componentDidMount() {
    this.buscarTarefas()
  
   };

   buscarTarefas =()=>{
    const tarefaStorage1 = localStorage.getItem('texto')
    const tarefaStorage2 = localStorage.getItem('id')
    const tarefaStorage3 = localStorage.getItem('completa')

    this.setState({
      texto: tarefaStorage1 || '',
      id: tarefaStorage2 || '',
      completa: tarefaStorage3 || ''
    })
  }

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    
    const novaTarefa = {
        id: Math.random(),
          texto: this.state.inputValue,
          completa: false
    }
    const copiaDoEstado = [
      ...this.state.tarefas, novaTarefa
    ]
    
    this.setState({tarefas: copiaDoEstado})
  }

  selectTarefa = (id) => {
    const copiaTarefa = this.state.tarefas.map(tarefa => {
      if(id === tarefa.id){
      const newTarefa = {
        ...tarefa,
        completa: !tarefa.completa
      }
      return newTarefa
      }else{
        return tarefa
      }
    })

    this.setState({tarefas: copiaTarefa})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
      
    })
    console.log(listaFiltrada)

    return (
      <div className="App">
        
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
          <button onClick={this.salvarLocalStorage}>Salvar</button>
          <button onClick={this.buscarTarefas}>Buscar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                key={tarefa.id}
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
