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
    const spookyFridayFinder = () => {
        let targetYear = document.getElementById("year").value;
        let date;
        let arrMonth = [
            'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 
            'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
        ];
        let messageToDisplay;
        for(let i=0;i<=11;i++){
            date = new Date(targetYear,i,13);
            if((date.getDay())==5){
                if(messageToDisplay == undefined){
                    messageToDisplay = `Vendredi 13 ${arrMonth[i]} ${targetYear}`
                }
                else{messageToDisplay = `${messageToDisplay}\nVendredi 13 ${arrMonth[i]} ${targetYear}`
                }
            }
        }
        alert(messageToDisplay);
    }
    document.getElementById("run").addEventListener("click", spookyFridayFinder);
})();
