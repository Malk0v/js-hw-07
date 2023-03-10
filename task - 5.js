// ## Задание 5

// Напиши скрипт который, при наборе текста в инпуте `input#name-input` (событие
// input), подставляет его текущее значение в `span#name-output`. Если инпут
// пустой, в спане должна отображаться строка `'незнакомец'`.

const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (input.value == 0) {
        span.textContent = 'незнакомец'
    } else
    { span.textContent = event.currentTarget.value };
};