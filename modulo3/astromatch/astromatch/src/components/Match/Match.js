import {useState} from 'react'
import url from '../constants/url'
import Logo from '../../img/astromach.png'
import styled from 'styled-components'
import ImgHome from '../../img/home.png'

const Headersty = styled.div`
    background-color: #fef5ed;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;


img{
    height: 70px;
    width: 50%;
}
`

const BotaoMatch = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  cursor: pointer;
  border-style: hidden;
  background-color: transparent;

  img{
    width: 35px;
    height: 35px;
  }
`

export default function Body(props) {
  const [matches, setMatches] = useState()
  return (
    <div>
      <Headersty>
      <img src={Logo}/>
     <BotaoMatch onClick={() => props.mudar("body")}><img src={ImgHome}/></BotaoMatch>
     </Headersty>
      Match
    </div>
  );
}