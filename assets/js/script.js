// Assignment code here
const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", " < ", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var choosenCharaters;

var generatePassword = function() {
  
  var passwordLength = parseInt(prompt("Choose your passwords length between 8 and 128."))
  if ((passwordLength === "") || (passwordLength === "0")) {
    alert("Please enter a valid password length.")

    return null; 
  }

  if (passwordLength < 8 || passwordLength > 128) {
     alert("Please enter a valid password length.")

     return null;
  }

  if (isNaN(passwordLength)) {
     alert("Please enter a valid password length.")

     return null;
  }
// confirms for password criteria  
  var charTypeUp = confirm("Would you like uppercase?")
  var chartTypeLow = confirm("Would you like lowercase?")
  var numericType = confirm("Would you like to have numbers?")
  var specialType = confirm("Would you like special charaters?")
 
if (!charTypeUp && !chartTypeLow && !numericType && !specialType) {
  choosenCharaters = alert("Please choose at least 1 criteria!");
}

// 4 choices
else if (charTypeUp && chartTypeLow && numericType && specialType) {
  choosenCharaters = upper.concat(lower, numeric, special);
}

// 3 choices
else if (charTypeUp && chartTypeLow && numericType) {
  choosenCharaters = upper.concat(lower, numeric);
}

else if (charTypeUp && chartTypeLow && specialType) {
  choosenCharaters = upper.concat(lower, special);
}

else if (charTypeUp && numericType && specialType) {
  choosenCharaters = upper.concat(numeric, special);
}

else if (chartTypeLow && numericType && specialType) {
  choosenCharaters = lower.concat(numeric, special);
}

// 2 choices
else if (charTypeUp && chartTypeLow) {
  choosenCharaters = upper.concat(lower);
}

else if (charTypeUp && numericType) {
  choosenCharaters = upper.concat(numeric);
}

else if (charTypeUp && specialType) {
  choosenCharaters = upper.concat(special);
}

else if (chartTypeLow && numericType) {
  choosenCharaters = lower.concat(numeric);
}

else if (chartTypeLow && specialType) {
  choosenCharaters = lower.concat(special);
}

else if (numericType && specialType) {
  choosenCharaters = numeric.concat(special);
}

// 1 choice
else if (charTypeUp) {
  choosenCharaters = upper;
}

else if (chartTypeLow) {
  choosenCharaters = lower;
}

else if (numericType) {
  choosenCharaters = numeric;
}

else if (specialType) {
  choosenCharaters = special;
}
console.log(choosenCharaters);

// for loop for randomizer
var password = "";
for (var i = 0; i < passwordLength; i++) {
  password += choosenCharaters[Math.floor(Math.random() * choosenCharaters.length)];
  
}
  return password;
}
  


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
