// String and Number
var name = 'Abhay Tiwari';
var age = 19;

console.log(name, age);

// Arrays
var users = ['Abhay', 'Harkirat', 'Rajnish'];

console.log(users[0]);
console.log(users);

// Object
var user1 = {
  name: 'abhay',
  age: 19,
  email: 'abhay@gmail.com',
  phone: 9876543210,
};

console.log(user1);

// Loops
for (var i = 0; i < users.length; i++) {
  console.log(users[i]);
}

// Functions
function printAllUsers(userArray) {
  for (var i = 0; i < users.length; i++) {
    const toLog = userArray[i].name + "'s age is " + users[i].age;
    console.log(toLog);
  }
}

var userArray = [
  { name: 'Abhay', age: 19 },
  { name: 'Rajnish', age: 25 },
];

printAllUsers(userArray);
