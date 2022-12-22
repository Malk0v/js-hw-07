// ## Задание 2
// В HTML есть пустой список `ul#ingredients`.
// <ul id="ingredients"></ul>
// В JS есть массив строк.

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// Напиши скрипт, который для каждого элемента массива `ingredients` создаст
// отдельный `li`, после чего вставит все `li` за одну операцию в список
// `ul.ingredients`. Для создания DOM-узлов используй `document.createElement()`.
const navRef = document.querySelector('#ingredients');
console.log(navRef);

const magicBtn = document.querySelector('.magicBtn');

magicBtn.addEventListener('click', () => {
    const potato = document.createElement('li');
    potato.textContent = 'Картошка';

    const marsh = document.createElement('li');
    marsh.textContent = 'Грибы';

    const chest = document.createElement('li');
    chest.textContent = 'Чеснок';

    const tomato = document.createElement('li');
    tomato.textContent = 'Помидоры';

    const green = document.createElement('li');
    green.textContent = 'Зелень';

    const priv = document.createElement('li');
    priv.textContent = 'Приправы';
    
    navRef.append(potato, marsh, chest, tomato, green, priv);
});