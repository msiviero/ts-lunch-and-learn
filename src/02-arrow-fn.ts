
const users = [
    "Marco",
    "Howard",
    "Santolo",
    "Stefano",
];

const shorterThanSeven = (user: string) => user.length < 7;
const startingWith = (letter: string) => (user: string) => letter === user[0];

const startingWithLetterSAndShorterThanSeven = users
    .filter(shorterThanSeven)
    .filter(startingWith("M"));

console.log(startingWithLetterSAndShorterThanSeven);
