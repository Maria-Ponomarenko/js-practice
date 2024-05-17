// Функція для визначення типу змінної:
// Написати функцію для визначення типу змінної.
// Функція отримує будь-яке значення в якості аргументу
// і визначає тип цієї змінної. Виводить в консоль
// повідомлення Тип змінної: type

function getTypeOfValue(value) {
    return `Тип змінної: ${typeof value}`
}

console.log(getTypeOfValue("hello world"));
console.log(getTypeOfValue(true));
console.log(getTypeOfValue(111));

// ============================================================================

// Дано рядок, що складається із символів, наприклад, 'abcde'.
// Перевір, що другим символом цього рядка є літера 'b'.
// Якщо так - виведи 'Так' у консоль, в противному випадку виведи 'Ні'.

let str = "abcde";
console.log(str[1] === "b" ? "Так" : "Ні");
console.log(str[1] === "f" ? "Так" : "Ні");

//  ============================================================================

// Напишіть функцію, яка приймає аргумент і визначає його тип даних.
// Якщо тип - строка, функція повертає "string", якщо число - "number",
// в іншому випадку - "unknown".

function typeValue(value) {
    if (typeof value === "string") {
        return "string"
    } else if (typeof value === "number") {
        return "number"
    } else {
        return "unknown"
    }
}

console.log(typeValue("Привіт Світ!"));
console.log(typeValue(444));
console.log(typeValue(true));

//  ============================================================================

// Оголоси функцію hasDiscount(age, isStudent, isPensioner),
// яка перевіряє, чи покупець має право на знижку.
// І повертає true - якщо має право на знижку і false, якщо - ні.
// Покупець має право на знижку, якщо він є студентом
// або пенсіонером, або вік його між 12 і 18 роками(включно).
// Значення параметрів будуть задаватися під час виклику функції:
// age - вік покупця;
// isStudent - буль (вказує чи є покупець студентом);
// isPensioner - буль  (вказує чи є покупець пенсіонером);

function hasDiscount(age, isStudent, isPensioner) {
    return (age >= 12 && age <= 18) || isStudent || isPensioner
}

console.log(hasDiscount(23, true, false));
console.log(hasDiscount(23, false, false));
console.log(hasDiscount(14, true, false));

//  ============================================================================

// Оголоси функцію canRegisterOnSite(age, hasAcceptedTerms),
// яка перевіряє, чи може користувач зареєструватись на сайті.
// І повертає true - якщо може зареєструватись і false, якщо - ні.
// Користувач може зареєструватись, якщо йому виповнилося 13 років
// і він прийняв умови використання.
// Значення параметрів будуть задаватися під час виклику функції:
// age - вік користувача;
// hasAcceptedTerms - буль (вказує чи прийняв користувач умови використання);

function canRegisterOnSite(age, hasAcceptedTerms) {
    return age >= 13 && hasAcceptedTerms
}

console.log(canRegisterOnSite(14, true));
console.log(canRegisterOnSite(10, true));
console.log(canRegisterOnSite(15, false));

//  =============================================================================

// Оголоси функцію checkString(value), яка перевіряє
// чи отримане значення є рядком і не містить символ $.
// Якщо це так, виведіть кількість символів у рядку.
// Якщо значення не є рядком, виведіть повідомлення про невірний ввід.

function checkString(value) {
    if (typeof value === "string" && !value.includes("$")) {
        return `Довжина рядка ${value.length}`
    } else {
        return "невірний ввід"
    }
}

console.log(checkString("Hello"));
console.log(checkString("Good monring"));
console.log(checkString("Hello $$$"));
console.log(checkString(5555));

//  =======================================================================

// Оголоси функцію calculateSquare(value).
// Функція має перевіряти чи є отримане значення - число
// або за можливості перетворити рядок на число
// Якщо це число функція возводить число у квадрат і виводить рядок
// The square of ${numberValue} is ${squaredNumber}
// numberValue - отримане число або перетворене з рядка число.
// squaredNumber - numberValue у квадраті.
// Якщо значення не є числом, функція повертає рядок 'Invalid input!'.

function calculateSquare(value) {
    const val = parseFloat(value);
    if (isNaN(val)) {
        return "Invalid input!"
    } else {
        return `The square of ${val} is ${Math.pow(val, 2)}`
    }
}

console.log(calculateSquare("good morning"));
console.log(calculateSquare("3333.888aaaa"));
console.log(calculateSquare("!!!44444"));
console.log(calculateSquare("24.5px"));

//  =========================================================================

//Напишіть цикл (for), який виведе в консоль усі парні числа від max до min включно по зменшенню
const max = 50;
const min = 23;

for (let i = max; i >= min; i -= 1) {
    if (i % 2 === 0) {
        console.log(i);
    } else {
        console.log(`Це не парне число ${i}`);
    }
}

//  =========================================================================

// За допомогою циклу for знайдіть суму усіх парних чисел у проміжку від min до max включно
const maximum = 50;
let minimum = 1;
let total = 0;

if (minimum % 2 !== 0) {minimum += 1}

for (let i = minimum; i <= maximum; i += 2) {
    total += i
}

console.log(total);

//  ==============================================================================

// Напишіть функцію formatMinutesToTime(minutes), котра
// отримає від користувача число(кількість хвилин) і виведе
// в консоль рядок у форматі годин і хвилин, тобто, якщо користувач
// вказав число 70, в консолі отримаємо "01:10"

function formatMinutesToTime(minutes) {

    let hours = Math.floor(minutes / 60);
    const modHours = String(hours).padStart(2, 0);
    const modMinutes = String(minutes % 60).padStart(2, 0);
    
    return `${modHours}:${modMinutes}`
}

console.log(formatMinutesToTime(119));
console.log(formatMinutesToTime(65));

//  ====================================================================================
