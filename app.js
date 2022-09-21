const firstname = 'Kaspar'
const surname = 'Pedaja'

let val = firstname + ' ' + surname

val = 'kaspar '
val += surname

val = firstname.toUpperCase()
val = surname.toLowerCase()

val = surname[0]
val = surname.indexOf('a')
val = surname.lastIndexOf('a')

val = surname.charAt(2)
val = surname.charAt(surname.length - 1)

val = surname.substring(0, 3)
val = surname.slice(0, 3)
val = surname.slice(-4)

const tags = 'JS, HTML, CSS'
val = tags.split(',')

console.log(val[1].trim())