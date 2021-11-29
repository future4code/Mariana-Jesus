import React from "react";
import axios from "axios";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid;
  padding: 10px;
  margin: 10px;
  justify-content: space-between;
  display: flex;
  border-radius: 8px;
`;

const Cadastro = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin: 20px 0;

img{
    width: 25px;
    height: 25px;
}
h2{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 22px;
}
`

const Input = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    align-items: center;
    margin-bottom: 5px;
    


input{
    width: 90%;
    height: 25px;
    background-color: #685B7D;
    border-style: hidden;
    border-radius: 5px;
    margin-bottom: 10px;
}

button{
    width: 40%;
    height: 20px;
    background-color: #685B7D;
    border-radius: 5px;
    border-style: hidden;
    cursor: pointer;
    margin-bottom: 10px;
}
`

const Lista = styled.div`
    

    button{
        width: 20px;
        height: 20px;
        background-color: #54466A;
        border-style: none;
        cursor: pointer;
    }
    img{
        width: 18px;
        height: 18px;
    
    }
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    margin: 50px 0;
    width: 250px;
    justify-content: center;

    img{
        width: 30px;
        height: 30px;
    }

    h1{
        font-size: 35px;
    }
`


export default class Playlists extends React.Component {
    state = {
        nome: '',
        playlists: [],
        playListId:''

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
                this.getAllPlaylists()
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
                alert("Playlist deletada");
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
                    <button onClick={() => this.deletePlaylist(playlist.id)}><img src="https://cdn-icons-png.flaticon.com/512/60/60578.png"/></button>
                </Card>
            );
        });
console.log(listaPlaylists)
        return (
            <div>
                <Logo>
                    <img src='https://cdn-icons-png.flaticon.com/512/60/60813.png'/>
                    <h1>Labefy</h1>
                </Logo>
                

            <Cadastro>
                
                {/* <button onClick={this.props.irParaDetalhe}>Ir Para Detalhes</button> */}
                <img src='https://cdn-icons-png.flaticon.com/512/3486/3486511.png'/><h2>Criar playlist</h2>
                
                </Cadastro>
                
                <Input>
                <input
                    placeholder="Nome"
                    value={this.state.nome}
                    onChange={this.inputNome}
                />
                <button onClick={this.createPlaylist}>Cadastrar</button>
                </Input>
                <hr/>
                <Lista>
                {listaPlaylists}
                </Lista>
            </div>
        )
    }
}