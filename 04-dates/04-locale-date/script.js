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
    const giveExactDate = () => {
        let actualDate = new Date;
        let weekDays   = actualDate.getDay() -1;
        week = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
            weekDays    = week[weekDays];
        let actualDay   = actualDate.getDate();
        let ActualMonth = actualDate.getMonth()-1;
        yearMonths = ["janvier","février","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","décembre"];
            ActualMonth   = yearMonths[ActualMonth];
        let actualYear    = actualDate.getFullYear();
        let actualHours   = actualDate.getHours();
        let actualMinutes = actualDate.getMinutes();
        actualMinutes < 10 ? actualMinutes = "0" + actualMinutes : 0;
        p = `${weekDays} ${actualDay} ${ActualMonth} ${actualYear}, ${actualHours}h${actualMinutes}`;
        document.getElementById("date").innerHTML = p;
    }
    giveExactDate();
})();
