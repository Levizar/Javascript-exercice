/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const vendredi_13 = () => {
        let year = document.getElementById("year").value;
        let date;
        let arr_month = [
            'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 
            'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
        ];
        let message_to_display = "";
        for(let i=1;i<=12;i++){
            date = new Date(year,i,13);
            if((date.getDay())==5){
                message_to_display = `${message_to_display}\n Vendredi 13 ${arr_month[i+1]} ${year}`
            }
        }
        alert(message_to_display);
    }
    document.getElementById("run").addEventListener("click", vendredi_13);
})();
