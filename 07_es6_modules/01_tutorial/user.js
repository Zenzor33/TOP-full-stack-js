// You can only export default one thing. It's usually a class in your file, if you have a class in your file.
export default class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

export function printName(user) {
    console.log(`User's name is ${user.name}`)
}

export function printAge(user) {
    console.log(`User is ${user.age} years old`)
}

// export default user
// export { printName, printAge }