import { showLoader, hideLoader } from './loader.js';
import {
  fetchRickAndMorty,
  createRickAndMortyArticles,
} from './rick-and-morty.js';
import { renderArticle, clearArticles } from './render.js';

const main = async () => {
  showLoader();
  try {
    const characters = await fetchRickAndMorty();
    hideLoader();
    const rickAndMortyArticles = createRickAndMortyArticles(characters);
    clearArticles();
    rickAndMortyArticles.forEach((article) => {
      renderArticle(article);
    });
  } catch (error) {
    // render error
  }
};

main();
