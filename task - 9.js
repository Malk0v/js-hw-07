// ## по уму сделаное модальное окно 

const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),
};



refs.openModalBtn.addEventListener('click', onOpenModalBtn);
refs.closeModalBtn.addEventListener('click', onCloseModalBtn);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModalBtn() {
    window.addEventListener('keydown', onEscKeyPress);
    document.body.classList.add('show-modal');
};

function onCloseModalBtn() {
    window.removeEventListener('keydown', onEscKeyPress);
    document.body.classList.remove('show-modal');
};

function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
        onCloseModalBtn();
    }
};

function onEscKeyPress(event) {
    console.log(event.code);
    if (event.code === 'Escape') {
        onCloseModalBtn();
    }
};