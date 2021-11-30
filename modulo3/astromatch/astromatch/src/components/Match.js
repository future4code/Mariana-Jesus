import {useState} from 'react'
import url from './constants/url'
import Header from './Body'

export default function Body(props) {
  return (
    <div>
     <button onClick={() => props.mudar("body")}>Voltar</button>
      Match
    </div>
  );
}