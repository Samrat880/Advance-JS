const Person = {
    name : "Samrat",
    greet(){
        console.log(`Hi, I am ${this.name}`)
    },

}

Person.greet();
const greetFunction = Person.greet
greetFunction()

const boundGreet = Person.greet.bind({name:"John"});
boundGreet()