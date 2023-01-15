"use strict";

var changeScreen = function changeScreen() {
  var form = document.querySelector('#form'),
    back = document.querySelector('#back'),
    more = document.querySelector('#more');
  more.addEventListener('click', function () {
    form.classList.add('active');
  });
  back.addEventListener('click', function () {
    form.classList.remove('active');
  });
};
changeScreen();
var changText = function changText() {
  var h1 = document.querySelector("h1");
  h1.innerText = 'Мы будем рады сотрудничать с вами на Международной цветочной онлайн-площадкe!';
  if (window.innerWidth > 767) {
    h1.innerText = 'Мы будем рады сотрудничать с вами на платформе \'Международной цветочной онлайн-площадки\'!';
  }
};
changText();
window.onresize = changText;