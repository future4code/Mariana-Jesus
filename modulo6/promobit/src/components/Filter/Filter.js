import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import axios from 'axios'


const Div = styled.div`
    background-color: #2D0C5E;
`

export default function Filter() {

    const [genre, setGenre] = useState([])

    useEffect(() => {
      genres()
    }, [])
    
    const genres = ()=>{
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=c0ed96b6d0a137dd731c9202ac093f04&language=en-US')
    .then(res=> {
        setGenre(res.data.genres)
        console.log(res.data.genres)
    }).catch(err=> console.log(err))
    
    }

    const copy = genre.map((gen)=>{
        return <div key={gen.id}>
            <button>{gen.name}</button>
        </div>
    })
    

  return (
    <Div>
        <h1>Milhões de filmes, séries e pessoas para descobrir. Explore já.</h1>
        <div>
            <p>FILTRE POR:</p>
            {copy}
        </div>
        
    </Div>
  )
}
