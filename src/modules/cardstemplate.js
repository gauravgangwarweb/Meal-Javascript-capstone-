import showPopup from './popup.js';

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
    <button class="comments" id=${x.idMeal}>Comments</button>
  </li>`;
  });
  // popup-part
  const commentBtns = document.querySelectorAll('.comments');
  const bodyParts = document.querySelector('.body-parts');
  const popupPart = document.querySelector('.popup-block');
  commentBtns.forEach((x) => {
    x.addEventListener('click', (e) => {
      const temp = e.currentTarget.id;
      showPopup(temp);
      bodyParts.style.display = 'none';
      popupPart.style.display = 'block';
    });
  });
};

export default cardsTemplate;