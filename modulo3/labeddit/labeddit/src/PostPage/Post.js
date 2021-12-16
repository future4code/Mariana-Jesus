import React from "react"
import styled from "styled-components"
import axios from "axios"
import {Url} from '../constants/constants'
import {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import useForm from "../hooks/useForm"


const Card = styled.div`
border:1px solid;
width: 50%;
height: auto;
`

const Curte = styled.div`
    display: flex;
`

function PostPage(props){
    const [post, setPost] = useState([])
    const [detalhe, setDetalhe] = useState({})
    const params = useParams()
    const history = useHistory()
    const goBack = ()=>{
        history.goBack()
    }
    const token = localStorage.getItem('token')
    // const {key, username, body, voteSum, commentCount} = props

    const {formulario, onChange, limpa} = useForm({ body:''})

    useEffect(()=>{
        getComments()
    }, [post.length])
    

    const getComments = (id)=>{
        axios.get(`${Url}/posts/${params.id}/comments`, {
            headers:{
                Authorization: token
            }
        })
        .then(res =>{
            console.log(res.data)
            setPost(res.data)
            console.log(post)
        }).catch(err =>{
            console.log(err.response)
        })
    }


    const createComment = (e, id)=>{
        e.preventDefault()
        
        axios.post(`${Url}/posts/${params.id}/comments`, formulario, {
            headers:{
                Authorization: token
            }
        }).then(res =>{
            console.log(res.data)
            alert('Comentário criado')
            getComments()
        }).catch(err =>{
            console.log(err.response)
        })
    }



    const createVote = (id)=>{
        let body = {
            "direction": +1
        }
        axios.post(`${Url}/posts/${params.id}/votes`, body, {
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
        axios.put(`${Url}/posts/${params.id}/votes`, body, {
            headers:{
                Authorization: token
            }
        }).then(res =>{
            console.log(res.data)
        }).catch(err =>{
            console.log(err.response)
        })
    }



    const copia = post.map((posts)=>{
        return(
            <Card key={posts.id} id={posts.id}>
            
            <p>{posts.username}</p>
            <p>{posts.title}</p>
                <p>{posts.body}</p>
                <Curte>
                <button onClick={()=> createVote(posts.id)}>Curtir</button>
                <button onClick={()=> changeVote(posts.id)}>Descurtir</button>
                <p>
                {posts.voteSum}</p>
                </Curte>
                </Card>
        )})

    // const copia1 = post.map((posts)=>{
    //     return(
    //         <Card key={posts.id} id={posts.id}>
            
    //         <p>{posts.username}</p>
    //             <p>{posts.body}</p>
    //             <p>{posts.userVote}</p>
    //             <p>{posts.voteSum}</p>
    //             </Card>
    //     )})



    return(
        <div>
            <h1>Post</h1>
            {/* <div key={props.id}>
                <p>{props.username}</p>
                <p>{props.body}</p>
                <p>{props.voteSum}</p>
                <p>{props.commentCount}</p>
            </div> */}
            {/* {copia1} */}
            <form onSubmit={createComment}>
            <input
            placeholder="Comentário"
                    name="body"
                    type={'body'}
                    onChange={onChange}
                    value={formulario.body}
                    require/>
            <button type="submit">Postar</button>
            </form>
            {copia}
        </div>
    )
}
export default PostPage