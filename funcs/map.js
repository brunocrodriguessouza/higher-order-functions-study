// MAP
const { passengers } = require("../data");

// 1. Quantos anos eles tem?
const newPassergers = passengers.map(
  passenger => `${passenger.name} tem ${2019 - passenger.birthYear} anos`
);

// 2. Encontre o nome palíndromo
const founds = passengers.map(passenger => {
  const reserveName = [].map
    .call(passenger.name, letter => letter)
    .reverse()
    .join("");

    return (reserveName.toLowerCase() === passenger.name.toLocaleLowerCase()) 
          ? `This is palindrome: ${passenger.name}` 
          : `This is not palindrome: ${passenger.name}`
});

console.table(founds);
