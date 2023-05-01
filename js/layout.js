const layout = `
<header class="header container">
<h1 class="header__title">RSS virtual keybord</h1>
<textarea class="header__textarea" id="textarea" cols="30" rows="10"></textarea>
</header>
<main>
<section class="keyboard container">
  <div class="keyboard__line">
    <div class="keyboard__key backquote">
      <div class="keyboard__rus">ё</div>
      <div class="keyboard__eng hidden">\`</div>
      <div class="keyboard__rus_active-shift hidden">Ё</div>
      <div class="keyboard__eng_active-shift hidden">~</div>
    </div>
    <div class="keyboard__key digit1">
      <div class="keyboard__rus">1</div>
      <div class="keyboard__eng hidden">1</div>
      <div class="keyboard__rus_active-shift hidden">!</div>
      <div class="keyboard__eng_active-shift hidden">!</div>
    </div>
    <div class="keyboard__key digit2">
      <div class="keyboard__rus">2</div>
      <div class="keyboard__eng hidden">2</div>
      <div class="keyboard__rus_active-shift hidden">"</div>
      <div class="keyboard__eng_active-shift hidden">@</div>
    </div>
    <div class="keyboard__key digit3">
      <div class="keyboard__rus">3</div>
      <div class="keyboard__eng hidden">3</div>
      <div class="keyboard__rus_active-shift hidden">№</div>
      <div class="keyboard__eng_active-shift hidden">#</div>
    </div>
    <div class="keyboard__key digit4">
      <div class="keyboard__rus">4</div>
      <div class="keyboard__eng hidden">4</div>
      <div class="keyboard__rus_active-shift hidden">;</div>
      <div class="keyboard__eng_active-shift hidden">$</div>
    </div>
    <div class="keyboard__key digit5">
      <div class="keyboard__rus">5</div>
      <div class="keyboard__eng hidden">5</div>
      <div class="keyboard__rus_active-shift hidden">%</div>
      <div class="keyboard__eng_active-shift hidden">%</div>
    </div>
    <div class="keyboard__key digit6">
      <div class="keyboard__rus">6</div>
      <div class="keyboard__eng hidden">6</div>
      <div class="keyboard__rus_active-shift hidden">:</div>
      <div class="keyboard__eng_active-shift hidden">^</div>
    </div>
    <div class="keyboard__key digit7">
      <div class="keyboard__rus">7</div>
      <div class="keyboard__eng hidden">7</div>
      <div class="keyboard__rus_active-shift hidden">?</div>
      <div class="keyboard__eng_active-shift hidden">&</div>
    </div>
    <div class="keyboard__key digit8">
      <div class="keyboard__rus">8</div>
      <div class="keyboard__eng hidden">8</div>
      <div class="keyboard__rus_active-shift hidden">*</div>
      <div class="keyboard__eng_active-shift hidden">*</div>
    </div>
    <div class="keyboard__key digit9">
      <div class="keyboard__rus">9</div>
      <div class="keyboard__eng hidden">9</div>
      <div class="keyboard__rus_active-shift hidden">(</div>
      <div class="keyboard__eng_active-shift hidden">(</div>
    </div>
    <div class="keyboard__key digit0">
      <div class="keyboard__rus">0</div>
      <div class="keyboard__eng hidden">0</div>
      <div class="keyboard__rus_active-shift hidden">)</div>
      <div class="keyboard__eng_active-shift hidden">)</div>
    </div>
    <div class="keyboard__key minus">
      <div class="keyboard__rus">-</div>
      <div class="keyboard__eng hidden">-</div>
      <div class="keyboard__rus_active-shift hidden">_</div>
      <div class="keyboard__eng_active-shift hidden">_</div>
    </div>
    <div class="keyboard__key equal">
      <div class="keyboard__rus">=</div>
      <div class="keyboard__eng hidden">=</div>
      <div class="keyboard__rus_active-shift hidden">+</div>
      <div class="keyboard__eng_active-shift hidden">+</div>
    </div>
    <div class="keyboard__key backspace">← back</div>
  </div>
  <div class="keyboard__line">
    <div class="keyboard__key tab">tab</div>
    <div class="keyboard__key keyq">
      <div class="keyboard__rus">й</div>
      <div class="keyboard__eng hidden">q</div>
      <div class="keyboard__rus_active-shift hidden">Й</div>
      <div class="keyboard__eng_active-shift hidden">Q</div>
    </div>
    <div class="keyboard__key keyw">
      <div class="keyboard__rus">ц</div>
      <div class="keyboard__eng hidden">w</div>
      <div class="keyboard__rus_active-shift hidden">Ц</div>
      <div class="keyboard__eng_active-shift hidden">W</div>
    </div>
    <div class="keyboard__key keye">
      <div class="keyboard__rus">у</div>
      <div class="keyboard__eng hidden">e</div>
      <div class="keyboard__rus_active-shift hidden">У</div>
      <div class="keyboard__eng_active-shift hidden">E</div>
    </div>
    <div class="keyboard__key keyr">
      <div class="keyboard__rus">к</div>
      <div class="keyboard__eng hidden">r</div>
      <div class="keyboard__rus_active-shift hidden">К</div>
      <div class="keyboard__eng_active-shift hidden">R</div>
    </div>
    <div class="keyboard__key keyt">
      <div class="keyboard__rus">е</div>
      <div class="keyboard__eng hidden">t</div>
      <div class="keyboard__rus_active-shift hidden">Е</div>
      <div class="keyboard__eng_active-shift hidden">T</div>
    </div>
    <div class="keyboard__key keyy">
      <div class="keyboard__rus">н</div>
      <div class="keyboard__eng hidden">y</div>
      <div class="keyboard__rus_active-shift hidden">Н</div>
      <div class="keyboard__eng_active-shift hidden">Y</div>
    </div>
    <div class="keyboard__key keyu">
      <div class="keyboard__rus">г</div>
      <div class="keyboard__eng hidden">u</div>
      <div class="keyboard__rus_active-shift hidden">Г</div>
      <div class="keyboard__eng_active-shift hidden">U</div>
    </div>
    <div class="keyboard__key keyi">
      <div class="keyboard__rus">ш</div>
      <div class="keyboard__eng hidden">i</div>
      <div class="keyboard__rus_active-shift hidden">Ш</div>
      <div class="keyboard__eng_active-shift hidden">I</div>
    </div>
    <div class="keyboard__key keyo">
      <div class="keyboard__rus">щ</div>
      <div class="keyboard__eng hidden">o</div>
      <div class="keyboard__rus_active-shift hidden">Щ</div>
      <div class="keyboard__eng_active-shift hidden">O</div>
    </div>
    <div class="keyboard__key keyp">
      <div class="keyboard__rus">з</div>
      <div class="keyboard__eng hidden">p</div>
      <div class="keyboard__rus_active-shift hidden">З</div>
      <div class="keyboard__eng_active-shift hidden">P</div>
    </div>
    <div class="keyboard__key bracketleft">
      <div class="keyboard__rus">х</div>
      <div class="keyboard__eng hidden">[</div>
      <div class="keyboard__rus_active-shift hidden">Х</div>
      <div class="keyboard__eng_active-shift hidden">{</div>
    </div>
    <div class="keyboard__key bracketright">
      <div class="keyboard__rus">ъ</div>
      <div class="keyboard__eng hidden">]</div>
      <div class="keyboard__rus_active-shift hidden">Ъ</div>
      <div class="keyboard__eng_active-shift hidden">}</div>
    </div>
    <div class="keyboard__key backslash">
      <div class="keyboard__rus">\</div>
      <div class="keyboard__eng hidden">\</div>
      <div class="keyboard__rus_active-shift hidden">/</div>
      <div class="keyboard__eng_active-shift hidden">|</div>
    </div>
  </div>
  <div class="keyboard__line">
    <div class="keyboard__key capslock">caps
      <div class="capslock__indicate"></div>
    </div>
    <div class="keyboard__key keya">
      <div class="keyboard__rus">ф</div>
      <div class="keyboard__eng hidden">a</div>
      <div class="keyboard__rus_active-shift hidden">Ф</div>
      <div class="keyboard__eng_active-shift hidden">A</div>
    </div>
    <div class="keyboard__key keys">
      <div class="keyboard__rus">ы</div>
      <div class="keyboard__eng hidden">s</div>
      <div class="keyboard__rus_active-shift hidden">Ы</div>
      <div class="keyboard__eng_active-shift hidden">S</div>
    </div>
    <div class="keyboard__key keyd">
      <div class="keyboard__rus">в</div>
      <div class="keyboard__eng hidden">d</div>
      <div class="keyboard__rus_active-shift hidden">В</div>
      <div class="keyboard__eng_active-shift hidden">D</div>
    </div>
    <div class="keyboard__key keyf">
      <div class="keyboard__rus">а</div>
      <div class="keyboard__eng hidden">f</div>
      <div class="keyboard__rus_active-shift hidden">А</div>
      <div class="keyboard__eng_active-shift hidden">F</div>
    </div>
    <div class="keyboard__key keyg">
      <div class="keyboard__rus">п</div>
      <div class="keyboard__eng hidden">g</div>
      <div class="keyboard__rus_active-shift hidden">П</div>
      <div class="keyboard__eng_active-shift hidden">G</div>
    </div>
    <div class="keyboard__key keyh">
      <div class="keyboard__rus">р</div>
      <div class="keyboard__eng hidden">h</div>
      <div class="keyboard__rus_active-shift hidden">Р</div>
      <div class="keyboard__eng_active-shift hidden">H</div>
    </div>
    <div class="keyboard__key keyj">
      <div class="keyboard__rus">о</div>
      <div class="keyboard__eng hidden">j</div>
      <div class="keyboard__rus_active-shift hidden">О</div>
      <div class="keyboard__eng_active-shift hidden">J</div>
    </div>
    <div class="keyboard__key keyk">
      <div class="keyboard__rus">л</div>
      <div class="keyboard__eng hidden">k</div>
      <div class="keyboard__rus_active-shift hidden">Л</div>
      <div class="keyboard__eng_active-shift hidden">K</div>
    </div>
    <div class="keyboard__key keyl">
      <div class="keyboard__rus">д</div>
      <div class="keyboard__eng hidden">l</div>
      <div class="keyboard__rus_active-shift hidden">Д</div>
      <div class="keyboard__eng_active-shift hidden">L</div>
    </div>
    <div class="keyboard__key semicolon">
      <div class="keyboard__rus">ж</div>
      <div class="keyboard__eng hidden">;</div>
      <div class="keyboard__rus_active-shift hidden">Ж</div>
      <div class="keyboard__eng_active-shift hidden">:</div>
    </div>
    <div class="keyboard__key quote">
      <div class="keyboard__rus">э</div>
      <div class="keyboard__eng hidden">'</div>
      <div class="keyboard__rus_active-shift hidden">Э</div>
      <div class="keyboard__eng_active-shift hidden">"</div>
    </div>
    <div class="keyboard__key enter">enter</div>
  </div>
  <div class="keyboard__line">
    <div class="keyboard__key shift shiftleft">shift</div>
    <div class="keyboard__key keyz">
      <div class="keyboard__rus">я</div>
      <div class="keyboard__eng hidden">z</div>
      <div class="keyboard__rus_active-shift hidden">Я</div>
      <div class="keyboard__eng_active-shift hidden">Z</div>
    </div>
    <div class="keyboard__key keyx">
      <div class="keyboard__rus">ч</div>
      <div class="keyboard__eng hidden">x</div>
      <div class="keyboard__rus_active-shift hidden">Ч</div>
      <div class="keyboard__eng_active-shift hidden">X</div>
    </div>
    <div class="keyboard__key keyc">
      <div class="keyboard__rus">с</div>
      <div class="keyboard__eng hidden">c</div>
      <div class="keyboard__rus_active-shift hidden">С</div>
      <div class="keyboard__eng_active-shift hidden">C</div>
    </div>
    <div class="keyboard__key keyv">
      <div class="keyboard__rus">м</div>
      <div class="keyboard__eng hidden">v</div>
      <div class="keyboard__rus_active-shift hidden">М</div>
      <div class="keyboard__eng_active-shift hidden">V</div>
    </div>
    <div class="keyboard__key keyb">
      <div class="keyboard__rus">и</div>
      <div class="keyboard__eng hidden">b</div>
      <div class="keyboard__rus_active-shift hidden">И</div>
      <div class="keyboard__eng_active-shift hidden">B</div>
    </div>
    <div class="keyboard__key keyn">
      <div class="keyboard__rus">т</div>
      <div class="keyboard__eng hidden">n</div>
      <div class="keyboard__rus_active-shift hidden">Т</div>
      <div class="keyboard__eng_active-shift hidden">N</div>
    </div>
    <div class="keyboard__key keym">
      <div class="keyboard__rus">ь</div>
      <div class="keyboard__eng hidden">m</div>
      <div class="keyboard__rus_active-shift hidden">Ь</div>
      <div class="keyboard__eng_active-shift hidden">M</div>
    </div>
    <div class="keyboard__key comma">
      <div class="keyboard__rus">б</div>
      <div class="keyboard__eng hidden">,</div>
      <div class="keyboard__rus_active-shift hidden">Б</div>
      <div class="keyboard__eng_active-shift hidden">
        < </div>
      </div>
      <div class="keyboard__key period">
        <div class="keyboard__rus">ю</div>
        <div class="keyboard__eng hidden">.</div>
        <div class="keyboard__rus_active-shift hidden">Ю</div>
        <div class="keyboard__eng_active-shift hidden">></div>
      </div>
      <div class="keyboard__key slash">
        <div class="keyboard__rus">.</div>
        <div class="keyboard__eng hidden">/</div>
        <div class="keyboard__rus_active-shift hidden">,</div>
        <div class="keyboard__eng_active-shift hidden">?</div>
      </div>
      <div class="keyboard__key shift shiftright">shift</div>
    </div>
    <div class="keyboard__line">
      <div class="keyboard__key controlleft">ctrl</div>
      <div class="keyboard__key metaleft">win</div>
      <div class="keyboard__key altleft">alt</div>
      <div class="keyboard__key space">________________</div>
      <div class="keyboard__key altright">alt</div>
      <div class="keyboard__key arrowleft">←</div>
      <div class="arrows">
        <div class="keyboard__key arrowup">↑</div>
        <div class="keyboard__key arrowdown">↓</div>
      </div>
      <div class="keyboard__key arrowright">→</div>
      <div class="keyboard__key controlright">ctrl</div>
    </div>
</section>
</main>
<footer class="footer container">
<p class="footer__text">Клавиатура создана в операционной системе Windows</p>
<p class="footer__text">Для переключения языка комбинация: левыe ctrl + alt</p>
</footer>
`;

export default layout;
