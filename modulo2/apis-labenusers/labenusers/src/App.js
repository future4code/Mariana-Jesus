
import React from "react";
import axios from "axios";
import ListaUsuarios from "./components/ListaUsuarios";
import CadastroUsuarios from './components/CadastroUsuarios'

export default class App extends React.Component {
  state = {
    usuarios: [],
    inputNameValue: "",
    inputEmailValue: "",
    userId: "",
    pagina: true
  };

  componentDidMount = () => {
    this.getAllUsers();
  };

  getAllUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "mariana-jesus-carver"
          }
        }
      )
      .then((resposta) => {
        this.setState({ usuarios: resposta.data });
        console.log(resposta.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  createUser = () => {
    const body = {
      name: this.state.inputNameValue,
      email: this.state.inputEmailValue
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "mariana-jesus-carver"
          }
        }
      )
      .then((resposta) => {
        alert('Cadastro realizado com sucesso.')
        this.setState({ inputNameValue: "", inputEmailValue: "" });
        this.getAllUsers();
        console.log("feito");
      })
      .catch((error) => {
        alert('Erro ao cadastrar.')
        console.log(error.response.data);
      });
  };

  onChangeValueName = (event) => {
    this.setState({ inputNameValue: event.target.value });
  };
  onChangeValueEmail = (event) => {
    this.setState({ inputEmailValue: event.target.value });
  };

  mudarPagina=()=>{
    this.setState({pagina: !this.state.pagina})
  }
  
  deleteUsers = (event) => {
    const id=event.target.value
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
        headers: {
            Authorization: "mariana-jesus-carver"
        },
        data:{
          source: id
        }

    }).then((resposta) => {
      alert('Usuário excluído com sucesso.')
        console.log(resposta.data)
    }).catch((error) => {
      alert('Erro ao excluir.')
        console.log(error.response)
    })
}


  render() {
    const paginas = this.state.pagina ? <CadastroUsuarios
    createUser={this.createUser}
    onChangeValueName={this.onChangeValueName}
    onChangeValueEmail={this.onChangeValueEmail}/> :

    <ListaUsuarios deleteUsers = {this.deleteUsers}
        usuarios={this.state.usuarios}/>
    
    return (
      <div className="App">
        {paginas}
        <button onClick={this.mudarPagina}>{this.state.pagina ? 'Cadastro Usuários' : 'Lista Usuários'}</button>
      </div>
    );
  }
}
