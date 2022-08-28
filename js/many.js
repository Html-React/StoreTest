// Показать еще 3 карточки
const btnNext = document.querySelector('.next');
const hiddenCards = document.querySelectorAll('.cards__item-hidden');
// Клик по кнопке и показ трех скрытых карточек
btnNext.addEventListener('click', function () {
  hiddenCards.forEach(function (card) {
    card.classList.remove('cards__item-hidden');
  });
});


// Скрыть блок фильтра и переворот стрелки
const sidebarConteiner = document.querySelectorAll('.sidebar__conteiner');
const sidebarImg = document.querySelectorAll('.sidebar__title-img');
sidebarConteiner.forEach(function (sidebar) {
  sidebar.addEventListener('click', function (e) {
    if (e.target.classList.contains('sidebar__conteiner-title')) {
      e.target.firstElementChild.classList.toggle('title__img-tr');
      e.target.nextElementSibling.classList.toggle('sidebar__data-hidden');
    }
  });
});
sidebarImg.forEach(function (img) {
  img.addEventListener('click', function (e) {
    if (e.target.classList.contains('sidebar__title-img')) {
      e.target.classList.toggle('title__img-tr');
      e.target.parentNode.parentNode.lastElementChild.classList.toggle('sidebar__data-hidden');
    }
  });
});

// Кнопка любая
const btnAny = document.querySelector('#check__05');
const sliderBtn = document.querySelectorAll('[slider__button-select]');
// Клик по кнопке любая сброс чекбоксов
btnAny.addEventListener('change', function() {
  if (btnAny.checked) {
    sliderBtn.forEach(function(item) {
      item.checked = false;
    });
    }
});
// Клик по чекбоксам сброс любая
sliderBtn.forEach(function(item) {
  item.addEventListener('change', function() {
    if (btnAny.checked) {
      btnAny.checked = false;
    }
  });
});

// Показать еще 3 дополнительных услуги
const btnNextcheckbox = document.querySelector('.next__checkbox');
const hiddenForm = document.querySelectorAll('.form_checkbox-hidden');
// Клик по кнопке и показ трех скрытых услуг
btnNextcheckbox.addEventListener('click', function (e) {
  e.preventDefault();
  hiddenForm.forEach(function (item) {
    item.classList.remove('form_checkbox-hidden');
    //Убираем показать еще
    btnNextcheckbox.classList.add('form_checkbox-hidden');
  });
});


// console.log('yes');

// sidebar__title-img
