// var : no reason to use var
// let : allow it to reassign
// const : do not allow it to reassign

const money = 25;
// money = 50;
const rich = money + 25;
console.log(rich);

let count = 0;
count = count + 10;
console.log(count);

const numbers = [23, 4, 24, 12, 56];
// numbers = [4, 5, 7, 8];
numbers[1] = 55;
numbers.push(44, 55, 56);
console.log(numbers);


// object

// const students = {
let students = {
    name: 'moyna pakhi',
    class: 12
}
// console.log(students);

// students = {name: 'kokil konthi'}
students.name = 'moyur konthi';
console.log(students);

// loop
let sum = 0;
for(let i = 0; i <10; i++){
    sum = sum + i;
    // sum = sum + num;

}
console.log(sum);

