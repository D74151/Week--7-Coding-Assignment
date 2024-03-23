let ages = [3,9,23,64,2,8,28,93];

// Remove last element    
    console.log(ages.pop());
    console.log(ages);
// Add element to end of string
    ages.push(37);
    console.log(ages);

//total of all ages added together
    var total = 0;
        for(var i = 0; i < ages.length; i++) {
    total+=ages[i];
}
//find average of elements
var average = total / ages.length
console.log(average);

console.log("Question 2");
//make array of names listed
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log(names.length)// output 6
let sum = 0;

//find the length of each name in element. Type in for and select for loop from dropdown
for (let index = 0; index < names.length; index++) {
    let nameLength = names[index].length
//add all name lengths together
    sum += nameLength
 console.log("index:",index,"current name:", names[index], nameLength, "sum:", sum);   
} 
let averageName = sum/names.length//find average of names lengths output 3.8333
console.log("Average of name lengths", averageName);

console.log("Question 3: You access the last element in an array with const lastItem = array[array.length-1]");
console.log("Question 4: You access the first element in an array with firstItem = array[0]");

console.log("Question 5");
let nameLengths = [];//Does not work
    for (let index = 0; index < names.length; index++) {
        const nameLengths = [names.length] ;
}
console.log(nameLengths);

console.log("Question 7");
function repeatTimes(word, n) { //create a function that take in word and n as arguements
    return word.repeat(n); // repeat word (n) times
}
console.log(repeatTimes("Hello", 3)); // output HelloHelloHello

console.log("Question 8");

function fullName(firstName, lastName) { //create a function that takes firstName and lastName as arguements
    fullName = firstName + " " + lastName; // return full name separated by a space
    return fullName;
}
console.log(fullName("Jon", "Weaver")); // output Jon Weaver

console.log("Question 9");//does not work -  tried console.log inside and outside of curly brackets, both numArray and totalOfArray in console.log with arguements.
const sum1 = 0
function totalOfArray(numArray) {
    
    for (let i = 0; i < numArray.length; i++) {
        let addIndexes = numArray[i];
        sum1 += addIndexes;
        return true < 100; 
    } 
}
 console.log(totalOfArray(1,14,21))

 console.log("Question 10");
 let array = [12,34]
function numbers() {//create a function that takes an array of numbers and find the average
 const average = numbers => numbers.reduce((a,b) => a + b)/numbers.length;
}
 console.log(numbers(array[12,34])); //does not work returns undefined  - added array[] still does not work
 
 console.log("Question 11");//question 10 did not work, queastion 11 builds upon it
 console.log("Question 12");
 function willBuyDrink(isHotOutside, moneyInPocket) {//create a function that takes a boolean and number and return true if parameters are met
    if (isHotOutside === true && moneyInPocket > 10.5)
    return true
        else return false;
 }
 console.log(willBuyDrink(true, 12)); //output true

 console.log("Question 13");

 function buyStock(price, moneyOnHand) {
    if(price<moneyOnHand)
        return true;
        else return false;
 }
 console.log(buyStock(12.5, 10));