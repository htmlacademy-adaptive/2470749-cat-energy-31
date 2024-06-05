/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.main-header__nav');
const openButton = document.querySelector('.main-header__toggle');

navMain.classList.remove('main-header__nav--nojs');

openButton.onclick = function() {
  navMain.classList.toggle('main-header__nav--opened');
};
