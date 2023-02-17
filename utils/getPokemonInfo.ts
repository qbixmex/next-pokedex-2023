import { pokeApi } from "../api";
import { Pokemon, PokemonResult } from "../interfaces";

/**
 * Get Pokemon from API
 * @param nameOrId Pokemon ID or Name, Example: '1', '2', 'pikachu', 'charmeleon'
 */
export const getPokemonInfo = async (nameOrId: string): Promise<PokemonResult> => {
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ nameOrId }`);

  return {
    id: data.id,
    name: data.name,
    image: data.sprites.other?.dream_world.front_default ?? '/no-image.png',
    front_default: data.sprites.front_default,
    back_default: data.sprites.back_default,
    front_shiny: data.sprites.front_shiny,
    back_shiny: data.sprites.back_shiny,
  };
};
