import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import PokemonCard from './Pages/PokemonCard.jsx'

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/*' element={<Home />} />
        <Route path=':pokemonName' element={<PokemonCard />} />
      </Routes>
    </div>
  )
}

export default App
