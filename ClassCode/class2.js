// Arrays - Array is a Javascript Object 
let classList = ["arjun", "Byron", "Kwame", "Donna", "Maryanne", "Manikanta", "Janice", "Steven", "Pradeep"]

console.log(classList)
console.log(classList.length)
console.log(classList[0])



// Array object comes with built in "methods" which allow certain funtionalities 
// for us to take on the array. Reduces our work :D
let randomNumbers = [24, 3, 17, 31, 80]

randomNumbers.push(40);
console.log(randomNumbers);

let value = randomNumbers.pop();
console.log(value);
console.log(randomNumbers);

let value1 = randomNumbers.shift()
console.log(value1);
console.log(randomNumbers);

randomNumbers.unshift(25)
console.log(randomNumbers)