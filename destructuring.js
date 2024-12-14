const actor = {
    name: 'Ananata',
    age: 30,
    phone: '01717653844',
    money: 124545121545
}

// if right side is an object left side of destructuring will be object as will
// use property name as variable that contains the property value 
// const {phone, age} = actor
const {phone, age: boyos} = actor


// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;


console.log(phone)
console.log(phone)
console.log(phone)
console.log(phone)
console.log(phone)
console.log(boyos)
// console.log(age)
// console.log(age)




//array destructuring
const numbers = [45, 99]
const [first, second] = numbers;
const[x, y] = [12, 66];


//
function doubleTime(a, b){
    return [a*2, b*2];
}

const [prothom, ditiyo] = doubleTime(6, 9);
console.log(prothom, ditiyo);