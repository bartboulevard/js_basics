const firstname = 'Kaspar'
const surname = 'Pedaja'
const email = 'kaspar.pedaja@voco.ee'
const dept = 'IKT'

let result = '<ul>' +
    '<li>Name: '+ firstname + '</li>' +
    '<li>' + surname + '</li>' +
    '<li>' + email + '</li>' +
    '<li>' + dept + '</li>' +
    '</ul>'

result = `
    <ul>
        <li><b>Name: </b>${firstname}</li>
        <li><b>Last name: </b>${surname}</li>
        <li><b>E-mail: </b>${email}</li>
        <li><b>Department: </b>${dept}</li>
     </ul>`
console.log(result)
document.body.innerHTML = result