/*
if(condition) {
    // if statements
} else {
    // else statements
}

== equal -> ===
!= not equal -> !==
 */

// let personID = 34

// if(typeof personID !== 'undefined'){
   // console.log("id is incorrect")
// } else {
   // console.log('id is ${personID}')
// }



/* const color = 'red'

if(color === 'red'){
    console.log('Stop!')
    } else if(color === 'yellow'){
    console.log('Attention')
} else if(color === 'green'){
    console.log("Go")
}   else{
    console.log("Error")
}
*/

/*
conditional && condition2 - and
conditional .. condition2 - or
 */

const name = "Juhan"
const age = 56

if(age > 0 && age <= 12){
    console.log(`${name} on täiskasvanu`)
} else if (age > 12 && age < 18){
    console.log(`${name} on laps`)
} else {
    console.log(`${name} on täiskasvanu`)
}

let id = 5
if(id === 100){
    console.log("ok")
} else{
    console.log("no")
}

//? ternary
console.log(id === 100 ? 'Ok' : "Not")
// switch
const color = "red"

switch (color) {
    case "red":
        console.log("Stop")
        break;
    case "yellow":
        console.log("Attention")
        break;
    case "green":
        console.log("Go")
        break;
    default:
        console.log("h")
}