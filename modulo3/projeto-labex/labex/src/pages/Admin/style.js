import styled from "styled-components"
export const Card = styled.div`
  width: 50%;
  height: auto;
  margin: 0 auto;
  margin-top: 15px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 0.5em gray;
  background-color: #577BC1;
  border-radius: 10px;
  
  button{
    margin: 10px 15px 10px 0;
    border-radius: 50%;
    width: 50px;
    font-size: larger;
    border: hidden;
    cursor: pointer;
    background-color: #577BC1;
    :hover{
      background-color: white;
    }
  }

  h1{
    margin: 10px 0 10px 15px;

  }
`

export const Div = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  
  align-items: center;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: auto;
  margin-top: 10px;
  padding-bottom: 10px;
  

  button{
    width: 140px;
    height: 30px;
    font-size: medium;
    background-color: #FFD523;
    border-radius: 10px;
    border-style: hidden;
    margin: 0 10px 0 10px;
    color: #091353;
    cursor: pointer;
  }
`