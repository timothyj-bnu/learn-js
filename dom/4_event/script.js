const p2 = document.querySelector('.p2');

function changeColor(){
    this.style.color = 'red';
}

p2.addEventListener('click', changeColor);

const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function(){
    const ul = document.querySelector('section#b ul');
    const newLi = document.createElement('li');
    const newText = document.createTextNode('New item');
    newLi.appendChild(newText);
    ul.appendChild(newLi);
});

p4.addEventListener('click', function(){
    const isRed = p4.style.color === 'red';
    if(isRed){
        p4.style.color = 'black';
    }
    else{
        p4.style.color = 'red';
    }
});