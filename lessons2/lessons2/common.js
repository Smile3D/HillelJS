// Task 1
let firstNum = 10;
let secondNum = firstNum * 3;
let resultNum = firstNum + secondNum;

alert(`${firstNum} ${secondNum} ${resultNum}`);

// Task 2
let firstName = prompt('Введите имя');
let lastName = prompt('Введите фамилию');;

alert(`What’s up ${firstName} ${lastName}`);

// Task 3
let x = +prompt('Введите значение x');
let y = +prompt('Введите значение y');

let resultMultiplication = x * y;
let resultDivision       = x / y;
let resultAddition       = x + y;
let resultSubtraction    = x - y;

alert(`Multiplication ${resultMultiplication}`);
alert(`Division ${resultDivision}`);
alert(`Addition ${resultAddition}`);
alert(`Subtraction ${resultSubtraction}`);

// Task 4
let workHours = +prompt('Введите количество рабочих часов');
let workDays = +prompt('Введите количество рабочих дней');
let salaryPerHour = +prompt('Введите зарплату в час');

let resultSalary = workHours * workDays * salaryPerHour;

alert(`Ваша зарплата за этот месяц ${resultSalary}`);

// Task 5
let inputNumber = +prompt('Введите число');
if (inputNumber % 2 == 0) {
    alert( `${inputNumber} четное число` );
}else if (inputNumber % 2) {
    alert( `${inputNumber} нечетное число` );
}

// Task 6
let inputIsnumber = prompt('Введите число');

if (isNaN(+inputIsnumber)) {
    alert(`${inputIsnumber} Не число`)
}else {
    alert(`${inputIsnumber} это число`);
}

// Task 7
let randomNumber = Math.floor(Math.random() * 100);

let num = +prompt('Введите число');

if (randomNumber < num) {
    alert(`${num} больше чем ${randomNumber}`)
}else {
    alert(`${num} меньше чем ${randomNumber}`)
}

//Task 8
let str = prompt('Что Вам нравится изучать?');
let likeLearnLanguage = prompt('Что Вам нравится Back-end или Front-end?');
let partText = 'Мне нравится изучать';
let strIndex = partText.length;
let subString = str.slice(0, strIndex);

let result = `${subString} ${likeLearnLanguage}`;

alert(result);