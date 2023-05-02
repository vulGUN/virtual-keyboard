/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
import layout from './layout';

// загрузка языка при запуске страницы
window.addEventListener('load', () => {
  document.body.insertAdjacentHTML('afterbegin', layout);
  changeLang();
});

const textArea = document.querySelector('.header__textarea');
const blockKeys = [
  'tab',
  'capslock',
  'enter',
  'shift',
  'shiftleft',
  'shiftright',
  'backspace',
  'altleft',
  'altright',
  'controlleft',
  'controlright',
  'metaleft',
  'metaright',
  'arrowup',
  'arrowdown',
  'arrowleft',
  'arrowright',
  'space',
];
const keysRus = document.querySelectorAll('.keyboard__rus');
const keysEng = document.querySelectorAll('.keyboard__eng');
const shiftKeysRus = document.querySelectorAll('.keyboard__rus_active-shift');
const shiftKeysEng = document.querySelectorAll('.keyboard__eng_active-shift');
const keys = document.querySelectorAll('.keyboard__key');
const capsIndicator = document.querySelector('.capslock__indicate');

let capslockActive = false;
let lang = localStorage.getItem('lang') !== null ? localStorage.getItem('lang') : 'Rus';
const curentArr = [];

// действия для кликов мышью

keys.forEach((i) => {
  curentArr.push(i.classList[1]);
  i.addEventListener('mousedown', (e) => {
    i.classList.add('keyboard__key_active');
    const keyClick = e.target.classList[1];

    if (!blockKeys.includes(i.classList[1])) {
      textArea.value += i.innerText;
    }

    checkSwitchBtn(keyClick);
    checkCaps(keyClick);
  });
  i.addEventListener('mouseup', () => {
    i.classList.remove('keyboard__key_active');
  });
  i.addEventListener('mouseleave', () => {
    i.classList.remove('keyboard__key_active');
  });
});

// действия при нажатой клавише на клавиатуре

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  const keyPress = e.code.toLowerCase();

  checkCurrentButtons(curentArr, e);
  checkCaps(keyPress);
  checkSwitchBtn(keyPress);

  if (keyPress.includes('shift')) {
    activeShift();
  }

  if ((keyPress === 'altleft' && e.ctrlKey) || (keyPress === 'controlleft' && e.altKey)) {
    if (lang === 'Rus') {
      lang = 'Eng';
      localStorage.setItem('lang', lang);
      changeLang();
    } else {
      lang = 'Rus';
      localStorage.setItem('lang', lang);
      changeLang();
    }
  }

  keys.forEach((i) => {
    if (i.classList.contains(keyPress)) {
      i.classList.add('keyboard__key_active');
    }
  });

  keys.forEach((i) => {
    if (!blockKeys.includes(keyPress) && i.classList.contains(keyPress)) {
      textArea.value += i.innerText;
    }
  });
});

// действия при отпущеной клавише на клавиатуре

document.addEventListener('keyup', (e) => {
  const keyUp = e.code.toLowerCase();

  if (keyUp.includes('shift')) {
    deactiveShift();
  }

  keys.forEach((i) => {
    if (i.classList.contains(keyUp)) {
      i.classList.remove('keyboard__key_active');
    }
  });
});

// проверка включенного капса и действия для него

function checkCaps(key) {
  if (key === 'capslock' && !capslockActive) {
    capslockActive = true;
    capsIndicator.classList.add('show');
    for (let i = 0; i < keysRus.length; i += 1) {
      keysRus[i].textContent = keysRus[i].textContent.toUpperCase();
      keysEng[i].textContent = keysEng[i].textContent.toUpperCase();
    }
  } else if (key === 'capslock' && capslockActive) {
    capslockActive = false;
    capsIndicator.classList.remove('show');
    for (let i = 0; i < keysRus.length; i += 1) {
      keysRus[i].textContent = keysRus[i].textContent.toLowerCase();
      keysEng[i].textContent = keysEng[i].textContent.toLowerCase();
    }
  }
}

// действие функциональных кнопок (shift, space, tab ...)

function checkSwitchBtn(key) {
  switch (key) {
    case 'tab':
      textArea.value += '    ';
      break;
    case 'enter':
      textArea.value += '\n';
      break;
    case 'backspace':
      backspace();
      break;
    case 'space':
      textArea.value += ' ';
      break;
    case 'arrowup':
      textArea.value += '↑';
      break;
    case 'arrowdown':
      textArea.value += '↓';
      break;
    case 'arrowleft':
      textArea.value += '←';
      break;
    case 'arrowright':
      textArea.value += '→';
      break;
    default:
      break;
  }
}

function backspace() {
  const cursorPosition = textArea.selectionStart;
  const textBeforeCursor = textArea.value.substring(0, cursorPosition - 1);
  const textAfterCursor = textArea.value.substring(cursorPosition);
  textArea.value = textBeforeCursor + textAfterCursor;
  textArea.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
}

// отсеиваю лишние кнопки, которых нет в клавиатуре

function checkCurrentButtons(arr, e) {
  const event = e.code.toLowerCase();
  if (!arr.includes(event) && !blockKeys.includes(event)) {
    e.preventDefault();
    blockKeys.push(event);
  }
}

// смена языка и загрузка его из local storage

function changeLang() {
  if (lang === 'Rus') {
    for (let i = 0; i < keysRus.length; i += 1) {
      keysEng[i].classList.add('hidden');
      keysRus[i].classList.remove('hidden');
    }
  } else {
    for (let i = 0; i < keysRus.length; i += 1) {
      keysEng[i].classList.remove('hidden');
      keysRus[i].classList.add('hidden');
    }
  }
}

// действия при активном shift

function activeShift() {
  if (lang === 'Rus') {
    for (let i = 0; i < shiftKeysRus.length; i += 1) {
      shiftKeysRus[i].classList.remove('hidden');
      keysRus[i].classList.add('hidden');
      keysEng[i].classList.add('hidden');
      shiftKeysEng[i].classList.add('hidden');
    }
  } else {
    for (let i = 0; i < shiftKeysRus.length; i += 1) {
      shiftKeysRus[i].classList.add('hidden');
      keysRus[i].classList.add('hidden');
      keysEng[i].classList.add('hidden');
      shiftKeysEng[i].classList.remove('hidden');
    }
  }
}

// действия при неактивном shift

function deactiveShift() {
  if (lang === 'Rus') {
    for (let i = 0; i < shiftKeysRus.length; i += 1) {
      shiftKeysRus[i].classList.add('hidden');
      keysRus[i].classList.remove('hidden');
      keysEng[i].classList.add('hidden');
      shiftKeysEng[i].classList.add('hidden');
    }
  } else {
    for (let i = 0; i < shiftKeysRus.length; i += 1) {
      shiftKeysRus[i].classList.add('hidden');
      keysRus[i].classList.add('hidden');
      keysEng[i].classList.remove('hidden');
      shiftKeysEng[i].classList.add('hidden');
    }
  }
}
