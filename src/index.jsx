import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import APropos from './pages/AboutUs.jsx'
import Error from './components/Error.jsx'
import Footer from './components/Footer.jsx'
import AccommodationPages from './pages/AccommodationPages.jsx'
import './utils/style/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/Projet_7_Kasa">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="*" element={<Error />} />
        <Route path="/logement/:id" element={<AccommodationPages />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)
