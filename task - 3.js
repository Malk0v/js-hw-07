// ## Задание 3
// Напиши скрипт для создания галлереи изображений по массиву данных.

// В HTML есть список `ul#gallery`.
// <ul id="gallery"></ul>

// Используй массив объектов `images` для создания тегов `img` вложенных в `li`.
// Для создания разметки используй шаблонные строки и `insertAdjacentHTML()`.

// - Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// - Добавь минимальное оформление галереи флексбоксами или гридами через
//   css-классы.


const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
]; 

const imgCreated = document.querySelector('#gallery')
const magicBtn = document.querySelector('.magicBtn');
const magicBody = document.querySelector('body')

magicBtn.addEventListener('click', () => {
    magicBody.classList.add('body_style');
    const galleryRef = image => {
    const { url ,alt } = image;
        return `<li class='pic'><img src="${url}" alt="${alt}" width = '125px'></li>`;
};

const galleryEl = document.querySelector('#gallery')
const createdGallery = images.map(galleryRef).join('');
galleryEl.insertAdjacentHTML('beforeend', createdGallery);
console.log(createdGallery);
});


// const imgCreated = document.querySelector('#gallery')

// const image = document.createElement("img");
// image.src = `${images.url}`;
// image.alt = `${images.alt}`;
// console.log(image);

// imgCreated.insertAdjacentHTML('beforeend', image);
// console.log(createdGallery);





// Примерно тоже но через креате елемент 

// const imgCreated = document.querySelector('#gallery')
// const navRef = document.querySelector('#ingredients');
// console.log(navRef);
// const magicBtn = document.querySelector('.magicBtn');

// magicBtn.addEventListener('click', () => {
//    const elements = images.map(el => {
//     const imgRef = document.createElement('img');
//     imgRef.classList.add('pic');
//     imgRef.src = el.url;
//     imgRef.alt = el.alt;
//     imgRef.width = 300;
//     return imgRef;
// });
// imgCreated.append(...elements);
// navRef.append('Makkis ');
// });



//================================//

////функция для создания колекции разметки 

// const makeColorPickerOptions = options => {
//     return options.map(option => {
//         const buttonEl = document.createElement('button');
//         buttonEl.type = 'button';
//         buttonEl.classList.add('color-picker__option');
//         buttonEl.textContent = option.label;
//         buttonEl.style.backgroundColor = option.color;
//         return buttonEl;
//     });
// };

// const elements = makeColorPickerOptions(colorPicker0ptions) ;
// colorPickerContainerEl.append(...elements);

//===============================//

// // функция которая принимает масив обьектов и подставляет значения 

//const productsContainerEl = document. querySelector(' js-products');

// const makeProductCard = ({ name, description, price }) => {
//     const productEl = document.createElement('article');
//     productEl.classList.add('product');

//     const nameEl = document.createElement('h2');
//     nameEl.textContent = name;
//     nameEl.classList.add('product_ name');

//     const descrEl = document.createElement('p');
//     descrEl.textContent = description;
//     descrEl.classList.add('product__descr');

//     const priceEl = document.createElement('p');
//     priceEl.textContent = `Цена: ${price} кредитов`;
//     priceEl.classList.add('product__price');
//     productEl.append(nameEl, descrEl, priceEl);
    
//     return productEl;
// };
// // console. log(makeProductCard(products[1]));
// const elements = products.map(makeProductCard);

// console.log(elements);

//productsContainerEl.append(..elements);





