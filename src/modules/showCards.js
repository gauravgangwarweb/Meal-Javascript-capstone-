import cardsTemplate from './cardstemplate.js';

const showCards = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian';
  await fetch(url).then((response) => response.json())
    .then((data) => cardsTemplate(data));
};

export default showCards;