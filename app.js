
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
//  theName.toUpperCase()
//  gender.toUpperCase()
   //  switch(gender) {
   //    case "Male":
   //       window.alert(`welcome Mr ${theName}`)
   //      break;
   //    case "Female":
   //       window.alert(`welcome Ms ${theName}`)
   //      break;
   //    default:
   //       window.alert(`Welcome ${theName}`);
   //        }

// Function
var gender;
var theName = prompt("Enter Your Name :");
var Age = prompt("Enter Your Age :");
function g() {



while(true)
{
  gender= prompt("Your Gender  (Male / Female)").toUpperCase()
//   let check = gender.toLocaleLowerCase();
   if(gender == "MALE")
   {
   alert(`"Welcome Mr ${theName}"`)
   break;
   }else if(gender =="FEMALE")
   {
      alert(`"Welcome Ms ${theName}"`)
      break;
   }

}
}
 g();

// var hotCold = window.prompt("Do You Want it Hot Or Cold");
var drink = window.prompt("What is your drink");

// var main = [];
// main.push("theName,gender,hotCold,drink");

// for(let i= 0;i < main.length;i++)
// {
//    console.log(main[i]);
// }


// soluation howari
   //  while (gender != "Male" || gender != "Female") {
   //      // var gender = window.prompt("Your Gender (Male / Female)")

   //      if ( gender == "Male") { 
   //          window.alert(`Welcome Mr ${theName}`)
   //          break;

   //      } else if ( gender == "Female") {
   //          window.alert(`Welcome Ms ${theName}`)
   //          break;

   //      } else window.prompt("Your Gender (Male / Female)");
      

   //    }

// while(true) {
//    var gender = window.prompt("Your Gender  (Male / Female)").toUpperCase(); // MALE

//    if(gender =="MALE"){
//       window.alert("welcome Mr");
//       break;
//    }
//    if(gender =="FEMALE"){
//       window.alert("welcome ms");
//       break;
//    }


// }





       
        

// var hotCold = window.prompt("Do You Want it Hot Or Cold");
// var drink = window.prompt("What is your drink");
// window.alert("Your drink is getting prepared") 
// console.log(`${theName} ${drink}`);




//  let myelement = document.createElement("div");
//  myelement.id = "Main"

// let div=document.createElement('div');
// let p=document.createElement('p');
// let txt=document.createTextNode("The first p");


// p.appendChild(txt);
// div.appendChild(p);

// document.body.appendChild(div);




//   let myElement = document.createElement("div");
//   myElement.id = "Main"
// DOM

let div = document.getElementById("id")
let pharagrap = document.createElement("p")
let unOrder = document.createElement("ul") 
let list1 = document.createElement("li") 
let list2 = document.createElement("li")
let list3 = document.createElement("li")



div.appendChild(pharagrap);
div.appendChild(unOrder);
div.appendChild(list1);
div.appendChild(list2);
div.appendChild(list3);
unOrder.appendChild(list1)
unOrder.appendChild(list2)
unOrder.appendChild(list3)




pharagrap.innerHTML=theName
list1.innerHTML= gender
list2.innerHTML= Age
list3.innerHTML = drink







// const userForm = document.getElementById("form");
// const userDataDiv = document.getElementById("Co");

// userForm.addEventListener("submit", function (event) {
//     event.preventDefault();
//     const username = userForm.elements["Enter Your Name"].value;
//     const age = userForm.elements.age.value;

//     let drinkType = "";
//     if (userForm.elements.drone.value === "h") {
//         drinkType = "Hot";
//     } else if (userForm.elements.drone.value === "d") {
//         drinkType = "Cold";
//     }

//     const drinkName = userForm.elements["drink type"].value;

//     userDataDiv.innerHTML = `
//         <p>Name: ${username}</p>
//         <p>Age: ${age}</p>
//         <p>Drink Type & Name: ${drinkType} ${drinkName}</p>
//     `;

//     userForm.reset();
// });