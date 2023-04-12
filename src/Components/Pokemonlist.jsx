import { useState } from "react";
import React from "react";
import "../Styles/Pokemonlist.css";
import { Link } from "react-router-dom";

export default function Pokemonlist({
  sort,
  setsort,
  pokemons,
  setpokemons,
  search,
  setsearch,
}) {
  return (
    <div className="pokemonList">
      {pokemons.map((pokemon, index) => {
        return (
          <section className="pokemonBox" key={index}>
            <h6 className="pokemonId">
              # {pokemon.number < 100 ? "00" + pokemon.number : pokemon.number}
            </h6>
            <Link to={`/${pokemon.name}`}>
              <img src={pokemon.image} alt="" />
            </Link>
            <h6>{pokemon.name}</h6>
          </section>
        );
      })}
    </div>
  );
}
