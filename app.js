const numbers1  = [46, 79, 61, 102, 84, 33]
const numbers2 = new Array(43, 465, 421, 33, 4)

let val

val = numbers1.length
val = numbers2.length

val = numbers1[3]
val = numbers1.indexOf(61)
val = Array.isArray(null)


numbers1.push(88)
numbers1.pop()
numbers1.unshift(6553)
numbers1.shift()


val = numbers1.concat(numbers2)

console.log(numbers1)
val = numbers1.sort(function (x, y) {
    return y - x
})


console.log(numbers1)