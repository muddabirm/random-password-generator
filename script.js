// Assignment code here
/*GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page*/
var passwordLength = 8;
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numeric = ['1','2','3','4','5','6','7','8','9','0'];
var special = ['"', '!','"','#','$','%','&','*','+','-','.','/',':',';','<','=','>','?','@'];
var selected = [];
function promptUser(){
  passwordLength = prompt("How long do you want your password, pick from at least 8-128");
  if(passwordLength < 8 || passwordLength > 128){
    return false;
  }
  if(confirm("do you want lowercase letters?")) //combine arrays with concat
    selected = selected.concat(lowerCase);
  if(confirm("do you want uppercase letters?"));
    selected = selected.concat(upperCase);
  if(confirm("do you want special letters?"));
    selected = selected.concat(special);
  if(confirm("do you want numbers?"));
    selected = selected.concat(numeric);
    console.log(selected); // just to check if stored correctly
}
function generatePassword(){
  var completePassword = "";
  for(var i = 0; i <= passwordLength; i++){
    var randomArray = Math.floor(Math.random()* selected.length);
    completePassword = completePassword + selected[randomArray];
  }
  return completePassword;
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
generateBtn.addEventListener("click",promptUser); // event listener for prompting user
generateBtn.addEventListener("click", writePassword);
