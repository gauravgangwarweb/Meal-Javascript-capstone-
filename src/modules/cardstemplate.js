const cardsTemplate = (data) => {
  const cardsBlock = document.querySelector('.items-block');
  const arr = data.meals;
  arr.forEach((x) => {
    cardsBlock.innerHTML += `<li>
    <img src=${x.strMealThumb} alt="">
    <div class="like-container">
      <h5>${x.strMeal}</h5>
      <i class="like-icon fa-solid fa-heart"></i>
      <span>0 likes</span>
    </div>
    <button class="comments">Comments</button>
  </li>`;
  });
};

export default cardsTemplate;