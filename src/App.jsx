import { useState } from 'react'
import './App.css'
import { LandingPage } from './components/LandingPage'
import { PainelTransparencia } from './components/PainelTransparencia'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <>
      {currentPage === 'home' && (
        <LandingPage onNavigateToPainel={() => setCurrentPage('painel')} />
      )}
      {currentPage === 'painel' && (
        <PainelTransparencia onNavigateToHome={() => setCurrentPage('home')} />
      )}
    </>
  )
}

export default App
