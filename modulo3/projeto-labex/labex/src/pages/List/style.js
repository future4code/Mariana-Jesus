import styled from 'styled-components';

export const Card = styled.div`
  width: 35%;
  height: auto;
  margin: 0 auto;
  margin-top: 15px;
  margin-bottom: 15px;
  box-shadow: 0 0 0.5em blue;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FFD523;
`

export const Buttons = styled.div`
  margin: 0 auto;
  display: flex;
  padding: 30px 0;
  align-content: space-between;
  align-items: center;
  width: 30%;
  justify-content: space-around;
`

export const Button = styled.button`
  
  height: 35px;
  cursor: pointer;
  width: 150px;
  font-size: large;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-radius: 10px;
  border-style: hidden;
  color: #FFD523;
  background-color: #091353;
`