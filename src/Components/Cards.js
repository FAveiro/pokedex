import React, { useEffect, useState } from "react";

//* Convert Color name in RBG
import { rgb } from "d3-color";

function Cards({ name, id, colorPokemon, typePokemon }) {
  const [colorPick, setColorPick] = useState({});
  const [typePoke, setTypePoke] = useState([]);

  //* Do a cicle until change ID
  useEffect(() => {
    //* Convert color name in RGB
    setColorPick(rgb(colorPokemon));

    //* Get type of pokemon
    pokemonType(typePokemon);
  }, [id]);

  //* Capitalize First Letter
  const capitalizeFirst = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  };

  //* Inicialize pokemon type
  const pokemonType = (typePokemon) => {
    //* Get information
    let typeList = [];

    //* Get info "new" pokemon
    typePokemon.map((typeObj) =>
      typeObj.pokemon_v2_pokemontypes.map((type) => {
        if (!typeList.includes(type.pokemon_v2_type.name)) {
          typeList.push(type.pokemon_v2_type.name);
        }
      })
    );

    //*Inicilialize the list
    setTypePoke(typeList);
  };

  return (
    <div
      key={id}
      style={{
        backgroundColor: `rgba(${colorPick.r},${colorPick.g},${colorPick.b},0.35)`,
      }}
      className="cards"
    >
      {/* Cards - Info */}
      <div className="cards_info">
        <label className="cards_name">{capitalizeFirst(name)}</label>
        <div className="cards_type">
          {typePoke.map((type, index) => (
            <label className="cards_type_label" key={index}>
              {capitalizeFirst(type)}
            </label>
          ))}
        </div>
      </div>
      {/* Cards - Image */}
      <img
        className="cards_image"
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />
    </div>
  );
}

export default Cards;
