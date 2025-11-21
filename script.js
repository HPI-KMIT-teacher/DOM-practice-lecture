// Навігація по DOM-дереву
/*
parentNode — повертає батьківський елемент поточного вузла
parentElement — батьківський елемент
children - повертає колекцію дочірніх html елементів
childNodes — повертає колекцію усіх дочірних вузлів (включаючи текстові вузли та коментарі)
firstChild, lastChild — перший та останній дочірний вузли
firstElementChild, lastElementChild — перший та останній дочірний html елемент
nextSibling, previousSibling — наступний та попередній сусідні вузли
nextElementSibling, previousElementSibling — наступний та попередній сусідні елементи
*/

// let container = document.getElementById('container');

// console.log(container.parentElement) // body

// console.log(container.childNodes)

// container.childNodes.forEach(i => console.log(i))

// console.log(container.children)

// console.log(container.firstElementChild)

// let heading = container.firstElementChild;

// console.log(heading.nextElementSibling)

// Методи пошуку елементів

// getElementById(id) — це найшвидший спосіб знайти елемент, якщо він має унікальний ID

// let container = document.getElementById('container');

// getElementsByClassName(class) — повертає колекцію усіх елементів з певним класом

let boxes = document.getElementsByClassName('box')

// console.log(boxes)
// console.log(boxes[2])
// console.log(boxes.length)

// getElementsByTagName(tag) — повертає колекцію усіх елементів певного типу

let paragraphs = document.getElementsByTagName('p');
// console.log(paragraphs[0].innerText)
let listElements = document.getElementsByTagName('li');
// console.log(listElements)

// querySelector(selector) — це найсучасніший та найзручніший метод. Він приймає CSS-селектор та повертає перший елемент, що йому відповідає
// querySelectorAll(selector) — подібна до querySelector, але повертає всі елементи, що відповідають селектору

let firstBox = document.querySelector('.box')
// console.log(firstBox)
let specialBox = document.querySelector('.box.special')
// console.log(specialBox)
// console.log(document.querySelector('ul li'))

let allBoxes = document.querySelectorAll('.box')
// console.log(allBoxes)
// for (let i = 0; i < allBoxes.length; i++) {
//     console.log(allBoxes[i]);
//     allBoxes[i].innerText = `шухлядка №${i + 1}`
//   }
  
// Взаємодія з елементами через властивості

let heading = document.querySelector('h1');

// console.log(heading.textContent);

heading.textContent = "Новий заголовок";

let container = document.querySelector('#container');
// console.log(container.innerHTML)

// container.textContent += `<p><b>Lorem ipsum</b></p>`

// container.innerHTML += `<p><b>Lorem ipsum</b></p>`

let input = document.getElementById('username');

// Зчитування значення
// console.log(input.value) // "Іван"

// Зміна значення
input.value = "Марія";

// Очищення поля
input.value = "";

// Для checkboxes
let checkbox = document.getElementById('agree');
// console.log(checkbox.checked)

checkbox.checked = true

// className та id — ці властивості дозволяють змінювати класи та ID елементів

let box = document.querySelector('.box');

// Зчитування класу
console.log(box.className); // "box"

box.className = 'box highlight'

box.className = 'box'