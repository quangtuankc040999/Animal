import React from 'react'
import {Logo, Button, NavigationContainer, ButtonContainer } from './style'
import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";


export default function Navigation() {
const navigate = useNavigate();

  const logout = () => {
    localStorage.clear()
    navigate(0)
  }
  return (
    <NavigationContainer>
      <Logo>
        ANIMAL
      </Logo>
        <Button onClick={logout}>
          <MdLogout fontSize={25} />
        </Button>


    </NavigationContainer>
  )
}
