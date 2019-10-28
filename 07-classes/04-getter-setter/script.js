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

    class Personn {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
            this.getterName = () => `[${this.firstname}] [${this.lastname}]`;
            this.setterName = (string) => {
                string = string.split(' ')
                this.firstname = a;
                this.lastname = b;
            }
            }
        }
    

})();
