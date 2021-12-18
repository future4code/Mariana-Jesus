import React from "react"
import styled from "styled-components"
import {useHistory} from 'react-router-dom'
import axios from "axios"
import {Url} from '../constants/constants'
import {useState, useEffect} from 'react'
import useForm from "../hooks/useForm"
import useRequestData from "../hooks/useRequestData"
import { Input, InputGroup, InputRightElement, Button, ButtonGroup, Textarea } from '@chakra-ui/react'
import Up from '../Image/seta-para-cima.png'
import Down from '../Image/seta-para-baixo.png'

const Card = styled.div`
    width: 75%;
    height: auto;
    box-shadow: 0 0 00.8em gray;
    border-radius: 8px;
    margin: 10px 0;
    padding: 10px;
    text-align: center;

    p .nome{
        margin: 0 auto;
        text-align: center;
    }

    @media(min-width: 800px){
    width: 65%;
    }
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

    @media(min-width: 800px){
        width: 65%;
    }
    /* display={'flex'} direction={'column'} align={'center'} */
`

const Button1 = styled.button`
    width: 30px;
        height: 30px;
        
        border-radius: 52%;
        :focus{
            background-color: orange;
        }
`

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


function FeedPage(){
    const [post, setPost] = useState([])
    const [curtido, setCurtido] = useState(false)
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
            // setCurtido(!false)
            getPost()
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
            getPost()
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
            // setCurtido(false)
            alert('Deu certo')
        }).catch(err =>{
            console.log(err.response)
        })
    }


    

    const copia = post.map((posts)=>{
        return(
            <>
            <Card key={posts.id} id={posts.id} >

            <Nome>
            <h2>{posts.username}</h2>
            </Nome>

            <Conteudo>
                <p>{posts.title}</p>
                <p>{posts.body}</p>
            </Conteudo>

            <Pai>
                <Curte>
                <Button1
                onClick={()=> createVote(posts.id)
                    }
                ><img src={Up} width={'100%'} height={'100%'}/></Button1>
                <Button1 
                onClick={()=> changeVote(posts.id)}><img src={Down} width={'30px'} height={'30px'}/></Button1>
                </Curte>
                <p>
                {posts.voteSum} Curtidas</p>
                </Pai>
                <p>{posts.commentCount === null ? 0 : posts.commentCount} Comentários</p>
                <Button colorScheme='orange' variant='solid' onClick={()=> goToDetail(posts.id)}>Ver detalhes</Button>
                </Card>
                
            </>
        )
    })


    
    return(
        <Div >
            
            <Form  onSubmit={createPost}>
                <Input
                    variant='filled'
                    margin={'5px 0'}
                    width={'50%'}
                    placeholder="Título"
                    name="title"
                    type={'text'}
                    onChange={onChange}
                    value={formulario.title}
                    require

                />
                <Textarea
                    variant='filled'
                    margin={'5px 0'}
                    width={'80%'}
                    placeholder="Decrição"
                    name="body"
                    onChange={onChange}
                    type={'text'}
                    value={formulario.body}
                    required
                />
                <Button margin={'10px 0'} colorScheme='orange' variant='solid' type="submit">Publicar</Button>
                
            </Form>
            {copia}
            {/* {envia} */}
            
        </Div>
    )
}
export default FeedPage