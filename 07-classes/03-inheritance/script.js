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
        static sayHello(){
            return `${this.greeting}! I'm ${this.name}!`;
        }
    }

    class Cat extends Animal {
        // constructor(name){     // Non  nécessaire si l'on ne rajoute rien
        //     super(name);        // appelle le constructeur animal
        // }
        // Encore une autre méthode 
        // super(name){}   // 
        greeting = "Meouw !";
    }

    class Dog extends Animal{
         greeting = "wouf !"
    }
    
    const test = () => {
        const Terence = new Cat("Terence");
        console.log(Terence.sayHello());
    }

    
    document.getElementById("run").addEventListener("click", test)
    
})();