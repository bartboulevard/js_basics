let val

// number -> String
val = String(567)
val = String(4+4)
val = String(5.6)


// bool -> String
val = String(true)
val = String(false)

// object -> String
val = String(new Date())

// Null -> String
val = String(null)

// array -> String
val = String([1, 2, 3, 4, 5])

// undefined -> String
val = String(undefined)

// toString()
val = (true).toString()

// String -> Number
val = Number('5')

// bool -> Number
val = Number(true)
val = Number(false)

// Null -> Number
val = Number(null)

// String -> Number

val = Number("Ndada")

// Array -> Number
val = Number([1, 2, 3, 4, 5])

// String -> Integer
val = parseInt(128.76)

// String -> Float
val = parseFloat(128.70)
console.log(val)