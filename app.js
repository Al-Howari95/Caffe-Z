
// EX1 if else
var theName = window.prompt("Enter Your Name", "");
var gender = window.prompt("Your Gender  (Male / Female )", "");

if (gender == "Male"){
    window.alert(`Welcome Mr ${theName}`)
} else if (gender == "Female"){
    window.alert(`Welcome Ms ${theName}`)
} else
    window.alert(`Welcome ${theName}`);

var hotCold = window.prompt("Do You Want it Hot Or Cold", "");
var drink = window.prompt("What is your drink", "");
window.alert("Your drink is getting prepared") 
console.log(`${theName} ${drink}`);



