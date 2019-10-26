/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const askingForCake = () => {
        let answerToCakePrompt = prompt("Voulez-vous du gateau ?");
        if (answerToCakePrompt.toUpperCase() == "OUI"){
            alert("C'est bien !");
        }
        else{
            alert("Du gateau, ça ne se refuse pas!");
            askingForCake();
        }
    }
    askingForCake();
})();
