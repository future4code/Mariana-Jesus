import React from "react"
import styled from "styled-components"
import axios from "axios"
import {Url} from '../constants/constants'
import {useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import useForm from "../hooks/useForm"


const Card = styled.div`
    width: 75%;
    height: auto;
    box-shadow: 0 0 0.8em gray;
    border-radius: 8px;
    padding: 10px;
    text-align: center;
    margin: 10px auto;

`

const Curte = styled.div`
    display: flex;
    flex-direction: column;
`

const Div = styled.div`
    background-color: #EEEEEE;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

const Form = styled.form`
    margin: 15px 0;
    padding: 10px 0;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0 0.8em gray;
    border-radius: 15px;

    /* display={'flex'} direction={'column'} align={'center'} */
`

// const Button1 = styled.button`
//     width: 30px;
//         height: 30px;
//         background-color: orange;
//         border-radius: 52%;
// `

const Nome = styled.div`

    text-align: center;

    h2{
        font-weight: bold;
        font-size: 1.5rem;
    }
`

const Conteudo = styled.div`
    margin: 10px 0;
    border: 1px solid gray;
    border-radius: 5px;
    height: auto;

    p{
        margin: 10px;
    }
`

const Pai = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center
`

function PostPage(props){
    const [post, setPost] = useState([])
    const [detalhe, setDetalhe] = useState([])
    const params = useParams()
    const history = useHistory()
    const goBack = ()=>{
        history.goBack()
    }
    const token = localStorage.getItem('token')
    

    const {formulario, onChange, limpa} = useForm({ body:''})

    useEffect(()=>{
        getComments()
    }, [detalhe.length])

    useEffect(()=>{
        getPost()
    }, [post.length])


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
    

    const getComments = (id)=>{
        axios.get(`${Url}/posts/${params.id}/comments`, {
            headers:{
                Authorization: token
            }
        })
        .then(res =>{
            console.log(res.data)
            setDetalhe(res.data)
            console.log(detalhe)
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
            limpa()
            getComments()
            
        }).catch(err =>{
            console.log(err.response)
        })
    }



    const createVote = (id)=>{
        let body = {
            "direction": +1
        }
        axios.post(`${Url}/comments/${id}/votes`, body, {
            headers:{
                Authorization: token
            }
        }).then(res =>{
            console.log(res.data)
            getComments()
        }).catch(err =>{
            console.log(err.response)
        })
    }


    const changeVote = (id)=>{
        let body = {
            "direction": -1
        }
        axios.put(`${Url}/comments/${id}/votes`, body, {
            headers:{
                Authorization: token
            }
        }).then(res =>{
            console.log(res.data)
            getComments()
        }).catch(err =>{
            console.log(err.response)
        })
    }



    const copia = detalhe.map((posts)=>{
        
        return(
            <Card key={posts.id} id={posts.id}>
            <Nome>
            <h2>{posts.username}</h2>
            </Nome>
            <Conteudo>
                <p>{posts.title}</p>
                <p>{posts.body}</p>
            </Conteudo>
                <Curte>
                <button onClick={()=> createVote(posts.id)}>Curtir</button>
                <button onClick={()=> changeVote(posts.id)}>Descurtir</button>
                <p>
                {posts.voteSum}</p>
                </Curte>
                </Card>
    )})

        const copia1 = post.map((posts)=>{
            if (posts.id === params.id){
            return(
                <>
                <Card key={posts.id} >

                <Nome>
            <h2>{posts.username}</h2>
            </Nome>
            <Conteudo>
                <p>{posts.title}</p>
                <p>{posts.body}</p>
            </Conteudo>
                    <Curte>
                    <p>
                    {posts.voteSum} Votos</p>
                    </Curte>
                    <p>{posts.commentCount === null ? 0 : posts.commentCount} Comentários</p>
                    </Card>
                    
                </>
            )}
        })

    



    return(
        <Div>
            
            {copia1}
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
        </Div>
    )
}
export default PostPage