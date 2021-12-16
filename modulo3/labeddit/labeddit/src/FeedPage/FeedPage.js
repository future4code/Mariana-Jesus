import React from "react"
import styled from "styled-components"
import {useHistory} from 'react-router-dom'
import axios from "axios"
import {Url} from '../constants/constants'
import {useState, useEffect} from 'react'
import useForm from "../hooks/useForm"
import Post from '../PostPage/Post'
import useRequestData from "../hooks/useRequestData"

const Card = styled.div`
    border:1px solid;
    width: 50%;
    height: auto;
`

const Curte = styled.div`
    display: flex;
`

function FeedPage(){
    const [post, setPost] = useState([])
    useEffect(()=>{
        getPost()
    }, [post.length])

    const {formulario, onChange, limpa} = useForm({title:'', body:''})
    

    const history = useHistory()
    const goToDetail = (id)=>{
        history.push(`/login/${id}`)
    }
    
    const token = localStorage.getItem('token')

   

    //POST

    const getPost = ()=>{
        axios.get(`${Url}/posts`, {
            headers:{
                Authorization: token
            }
        }).then(res =>{
            console.log(res.data)
            setPost(res.data)
        }).catch(err =>{
            console.log(err.response)
        })
    }

    // const getPost = useRequestData([], `${Url}/posts`)




    const createPost = (e, id)=>{
        e.preventDefault()

        axios.post(`${Url}/posts`, formulario, {
            headers:{
                Authorization: token
            }
        }).then(res =>{
            alert('Postado')
            console.log(res.data)
            getPost()
            limpa()
        }).catch(err =>{
            console.log(err.response)
        })
    }






    //VOTOS

    const createVote = (id)=>{
        let body = {
            "direction": +1
        }
        axios.post(`${Url}/posts/${id}/votes`, body, {
            headers:{
                Authorization: token
            }
        }).then(res =>{
            console.log(res.data)
        }).catch(err =>{
            console.log(err.response)
        })
    }


    const changeVote = (id)=>{
        let body = {
            "direction": -1
        }
        axios.put(`${Url}/posts/${id}/votes`, body, {
            headers:{
                Authorization: token
            }
        }).then(res =>{
            console.log(res.data)
        }).catch(err =>{
            console.log(err.response)
        })
    }


    const deleteVote = (id)=>{
        axios.delete(`${Url}/posts/${id}/votes`, {
            headers:{
                Authorization: token
            }
        }).then(res =>{
            console.log(res.data)
            alert('Deu certo')
        }).catch(err =>{
            console.log(err.response)
        })
    }


    

    const copia = post.map((posts)=>{
        return(
            <>
            <Card key={posts.id} id={posts.id} >
            <p>{posts.username}</p>
            <p>{posts.title}</p>
                <p>{posts.body}</p>
                <Curte>
                <button onClick={()=> createVote(posts.id)}>Curtir</button>
                <p>
                {posts.voteSum}</p>
                
                <button onClick={()=> changeVote(posts.id)}>Descurtir</button>
                </Curte>
                <p>{posts.commentCount}Comentários</p>
                </Card>
                <button onClick={()=> goToDetail(posts.id)}>Ver detalhes</button>
            </>
        )
    })


    // const envia = post.map((posts) =>{
    //     <Post
    //         key={posts.id}
    //         username={posts.username}
    //         body={posts.body}
    //         voteSum={posts.voteSum}
    //         commentCount={posts.commentCount}
    //     />
    // })

    const postCards = post.map((posts) => {
        return (
            <Post
                key={posts.id}
                title={posts.title}
                body={posts.body}
                commentCount={posts.commentCount}
                voteSum={posts.voteSum}
                userVote={posts.userVote}
                username={posts.username}
                createdAt={posts.createdAt}
                onClick={() => goToDetail(posts.id)}
                />
        )
    })

    return(
        <div>
            <h1>Feed</h1>
            <form onSubmit={createPost}>
                <input
                    placeholder="Título"
                    name="title"
                    type={'text'}
                    onChange={onChange}
                    value={formulario.title}
                    require

                />
                <input
                    placeholder="Decrição"
                    name="body"
                    onChange={onChange}
                    type={'text'}
                    value={formulario.body}
                    required
                />
                <button type="submit">Entrar</button>
                
            </form>
            {copia}
            {/* {envia} */}
            
        </div>
    )
}
export default FeedPage