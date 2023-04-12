import React from "react";
import informacion from "../Informacion/informacion";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import arrowback from "../img/arrow_back.png";
import weight from "../img/Weight.svg";
import height from "../img/Height.svg";
import "../Styles/pokemonCard.css";
import { ProgressBar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import back from "../img/chevron_left.png";
import next from "../img/chevron_right.png";
import pokeball from '../img/Pokeball.png'

export default function PokemonCard() {
  const [pokemon, setpokemon] = useState(null);
  const { pokemonName } = useParams();

  useEffect(() => {
    const filteredPokemon = informacion.find(
      (pokemon) => pokemonName === pokemon.name
    );

    setpokemon(filteredPokemon);
  }, [pokemonName]);

  const nextPokemon = () => {
    const nextNumber = pokemon.number + 1;
    const nextPokemon = informacion.find((p) => p.number === nextNumber);
    if (nextPokemon) {
      setpokemon(nextPokemon);
    }
  };

  const prevPokemon = () => {
    const prevNumber = pokemon.number - 1;
    const prevPokemon = informacion.find((p) => p.number === prevNumber);
    if (prevPokemon) {
      setpokemon(prevPokemon);
    }
  };

  return (
    <div className="pokemonCard">
      {pokemon ? (
        <section
          className="details"
          style={{ backgroundColor: pokemon.colors[0] }}
        >
          <img className="pokeball" src={pokeball} alt="" />
          <section className="name-section">
            <Link to="/">
              <img src={arrowback} alt="" />
            </Link>
            <h3 style={{ fontWeight: "bold" }}>{pokemon.name}</h3>
            <p style={{ fontWeight: "bold" }}>
              # {pokemon.number < 10 ? "00" + pokemon.number : pokemon.number}
            </p>
          </section>
          <section className="arrows">
            <img
              onClick={prevPokemon}
              className="arrow-back"
              src={back}
              alt=""
            />
            <img
              onClick={nextPokemon}
              className="arrow-next"
              src={next}
              alt=""
            />
          </section>
          <section className="info-section">
            <section className="type-section">
              {pokemon.type.map((t, index) => {
                return (
                  <p
                    className="type"
                    style={{
                      color: "white",
                      backgroundColor: pokemon.colors[index],
                      fontWeight: "bold",
                    }}
                    key={t}
                  >
                    {t}
                  </p>
                );
              })}
            </section>
            <section className="about-section">
              <p style={{ color: pokemon.colors[0], fontWeight: "bold" }}>
                About
              </p>
              <section className="aboutinfo-section">
                <section>
                  <section className="icon-section">
                    <img src={weight} alt="" />
                    <p>{pokemon.weight} kg</p>
                  </section>
                  <section>
                    <p style={{ fontWeight: "bold" }}>Weight</p>
                  </section>
                </section>

                <section>
                  <section className="icon-section">
                    <img src={height} alt="" />
                    <p>{pokemon.height} m</p>
                  </section>
                  <section>
                    <p style={{ fontWeight: "bold" }}>Height</p>
                  </section>
                </section>

                <section>
                  <section className="moves-section">
                    {pokemon.moves.map((m) => {
                      return <p key={m}>{m}</p>;
                    })}
                  </section>
                  <section>
                    <p style={{ fontWeight: "bold" }}>Moves</p>
                  </section>
                </section>
              </section>
            </section>
            <section className="p-section">
              <p>{pokemon.description}</p>
            </section>

            <section className="base-stats-section">
              <p
                style={{
                  color: pokemon.colors[0],
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Base Stats
              </p>
              <section style={{display:'flex'}} >
              <section className="progress-section d-flex">
              <ProgressBar
                  label='HP'
                  style={{ backgroundColor: "rgba(128, 128, 128, 0.274)" }}
                  now={pokemon.stats[0] / 2}
                /> 
                <ProgressBar
                label='ATK'
                  style={{ backgroundColor: "rgba(128, 128, 128, 0.274)" }}
                  now={pokemon.stats[1] / 2}
                />
                <ProgressBar
                label='DEF'
                  style={{ backgroundColor: "rgba(128, 128, 128, 0.274)" }}
                  now={pokemon.stats[2] / 2}
                />
                <ProgressBar
                label='SATK'
                  style={{ backgroundColor: "rgba(128, 128, 128, 0.274)" }}
                  now={pokemon.stats[3] / 2}
                />
                <ProgressBar
                label='SDEF'
                  style={{ backgroundColor: "rgba(128, 128, 128, 0.274)" }}
                  now={pokemon.stats[4] / 2}
                />
                <ProgressBar
                label='SPD'
                  style={{ backgroundColor: "rgba(128, 128, 128, 0.274)" }}
                  now={pokemon.stats[5] / 2}
                />
              </section>
              </section>
            </section>
          </section>

          <img className="avatar" src={pokemon.image} alt="" />
        </section>
      ) : (
        <p style={{ color: "white", fontWeight: "bold", fontSize: "25px" }}>
          {" "}
          <Link to="/">
            <img src={arrowback} alt="" />
          </Link>
          {' '} Pokémon not found
        </p>
      )}
    </div>
  );
}
