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

// let input = document.getElementById('username');

// Зчитування значення
// console.log(input.value) // "Іван"

// Зміна значення
// input.value = "Марія";

// Очищення поля
// input.value = "";

// Для checkboxes
// let checkbox = document.getElementById('agree');
// console.log(checkbox.checked)

// checkbox.checked = true

// className та id — ці властивості дозволяють змінювати класи та ID елементів

// let box = document.querySelector('.box');

// Зчитування класу
// console.log(box.className); // "box"

// box.className = 'box highlight'

// box.className = 'box'

// Практичний приклад — інтерактивність

let input = document.getElementById('nameInput');
let button = document.getElementById('greetBtn');
let greeting = document.getElementById('greeting');

// Призначаємо функцію натисканню кнопки
button.onclick = function() {
    let name = input.value;
    greeting.textContent = `Привіт, ${name}!`
}
// приклад слухача подій
let inputResult = document.getElementById('inputResult');
input.addEventListener('input', function(event) {
    console.log(event)
    inputResult.textContent = "Ти написав: " + event.target.value
})

// Атрибути HTML та методи роботи з ними

//getAttribute(name) — отримує значення атрибута:
let photo = document.getElementById('photo');
let link = document.getElementById('link');

// Зчитування атрибутів
// console.log(photo.getAttribute('src')); // "old.jpg"
// console.log(photo.getAttribute('alt')); // "Фото"
// console.log(link.getAttribute('href')); // "https://example.com"

// setAttribute(name, value) — встановлює атрибут

// photo.setAttribute('src', 'https://web.kpi.kharkov.ua/kmit/wp-content/uploads/sites/220/2025/03/logo150-3-1.jpg')

link.setAttribute('href', 'https://google.com');
link.setAttribute('target', '_blank'); // Відкрити в новій вкладці

// removeAttribute(name) — видаляє атрибут
link.removeAttribute('target');

// console.log(photo)

/*

// Робота зі стилями через властивість style
let boxStyled = document.getElementById('box');
let colorBtn = document.getElementById('colorBtn');

console.log(boxStyled.style.backgroundColor);

// Встановлення стилів
boxStyled.style.backgroundColor = "lightblue";
boxStyled.style.width = "200px";
boxStyled.style.height = "100px";
boxStyled.style.borderRadius = "10px";
boxStyled.style.fontSize = "20px";
boxStyled.style.padding = "20px";
boxStyled.style.margin = "6px";

colorBtn.onclick = function() {
    if (boxStyled.style.backgroundColor == "lightblue") {
        boxStyled.style.backgroundColor = "coral";
        boxStyled.style.color = "white";
    } else {
        boxStyled.style.backgroundColor = "lightblue";
        boxStyled.style.color = "black";
    }
  };
  
  */

  /*
    Важливо помітити, що CSS-властивості у JavaScript пишуться в camelCase, а не через дефіс:
    CSS: background-color → JavaScript: backgroundColor
    CSS: border-radius → JavaScript: borderRadius
    CSS: font-size → JavaScript: fontSize
    CSS: margin-top → JavaScript: marginTop
  */

    // Робота з класами через classList
    let box = document.getElementById('box');
    let highlightBtn = document.getElementById('highlightBtn');
    let activateBtn = document.getElementById('activateBtn');

    // console.log(box.classList)

    /*
    // Додавання класу
    highlightBtn.onclick = function() {
        box.classList.add('highlight');
      };
      
    // Видалення класу
    activateBtn.onclick = function() {
        box.classList.remove('highlight');
      };

    // Перевірка наявності класу
    console.log(box.classList.contains('container'));
      */

    // Toggle — якщо клас є, видаліть його, якщо ні — додайте

    // highlightBtn.onclick = function() {
    //     box.classList.toggle('highlight');
    //   };

      activateBtn.onclick = function() {
        box.classList.toggle('active');
      };

/*
Методи classList:
add(class) — додає клас
remove(class) — видаляє клас
toggle(class) — додає, якщо немає, видаляє, якщо є
contains(class) — повертає true, якщо клас присутній
replace(oldClass, newClass) — замінює один клас іншим
*/

// Основи обробки подій

/*
click — натискання кнопки мишки
input — введення тексту в поле
change — зміна значення в select, checkbox чи radio
mouseover — мишка наводить на елемент
mouseout — мишка залишає елемент
keydown — натискання клавіші
submit — відправлення форми
*/

// Другий спосіб — використання addEventListener (рекомендовано)
highlightBtn.addEventListener('click', () => { box.classList.toggle('highlight') });
highlightBtn.addEventListener('click', function() { console.log(box.classList.contains('highlight')) });

console.log(box.textContent)

box.addEventListener('mouseover', (e) => {
    e.target.textContent = 'Mouse pointer detected!'
})

box.addEventListener('mouseout', (e) => {
    e.target.textContent = 'Pointer was here but now it`s gone!'
})