import { useState } from 'react'
import { useEffect } from 'react'
import React from 'react'
import '../Styles/Header.css'
import Pokebola from '../img/Pokeball.png'
import Filter from '../img/sort.png'
import textFormat from '../img/text_format.png'



export default function Header({ sort, setsort, pokemons, setpokemons, search, setsearch }) {

    const inputChange = (e) => {
        setsearch(e.target.value)
    }
    const Az = () => {
        setsort(false)
    }

    const sortNum = () => {
        setsort(true)
    }
    useEffect(() => {
        let copysort = [...pokemons.sort((a, b) => {
            if (sort) {
                return a.number - b.number
            }
            else {
                return a.name.localeCompare(b.name)
            }
        })]
        if (search) {
            let copysearch = copysort.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()))
            setpokemons(copysearch)
        }
        else {
            setpokemons(copysort)
        }


    }, [sort, search])
    

    return (
        <div className='header'>
            <section className='iconsSection'>
                <img src={Pokebola} alt="" />
                <h3 style={{fontWeight:'bold'}} >Pokédex</h3>
            </section>
            <section className='inputSection'>
                <input placeholder='Search' type="text" value={search} onChange={inputChange} />
                {sort ? (<img onClick={Az} src={Filter} />) : (<img onClick={sortNum} src={textFormat} />)}
            </section>
        </div>
    )
}


