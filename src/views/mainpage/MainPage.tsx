
import React from 'react'
import { Animal } from '../animal/Animal'
import Login from '../login/Login'
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

export default function MainPage() {
  return (
    <div>
       <BrowserRouter>
      <Routes >
        <Route index element={<Animal />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>

    </div>
  )
}
