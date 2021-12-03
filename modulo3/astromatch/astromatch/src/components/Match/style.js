import styled from "styled-components"

//  MATCH

export const Headersty = styled.div`
    background-color: #fef5ed;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const Imagem = styled.image`
  width: 480px;
  height: 100%;
  align-items: center;
  justify-content: center;
  
img{
  height: 70px;
    width: 50%;
    margin-left: 150px;
}
  
`

export const BotaoMatch = styled.button`
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

  export const Nav = styled.nav`
    max-height: 70vh;
    overflow-y: auto;
    
  `



  //    HOME



  

export const BotaoHome = styled.button`
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
    align-self: center;
  }
`

export const Footer = styled.div`
  display: flex;
  justify-content: space-around;
`

export const Card = styled.div`
  height: 29rem;
  margin: 10px 8px 12px 8px;
  box-shadow: 0 0 0.5em gray;
  border-style: hidden;
  border-radius: 10px;
  align-items: center;
  position: relative;

  div{
    position: absolute;
    text-shadow: 0px 0px 5px gray;
    color: white;
    font-size: 20px;
    top:340px;
    font: bold;
  }

  img{
    border-radius: 10px;
    width: 100%;
    height: 100%;
    position: absolute;
  }
`

export const Button = styled.button`
  border-style: hidden;
  background-color: transparent;
  cursor: pointer;
  border-radius: 40px;
  margin-top: 15px;
  :hover{
    background-color: white;
    img{
      width: 45px;
      height: 45px;
    }
  }

  img{
    width: 38px;
    height: 38px;
  }
`