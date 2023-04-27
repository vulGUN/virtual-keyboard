const body = document.body;
const keys = document.querySelectorAll('.keyboard__key');
// class Key {
//   constructor(options) {
//     this.name = options.name;
//   }
// }

// body.innerHTML = `<div class="container"></div>`;

keys.forEach((i) => {
  i.addEventListener('mousedown', (e) => {
    i.classList.add('keyboard__key_active');
    // console.dir(e.target);
  });
  i.addEventListener('mouseup', () => {
    i.classList.remove('keyboard__key_active');
  });
  i.addEventListener('mouseleave', () => {
    i.classList.remove('keyboard__key_active');
  });
  document.addEventListener('keydown', (e) => {
    if (e.code.toLowerCase() === 'tab') {
      e.preventDefault();
    }
    if (i.classList.contains(e.code.toLowerCase())) {
      i.classList.add('keyboard__key_active');
    }
    // if (e.code.toLowerCase() === 'capslock') {
    //   console.log('active caps');
    // }
  });
  document.addEventListener('keyup', (e) => {
    if (i.classList.contains(e.code.toLowerCase())) {
      i.classList.remove('keyboard__key_active');
    }
  });
});

document.addEventListener('keydown', (e) => {
  console.dir(e.code.toLowerCase());
});
