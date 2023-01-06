import cardsTemplate from './cardstemplate.js';
import mealsCounter from './counter.js';

const showCards = async () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian';
  await fetch(url).then((response) => response.json())
    .then((data) => {
      cardsTemplate(data);
      mealsCounter(data.meals.length);
    });
};

export default showCards;