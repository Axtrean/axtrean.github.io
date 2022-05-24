"use strict"

console.log("Привет, мир!");
// 50.4 - числовой;
// {}-литерал;
// []-литерал;
const NAME_1 = 100; // нельзя менять значение, как у let
let name2 = "10"; //объявление переменной
var name3 ="Текст"; // let с console.log() одновременно
// const, let, var - перемнные
/ - * + /// операторы
let var3 = 10 + 10;
function func_1() {
    let var3 = 10 + 10;
    console.log(10 + 10);
}
func_1();
var3 = 10 + 10; // не писать тип переменной, если хочу использовать 1 переменную дважды
console.log(var3);
let name = "Vadim", age = 18, work = "Motion";

if (true){
    let name = "Gg";
    console.log(name); // команды внутри фигурных скобок исполняются локально и не действуют извне 
    const file = NAME_1 + 15;
    console.log(file);
}
console.log(name);
let age1 = 35;
let numb = `Строка: $(age1)` / 35;


console.log(typeof numb); // string, boolean, number, bigint, 
console.log(numb) // -infinity, false, true, NaN

let book = {
    biii: "Web 2.0",
    author: "A. Brown"
};

console.log(typeof book);
console.log(book);

let magaz = "magaz";
function first(){
    console.log(typeof magaz);
    console.log(magaz);
}
first();

let num3 = "100";


console.log(typeof num3);
    console.log(num3);
num3 = Number(num3); // преобразовать в строку
num3 = "50" + "10";
console.log(typeof num3);
    console.log(num3);




let num4 = Boolean("0");


console.log(typeof num4);
    console.log(num4);
num4 = Number(num4); // преобразовать в строку
num4 = Boolean(0); // 0 - всегда ложь, другие числа - правда
console.log(typeof num4);
    console.log(num4);




let num5 = 17 % 3;
// % - остаток, ** - степень
num5 += 3;
num5 = 5 + num5++; // приоритет выполнения ++ зависит от того, где они стоят
num5 = 10 === "10"; // != - не равно
/* в сравнении срок приоритет идет по 1й букве*/
/*|| - важно чтобы 1 значение было true, && - важно чтобы были true оба, !false - меняет на true*/
console.log(typeof num5);
    console.log(num5);








var lec1 ="Тема If Else в JavaScript";
console.log(lec1);

if (500 < 100){
    console.log("true");
}
else if (500 < 300){
    console.log("false")
}
else {
    console.log("false 2")
}

(43 < 12) ? console.log("DA") : console.log("NET"); // краткая хапись кода выше



var lec2 ="Тема циклы в JavaScript";
console.log(lec2);

let count = 6;
do{
    console.log(count);
    count++;
}
while (count < 5);
console.log("finish")




for(let count2 = 0; count2 < 15; count2++){  //начало, условие, шаг
    console.log(count2);
    if (count2 == 8) continue;
    count2++;
}

console.log("finish2")

forOne: for (let count4 = 0; count4 < 3; count4++){
    
        for(let count3 = 0; count3 < 5; count3++){
            console.log(count3);
            if (count == 2) break forOne
        }
    
}
console.log("finish3");








var lec3 = "Продолжение JavaScript, функции";
console.log(lec3);

let name5 = "Vadim";

function getLocation(age, eyes){
    console.log(age);
    console.log(eyes);
    name5 = "Vad"
}
getLocation("13", "2");
console.log(name5);



function getLocationTwo(n1, n2){
    let temp = n1 ** n2;
    return temp;
}

console.log(getLocationTwo(7, 3));





function getCube(n3, n4){
    let result = 1;
    
    for (let i = 0; i < n4; i++){
        result*= n3;
    
    }
    return result;
}
console.log(getCube(2, 5));


function getCubeTwo(n5,n6){
    if (n6 === 1){
        return n5;
    }
    else{
        return n5 * getCubeTwo(n5, n6 - 1)
    }
}
console.log(getCubeTwo(4,3))

/* если n6=1, то берем n5*/

let somefunction;
if (true){
    somefunction = function(){
        console.log('somfunction');
        return 21321;
    };
}

console.log(somefunction());

let getCubeThree = (numbone, numbtwo) => numbone * numbtwo;
/*let getCubeThree = (numbone, numbtwo) => {

console.log("arrow");
return numbone * numbtwo;
};*/


let count6 = 0;

let time = setTimeout(function(){
    console.log("nis");
    count6++;
    
}, 2000
)

let int = setInterval(function(){
    clearTimeout(time);
    console.log("nu");
    count6++;
    if (count6 === 5){
        clearInterval(int);
    }
}, 1000);

let name8 = "Vadim"

function createMsg(text, name8){
    return name8 + ", " + text + "!";
}

function showMsg(msg){
    console.log(msg);
}

function initMsg(text, name8){
    showMsg(createMsg(text, name8));
}

initMsg("у вас одно новое сообщение", name8);

let part = "terra";

let terra = {
    name0: "Nova",
    age7: 3234361435,
    [part + " discription"]: "Описание сверхновой" ,
    showName: function(){
        console.log(this.name0);
    }
};



terra.showName();

console.log(terra.name0);

terra.age0 = 12321;

terra["orbit"] = true;

terra.author = {
        name19: "Vadim",
        surname: "Aaa",
        age9: "18",
    };

delete terra.author;

console.log(terra);

let terraNew = terra;

terra.age = 30;

terraNew = Object.assign({}, terra); // копирует объект

terra.newString = "eyeye";

Object.assign(terra);


console.log(terraNew);

if ("name0" in terra){
    console.log(terra.name0);
}

for (let key in terra){
    console.log(key);
    console.log(terra[key]);
}

function createTerra(name, age){
    return{
        name: name,
        age: age,
    }
};

function Terra (name56, age56){ // с большой буквы!!!
    this.name56 = name56;
    this.age56 = age56;
};
console.log(new Terra ("Vadim", 18));

console.log(createTerra("Max", "22"));
console.log(createTerra("Alex", "13"));
console.log(createTerra("Bob", "33"));

let lec211 = "Работа с массивами в JavaScript";
console.log(lec211);

let mass = ["Один",
            "Два",
            5,
            true,
            "Fif",
            function(){
                console.log("its work");
            }
           ];

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

mass[0] = "Три";

mass.push("newEl"); // добавить эл-т в конец
mass.unshift("anyEl"); // добавить эл-т в начало
mass.pop(); // удалить последний эл-т
mass.shift(); // удалить 1й эл-т
mass.splice(2,3) // удалить по номерам (позиция с которой начинать и сколько эл-тов вытащить)

console.log(mass);
console.log(matrix[1][1])


if (!Array.isArray(mass)){
    console.log(mass);
};

for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[i].length; j++){
        console.log(matrix[i][j]);
    }
};

for (let massItem of mass){
    console.log(massItem);
}

mass.forEach(function(item91, index91, array91){
             console.log("item: " + item91 + " index" + index91 + " array")
             });
alert("Всплывающее сообщение?") // код не продолжит работать, если не нажать "ОК"

let newAge = prompt("Введи возраст");