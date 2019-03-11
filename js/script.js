let menu = document.querySelector('.menu'),
  item = document.getElementsByClassName('menu-item'),
  adv = document.getElementsByClassName('adv'),
  title = document.getElementById('title'),
  column = document.getElementsByClassName('column'),
  answer = document.querySelector('#prompt');
column[1].removeChild(adv[0]);
document.body.style.backgroundImage = 'url(../img/apple_true.jpg)';
let li = document.createElement("li"),
  text = prompt("Ваше отношение к технике apple");
li.classList.add("menu-item");
li.innerHTML = 'Пятый элемент';
menu.appendChild(li);
menu.insertBefore(item[2], item[1])
title.innerHTML = "Мы продаем только подлинную технику Apple";
answer.textContent = text;