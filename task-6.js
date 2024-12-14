// Practice Problem 4
// write an arrow function where it will do the following.
// a) It will take two array inputs
// b) combine the arrays and assign them in a new array
// c) Find the maximum number from the new array and return the result 

const findMaxFromCombinedArrays = (array1, array2) => {
    const combinedArray = [...array1, ...array2];
    const maxNumber = Math.max(...combinedArray);
    return maxNumber;
}
const array1 = [1, 3, 5];
const array2 = [2, 4, 6];
console.log(findMaxFromCombinedArrays(array1, array2));