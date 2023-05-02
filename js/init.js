/* eslint-disable import/extensions */
/* eslint-disable no-undef */
import keys from './keys.js';

const init = function () {
  const { body } = document;

  body.innerHTML += `<header class="header container">
  <h1 class="header__title">RSS virtual keybord</h1>
  <textarea class="header__textarea" id="textarea" cols="30" rows="10"></textarea>
  </header>`;

  const main = document.createElement('main');
  body.insertAdjacentElement('beforeend', main);

  const container = document.createElement('section');
  container.classList.add('keyboard', 'container');

  main.insertAdjacentElement('beforeend', container);
  // let arr = [];

  for (let i = 0; i < keys.length; i += 1) {
    const line = document.createElement('div');
    line.classList.add('keyboard__line');
    container.insertAdjacentElement('beforeend', line);

    for (let a = 0; a < keys[i].length; a += 1) {
      const keyboard = document.createElement('div');
      const newClass = Object.values(keys[i][a])[0].class;

      for (let j = 0; j < newClass.length; j += 1) {
        keyboard.classList.add(newClass[j]);
      }

      line.insertAdjacentElement('beforeend', keyboard);

      const keyClasses = Object.keys(Object.values(keys[i][a])[0]);

      for (let k = 1; k < keyClasses.length; k += 1) {
        if (keyClasses[k] !== 'value' && !keyClasses[k].includes('arrow')) {
          const div = document.createElement('div');
          div.classList.add(`${keyClasses[k]}`, 'hidden');
          div.innerHTML = Object.values(keys[i][a])[0][keyClasses[k]];
          keyboard.insertAdjacentElement('beforeend', div);
        } else if (keyClasses[k] === 'value') {
          keyboard.innerHTML = Object.values(keys[i][a])[0][keyClasses[k]];
        } else if (keyClasses[k].includes('arrow')) {
          const div = document.createElement('div');
          div.classList.add('keyboard__key', `${keyClasses[k]}`);
          div.innerHTML = Object.values(keys[i][a])[0][keyClasses[k]].value;
          document.querySelector('.arrows').classList.remove('keyboard__key');
          document.querySelector('.arrows').insertAdjacentElement('beforeend', div);
        }
      }
    }
  }

  const caps = document.querySelector('.capslock');
  caps.insertAdjacentHTML('afterbegin', '<div class="capslock__indicate"></div>');

  body.innerHTML += `<footer class="footer container">
  <p class="footer__text">Клавиатура создана в операционной системе Windows</p>
  <p class="footer__text">Для переключения языка комбинация: левыe ctrl + alt</p>
  </footer>`;
};

export default init;
