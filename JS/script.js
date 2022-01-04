let button = document.getElementById('burger');
let navigation = document.getElementById('menu');
let shadow = document.getElementById('header-shadow');
button.addEventListener('click', function () {
  navigation.classList.toggle('header__nav-display-block');
  shadow.classList.toggle('header__nav-display-block');
});
