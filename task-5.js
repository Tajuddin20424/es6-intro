// Practice Problem 3

// Write an arrow function where it will do the following: x^2
// a) Square each array Element
// b)Calculate the sum of the squared Elements
// c)Return the average of the sum of the squared elements.


const calculateAverageOfSquares = (arr) => {
    const sumOfSquares = arr.map(x => x ** 2).reduce((sum, x) => sum + x, 0);
    return sumOfSquares / arr.length;
};
const numbers = [1, 2, 3, 4, 5];
console.log(calculateAverageOfSquares(numbers));
