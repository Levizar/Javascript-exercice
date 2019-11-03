/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    document.getElementById("pass-one").setAttribute("maxlength", 10);
    const passwordCheck = () => {
        const password       = document.getElementById("pass-one").value;
        const passwordLength = password.length;
        const validity       = document.getElementById("validity")
              number         = password.match(/\d/g);
        passwordLength >= 8 && number.length >= 2 ? validity.innerHTML= "OK" : validity.innerHTML = "Pas OK";
    }

    document.getElementById("pass-one").addEventListener("keyup", passwordCheck)

})();
