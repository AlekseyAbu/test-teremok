const button1 = document.querySelector('.btn-warning');
const button2 = document.querySelector('.btn-success');
const buttonClosePopup = document.querySelector('.popup__button')

button1.addEventListener('click',() => {
    document.querySelector('.block__brick_upper').classList.toggle('block__brick_upper-none');
});

button2.addEventListener('click', () => {
    document.querySelector('.block__brick_midle-1').classList.toggle('block__brick_midle-1-lime');
    document.querySelector('.block__brick_midle-2').classList.toggle('block__brick_midle-2-teal');
});

buttonClosePopup.addEventListener('click', () => {
    document.querySelector('.popup').classList.toggle('popup_none');
});

