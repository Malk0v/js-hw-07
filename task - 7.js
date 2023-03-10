// ## Задание 7
// Напиши скрипт, который реагирует на изменение значения `input#font-size-control`
// (событие input) и изменяет инлайн-стиль `span#text` обновляя свойство
// `font-size`. В результате при перетаскивании ползунка будет меняться размер
// текста.

const controlSize = document.querySelector('input');
const text = document.querySelector('.text');
controlSize.addEventListener("input", handleInputRange);

function handleInputRange(event) {
  text.style.fontSize = event.currentTarget.value + "px";
};