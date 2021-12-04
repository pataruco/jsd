import { showLoader, hideLoader } from './loader.js';
import { fetchRickAndMorty } from './rick-and-morty.js';

const main = async () => {
  showLoader();
  try {
    const characters = await fetchRickAndMorty();
    hideLoader();
  } catch (error) {
    // render error
  }
};

main();
