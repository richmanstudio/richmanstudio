import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'

const App: React.FC = () => (
  <BrowserRouter>
    <MainLayout>
      <Home />
    </MainLayout>
  </BrowserRouter>
)

export default App
