import styled from "styled-components";
export const Header = styled.div`
padding: 10px 0;
font-size: 20px;
`

export const LoginContainer = styled.div`
  background-color: rgb(208,241,230);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

`
export const LoginFormContainer = styled.div`
  margin: 0 auto;
  width: 340px;
  height: 350px;
  text-align: center;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 10px 0;
`
export const Input = styled.input`
  height: 35px;
  border-radius: 300px;
  border: 1px solid grey;
  padding: 0 10px;
  &:focus {
    outline: none;
  }

`
export const Label = styled.label`
  display: flex;
  margin-left: 5px;
`


export const ButtonContainer = styled.div``
export const Button = styled.button`
  width: 100px;
  height: 35px;
  border: none;
  border-radius: 300px;
  margin: 20px 0;
  background-color: rgb(57,111,95);
  color: white
`
export const Error = styled.div`
  height: 15px;
  color: red;
`

