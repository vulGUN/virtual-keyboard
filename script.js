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
    'space',
  ],
  keysRus = document.querySelectorAll('.keyboard__rus'),
  keysEng = document.querySelectorAll('.keyboard__eng'),
  shiftKeysRus = document.querySelectorAll('.keyboard__rus_active-shift'),
  shiftKeysEng = document.querySelectorAll('.keyboard__eng_active-shift'),
  keys = document.querySelectorAll('.keyboard__key');

let capslockActive = false,
  lang = localStorage.getItem('lang') ?? 'rus';
const curentArr = [];

keys.forEach((i) => {
  curentArr.push(i.classList[1]);
  i.addEventListener('click', (e) => {
    let keyClick = e.target.classList[1];
    if (!blockKeys.includes(i.classList[1])) {
      textArea.value += i.innerText;
    }
    // event.key = i.classList[1];
    // console.log(keyClick);
    // console.dir(event);

    checkSwitchBtn(keyClick);

    checkCaps(keyClick);
  });
});

// body.innerHTML = `<div class="container"></div>`;

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  console.dir(e);

  checkCurrentButtons(curentArr, e);

  const keyPress = e.code.toLowerCase();

  checkCaps(keyPress);

  checkSwitchBtn(keyPress);

  if (keyPress.includes('shift')) {
    // upperCaseBtn();
    if (lang === 'rus') {
      console.log('ok rus');
      shiftKeysRus.forEach((i) => {
        if (i.classList.contains('keyboard__rus_active-shift')) {
          i.classList.remove('hidden');
        } else {
          i.classList.add('hidden');
        }
      });
      keysRus.forEach((i) => {
        i.classList.add('hidden');
      });
      keysEng.forEach((i) => {
        i.classList.add('hidden');
      });
      shiftKeysEng.forEach((i) => {
        i.classList.add('hidden');
      });
    }
  }

  if ((keyPress === 'altleft' && e.ctrlKey) || (keyPress === 'controlleft' && e.altKey)) {
    if (lang === 'rus') {
      lang = 'eng';
      localStorage.setItem('lang', lang);
      changeLang();
      console.log('eng');
    } else {
      lang = 'rus';
      localStorage.setItem('lang', lang);
      changeLang();
      console.log('rus');
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

  keys.forEach((i) => {
    if (!blockKeys.includes(keyPress) && i.classList.contains(keyPress)) {
      textArea.value += i.innerText;
    }
  });
});

document.addEventListener('keyup', (e) => {
  const keyUp = e.code.toLowerCase();

  if (keyUp.includes('shift')) {
    // lowerCaseBtn();
    if (lang === 'rus') {
      shiftKeysRus.forEach((i) => {
        if (i.classList.contains('keyboard__rus_active-shift')) {
          i.classList.add('hidden');
        } else {
          i.classList.remove('hidden');
        }
      });
      keysRus.forEach((i) => {
        i.classList.remove('hidden');
      });
      keysEng.forEach((i) => {
        i.classList.add('hidden');
      });
      shiftKeysEng.forEach((i) => {
        i.classList.add('hidden');
      });
    }
  }

  keys.forEach((i) => {
    if (i.classList.contains(keyUp)) {
      i.classList.remove('keyboard__key_active');
    }
  });
});

// function addActiveButton(element) {
//   element.classList.add('keyboard__key_active');
// }

function checkCaps(key) {
  if (key === 'capslock' && !capslockActive) {
    // upperCaseBtn();
    capslockActive = true;
  } else if (key === 'capslock' && capslockActive) {
    // lowerCaseBtn();
    capslockActive = false;
  }
}

// function lowerCaseBtn() {
//   keys.forEach((i) => {
//     i.innerText = i.innerText.toLowerCase();
//   });
// }

// function upperCaseBtn() {
//   keys.forEach((i) => {
//     if (!blockKeys.includes(i.classList[1])) {
//       i.innerText = i.innerText.toUpperCase();
//     }
//   });
// }

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

function checkCurrentButtons(curentArr, e) {
  const event = e.code.toLowerCase();
  if (!curentArr.includes(event) && !blockKeys.includes(event)) {
    e.preventDefault();
    blockKeys.push(event);
  }
}

function changeLang() {
  const lang = localStorage.getItem('lang');
  if (lang === 'rus') {
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

window.addEventListener('load', changeLang);
