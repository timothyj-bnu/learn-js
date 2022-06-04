// DOM Selection

// document.getElemetById()

const title = document.getElementById('judul');

console.log(title);

title.style.color = 'red'; // inline css
title.style.backgroundColor = 'yellow';
title.innerHTML = 'Saya Keren';

// document.getElementsByTagName()
// document.getElementByClassName -> HTMLCollection

const p = document.getElementsByTagName('p');
console.log(p); // HTMLCollection

for(let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue';
}

// CSS like

// document.querySelector() -> return element (first)
const p4 = document.querySelector('#b p');
console.log(p4);
p4.style.color = 'green';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
console.log(li2);
li2.style.backgroundColor = 'lightgreen';


// document.querySelectorAll() -> return node list
const pAll = document.querySelectorAll('p');
console.log(pAll);

const sectionB = document.querySelector('section#b');
const p45 = sectionB.querySelector('p');
console.log(p45);