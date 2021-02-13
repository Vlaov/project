"use strict"

// const box = document.getElementById('box'),
    //   btns = document.getElementsByTagName('button'),
    //   circles = document.getElementsByClassName('circle'),
    //   hearts = document.querySelectorAll('.heart'),
    //   oneHeart = document.querySelector('.heart'),
    //   wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

// box.style.cssText = `background-color: blue; width: 500px`;

// btns[1].style.borderRadius = '100%';
// circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

// hearts.forEach(item => {
    // item.style.backgroundColor = 'blue';
// });

// const div = document.createElement('div');
// const text = document.createTextNode('тут был я');

// div.classList.add('black');

// wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

// div.innerHTML = "<h1>Hello world</h1>";

// div.textContent = "<h1>Hello world</h1>";

// div.insertAdjacentHTML("aftereend", '<h2>Hellow</h2>');









// const btn = document.querySelector('button'),
//       overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// };
// let i = 0;
// const deleteElement = (e) => {
//     console.log(e.currentTarget);
//     console.log(e.type);

    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
// };

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// const link = document.querySelector('a');

// link.addEventListener('click', (event) => {
//     event.preventDefault();

//     console.log(event.target);
// });



// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);

// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').parentElement);


// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

// for (let node of document.body.childNodes) {
//     if (node.nodeName == '#text') {
//         continue;
//     }

//     console.log(node);
// };

//СОБЫТИЯ НА МОБИЛЬНЫХ ТЕЛЕФОНАХ

//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('Start');
        console.log(e.targetTouches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);
    });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();

    //     console.log('End')
    // });
});

// touches
// targetTouches
// changedTouches