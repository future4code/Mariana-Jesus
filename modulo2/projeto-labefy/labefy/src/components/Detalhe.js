import React from "react";
import axios from "axios";
import styled from "styled-components";

const Card = styled.div`
    /* border: 1px solid; */
    box-shadow: 0 0 1em #685B7D;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin: 10px;
    width: 250px;
    height: 220px;
    justify-content: space-between;
    align-items: center;
    border-radius: 5px;

input{
    height: 20px;
    width: 90%;
    background: rgba(0,0,0,0.3);
    /* background-color: #51485F; */
    border-radius: 5px;
    border-style: hidden;
}

button{
    width: 60%;
    background: rgba(0,0,0,0.1);
    border-style: hidden;
    border-radius: 3px;
    cursor: pointer;
}

h2{
    font-family: Arial, Helvetica, sans-serif;
    padding-top: 10px;
}
`

const Play = styled.div`
     box-shadow: 0 0 1em #685B7D;
    display: flex;
    flex-direction: column;
    width: 92%;
    margin: 10px;
    align-items: center;
    height: 100px;

audio{
    width: 230px;
    height: 30px;
}

button{
    width: 70%;
    background-color: #51485F;
    border-radius: 5px;
    border-style: hidden;
    
}
`


const Main = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Pai = styled.div`
    display: flex;
    justify-content: space-around;
`

const DetalheCard = styled.div`
    display: flex;
    flex-direction: column;
`


export default class Detalhe extends React.Component {
    state = {
        nome: '',
        artista: '',
        url: '',
        playlists: [],
        tracks: [],
        playListId:''
    }

//  FUNÇÃO INPUT
    inputNome = (event) => {
        this.setState({ nome: event.target.value });
    };
    inputArtista = (event) => {
        this.setState({ artista: event.target.value });
    };
    inputUrl = (event) => {
        this.setState({ url: event.target.value });
    };


    //PLAYLISTS ATUALIZADAS
    componentDidMount() {
        this.getAllPlaylists();
    }


    getAllPlaylists = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios
            .get(
                url,
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



    //ADIÇÃO DE MÚSICAS NA PLAYLIST

    addTrackToPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        const body = {
            name: this.state.nome,
            artist: this.state.artista,
            url: this.state.url
        };

        axios
            .post(
                url, body,
                {
                    headers: {
                        Authorization: "mariana-jesus-carver"
                    }
                })
            .then((resposta) => {
                this.setState({ nome: "", artista: '', url: '' });
                console.log("feito");
                this.getAllPlaylists()
            })
            .catch((error) => {
                alert(error.response.data);
                console.log(error.response.data)
            });
    };


    //MÚSICAS DAS PLAYLISTS


    getPlaylistTracks = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`

        axios.get(url, {
            headers: {
                Authorization: "mariana-jesus-carver"
            }
        })
            .then((resposta) => {

                this.setState({ tracks: resposta.data.result.tracks, playListId: id })
                console.log(this.state.tracks)
                
            })
            .catch((err) => {
                console.log("deu errado", err.response.data)
            })
    }


//DELETAR MÚSICAS DA PLAYLIST


removeTrackFromPlaylist = (id) => {
        axios
            .delete(
                `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playListId}/tracks/${id}`,
                {
                    headers: {
                        Authorization: "mariana-jesus-carver"
                    }
                }
            )
            .then((resposta) => {
                alert("Música deletada");
                this.getPlaylistTracks(this.state.playListId);
                
                console.log(resposta.data)
            })
            .catch((err) => {
                console.log(err.response)
            });
    };
    


    render() {
        const listaPlaylists = this.state.playlists.map((playlist) => {
            return (
                
                <Card key={playlist.id}>
                    <h2>{playlist.name}</h2>

                    <input
                        placeholder="Nome"
                        value={this.state.nome}
                        onChange={this.inputNome}
                    />
                    <input
                        placeholder="Artista"
                        value={this.state.artista}
                        onChange={this.inputArtista}
                    />
                    <input
                        placeholder="Url"
                        value={this.state.url}
                        onChange={this.inputUrl}
                    />


                    <button onClick={()=> {this.addTrackToPlaylist(playlist.id)}}>Cadastrar música</button>

                    <button onClick={()=> {this.getPlaylistTracks(playlist.id)}}>Ver detalhe</button>
                </Card>
                
            );
        });

        const playlistTracks = this.state.tracks.map((track) => {
            return (
                <Play key={track.id}>
                    <h3>{track.name}</h3>
                    <p>Artista: {track.artist}</p>
                    <audio controls='controls'>
                        <source src={track.url} type='audio/mp3' />
                    </audio>
                    <button onClick={() => this.removeTrackFromPlaylist(track.id)}>Excluir Música</button>

                </Play>
            )
        })
        console.log(this.listaPlaylists)
        console.log(this.playlistTracks)
        // console.log('tracks', this.addTrackToPlaylist)

        return (
            <Pai>
                <Main>
                {listaPlaylists}
                </Main>
                <DetalheCard>
                {playlistTracks}
                </DetalheCard>
                
                {/* <button onClick={this.props.irParaPlaylists}>Ir Para Playlists</button> */}




            </Pai>
        )
    }
}