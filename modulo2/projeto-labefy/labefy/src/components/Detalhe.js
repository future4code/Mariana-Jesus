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
        playlists: [],
        playlistSelecionada: ''
    }

    // componentDidMount() {
    //     this.getAllPlaylists();
    // }

    // getAllPlaylists = () => {
    //     axios
    //         .get(
    //             "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
    //             {
    //                 headers: {
    //                     Authorization: "mariana-jesus-carver"
    //                 }
    //             }
    //         )
    //         .then((resposta) => {
    //             this.setState({ playlists: resposta.data.result.list });
    //         })
    //         .catch((err) => {
    //             alert("Erro ao carregar");
    //         });
    // };



    // telaDaPlaylistSelecionada = async (playlist) =>{

    //     const dadosDaPlaylist = await this.pegarDadosDaPlaylist(playlist)
    //     this.setState({ playlistSelecionada: dadosDaPlaylist })
    // }  

    // getPlaylistTracks = async (playlist) => {
    //     const response = await axios.all([
    //         axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${playlist.name}`, {
    //             headers: {
    //                 "Authorization": 'mariana-jesus-carver'
    //             }
    //         }),
    //         axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlist.id}/tracks`, {
    //             headers: {
    //                 "Authorization": 'mariana-jesus-carver'
    //             }
    //         })
    //     ]).then(axios.spread((response1, response2) => {
    //         let responseResult = response1.data.result.playlist
    //         responseResult.tracks = response2.data.result.tracks
    //         let resultadoFinal = responseResult
    //         return resultadoFinal
    //     }))
    //     return response
    // }

            // .then((resposta, resposta1) => {
            //     this.getAllPlaylists();
            //     console.log(resposta.data.result.playlist)
            //     console.log(resposta1.data.result.trucks)
            // })
//             .catch((err) => {
//     alert("Erro ao carregar");

// });
//     };

render() {
    const listaPlaylists = this.state.playlists.map((playlist) => {
        return (
            <Card key={playlist.id} onClick={() => this.getPlaylistTracks(playlist.id)}>
                {playlist.name}

            </Card>
        );
    });
    console.log(this.listaPlaylists)

    return (
        <div>

            <button onClick={this.props.irParaPlaylists}>Ir Para Playlists</button>
            {listaPlaylists}

        </div>
    )
}
}