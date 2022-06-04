const closeButton = document.querySelector('.close');

const card = document.querySelector('.card');

const container = document.querySelector('.container');

card.style.transition = '0.2s ease-in-out';

closeButton.addEventListener('click', function() {
//   card.style.opacity = '0';
//   setTimeout(function() {
//     card.style.display = 'none';
//   }, 200);
    console.log('test');
    this.setAttribute('disabled');
    this.style.cursor = 'context-menu';
});

// parentElement
// nextElementSibling
// previousElementSibling