const value = 100;

function add(a, b) {
    return a + b
}

function sum(a, b) {
    return a * b + value
}

export { add, sum }

//const a = 15;
//const b = 20;

//export { add, sum }
//export default a;

// Потрібно створити функцію яка буде формувати чергу в магазині
//1 перший параметр масив, кількість елементів це кількість покупців,
//значення елементу масиву це час який покупець витратить на касі.
//2 параметр це кількість кас
//Повертає об'єкт де ключ це номер каси, значення це час черги на кассі
//12 + 2 + 15 = 29
//3 + 5 + 6 + 7 = 21
//{ 1 : 29, 2 : 21}

function fn(arr, cash) {
    const obj = {}

    for (let i = 1; i <= cash; i += 1) {
        obj[i] = 0
    }
    console.log(obj);
    arr.forEach(bayer => {
        const values = Object.values(obj)
        const minValue = Math.min(...values)
        const currentCase = values.indexOf(minValue) + 1
        obj[currentCase] += bayer
    })
    return obj
}


console.log(fn([12, 3, 5, 6, 2, 15, 7], 2));


