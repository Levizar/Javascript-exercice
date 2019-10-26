/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
    
    const greetings = () => {
        let actualHours = new Date().getHours();
        let greetingMessage = "";
        if(actualHours<18 && actualHours>3){
            greetingMessage = "Bonjour";
        }
        else{
            greetingMessage = "Bonsoir";
        }

        document.getElementById("accueil").innerHTML = greetingMessage;        
    }
    greetings();
})();
