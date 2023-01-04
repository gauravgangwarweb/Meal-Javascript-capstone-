import "./style.css";

const mealsData = [
  {
    id: "meal1",
    title: "Hamburger",
    imageUrl: "./images/burger.jpeg",
    ingredients: "rice, salt, eggs",
    comment: "delicious recipe",
    reservation: "next week",
  },
  {
    id: "meal2",
    title: "pork",
    imageUrl: "./images/pork.jpeg",
    ingredients: "rice, salt, eggs",
    comment: "delicious recipe",
    reservation: "next week monday",
  },
  {
    id: "meal3",
    title: "Spaghetti",
    imageUrl: "./images/pork.jpeg",
    ingredients: "spaghetti, eggs, pancetta, parmesan cheese, black pepper",
    comment: "super creamy and flavorful",
    reservation: "this weekend",
  },
  {
    id: "meal4",
    title: "Grilled Salmon",
    imageUrl: "./images/pork.jpeg",
    ingredients: "salmon fillet, olive oil, lemon juice, dill, salt, pepper",
    comment: "perfectly cooked and seasoned",
    reservation: "next friday",
  },
  {
    id: "meal5",
    title: "Pad Thai",
    imageUrl: "./images/pork.jpeg",
    ingredients:
      "rice noodles, shrimp, tofu, peanuts, bean sprouts, eggs, pad thai sauce",
    comment: "authentic and tasty",
    reservation: "next wednesday",
  },
  {
    id: "meal6",
    title: "Chips",
    imageUrl: "./images/chips.webp",
    ingredients:
      "rice noodles, shrimp, tofu, peanuts, bean sprouts, eggs, pad thai sauce",
    comment: "authentic and tasty",
    reservation: "next wednesday",
  },
  {
    id: "meal7",
    title: "Grilled Salmon",
    imageUrl: "./images/pork.jpeg",
    ingredients: "salmon fillet, olive oil, lemon juice, dill, salt, pepper",
    comment: "perfectly cooked and seasoned",
    reservation: "next friday",
  },
  {
    id: "meal8",
    title: "Pad Thai",
    imageUrl: "./images/pork.jpeg",
    ingredients:
      "rice noodles, shrimp, tofu, peanuts, bean sprouts, eggs, pad thai sauce",
    comment: "authentic and tasty",
    reservation: "next wednesday",
  },
];

function fetchOneMeal(id) {
  console.log(id);
  let meal = {};
  for (let i = 0; i < mealsData.length; i += 1) {
    if (id === mealsData[i].id) {
      meal = mealsData[i];
    }
  }
  //  creating thee popup Modal
  const modalContainer = document.querySelector(".modal");
  const popupModal = document.createElement("div");
  popupModal.classList.add("popup-modal");

  modalContainer.style.display = "flex";

  const crossIcon = document.createElement("span");
  crossIcon.setAttribute("id", "icon-cross");
  crossIcon.classList.add("cross-icon"),
    (crossIcon.innerHTML = '<img src="./images/cross-article.png" alt="X"/>');
  popupModal.appendChild(crossIcon);
  crossIcon.addEventListener("click", () => {
    console.log("closed popup");
    modalContainer.removeChild();
  });
  modalContainer.appendChild(popupModal);

  //  title

  const title = document.createElement("h3");
  title.classList.add("meal-title");
  console.log(meal.title);
  title.innerHTML = meal.title;

  popupModal.appendChild(title);

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("meal-image-container");
  const meal_image = document.createElement("img");
  meal_image.setAttribute("src", meal.imageUrl);
  imageContainer.appendChild(meal_image);
  popupModal.appendChild(imageContainer);
}

const items = document.createElement("ul");
let meals = {};
for (let i = 0; i < mealsData.length; i += 1) {
  meals = mealsData[i];

  // creating container to hold images, title, and comments buttons
  const item_container = document.querySelector(".items");

  const items_list = document.createElement("li");
  const meal_image = document.createElement("img");
  meal_image.src = meals.imageUrl;

  const like_container = document.createElement("div");
  like_container.classList.add("like-container");
  const meal_name = document.createElement("h5");
  meal_name.innerHTML = meals.title;

  const like_button = document.createElement("img");
  like_button.classList.add("like-icon");
  like_button.src = "./images/heart.ico";

  const likes = document.createElement("span");
  likes.innerText = "0 likes";

  const commentBtn = document.createElement("button");
  commentBtn.classList.add("comments");
  commentBtn.innerHTML = "Comments";

  like_container.append(meal_name, like_button, likes);
  items_list.append(meal_image, like_container, commentBtn);
  items.append(items_list);
  item_container.append(items);
}
// getting the comments buttons
const commentButton = document.querySelectorAll(".comments");
commentButton.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const { id } = e.target;
    fetchOneMeal(id);
  });
});
