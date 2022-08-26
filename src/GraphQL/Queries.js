import { gql } from "@apollo/client";

export const GET_POKEMON = gql`
  query GetPokemon {
    getAllPokemons: pokemon_v2_pokemonspecies(
      where: { pokemon_v2_generation: { name: { _eq: "generation-i" } } }
      order_by: { id: asc }
    ) {
      name
      id
      evolution_chain_id
      pokemon_v2_pokemoncolor {
        name
      }
      pokemon_v2_pokemons {
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
        }
      }
    }
  }
`;

export const GET_EVOCHAIN = gql`
  query GetEvolution($search: String) {
    getEvoChain: pokemon_v2_evolutionchain(
      where: { pokemon_v2_pokemonspecies: { name: { _eq: $search } } }
    ) {
      pokemon_v2_pokemonspecies {
        name
        id
      }
    }
  }
`;

export const GET_DETPOKEMON = gql`
  query GetDetPokemon($search: String) {
    getPokemon: pokemon_v2_pokemonspecies(
      where: { pokemon_v2_pokemonspecies: { name: { _eq: $search } } }
    ) {
      name
      id
      evolution_chain_id
      pokemon_v2_pokemoncolor {
        name
      }
      pokemon_v2_pokemons {
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
        }
      }
    }
  }
`;
