import React from "react";
import axios from "axios";
import styled from "styled-components";


const Card = styled.div`
  border: 1px solid;
  padding: 10px;
  margin: 10px;
  justify-content: space-between;
  display: flex;
`
export default class ListaUsuarios extends React.Component {
    state = {
        usuarios: []
    }


    componentDidMount() {
        this.pegarUsuarios();
    }

    pegarUsuarios = () => {
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
            })
            .catch((err) => {
                alert("Erro ao carregar");
            });
    };


    deletarUsuario = (id) => {
        axios.delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
            headers: {
                Authorization: 'mariana-jesus-carver'
            }
        }
        ).then((resposta) => {
            alert('Usuário deletado')
            this.pegarUsuarios()
        }).catch((err) => {
            alert('Erro ao deletar')

        })
    }


    render() {
        const listaUsuarios = this.state.usuarios.map((usuario) => {
        return <Card key={usuario.id}>{usuario.name}
            <button onClick={() => this.deletarUsuario(usuario.id)}>X</button></Card>
    })
        return (
            <div>
                <button onClick={this.props.irParaCadastro}>
                    Cadastro de Usuários
                </button>
                {listaUsuarios}
                <h2>Lista</h2>
            </div>
        );
    }
}
