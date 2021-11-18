import React from "react";
import axios from "axios";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid;
  padding: 10px;
  margin: 10px;
  justify-content: space-between;
  display: flex;
`;

export default class Playlists extends React.Component {
    state = {
        nome: '',
        playlists: []

    }

    inputNome = (event) => {
        this.setState({ nome: event.target.value });
    };

    createPlaylist = () => {
        const body = {
            name: this.state.nome,
        };

        axios
            .post(
                "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
                body,
                {
                    headers: {
                        Authorization: "mariana-jesus-carver"
                    }
                }
            )
            .then((resposta) => {
                this.setState({ nome: "" });
                console.log("feito");
            })
            .catch((error) => {
                alert(error.response.data);
                console.log(error)
            });
    };

    //LISTAGEM


    componentDidMount() {
        this.getAllPlaylists();
    }

    getAllPlaylists = () => {
        axios
            .get(
                "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
                {
                    headers: {
                        Authorization: "mariana-jesus-carver"
                    }
                }
            )
            .then((resposta) => {
                this.setState({ playlists: resposta.data.result.list });
            })
            .catch((err) => {
                alert("Erro ao carregar");
            });
    };


    //DELETAR

    deletePlaylist = (id) => {
        axios
            .delete(
                `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
                {
                    headers: {
                        Authorization: "mariana-jesus-carver"
                    }
                }
            )
            .then((resposta) => {
                alert("Usuário deletado");
                this.getAllPlaylists();
            })
            .catch((err) => {
                alert("Erro ao deletar");
            });
    };

    render() {

        const listaPlaylists = this.state.playlists.map((playlist) => {
            return (
                <Card key={playlist.id}>
                    {playlist.name}
                    <button onClick={() => this.deletePlaylist(playlist.id)}>X</button>
                </Card>
            );
        });
console.log(listaPlaylists)
        return (
            <div>
                <button onClick={this.props.irParaDetalhe}>Ir Para Detalhes</button>

                <input
                    placeholder="Nome"
                    value={this.state.nome}
                    onChange={this.inputNome}
                />
                <button onClick={this.createPlaylist}>Cadastrar</button>
                {listaPlaylists}
            </div>
        )
    }
}