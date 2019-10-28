/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        constructor(name){
            this.name = name;
            this.greeting = "Greeting from an undefined animal"
        }
        sayHello(){
            return `${this.greeting}! I'm ${this.name}!`;
        }

    }

    class Cat extends Animal {
        static greeting = "Meouw !";
    }

    class Dog extends Animal{
        static greeting = "wouf !"
    }
    
    const test = () => {
        const Terence = new Cat("Terence");
        console.log(Terence.sayHello());
    }

    document.getElementById("run").addEventListener("click", test)

})();
