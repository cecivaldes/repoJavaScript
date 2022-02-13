const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];

const evenNumbers = number.filter (function (x) {
    return x % 2 === 0;
})
console.log(evenNumbers)

const oddNumbers = number.filter(function (x) {
    return x % 2 === 1;
})
console.log(oddNumbers)
