import styled from 'styled-components';

export const Pai = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  margin: 0 auto;
  
`

export const Back = styled.div`
  bottom: 200px;
  width: 55%;
  height: 45%;
  margin: 0 auto;
  border-radius: 50px;
  background-color: #FFD523;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  
  
`

export const Input = styled.input`
  width: 65%;
  height: 33px;
  border-radius: 10px;
  font-size: large;
  margin-top: 10px;
  
`

export const Button = styled.button`
  width: 46%;
  flex-wrap: wrap;
  height: 35px;
  margin-top: 15px;
  cursor: pointer;
  font-size: large;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-radius: 10px;
  background-color: #091353;
  border-style: hidden;
  color: #FFD523;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 76%;
  margin: 0 auto;
  margin-top: 10px;
  align-items: center;
  padding-bottom: 10px;
  flex-wrap: wrap;

`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
`
