import React, { useEffect, useState } from 'react'
import { Header, LoginContainer, LoginFormContainer, InputContainer, ButtonContainer, Button, Input, Label, Error } from './style'
import { loginAction, removeErrorAction } from "../../redux/account/actionCreator"
import { IAccount, LoginParam } from '../../interfaces/components'
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from "redux"
import { useNavigate } from "react-router-dom";
import { RootState } from '../../redux/store'
import { Navigate } from "react-router-dom";

export default function Login() {
  const account = useSelector((state: RootState) => state.account)
  // const error = useSelector((state: RootState) => state.account)

  const navigate = useNavigate();
  const dispatch: Dispatch = useDispatch()
  const token = localStorage.getItem('token')

  const [clientId, setClientId] = useState('')
  const [clientSecret, setClientSecret] = useState('')

  const loginFunction = async (e) => {
    e.preventDefault()
    const params: LoginParam = {
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret
    }
    dispatch(await loginAction(params))
    navigate(0)
  }
  const removeError = () => {
    dispatch(removeErrorAction())
  }
  const handleClientId =(e) => {
    setClientId(e.target.value)
    removeError()
  }
  const handleClientSecret =(e) => {
    setClientSecret(e.target.value)
    removeError()
  }
  if (account.accessToken || token) {
    return <Navigate replace to="/" />
  } else {
    return (
      <LoginContainer>
        <LoginFormContainer>
          <Header>LOGIN</Header>
          <InputContainer>
            <Label>Client_id</Label>
            <Input type={"text"} onChange={(e) => handleClientId(e)}></Input>
          </InputContainer>
          <InputContainer>
            <Label>Client_secret</Label>
            <Input type={"text"} onChange={(e) => handleClientSecret(e)}></Input>
          </InputContainer>
          {account.detail &&
            <Error>{account.detail}</Error>
          }
          <ButtonContainer>
            <Button onClick={loginFunction}>Login </Button>
          </ButtonContainer>
        </LoginFormContainer>
      </LoginContainer>
    )
  }
}

