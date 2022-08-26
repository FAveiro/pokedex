import React from "react";

// Querys
import { useQuery } from "@apollo/client";
import { GET_EVOCHAIN } from "../GraphQL/Queries";

//* Import components
import Loader from "../Components/Loader";

function EvoChain({search}) { 

  //* Capitalize First Letter
  const CapitalizeFirst = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  //* Display list of Pokemon, Name, Image and Type
  const GetEvoChain = () => {

    //* Get info pokemon
    const { loading, error, data } = useQuery(GET_EVOCHAIN, {
      variables: { search },
    });

    if (loading) return <Loader />;
    if (error || !data.getEvoChain[0]) return <p className="error">Sem informação</p>;

    return data.getEvoChain[0].pokemon_v2_pokemonspecies.map(({ name, id }) => (
      <div key={id} className="evochain_wrap">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
        />
        <div className="cards_info">
          <label className="cards_name">{CapitalizeFirst(name)}</label>
        </div>
      </div>
    ));
  };

  return (
    <div className="evochain_display">
      <h2>Evolution Chain</h2>
      <div className="evochain">{GetEvoChain()}</div>
    </div>
  );
}

export default EvoChain;
