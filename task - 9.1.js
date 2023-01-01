// ## Задание 9//Напиши скрипт, который изменяет цвета фона элемента         
//<body>` через инлайн стиль
//при клике на `button.change-color` и выводит значение цвета в `span.color`.
//Для генерации случайного цвета используй функцию `getRandomHexColor`.  

        // <div class="widget">
        //     <p>Background color: <span class="color">-</span></p>
        //     <button type="button" class="change-color">Change color</button>
        // </div>

       
const changeBtn = document.querySelector('.change-color');
const textColorNumber = document.querySelector('.color');
const allColor = document.querySelector('.a');

changeBtn.addEventListener('click', () => {
    allColor.style.fontFamily = 'fantasy';
    allColor.style.backgroundColor = getRandomHexColor();
    textColorNumber.textContent = allColor.style.backgroundColor;
}); 

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

