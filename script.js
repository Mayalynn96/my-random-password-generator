var numbers = "0123456789";
var lowCase = "abcdefghijklmnopqrstuvwxyz";
var Upcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var passwordLength;
var optionPool = "";
var randomize = [];


// askLength();
function generatePassword() {
  var length = prompt("Please enter the desired password length between 8 and 128", "");
  if (length >= 8 && length <= 128) {
    passwordLength = length;
    if (confirm("Do you want your password to contain numbers?")) {
      optionPool = optionPool + numbers;
    } else {
      optionPool = optionPool + "";
    } 
    if (confirm("Do you want your password to contain lowercase letters?")) {
      optionPool = optionPool + lowCase;
    } else {
      optionPool = optionPool + "";
    }  
    if (confirm("Do you want your password to contain upercase letters?")) {
      optionPool = optionPool + Upcase;
    } else {
      optionPool = optionPool + "";
    } 
    if (confirm("Do you want your password to contain special characters?")) {
      optionPool = optionPool + specialCharacters;

    } else {
      optionPool = optionPool + "";
    }
    if (optionPool == "") {
      alert("You did not choose any characters for your password, please try again");
      generatePassword();
    } else {
      for (let i = 0; i < passwordLength; i++) {
        randomize.push(optionPool[Math.floor(Math.random() * optionPool.length)])
      };
      return randomize.join('');
    }
  } else if (length < 8) {
    alert("Must input a number greater or equal to 8")
    generatePassword();
  }
}


// var randomize = []

// for (let i = 0; i < passwordLength; i++) {
//   randomize.push(optionPool[Math.floor(Math.random() * optionPool.length)])
// }

// function generatePassword() {
//   return randomize.join('')
// }

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


