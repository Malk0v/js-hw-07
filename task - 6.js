// ## Задание 6
// <input type="text" id="validation-input" data-length="6" placeholder="Введи 6 символов"/>

// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое
// на правильное количество символов.

// - Сколько символов должно быть в инпуте, указывается в его атрибуте
//   `data-length`.
// - Если введено подходящее количество, то `border` инпута становится зеленым,
//   если неправильное - красным.

const validationInput = document.querySelector('#validation-input');
validationInput.addEventListener('blur', onInputBlur);

function onInputBlur() {
 if (event.currentTarget.value.length <= validationInput.getAttribute('data-length')) {
        console.log('+');
        validationInput.classList.remove('invalid')
        validationInput.classList.add('valid');
    } else {
    console.log('-');
    validationInput.classList.add('invalid');
    }
};