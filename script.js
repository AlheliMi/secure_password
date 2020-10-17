// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password)

}
function generatePassword() {
  var lower = "abcdefghijklmnopqrstuvwxyz"
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var number = "0123456789"
  var special = "@!$%&/()=?,'*^-_*+·#<>{}[]|;:`"
  var password =""

  myLength = 0
  for(;myLength < 8 || myLength > 128;) {
   myLength = prompt("Ingresa la longitud de tu password, debe ser entre 8 y 128 caracteres? ")
  console.log(myLength)
}

  var myLower = false;
  var myUpper= false;
  var mySpecial= false;
  var myNumber= false;
  for(;(myLower||myUpper||mySpecial)=== false;){
    alert("Al menos debes elegir una de las siguiente opciones:")
    myLower = confirm("Quieres que incluya minúsculas? ")
    console.log(myLower)
    myUpper = confirm("Quieres que incluya mayúsculas? ")
    console.log(myUpper)
    mySpecial = confirm("Quieres que incluya carácteres especiales? ")
    console.log(mySpecial)
    myNumber = confirm("Quieres que incluya números? ")
    console.log(myNumber)
  }
  
  myOptions = []
  if (myLower===true){
    myOptions.push(lower)
    console.log(myOptions)
  }
  if (myUpper===true){
    myOptions.push(upper)
    console.log(myOptions)
  }
  if (mySpecial===true){
    myOptions.push(special)
    console.log(myOptions)
  }
  if (myNumber===true){
    myOptions.push(number)
    console.log(myOptions)
  }
  
  
  charType= Math.floor(Math.random() * myOptions.length );
  for(i=0 ; i <= myLength ; i++)
  {
    charType= Math.floor(Math.random() * myOptions.length )
    myOptions[charType]
    charSelected  = Math.floor(Math.random() *myOptions[charType].length)
    password = password + myOptions[charType][charSelected]
    console.log(password)
    
  }
  return password
}

writePassword() 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
