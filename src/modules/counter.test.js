import mealsCounter from './counter';

document.body.innerHTML = `<body>
<div class="popup-block"></div>
<div class="main-content">
  <header>
    <nav class="nav-bar">
      <img srcset="./assets/loggo.png" id="logo" alt="logo" srcset="" />
      <ul>
        <li>Meals <small id="number">0</small></li>
        <li>Prices</li>
        <li>Discounts</li>
      </ul>
    </nav>
  </header>
  <div class="description-container">
    <div class="description">
       <img id="gif" src="./assets/Foods_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif" alt="">
       <h4>Our restaurant offers a diverse menu featuring traditional dishes and modern twists on classics. Come in and enjoy a comfortable dining experience with us!</h4>
       <img id="gif" src="./assets/Foods_-_Idil_Keysan_-_Wikimedia_Giphy_stickers_2019.gif" alt="">
     </div>
   </div>

  <div class="items">
    <ul class="items-block">
    </ul>
  </div>
  <div class="modal"></div>
  <footer>
    <h4>&#169 Designed and implemented by Eddy and Gaurav</h4>
  </footer>
</div>
</body>`;

test('mealsCounter increments the count', () => {
  mealsCounter(10);
  expect(document.querySelector('#number').textContent).toBe('10');
});

test('mealsCounter uses default value of 0', () => {
  mealsCounter();
  expect(document.querySelector('#number').textContent).toBe('0');
});

test('mealsCounter uses default value of 0', () => {
  mealsCounter(100);
  expect(document.querySelector('#number').textContent).toBe('100');
});