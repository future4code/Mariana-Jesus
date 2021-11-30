import {useState} from 'react'
import url from './constants/url'
import Header from './Header'

export default function Body(props) {
  return (
    <div className="App">
      <button onClick={()=> props.mudar('match')}>Mudar</button>
      Body
    </div>
  );
}