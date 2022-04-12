// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  /* 
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
THEN the password is either displayed in an alert or written to the page
  */

  var passwordLength = prompt("Please enter the length of the password, at least 8 characters and no more than 128 characters", "8");
  console.log(passwordLength);

  var includeLowerCase = confirm("Press OK, to include lowercase letters");
  console.log(includeLowerCase);

  var includeUpperCase = confirm("Press OK, to include Uppercase letters");
  console.log(includeUpperCase); 

  var includeNumeric = confirm("Press OK, to include numbers");
  console.log(includeNumeric);

  var includeSpecialCharacters = confirm("Press Ok, to include Special characters");
  console.log(includeSpecialCharacters); 

  //my input should be validated and at least one character type should be selected
  //&& -and 
  // || - either or 
  if(includeLowerCase  === false && includeUpperCase === false && includeNumeric === false && includeSpecialCharacters === false){
    alert('At least one character type should be selected'); 
    //asking the confirms again 
    includeLowerCase = confirm("Press OK, to include lowercase letters");
    includeUpperCase = confirm("Press OK, to include Uppercase letters");
    includeNumeric = confirm("Press OK, to include numbers");
    includeSpecialCharacters = confirm("Press Ok, to include Special characters");
  }
  var aplhabetList = ""; 
  var password; 

  if(includeLowerCase === true){
    aplhabetList = aplhabetList + "abcdefghijklmnopqrstuvwxyz"
  }
  if(includeUpperCase === true){
    aplhabetList = aplhabetList + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if(includeNumeric === true){
    aplhabetList = aplhabetList + "123456789"
  }
  if(includeSpecialCharacters === true){
    aplhabetList = aplhabetList + "!@#$%^&*?_"
  }
  console.log(aplhabetList);

  //FOR Loop based on the passwordLength 
  for (let i = 0; i < passwordLength; i++) {
     console.log(i); 
  }
  //Inside the loop ,call Math.floor(math.random to generate random lettter \)

  //return  the new password 
  return password; 
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
