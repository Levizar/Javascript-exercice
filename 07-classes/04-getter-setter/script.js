/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.getterName = () => `[${this.firstname}] [${this.lastname}]`;
            this.setterName = (string) => {
                string = string.split(' ');
                this.firstname = string[0];
                this.lastname = string[1];
            }
        }
    }

    const newInstancePerson = () => {
        let p1 = new Person("Terence", "Hecq");
        console.log(p1.getterName());
        p1.setterName("Brice Bartoletti");
        console.log(p1.getterName())
    }
    
    // AUTRE METHODE AVEC GET ET SET, LA METHODE HORS CONSTRUCTEUR !
    
    
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
        get getterName () {
            return `${this.firstname} ${this.lastname}`
        };
        
        set setterName (string) {
            string = string.split(' ');
            this.firstname = string[0];
            this.lastname = string[1];
        }
    }
    
    const newInstancePerson = () => {
        let p1 = new Person("Terence", "Hecq");
        console.log(p1.getterName);
        p1.setterName = "Brice Bartoletti";
        console.log(p1.getterName)
    }
    
    document.getElementById("run").addEventListener("click", newInstancePerson);
})();
