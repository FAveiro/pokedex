import React, { useState } from "react";

//* Import components
import EvoChain from "../Components/EvoChain";

function DetailPokemon() {
  const [search, setSearch] = useState("");
  const [searchPokemon, setSearchPokemon] = useState("bulbasaur");

  //* Save value
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  //* Search the value
  const handleSubmit = (e) => {

    setSearchPokemon(search.toLocaleLowerCase())   
    }

  return (
    <div className="container_detinfo">
      {/* Search Pokemon*/}
      <div className="detinfo_search">
        <label>Procura o teu Pokémon</label>
        {/* Form - Input + Button */}
          <input
            type="text"
            placeholder="Ex. Bulbasaur"
            value={search}
            onChange={handleChange}
          />
          <button type="submit" onClick={handleSubmit}>Procurar</button>
      </div>
      {/* Evolution Chain */}
      <EvoChain search={searchPokemon}/>
    </div>
  );
}

export default DetailPokemon;
