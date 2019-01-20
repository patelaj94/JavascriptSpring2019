//Challenge Problem 1 - String concat
//Assign two variables: string1 and string2. Print out the concatinated form //of these strings
// Answer by Donna and Maryanne
var string1 = "Intro to javascript", string2 = "so far so good";
console.log(string1 + '\n' + string2)


//Challenge Problem 2 - Random numbers (Will need google, hint: Math.random())
//Assign two variables with random whole integers: var1, var2
//Print out the following operations of the numbers:
//	var1 + var2, var1 - var2, var1 * var2, var1 / var2, var1 % var2
// Answer by Donna and Maryanne
var number1 = Math.floor((Math.random() * 10) + 1);
var number2 = Math.floor((Math.random() * 10) + 1);
console.log(number1)
console.log(number2)
console.log(number1 % number2)


//Challenge Problem 3 - The Lifetime Supply Calculator
//Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no //more!
//Store your current age into a variable.
//Store a maximum age into a variable.
//Store an estimated amount per day (as a number).
//Calculate how many you would eat total for the rest of your life.
//Output the result to the screen like so: "You will need NN to last you until //the ripe old age of X".
// Class Answer
var kwameage = 5;
var kwamemaxage = 100;
var peanutsperday = 5;
var yearstolive = kwamemaxage - kwameage;
console.log(yearstolive)
var lifetimeSupply = yearstolive * peanutsperday * 365;
console.log("You will need " + lifetimeSupply + " packets of peanuts to last you until the ripe old age of " + kwamemaxage);









