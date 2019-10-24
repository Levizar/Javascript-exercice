/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
    const ajd = () => {
        let date = new Date;
        let w_day = date.getDay() -1;
        week = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
        w_day = week[w_day];
        let day = date.getDate();
        let month = date.getMonth()-1;
        ymonth = ["janvier","février","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","décembre"];
        month = ymonth[month];
        let year = date.getFullYear();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        minutes < 10 ? minutes = "0" + minutes : 0;
        p = `${w_day} ${day} ${month} ${year}, ${hours}h${minutes}`;
        document.getElementById("date").innerHTML = p;
    }
    ajd();
})();
