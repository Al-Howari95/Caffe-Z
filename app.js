
// EX1 if else
// var main = [];
// var theName = window.prompt("Enter Your Name");
// var gender = window.prompt("Your Gender  (Male / Female)");

// if (gender == "Male") {
//     window.alert(`Welcome Mr ${theName}`)
// } else if (gender == "Female"){
//     window.alert(`Welcome Ms ${theName}`)
// } else
//     window.alert(`Welcome ${theName}`);


var theName = prompt("Enter Your Name :");
function g() {
var gender;


while(gender != "male" || gender != "female" )
{
  gender= prompt("Your Gender  (Male / Female)")
//   let check = gender.toLocaleLowerCase();
   if(gender == "male")
   {
   alert(`"Welcome Mr ${theName}"`)
   break;
   }else if(gender =="female")
   {
      alert(`"Welcome Ms ${theName}"`)
      break;
   }

}
}
 g();

var hotCold = window.prompt("Do You Want it Hot Or Cold");
var drink = window.prompt("What is your drink");

var main = [];
main.push("theName,gender,hotCold,drink");

for(let i=0;i < main.length;i++)
{
   console.log(main[i]);
}


// soluation howari
    // while (gender != "Male" || gender != "Female") {
    //     // var gender = window.prompt("Your Gender (Male / Female)")

    //     if ( gender == "Male") { 
    //         window.alert(`Welcome Mr ${theName}`)
    //         break;

    //     } else if ( gender == "Female") {
    //         window.alert(`Welcome Ms ${theName}`)
    //         break;

    //     } else window.prompt("Your Gender (Male / Female)");
      

    //   }




       
        

// var hotCold = window.prompt("Do You Want it Hot Or Cold");
// var drink = window.prompt("What is your drink");
// window.alert("Your drink is getting prepared") 
// console.log(`${theName} ${drink}`);







