let num1 = +prompt('Enter number1');
let num2 = +prompt('Enter number2');
let num3 = +prompt('Enter number3');
let sum = (function () {
    let result = 0;
    return function(x) {
    result += x;
    return result; }
})();
console.log(sum(num1));
console.log(sum(num2));
console.log(sum(num3));
