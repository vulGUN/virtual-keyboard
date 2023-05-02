const keys = [
  [
    {
      backquote: {
        class: ['keyboard__key', 'backquote'],
        keyboard__rus: 'ё',
        keyboard__eng: '`',
        keyboard__rus_activeshift: 'Ё',
        keyboard__eng_activeshift: '~',
      },
    },
    {
      digit1: {
        class: ['keyboard__key', 'digit1'],
        keyboard__rus: '1',
        keyboard__eng: '1',
        keyboard__rus_activeshift: '!',
        keyboard__eng_activeshift: '!',
      },
    },
    {
      digit2: {
        class: ['keyboard__key', 'digit2'],
        keyboard__rus: '2',
        keyboard__eng: '2',
        keyboard__rus_activeshift: '"',
        keyboard__eng_activeshift: '@',
      },
    },
    {
      digit3: {
        class: ['keyboard__key', 'digit3'],
        keyboard__rus: '3',
        keyboard__eng: '3',
        keyboard__rus_activeshift: '№',
        keyboard__eng_activeshift: '#',
      },
    },
    {
      digit4: {
        class: ['keyboard__key', 'digit4'],
        keyboard__rus: '4',
        keyboard__eng: '4',
        keyboard__rus_activeshift: ';',
        keyboard__eng_activeshift: '$',
      },
    },
    {
      digit5: {
        class: ['keyboard__key', 'digit5'],
        keyboard__rus: '5',
        keyboard__eng: '5',
        keyboard__rus_activeshift: '%',
        keyboard__eng_activeshift: '%',
      },
    },
    {
      digit6: {
        class: ['keyboard__key', 'digit6'],
        keyboard__rus: '6',
        keyboard__eng: '6',
        keyboard__rus_activeshift: ':',
        keyboard__eng_activeshift: '^',
      },
    },
    {
      digit7: {
        class: ['keyboard__key', 'digit7'],
        keyboard__rus: '7',
        keyboard__eng: '7',
        keyboard__rus_activeshift: '?',
        keyboard__eng_activeshift: '&',
      },
    },
    {
      digit8: {
        class: ['keyboard__key', 'digit8'],
        keyboard__rus: '8',
        keyboard__eng: '8',
        keyboard__rus_activeshift: '*',
        keyboard__eng_activeshift: '*',
      },
    },
    {
      digit9: {
        class: ['keyboard__key', 'digit9'],
        keyboard__rus: '9',
        keyboard__eng: '9',
        keyboard__rus_activeshift: '(',
        keyboard__eng_activeshift: '(',
      },
    },
    {
      digit0: {
        class: ['keyboard__key', 'digit0'],
        keyboard__rus: '0',
        keyboard__eng: '0',
        keyboard__rus_activeshift: ')',
        keyboard__eng_activeshift: ')',
      },
    },
    {
      minus: {
        class: ['keyboard__key', 'minus'],
        keyboard__rus: '-',
        keyboard__eng: '-',
        keyboard__rus_activeshift: '_',
        keyboard__eng_activeshift: '_',
      },
    },
    {
      equal: {
        class: ['keyboard__key', 'equal'],
        keyboard__rus: '=',
        keyboard__eng: '=',
        keyboard__rus_activeshift: '+',
        keyboard__eng_activeshift: '+',
      },
    },
    {
      backspace: {
        class: ['keyboard__key', 'backspace'],
        value: '← back',
      },
    },
  ],
  [
    {
      tab: {
        class: ['keyboard__key', 'tab'],
        value: 'tab',
      },
    },
    {
      keyq: {
        class: ['keyboard__key', 'keyq'],
        keyboard__rus: 'й',
        keyboard__eng: 'q',
        keyboard__rus_activeshift: 'Й',
        keyboard__eng_activeshift: 'Q',
      },
    },
    {
      keyw: {
        class: ['keyboard__key', 'keyw'],
        keyboard__rus: 'ц',
        keyboard__eng: 'w',
        keyboard__rus_activeshift: 'Ц',
        keyboard__eng_activeshift: 'W',
      },
    },
    {
      keye: {
        class: ['keyboard__key', 'keye'],
        keyboard__rus: 'у',
        keyboard__eng: 'e',
        keyboard__rus_activeshift: 'У',
        keyboard__eng_activeshift: 'E',
      },
    },
    {
      keyr: {
        class: ['keyboard__key', 'keyr'],
        keyboard__rus: 'к',
        keyboard__eng: 'r',
        keyboard__rus_activeshift: 'К',
        keyboard__eng_activeshift: 'R',
      },
    },
    {
      keyt: {
        class: ['keyboard__key', 'keyt'],
        keyboard__rus: 'е',
        keyboard__eng: 't',
        keyboard__rus_activeshift: 'Е',
        keyboard__eng_activeshift: 'T',
      },
    },
    {
      keyy: {
        class: ['keyboard__key', 'keyy'],
        keyboard__rus: 'н',
        keyboard__eng: 'y',
        keyboard__rus_activeshift: 'Н',
        keyboard__eng_activeshift: 'Y',
      },
    },
    {
      keyu: {
        class: ['keyboard__key', 'keyu'],
        keyboard__rus: 'г',
        keyboard__eng: 'u',
        keyboard__rus_activeshift: 'Г',
        keyboard__eng_activeshift: 'U',
      },
    },
    {
      keyi: {
        class: ['keyboard__key', 'keyi'],
        keyboard__rus: 'ш',
        keyboard__eng: 'i',
        keyboard__rus_activeshift: 'Ш',
        keyboard__eng_activeshift: 'I',
      },
    },
    {
      keyo: {
        class: ['keyboard__key', 'keyo'],
        keyboard__rus: 'щ',
        keyboard__eng: 'o',
        keyboard__rus_activeshift: 'Щ',
        keyboard__eng_activeshift: 'O',
      },
    },
    {
      keyp: {
        class: ['keyboard__key', 'keyp'],
        keyboard__rus: 'з',
        keyboard__eng: 'p',
        keyboard__rus_activeshift: 'З',
        keyboard__eng_activeshift: 'P',
      },
    },
    {
      bracketleft: {
        class: ['keyboard__key', 'bracketleft'],
        keyboard__rus: 'х',
        keyboard__eng: '[',
        keyboard__rus_activeshift: 'Х',
        keyboard__eng_activeshift: '{',
      },
    },
    {
      bracketright: {
        class: ['keyboard__key', 'bracketright'],
        keyboard__rus: 'ъ',
        keyboard__eng: ']',
        keyboard__rus_activeshift: 'Ъ',
        keyboard__eng_activeshift: '}',
      },
    },
    {
      backslash: {
        class: ['keyboard__key', 'backslash'],
        keyboard__rus: '\\',
        keyboard__eng: '\\',
        keyboard__rus_activeshift: '/',
        keyboard__eng_activeshift: '|',
      },
    },
  ],
  [
    {
      capslock: {
        class: ['keyboard__key', 'capslock'],
        value: 'caps',
      },
    },
    {
      keya: {
        class: ['keyboard__key', 'keya'],
        keyboard__rus: 'ф',
        keyboard__eng: 'a',
        keyboard__rus_activeshift: 'Ф',
        keyboard__eng_activeshift: 'A',
      },
    },
    {
      keys: {
        class: ['keyboard__key', 'keys'],
        keyboard__rus: 'ы',
        keyboard__eng: 's',
        keyboard__rus_activeshift: 'Ы',
        keyboard__eng_activeshift: 'S',
      },
    },
    {
      keyd: {
        class: ['keyboard__key', 'keyd'],
        keyboard__rus: 'в',
        keyboard__eng: 'd',
        keyboard__rus_activeshift: 'В',
        keyboard__eng_activeshift: 'D',
      },
    },
    {
      keyf: {
        class: ['keyboard__key', 'keyf'],
        keyboard__rus: 'а',
        keyboard__eng: 'f',
        keyboard__rus_activeshift: 'А',
        keyboard__eng_activeshift: 'F',
      },
    },
    {
      keyg: {
        class: ['keyboard__key', 'keyg'],
        keyboard__rus: 'п',
        keyboard__eng: 'g',
        keyboard__rus_activeshift: 'П',
        keyboard__eng_activeshift: 'G',
      },
    },
    {
      keyh: {
        class: ['keyboard__key', 'keyh'],
        keyboard__rus: 'р',
        keyboard__eng: 'h',
        keyboard__rus_activeshift: 'Р',
        keyboard__eng_activeshift: 'H',
      },
    },
    {
      keyj: {
        class: ['keyboard__key', 'keyj'],
        keyboard__rus: 'о',
        keyboard__eng: 'j',
        keyboard__rus_activeshift: 'О',
        keyboard__eng_activeshift: 'J',
      },
    },
    {
      keyk: {
        class: ['keyboard__key', 'keyk'],
        keyboard__rus: 'л',
        keyboard__eng: 'k',
        keyboard__rus_activeshift: 'Л',
        keyboard__eng_activeshift: 'K',
      },
    },
    {
      keyl: {
        class: ['keyboard__key', 'keyl'],
        keyboard__rus: 'д',
        keyboard__eng: 'l',
        keyboard__rus_activeshift: 'Д',
        keyboard__eng_activeshift: 'L',
      },
    },
    {
      semicolon: {
        class: ['keyboard__key', 'semicolon'],
        keyboard__rus: 'ж',
        keyboard__eng: ';',
        keyboard__rus_activeshift: 'Ж',
        keyboard__eng_activeshift: ':',
      },
    },
    {
      quote: {
        class: ['keyboard__key', 'quote'],
        keyboard__rus: 'ъ',
        keyboard__eng: "'",
        keyboard__rus_activeshift: 'Ъ',
        keyboard__eng_activeshift: '"',
      },
    },
    {
      enter: {
        class: ['keyboard__key', 'enter'],
        value: 'enter',
      },
    },
  ],
  [
    {
      shift: {
        class: ['keyboard__key', 'shift', 'shiftleft'],
        value: 'shift',
      },
    },
    {
      keyz: {
        class: ['keyboard__key', 'keyz'],
        keyboard__rus: 'я',
        keyboard__eng: 'z',
        keyboard__rus_activeshift: 'Я',
        keyboard__eng_activeshift: 'Z',
      },
    },
    {
      keyx: {
        class: ['keyboard__key', 'keyx'],
        keyboard__rus: 'ч',
        keyboard__eng: 'x',
        keyboard__rus_activeshift: 'Ч',
        keyboard__eng_activeshift: 'X',
      },
    },
    {
      keyc: {
        class: ['keyboard__key', 'keyc'],
        keyboard__rus: 'с',
        keyboard__eng: 'c',
        keyboard__rus_activeshift: 'С',
        keyboard__eng_activeshift: 'C',
      },
    },
    {
      keyv: {
        class: ['keyboard__key', 'keyv'],
        keyboard__rus: 'м',
        keyboard__eng: 'v',
        keyboard__rus_activeshift: 'М',
        keyboard__eng_activeshift: 'V',
      },
    },
    {
      keyb: {
        class: ['keyboard__key', 'keyb'],
        keyboard__rus: 'и',
        keyboard__eng: 'b',
        keyboard__rus_activeshift: 'И',
        keyboard__eng_activeshift: 'B',
      },
    },
    {
      keyn: {
        class: ['keyboard__key', 'keyn'],
        keyboard__rus: 'т',
        keyboard__eng: 'n',
        keyboard__rus_activeshift: 'Т',
        keyboard__eng_activeshift: 'N',
      },
    },
    {
      keym: {
        class: ['keyboard__key', 'keym'],
        keyboard__rus: 'ь',
        keyboard__eng: 'm',
        keyboard__rus_activeshift: 'Ь',
        keyboard__eng_activeshift: 'M',
      },
    },
    {
      comma: {
        class: ['keyboard__key', 'comma'],
        keyboard__rus: 'б',
        keyboard__eng: ',',
        keyboard__rus_activeshift: 'Б',
        keyboard__eng_activeshift: '<',
      },
    },
    {
      period: {
        class: ['keyboard__key', 'period'],
        keyboard__rus: 'ю',
        keyboard__eng: '.',
        keyboard__rus_activeshift: 'Ю',
        keyboard__eng_activeshift: '>',
      },
    },
    {
      slash: {
        class: ['keyboard__key', 'slash'],
        keyboard__rus: '.',
        keyboard__eng: '/',
        keyboard__rus_activeshift: ',',
        keyboard__eng_activeshift: '?',
      },
    },
    {
      shift: {
        class: ['keyboard__key', 'shift', 'shiftright'],
        value: 'shift',
      },
    },
  ],
  [
    {
      controlleft: {
        class: ['keyboard__key', 'controlleft'],
        value: 'ctrl',
      },
    },
    {
      metaleft: {
        class: ['keyboard__key', 'metaleft'],
        value: 'win',
      },
    },
    {
      altleft: {
        class: ['keyboard__key', 'altleft'],
        value: 'alt',
      },
    },
    {
      space: {
        class: ['keyboard__key', 'space'],
        value: '________________',
      },
    },
    {
      altright: {
        class: ['keyboard__key', 'altright'],
        value: 'alt',
      },
    },
    {
      arrowleft: {
        class: ['keyboard__key', 'arrowleft'],
        value: '←',
      },
    },
    {
      arrows: {
        class: ['keyboard__key', 'arrows'],
        arrowup: {
          class: ['keyboard__key', 'arrowup'],
          value: '↑',
        },
        arrowdown: {
          class: ['keyboard__key', 'arrowdown'],
          value: '↓',
        },
      },
    },
    {
      arrowright: {
        class: ['keyboard__key', 'arrowright'],
        value: '→',
      },
    },
    {
      controlright: {
        class: ['keyboard__key', 'controlright'],
        value: 'ctrl',
      },
    },
  ],
];

export default keys;
