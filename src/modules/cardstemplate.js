import showPopup from './popup.js';
import { getLikes, showLikes } from './showLikes.js';
import postLike from './addlikes.js';

const cardsTemplate = async (data) => {
  const cardsBlock = document.querySelector('.items-block');
  const likesData = await getLikes();
  const arr = data.meals;
  arr.forEach((x) => {
    cardsBlock.innerHTML += `<li>
    <img src=${x.strMealThumb} alt="" id="item-img">
    <div class="like-container">
      <h5>${x.strMeal}</h5>
      <div class="likes-comments">
      <i id=${x.idMeal} class="like-icon fa-solid fa-heart"></i>
      <span class="like-text" id=${x.idMeal}>${showLikes(x.idMeal, likesData)}</span><span> likes</span>
      <button class="comments" id=${x.idMeal}>Comments</button>
      </div>
      </div>
  </li>`;
  // mealsCounter()
  });
  // popup-part
  const commentBtns = document.querySelectorAll('.comments');
  const bodyParts = document.querySelector('.main-content');
  const popupPart = document.querySelector('.popup-block');
  commentBtns.forEach((x) => {
    x.addEventListener('click', (e) => {
      const temp = e.currentTarget.id;
      showPopup(temp);
      bodyParts.style.display = 'none';
      popupPart.style.display = 'block';
    });
  });
  // increase likes
  const likebtns = document.querySelectorAll('.like-icon');
  likebtns.forEach((x) => {
    x.addEventListener('click', async (e) => {
      const temp = e.currentTarget.id;
      await postLike(temp);
      const likesData = await getLikes();
      const updatedLike = await showLikes(temp, likesData);
      e.target.nextElementSibling.innerHTML = updatedLike;
    });
  });
};

export default cardsTemplate;