var numbers = "0123456789";
var lowCase = "abcdefghijklmnopqrstuvwxyz";
var Upcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

function generatePassword() {
  var passwordLength = 0;
  var optionPool = "";
  var length = prompt("Please enter the desired password length between 8 and 128", "");
  if (length < 8 || length > 128) {
    alert("Please input a number between 8 and 128!");
    return generatePassword();
  } else {
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
      return generatePassword();
    } else {
      return randomizePassword(passwordLength, optionPool);
    }
  }
}

// Randomizer
function randomizePassword(x, y) {
  var randomize = [];
  for (let i = 0; i < x ; i++) {
    randomize.push(y[Math.floor(Math.random() * y.length)])
  };
  return randomize.join('');
}

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


