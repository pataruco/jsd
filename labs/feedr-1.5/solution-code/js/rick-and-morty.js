export const fetchRickAndMorty = async () => {
  try {
    const response = await fetch('https://rickandmortyapi.com/api/character');

    if (response.ok) {
      const { results } = await response.json();
      return results;
    }
    throw new Error(response.statusText);
  } catch (error) {
    throw new Error(error);
  }
};
