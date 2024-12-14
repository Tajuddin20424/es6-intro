//3. Write an arrow function that will take 2 parameters. One parameter will come from you and the other parameter will be a default parameter. Add these two parameters and return the result.

// const sum = (a, b, c) => a + b + c;
// console.log(sum (12, 13, 24));


const addTwoNumbers = (num1, num2 = 10) => num1 + num2;

console.log(addTwoNumbers(10));
console.log(addTwoNumbers(10, 30));