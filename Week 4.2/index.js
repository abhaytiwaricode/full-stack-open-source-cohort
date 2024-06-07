let array = [
  {
    name: 'abhay',
    age: 19,
  },
  {
    name: 'harkirat',
    age: 24,
  },
  {
    name: 'aryan',
    age: 23,
  },
];

let newArray = array.map((value) => {
  return {
    name: value.name,
    age: value.age,
    isAllowed: value.age > 21,
  };
});

console.log(newArray);
