import React, { useState } from 'react'
import Header from '../Components/Header.jsx'
import PokemonList from '../Components/Pokemonlist.jsx'
import PokemonCard from '../Pages/PokemonCard.jsx'
import '../Styles/Home.css'
import informacion from '../Informacion/informacion.js'
import { Route, Routes } from 'react-router-dom'

export default function Home() {

    const [pokemons, setpokemons] = useState(informacion)
    const [search, setsearch] = useState('')

    const [sort, setsort] = useState(true)
    return (
        <div className='home'>
            <Header className='header' sort={sort} setsort={setsort} pokemons={informacion} setpokemons={setpokemons} search={search} setsearch={setsearch} />
            <Routes>
                <Route path='' element={<PokemonList className='pokemonList' sort={sort} setsort={setsort} pokemons={pokemons} setpokemons={setpokemons} search={search} setsearch={setsearch} />} />
                <Route path=':pokemonName' element={<PokemonCard/>} />
            </Routes>
        </div>
    )
}
