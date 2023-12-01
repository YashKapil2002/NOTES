import React from 'react'
import ReactDOM from 'react-dom'

import { ThemeProvider } from './ThemeContext'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Signup'
import Login from './Login'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
  rootElement
)
