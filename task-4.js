// Practice Problem 2
// write an arrow function where it will do the following
// a) It will take an array where the array elements will be the name of your friends.
// b)Check if the length of each element is event, push elements with even length to a new array and return the result.

// const friends = (fnd1, fnd2, fnd3, fnd4, fnd5) => fnd1 + fnd2 + fnd3 + fnd4 + fnd5;

// console.log(friends('Sagor', 'sohag', 'shanto', 'rakib', 'rokibul'));


const getFriendsWithEvenLength = (friends) => {
    return friends.filter(friend => friend.length % 2 === 0);
};

const friends = ['Sagor', 'sohag', 'shanto', 'rakib', 'rokibul'];
// console.log(friends);
const evenLengthFriends = getFriendsWithEvenLength(friends);
console.log(evenLengthFriends);



