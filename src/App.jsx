import { useState } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Lista from './components/Lista'
import Filtros from './components/Filtros'
import { PeliculaProvider } from './context/PeliculaContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <PeliculaProvider>
      <Header />
      <Formulario />
      <Filtros />
      <Lista />
    </PeliculaProvider>
  )
}

export default App
