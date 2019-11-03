/* becode/javascript
 *
 * /08-dom/11-change-event-input-one/script.js - 8.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    document.getElementById("pass-one").setAttribute("maxlength", 10);
    const passwordCheck = () => {
        const password             = document.getElementById("pass-one").value;
        const passwordLength       = password.length;
        const stringPasswordLength = `${passwordLength}/10`
        document.getElementById("counter").innerHTML = stringPasswordLength;
    }

    document.getElementById("pass-one").addEventListener("keyup", passwordCheck)

})();
