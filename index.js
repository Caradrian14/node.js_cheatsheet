// Esta es para comprobar que funciona
console.log("Hello word")

let username = "Joe"
let age = 30
let hasHobbie = false
let points = [10, 20, 30]
let user = {
    name: "Mike",
    lastname: "Tyson"
}
const P1 = 9.834
console.log(P1)
console.log(user)

if (age <= 18) {
    console.log("Eres un niño")
} else {
    console.log("Eres un adulto")
}
const names = ['joe', 'fatima', 'lucy']
for(let i = 0; i < names.length; i++) {
    console.log(names[i])
}

// function showUserInfo(username, userAge) {
//     return `El usuario se llama ${username} y tiene ${userAge} de edad`
// }

const showUserInfo = (username, userAge) => `El usuario se llama ${username} y tiene ${userAge} de edad`
console.log(showUserInfo("Joe", 30));
console.log(showUserInfo("Maria", 18));
