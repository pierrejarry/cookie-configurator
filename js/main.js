const infoDiv = document.querySelector('.main-content__main__info');
const closeIcon = document.querySelector('.main-content__main__info .close-icon');

const closeDiv = () => infoDiv.remove();

closeIcon.addEventListener('click', closeDiv);