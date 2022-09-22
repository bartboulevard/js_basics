const person = {
    firstname: 'Juhan',
    surname: 'Parts',
    age: 56,
    email: 'juhan.parts@gmail.com',
    hobbies: ['jalgpall', 'korvpall'],
    address: {
        city: 'Võru',
        county: 'Võrumaa'
    },
    getBirthYear: function (){
        return 2022 - this.age
    }
}

let val
val = person
val = person.firstname
val = person["surname"]
val = person["hobbies"][1]
val = person.hobbies[0]
val = person.address.city
val = person.address["city"]
val = person.getBirthYear()

console.log(val)

for(let i = 0; i < person.hobbies.length; i++){
    console.log(person.hobbies[i])
}

person.hobbies.forEach((hobby, index) => {
    console.log(hobby + ' on element indeksiga ' + index)
})