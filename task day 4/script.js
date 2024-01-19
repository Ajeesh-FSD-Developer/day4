// Programs Using Arrow Functions
// print odd number program

var printOddNumbers = (arr) => {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
};

printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


//Convert all the strings to title caps in a string array

var a = (arr) => {
    console.log(arr[0].toUpperCase());
};

a(["hello guvi i completed today task"]);

// Sum of all numbers in an Array

var numbers = [1, 2, 3, 4, 5];
var sum = 0;

numbers.forEach((num) => {
    sum += num;
});

console.log(sum);

// print all the prime numbers in array 

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var primeNumbers = numbers.filter((num) => {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
});

console.log("Prime Numbers:", primeNumbers);


// Return all the palindromes in a array

var words = ["level", "hello", "radar", "world", "madam"];

var palindromes = words.filter((word) => {
    var lowerWord = word.toLowerCase();
    var reversedWord = lowerWord.split('').reverse().join('');
    return lowerWord === reversedWord;
});

console.log("Palindromes: ", palindromes);

//  1. Do the below programs in Anonymous functions & IIFE 
// Using Anonymous Function
var printOddNumbers = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
};
printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


// Using IIFE Function
(function printOddNumbers(arr){
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }

})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


// Using IIFE Function
(function(arr) {
    console.log(arr[0].toUpperCase());
})(["hello guvi i completed today task"]);


// Using IIFE Function
(function printOddNumbers(arr){
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }

})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


// sum of all numbers in array
// Using Anonymous Function
var numbers = [1, 2, 3, 4, 5];
var sum = 0;

numbers.forEach(function(num) {
    sum += num;
});

console.log(sum);


// Return all the palindromes in a Array
// Using Anonymous function

var words = ["level", "hello", "radar", "world", "madam"];

var palindromes = words.filter(function(word) {
    
    var lowerWord = word.toLowerCase();
    var reversedWord = lowerWord.split('').reverse().join('');
    return lowerWord === reversedWord;
});

console.log("Palindromes: ", palindromes);



// Using IIFE Function

var words = ["level", "hello", "radar", "world", "madam"];

var palindromes = (function() {
    return words.filter(function(word) {
        var lowerWord = word.toLowerCase();
        var reversedWord = lowerWord.split('').reverse().join('');
        return lowerWord === reversedWord;
    });
})();

console.log("Palindromes: ", palindromes);



// Return all the Prime numbers in a Array
// Using anonymous Function

var numbers = [1,2,3,4,5,6,7,8,9,10];

var primeNumbers = numbers.filter(function(num) {
  for (var i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num > 1;
});

console.log("Prime Numbers:", primeNumbers);


// Using IIFE Function

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var primeNumbers = (function(arr) {
  return arr.filter(function(num) {
    for (var i = 2; i < num; i++)
      if (num % i === 0) return false;
    return num > 1;
  });
})(numbers);

console.log("Prime Numbers:", primeNumbers);




 