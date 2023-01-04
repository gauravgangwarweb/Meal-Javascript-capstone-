const popupTemplate = (data) => {
  const popupBlock = document.querySelector('.popup-block');
  const meal = data.meals[0];
  popupBlock.innerHTML = `<div class="popup">
    <i class="cross fa-2x fa-solid fa-xmark"></i>
    <div class="popup-img"><img src=${meal.strMealThumb} alt="food-img"></div>
    <div class="popup-dtls">
        <h3>${meal.strMeal}</h3>
        <p>Category: <span>${meal.strCategory}</span></p>
        <p>Area: <span>${meal.strArea}</span></p>
    </div>
</div>`;

  const cross = document.querySelector('.cross');
  const bodyParts = document.querySelector('.body-parts');
  cross.addEventListener('click', () => {
    popupBlock.style.display = 'none';
    bodyParts.style.display = 'block';
  });
};

const showPopup = async (id) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  await fetch(url).then((response) => response.json())
    .then((data) => popupTemplate(data));
};

export default showPopup;