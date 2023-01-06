import addComment from './addComment.js';
import getComments from './showComment.js';
import commentsCounter from './commentsCounter.js';

const popupTemplate = async (data) => {
  const popupBlock = document.querySelector('.popup-block');
  const meal = data.meals[0];
  const mealId = meal.idMeal;
  popupBlock.innerHTML = `<div class="popup">
  <i class="cross fa-2x fa-solid fa-xmark"></i>
  <div class="popup-img"><img src=${meal.strMealThumb} alt="food-img"></div>
  <div class="popup-dtls">
    <h3>${meal.strMeal}</h3>
    <p>Category: <span>${meal.strCategory}</span></p>
    <p>Area: <span>${meal.strArea}</span></p>
  </div>
  <div class="popup-discription">
    <h2>Description</h2>
    <p class="instructions">${meal.strInstructions}</p>
  </div>
  <div class="popup-comments">
    <h2>Add a comment</h2>
    <form id=${meal.idMeal} class="comment-form">
      <input id="name" type="text" placeholder="Name">
      <input id="insight" type="text" placeholder="Insights" required>
      <input class="submit" type="submit" value="Comment" required>
    </form>
    <div class="show-comments">
      <div class="comments-child">
        <h2>Comments</h2> <span class="counter-div"></span>
      </div>
      <div id=${meal.idMeal} class="comments-block"></div>
    </div>
  </div>
 </div>`;

  const cross = document.querySelector('.cross');
  const bodyParts = document.querySelector('.main-content');
  cross.addEventListener('click', () => {
    popupBlock.style.display = 'none';
    bodyParts.style.display = 'block';
  });

  // Show comments
  const commentsBlock = document.querySelector('.comments-block');
  const showComment = async () => {
    const commentsArray = await getComments(mealId);
    if (!commentsArray || !commentsArray.length) {
      commentsBlock.innerHTML = '<p class="pop-comments">There are no comments</p>';
    } else {
      commentsBlock.innerHTML = '';
      commentsArray.forEach((x) => {
        commentsBlock.innerHTML += `<p class="comment-p">[${x.creation_date}] <span class="pop-name">${x.username}</span>: &nbsp<span class="pop-comments">${x.comment}</span></p>`;
      });
    }
    const commentsCounterDiv = document.querySelector('.counter-div');
    const commentsParaArray = document.querySelectorAll('.comment-p');
    commentsCounterDiv.innerHTML = `<span>(${commentsCounter(commentsParaArray)})</span>`;
  };

  showComment();

  // Add comment
  const submitComment = document.querySelector('form');
  submitComment.addEventListener('submit', async (x) => {
    const cNameValue = document.querySelector('#name').value;
    const commentValue = document.querySelector('#insight').value;
    x.preventDefault();
    const temp = x.currentTarget.id;
    await addComment(cNameValue, commentValue, temp);
    await showComment();
    submitComment.reset();
  });
};

const showPopup = async (id) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  await fetch(url).then((response) => response.json())
    .then((data) => popupTemplate(data));
};

export default showPopup;