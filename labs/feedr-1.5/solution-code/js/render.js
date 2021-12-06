const mainElement = document.querySelector('#js-main');

const showFullArticle = (event) => {
  console.log('hit');
};

export const clearArticles = () => {
  mainElement.innerHTML = '';
};

export const renderArticle = (article) => {
  const { title, subTitle, image, ranking, description, externalUrl } = article;

  const articleElement = document.createElement('article');
  articleElement.classList.add('article');

  articleElement.innerHTML = `
  <picture class="featured-image">
    <img src="${image}" alt="${title}" />
  </picture>
  <section class="article-content">
    <h2>${title}</h2>
    <h3>${subTitle}</h3>
  </section>
  <p class="impressions">${ranking}</p>
  <template id="js-article-template">
    <h2>${title}</h2>
    <p>${description}</p>
    <a href="${externalUrl}" class="pop-up-action" target="_blank" rel="noopener"
      >Read more from source</a
    >
  </div>
  </template>
  `;

  articleElement.addEventListener('click', showFullArticle);

  mainElement.appendChild(articleElement);
};
