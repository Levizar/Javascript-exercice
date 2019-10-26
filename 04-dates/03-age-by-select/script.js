/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const age = () => {
        let actualDate = new Date();
        let actualYear = actualDate.getFullYear();
        let actualMonth = actualDate.getMonth();
        let actualDay = actualDate.getDay();
        let birthdayYear = document.getElementById("dob-year").value;
        let birthdayMonth = document.getElementById("dob-month").value - 1;
        let birthdayDay = document.getElementById("dob-day").value;

        let age = actualYear - birthdayYear;
        if( (actualMonth < birthdayMonth) || ((actualMonth == birthdayMonth) && (actualDay < birthdayDay)) ){
            age = age - 1;
        }
    alert(`Vous avez ${age} ans`)        
    }
    document.getElementById("run").addEventListener("click", age);
})();
