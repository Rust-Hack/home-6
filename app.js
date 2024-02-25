//1 task
const colors = ['red', 'green', 'blue'];

console.log(colors.length);

//2 task
const animals = ['monkey', 'dog', 'cat'];

console.log(animals[animals.length-1]);
console.log(animals.at(-1));

//3 task
const numbers = [5, 43, 63, 23, 90];
numbers.splice(0, numbers.length);
const numbers2 = [5, 43, 63, 23, 90];
numbers2.shift();
numbers2.shift();
numbers2.pop();
numbers2.pop();
numbers2.pop();
const numbers3 = [5, 43, 63, 23, 90];
numbers3.length = 0;

console.log(numbers);
console.log(numbers2);
console.log(numbers3);

//4 task
const students = ['Polina', 'Dasha', 'Masha'];
students.pop();
students.push('Borya');
students.shift();
students.unshift('Andrey');

console.log(students);

//5 task
const cats = ['Gachito', 'Tom', 'Batman'];

for(let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}

for(let key of cats) {
    console.log(key);
}

//6 task
const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

const oneArr = evenNumbers.concat(oddNumbers);

const sort = function (a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

oneArr.sort(sort);

for(let key of oneArr) {
    if(key === 8){
        console.log(key);
    }
}

console.log(oneArr);

//7 task
const binary = [0, 0, 0, 0];
console.log(binary.join('1'));

//8 task
const palid = function (word) {
    word = word.toLowerCase();

    const replaceWord = word.split('').reverse().join('');

    return replaceWord === word;
}

let word = 'дед';
word = 'qwe';

if(palid(word)) {
    console.log(word + ' это палиндром')
} else {
    console.log(word + ' это не палиндром')

}