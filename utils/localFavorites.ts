/**
 * Save pokemon "id" to "Local Storage"
 * @param id Pokemon ID
 */
const toggleFavorite = (id: number): void => {
  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') ?? '[]');

  if (favorites.includes(id)) {
    favorites = favorites.filter(pokemonId => pokemonId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
};

/**
 * Check if pokemon exists in "Local Storage"
 * @param id Pokemon ID
 * @returns true if pokemon exists otherwise false
 */
const existInFavorites = (id: number): boolean => {
  if (typeof window === 'undefined') return false;
  const favorites: number[] = JSON.parse(localStorage.getItem('favorites') ?? '[]');
  return favorites.includes(id);
};

/**
 * Get pokemons from "Local Storage"
 * @returns Pokemon IDs array or empty array
 */
const getPokemons = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') ?? '[]');
};

export {
  toggleFavorite,
  existInFavorites,
  getPokemons,
};
