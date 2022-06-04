const title = document.getElementById('judul');
title.innerHTML = '<em>Hello World!</em>';
title.style.fontSize = "10em";

const ig = document.querySelector('#container a');
ig.textContent = 'Hello World!';
ig.setAttribute('href', 'https://www.instagram.com/');
ig.setAttribute('target', '_blank');
const href = ig.getAttribute('href');
console.log(href);
console.log(ig);
// ig.removeAttribute('target');

const p2 = document.querySelector('.p2');
p2.classList.add('label');
p2.classList.toggle('label');


// DOM create element
const newP = document.createElement('p');
const newTest = document.createTextNode('Hello World!');
newP.appendChild(newTest);

const sectionA = document.querySelector('section#a');
// append
sectionA.appendChild(newP);


const newLi = document.createElement('li');
const newText = document.createTextNode('New Item');
newLi.appendChild(newText);

const ul = document.querySelector('section#b ul');
const li = ul.querySelector('li:nth-child(2)');
// insert before
ul.insertBefore(newLi, li);

const link = document.getElementsByTagName('a')[0];
// remove child
sectionA.removeChild(link);

const sectionB = document.querySelector('section#b');
const pSectionB = sectionB.querySelector('p');

const newH2 = document.createElement('h2');
const newTextH2 = document.createTextNode('New Heading');
newH2.appendChild(newTextH2);

// replace child
sectionB.replaceChild(newH2, pSectionB);