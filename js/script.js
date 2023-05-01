import layout from './layout.js';
document.body.insertAdjacentHTML('afterbegin', layout);

// загрузка языка при запуске страницы
window.addEventListener('load', changeLang);

const textArea = document.querySelector('.header__textarea'),
  blockKeys = [
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
  ],
  keysRus = document.querySelectorAll('.keyboard__rus'),
  keysEng = document.querySelectorAll('.keyboard__eng'),
  shiftKeysRus = document.querySelectorAll('.keyboard__rus_active-shift'),
  shiftKeysEng = document.querySelectorAll('.keyboard__eng_active-shift'),
  keys = document.querySelectorAll('.keyboard__key'),
  capsIndicator = document.querySelector('.capslock__indicate');

let capslockActive = false,
  lang = localStorage.getItem('lang') ?? 'Rus';
const curentArr = [];

keys.forEach((i) => {
  curentArr.push(i.classList[1]);
  i.addEventListener('mousedown', (e) => {
    i.classList.add('keyboard__key_active');
    let keyClick = e.target.classList[1];

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
  // let cursorPosition = textArea.selectionStart;
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
    for (let i = 0; i < keysRus.length; i++) {
      keysRus[i].textContent = keysRus[i].textContent.toUpperCase();
      keysEng[i].textContent = keysEng[i].textContent.toUpperCase();
    }
  } else if (key === 'capslock' && capslockActive) {
    capslockActive = false;
    capsIndicator.classList.remove('show');
    for (let i = 0; i < keysRus.length; i++) {
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
      textArea.value = textArea.value.slice(0, -1);
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
  }
}

// отсеиваю лишние кнопки, которых нет в клавиатуре

function checkCurrentButtons(curentArr, e) {
  const event = e.code.toLowerCase();
  if (!curentArr.includes(event) && !blockKeys.includes(event)) {
    e.preventDefault();
    blockKeys.push(event);
  }
}

// смена языка и загрузка его из local storage

function changeLang() {
  if (lang === 'Rus') {
    keysEng.forEach((i) => {
      i.classList.add('hidden');
    });
    keysRus.forEach((i) => {
      i.classList.remove('hidden');
    });
  } else {
    keysEng.forEach((i) => {
      i.classList.remove('hidden');
    });
    keysRus.forEach((i) => {
      i.classList.add('hidden');
    });
  }
}

// действия при активном shift

function activeShift() {
  if (lang === 'Rus') {
    for (let i = 0; i < shiftKeysRus.length; i++) {
      shiftKeysRus[i].classList.remove('hidden');
      keysRus[i].classList.add('hidden');
      keysEng[i].classList.add('hidden');
      shiftKeysEng[i].classList.add('hidden');
    }
  } else {
    for (let i = 0; i < shiftKeysRus.length; i++) {
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
    for (let i = 0; i < shiftKeysRus.length; i++) {
      shiftKeysRus[i].classList.add('hidden');
      keysRus[i].classList.remove('hidden');
      keysEng[i].classList.add('hidden');
      shiftKeysEng[i].classList.add('hidden');
    }
  } else {
    for (let i = 0; i < shiftKeysRus.length; i++) {
      shiftKeysRus[i].classList.add('hidden');
      keysRus[i].classList.add('hidden');
      keysEng[i].classList.remove('hidden');
      shiftKeysEng[i].classList.add('hidden');
    }
  }
}
