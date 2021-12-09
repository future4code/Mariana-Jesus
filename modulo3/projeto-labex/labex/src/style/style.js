import styled from "styled-components"



//ApplicationFormPage

export const Pai = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
 
  
`


export const Back = styled.div`
  position: absolute;
  bottom: -550px;
  right: -550px;
  width: 1010px;
  height: 1010px;
  border-radius: 50%;
  background-color: #091353;
`



export const Div = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  height: 330px;
  justify-content: space-between;
  width: 70%;
  
`

export const Select = styled.select`
  width: 40%;
  height: 45px;
  font-size: large;
  border-radius: 10px;
  
`

export const Input = styled.input`
  width: 39.5%;
  height: 43px;
  font-size: large;
  border-radius: 10px;
`

export const Button = styled.button`
  width: 35%;
  height: 40px;
  margin-top: 15px;
  cursor: pointer;
  font-size: large;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-radius: 10px;
  background-color: #FFD523;
  border-style: hidden;
  color: #091353;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
  margin: 0 auto;
  margin-top: 10px;
  align-items: center;
`

export const Button2 = styled.button`
  width: 35%;
  height: 40px;
  margin-top: 15px;
  cursor: pointer;
  font-size: large;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-radius: 10px;
  background-color: #091353;
  border-style: hidden;
  color: #FFD523;
`