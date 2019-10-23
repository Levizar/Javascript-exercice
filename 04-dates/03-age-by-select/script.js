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
        let td_date = new Date();
        let td_year = td_date.getFullYear();
        let td_month = td_date.getMonth();
        let td_day = td_date.getDay();
        let bd_year = document.getElementById("dob-year").value;
        let bd_month = document.getElementById("dob-month").value - 1;
        let bd_day = document.getElementById("dob-day").value;

        let age = td_year - bd_year;
        if( (td_month < bd_month) || ((td_month == bd_month) && (td_day < bd_day)) ){
            age = age - 1;
        }
    alert(`Vous avez ${age} ans`)        
    }
    document.getElementById("run").addEventListener("click", age);
})();
