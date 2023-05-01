const body = document.body,
  textArea = document.querySelector('.header__textarea'),
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
  ],
  keys = document.querySelectorAll('.keyboard__key');

let capslockActive = false,
  lang = 'rus';
const curentArr = [];

// записываем язык в local storage

keys.forEach((i) => {
  curentArr.push(i.classList[1]);
  i.addEventListener('click', (e) => {
    let event = new Event('keydown');
    let keyClick = e.target.classList[1];

    event.key = i.classList[1];
    console.log(keyClick);
    // console.dir(event);

    switch (keyClick) {
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
    }

    checkCaps(keyClick);
  });
});

function checkCurrentButtons(curentArr, e) {
  const event = e.code.toLowerCase();
  if (!curentArr.includes(event) && !blockKeys.includes(event)) {
    e.preventDefault();
    blockKeys.push(event);
  }
}

// body.innerHTML = `<div class="container"></div>`;

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  console.dir(e);

  checkCurrentButtons(curentArr, e);

  const keyPress = e.code.toLowerCase();

  checkCaps(keyPress);

  switch (keyPress) {
    case 'tab':
      textArea.value += '    ';
      break;
    case 'enter':
      textArea.value += '\n';
      break;
    case 'backspace':
      textArea.value = textArea.value.slice(0, -1);
      break;
  }

  if (keyPress.includes('shift')) {
    upperCaseBtn();
  }

  if ((keyPress === 'altleft' && e.shiftKey) || (keyPress === 'shiftleft' && e.altKey)) {
    if (lang === 'rus') {
      lang = 'eng';
      localStorage.setItem('lang', lang);
    } else {
      lang = 'rus';
      localStorage.setItem('lang', lang);
    }
  }

  // checkButtons(curentArr, e);

  keys.forEach((i) => {
    i.addEventListener('mousedown', () => {
      i.classList.add('keyboard__key_active');
    });
    i.addEventListener('mouseup', () => {
      i.classList.remove('keyboard__key_active');
    });
    i.addEventListener('mouseleave', () => {
      i.classList.remove('keyboard__key_active');
    });

    if (i.classList.contains(keyPress)) {
      i.classList.add('keyboard__key_active');
    }
  });

  if (!blockKeys.includes(keyPress)) {
    textArea.value += e.key;
  }
  // if (e.code.toLowerCase() = 'backspace') {
  //   console.log(textArea);
  // }
});

document.addEventListener('keyup', (e) => {
  const keyUp = e.code.toLowerCase();

  if (keyUp.includes('shift')) {
    lowerCaseBtn();
  }

  keys.forEach((i) => {
    if (i.classList.contains(e.code.toLowerCase())) {
      i.classList.remove('keyboard__key_active');
    }
  });
});

// function addActiveButton(element) {
//   element.classList.add('keyboard__key_active');
// }

function checkCaps(key) {
  if (key === 'capslock' && !capslockActive) {
    upperCaseBtn();
    capslockActive = true;
  } else if (key === 'capslock' && capslockActive) {
    lowerCaseBtn();
    capslockActive = false;
  }
}

function lowerCaseBtn() {
  keys.forEach((i) => {
    i.innerText = i.innerText.toLowerCase();
  });
}

function upperCaseBtn() {
  keys.forEach((i) => {
    if (!blockKeys.includes(i.classList[1])) {
      i.innerText = i.innerText.toUpperCase();
    }
  });
}
