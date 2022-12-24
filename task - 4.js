// ## Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
// значение счетчика на `1`.

// - Создай переменную `counterValue` в которой будет хранится текущее значение
//   счетчика.
// - Создай функции `increment` и `decrement` для увеличения и уменьшения значения
//   счетчика
// - Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

const onCounterValue = document.querySelector('#value');
const decrementRef = document.querySelector('[data-action="decrement"]');
const incrementRef = document.querySelector('[data-action="increment"]');
const updateValue = document.querySelector('[data-action="updateValue"]');

let counterValue = 0;

const updateValueUi = () => {
    onCounterValue.textContent = counterValue;
};

function onUpKeyPress(event) {
    const ARROWuP_KEY_CODE = 'ArrowUp'
    const isEscKey = event.code === ARROWuP_KEY_CODE;
    if (isEscKey) {
        increment();
    }
};

function onDownKeyPress(event) {
    const ARROWdOWN_KEY_CODE = 'ArrowDown'
    const isEscKey = event.code === ARROWdOWN_KEY_CODE;
    if (isEscKey) {
        decrement();
    }
};

const increment = () => {
    counterValue += 1;
    updateValueUi();
    console.log('click +');
};

const decrement = () => {
    counterValue -= 1;
    updateValueUi();
    console.log('click -');
};

incrementRef.addEventListener('click', increment);
decrementRef.addEventListener('click', decrement);

window.addEventListener('keydown', onUpKeyPress);
window.addEventListener('keydown', onDownKeyPress);


function consol() {
    console.log(event)
}
window.addEventListener('keydown' ,consol);



// const onCounterValue = document.querySelector('#value');
// const decrementRef = document.querySelector('[data-action="decrement"]');
// const incrementRef = document.querySelector('[data-action="increment"]');
// const updateValue = document.querySelector('[data-action="updateValue"]');

// let counterValue = 0;

// const increment = () => {
//     counterValue += 1;
//     console.log('click +');
// };

// const decrement = () => {
//     counterValue -= 1;
//     console.log('click -');
// };

// const updateValueUi = () => {
//     onCounterValue.textContent = counterValue;
// }

// incrementRef.addEventListener('click', increment);
// decrementRef.addEventListener('click', decrement);
// updateValue.addEventListener('click', updateValueUi);



// const CounterPlugin = function ({rootSelector,initialValue = 0,step = 1} = {}) {
//     this._value = initialValue;
//     this._step = step;

//     this._refs = this._getRefs(rootSelector);

//     this._bindEvents()
//     this.updateValueUi()
// };

// CounterPlugin.prototype._getRefs = function (rootSelector) {
//     const refs = {};
//     refs.container = document.querySelector(rootSelector);
//     refs.incrementBtn = refs.container.querySelector('[data-increment]');
//     refs.decrementBtn = refs.container.querySelector('[data-decrement]');
//     refs.value = refs.container.querySelector('[data-value]');

//     return refs
// };

// CounterPlugin.prototype._bindEvents = function () {
//     this._refs.incrementBtn.addEventListener('click', () => {
//         console.log(this);
//         this.increment();
//         this.updateValueUi()
//     })

//     this._refs.decrementBtn.addEventListener('click', () => {
//         console.log(this);
//         this.decrement();
//         this.updateValueUi()
//     })
// }

// CounterPlugin.prototype.updateValueUi = function () {
//     this._refs.value.textContent = this._value;
// }

// CounterPlugin.prototype.increment = function () {
//     this._value += this._step;
// };

// CounterPlugin.prototype.decrement = function () {
//     this._value -= this._step;
// };

// const counter1 = new CounterPlugin({ rootSelector: '#counter-1', initialValue:10, step: 10 });
// console.log('counter1', counter1);

// const counter2 = new CounterPlugin({ rootSelector: '#counter-2', initialValue:8, step: 1 });
// console.log('counter2', counter2);



















//============================================


// function incrementClick() {
//     updateDisplay(++counterValue);
// }

// function resetCounter() {
//     counterValue = 1;
//     updateDisplay(val);
// }

// function updateDisplay(val) {
//     document.getElementById("onCounterValue").textContent = val;
// }

// console.log(counterValue);

// //======

// function increment() {
//     counterValue += step;
// };

// incrementRef.addEventListener('click', () => {
//     (counterValue ++);
// });

// decrementRef.addEventListener('click', () => {
//     counterValue++;
// });

// console.log(counterValue);

// const updateValueUi = function () {
//     onCounterValue.textContent = current.value;
// }
