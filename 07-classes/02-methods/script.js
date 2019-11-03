/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    class Personn {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname  = lastname;
            this.greetings = () => `Hello, ${this.firstname} ${this.lastname}`;
            }
        }

    const create1PersonnGreeting = () => {
        let Terence = new Personn("Terence", "Hecq");
        console.log(Terence.greetings())
    }

    document.getElementById("run").addEventListener("click", create1PersonnGreeting)
})();
