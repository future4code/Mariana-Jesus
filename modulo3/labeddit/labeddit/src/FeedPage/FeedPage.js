import React from "react"
import styled from "styled-components"
import {useHistory} from 'react-router-dom'
import axios from "axios"
import {Url} from '../constants/constants'
import {useState, useEffect} from 'react'
import useForm from "../hooks/useForm"


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

   

    const getPost = ()=>{
        axios.get(`${Url}/posts`, {
            headers:{
                Authorization: localStorage.getItem('token')
            }
        }).then(res =>{
            console.log(res.data)
            setPost(res.data)
        }).catch(err =>{
            console.log(err.response)
        })
    }


    //VOTOS

    const createVote = (id)=>{
        let body = {
            direction: 1
        }
        axios.post(`${Url}/posts/${id}/votes`, body, {
            headers:{
                Authorization: localStorage.getItem('token')
            }
        }).then(res =>{
            console.log(res.data)
        }).catch(err =>{
            console.log(err.response)
        })
    }


    const changeVote = (id)=>{
        let body = {
            direction: -1
        }
        axios.put(`${Url}/posts/${id}/votes`, body, {
            headers:{
                Authorization: localStorage.getItem('token')
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
                Authorization: localStorage.getItem('token')
            }
        }).then(res =>{
            console.log(res.data)
            alert('Deu certo')
        }).catch(err =>{
            console.log(err.response)
        })
    }


    const createPost = (e, id)=>{
        e.preventDefault()

        axios.post(`${Url}/posts`, formulario, {
            headers:{
                Authorization: localStorage.getItem('token')
            }
        }).then(res =>{
            alert('Postado')
            console.log(res.data)
            limpa()
        }).catch(err =>{
            console.log(err.response)
        })
    }


    const copia = post.map((posts)=>{
        return(
            <Card key={posts.id} id={posts.id}>
            <div onClick={()=> goToDetail(posts.id)}>
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
                </div>
                {/* <button onClick={()=>}></button> */}
            </Card>
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
        </div>
    )
}
export default FeedPage