import React from "react";

// Import CSS
import "./App.css";

// Querys
import { useQuery } from "@apollo/client";
import { GET_POKEMON } from "../GraphQL/Queries";

//* Import components
import Loader from "../Components/Loader";
import Cards from "../Components/Cards";
import DetailPokemon from "./DetailPokemon";

function App() {
  //* Display list of Pokemon, Name, Image and Type
  const DisplayPokemon = () => {
    const { loading, error, data } = useQuery(GET_POKEMON);

    if (loading) return <Loader />;
    if (error || !data.getAllPokemons[0])
      return <p className="error">Sem informação</p>;

    return data.getAllPokemons.map(
      ({ name, id, pokemon_v2_pokemoncolor, pokemon_v2_pokemons }) => (
        <Cards
          key={id}
          name={name}
          id={id}
          colorPokemon={pokemon_v2_pokemoncolor.name}
          typePokemon={pokemon_v2_pokemons}
        />
      )
    );
  };

  return (
    <div className="container">
      <div className="title">Pokémon</div>
      <div className="container_information">
        <div className="container_card">{DisplayPokemon()}</div>
        <div className="container_detail">
          <DetailPokemon />
        </div>
      </div>
    </div>
  );
}

export default App;
