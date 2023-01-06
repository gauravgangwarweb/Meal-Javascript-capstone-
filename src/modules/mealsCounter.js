const mealsCounter = (num = 0) => {
  const countsNumber = document.querySelector('#number');
  countsNumber.textContent = num;
};

export default mealsCounter;