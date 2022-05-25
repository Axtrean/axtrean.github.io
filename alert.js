"use strict"

let sitetype = prompt("Какой тип сайта вы хотите? 1 - Сайт-визитка, 2 - Интернет-магазин, 3 - Корпоративный сайт");
console.log("type " + sitetype);

let sitedes = prompt("Выберите дизайн сайта. 1 - В минималистичном стиле, 2 - Яркий, красочный, 3 - По вашей идее");
console.log("design " +
sitedes);

let adapt = prompt("Выберите адаптивность сайта. 1 - Под мобильные телефоны, 2 - под компьютеры, 3 -Под всё");
console.log("adapt " + adapt);

let num = sitetype + sitedes + adapt;

console.log(num);

let price = 0;

if (sitetype == 1){
    price += 2000
}
if (sitetype == 2){
    price += 2200
}
if (sitetype == 3){
    price += 20000
}
if (sitedes == 1){
    price += 1000
}
if (sitedes == 2){
    price += 2000
}
if (sitedes == 3){
    price += 10000
}
if (adapt == 1){
    price += 1000
}
if (adapt == 2){
    price += 3000
}
if (adapt == 3){
    price += 10000
}

console.log(price);

alert(price + " рублей");