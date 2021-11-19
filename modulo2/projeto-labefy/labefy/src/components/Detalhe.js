import React from "react";
import axios from "axios";
import styled from "styled-components";

const Card = styled.div`
    border: 1px solid;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin: 10px;
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
                    <p>{playlist.name}</p>

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
                <div key={track.id}>
                    <li>{track.name}</li>
                    <p>{track.artist}</p>
                    <button onClick={() => this.removeTrackFromPlaylist(track.id)}>X</button>
                    <audio controls='controls'>
                        <source src={track.url} type='audio/mp3' />
                       
                    </audio>

                </div>
            )
        })
        console.log(this.listaPlaylists)
        console.log(this.playlistTracks)
        // console.log('tracks', this.addTrackToPlaylist)

        return (
            <div>
                {listaPlaylists}
                {playlistTracks}

                <button onClick={this.props.irParaPlaylists}>Ir Para Playlists</button>




            </div>
        )
    }
}