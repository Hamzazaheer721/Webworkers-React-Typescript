import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background: linear-gradient(45deg, #2193b0, #5f2c82);
  flex-direction: column;
`
export const Wrapper = styled.div`
  background-image: linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%);
  display: flex;
  flex-direction: column;
  justify-content : center;
  align-items: center;
  margin-top : 20px;
  border: 1px solid black;
  width: 600px;
  position: absolute;
  top: 20%;
  left: 30%;
  padding-bottom: 20px;
  border-radius: 10px 50px;
  box-shadow: 5px 10px 20px black;
`
export const Text = styled.h1`
  color: black;
  padding: 50px;
  font-weight: 600;
`

export const Button = styled.button`
  background-color: #7f53ac;
  background-image: linear-gradient(315deg, #7f53ac 0%, #647dee 74%);
  height: 60px;
  width: 120px;
  border-radius: 7px;
  margin: 10px 0;
  padding: 5px 10px;
  color: white;
  white-space: normal;
  word-wrap: break-word;
`
