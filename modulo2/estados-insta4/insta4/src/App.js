import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`


class App extends React.Component {

  state = {
    listaDePosts: [
      {
        nomeUsuario: 'mari2000',
        fotoUsuario: 'https://picsum.photos/50/50',
        fotoPost: 'https://picsum.photos/200/150'
      },
    
      {
        nomeUsuario: 'blogueirinha',
        fotoUsuario: 'https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY',
        fotoPost: 'https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y'
      },
    
      {
        nomeUsuario: 'marilinda',
        fotoUsuario: 'https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk',
        fotoPost: 'https://i.picsum.photos/id/1015/6000/4000.jpg?hmac=aHjb0fRa1t14DTIEBcoC12c5rAXOSwnVlaA5ujxPQ0I'
      }
    ]
    
  }

  adicionaPost = (e)=>{
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,

      fotoUsuario: this.state.valorInputFoto,

      fotoPost: this.state.valorInputPost
    }

    const novosPosts = [...this.state.listaDePosts, novoPost]

    this.setState({listaDePosts: novosPosts})
    this.setState({valorInputFoto:"", valorInputNome:"", valorInputPost:""})
  }

  onChangeInputNome =(event)=>{
    this.setState({valorInputNome: event.target.value})
  }

  onChangeInputFoto=(event)=>{
    this.setState({valorInputFoto: event.target.value})
  }

  onChangeInputPost=(event)=>{
    this.setState({valorInputPost: event.target.value})
  }


  render() {

    const posts = this.state.listaDePosts.map((post) => {
      return <Post
        nomeUsuario=
        {post.nomeUsuario}
        fotoUsuario=
        {post.fotoUsuario} 
        fotoPost=
      {post.fotoPost}
      />
    })

    return (
      <MainContainer>
        {posts}
        
        <input placeholder="Nome Usuário"
        value={this.state.valorInputNome}
        onChange={this.onChangeInputNome}
        />
        <input placeholder="Foto Usuário"
        value={this.state.valorInputFoto}
        onChange={this.onChangeInputFoto}
        />
        <input placeholder="Foto Post"
        value={this.state.valorInputPost}
        onChange={this.onChangeInputPost}
        />
        <button onClick={this.adicionaPost}>Enviar</button>
        
      </MainContainer>
    );
  }
}

export default App;
