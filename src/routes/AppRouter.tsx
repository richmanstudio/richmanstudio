import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Можно добавить отдельные страницы privacy, agreement и т.д. */}
      </Routes>
    </MainLayout>
  </BrowserRouter>
)

export default AppRouter
