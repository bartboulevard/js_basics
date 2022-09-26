/*
function greeting(name){
    // console.log(`Hello, ${name}`)
    return `Hello, ${name}`
}


// greeting('Kaspar')
// let greet = greeting('Kaspar')
// console.log(greet)

// const square = function (number){
   // return number * number
// }

// let result = square(3)
// console.log(result)
*/

// IIFE - immediately invokable function expression
    (function (){
        console.log('the function is running')
    })();

(function (name){
    console.log(`Hello ${name}`)
})('Kaspar');

const todo = {
    add: function (){
        console.log('add todo...')
    },
    edit: function (){
        console.log('edit todo...')
    },
    delete: function (){
        console.log('delete todo...')
    }
}
todo.add()
todo.edit()
todo.delete()