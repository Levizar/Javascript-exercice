/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    let randomNumber = Math.floor(Math.random()*101);
    let numberOfTry = 0
    const theGoodPrice = () => {
        let choice = prompt("Devinez le nombre");
        if (randomNumber > choice) {
            numberOfTry += 1;
            alert("C'est plus !");
            theGoodPrice();
        }else if(randomNumber < choice){
            numberOfTry += 1;
            alert("C'est moins !");
            theGoodPrice();
        }else{
            numberOfTry += 1;
            alert(`Bravo, vous avez réussi en ${numberOfTry} essai(s)`);
        }
    }
    theGoodPrice();

/* 
    let randomNumber = Math.floor(Math.random()*101);
    let numberOfTry = 0
    let isGameRunning = true
    while (isGameRunning){
        let choice = prompt("Devinez le nombre");
        if (randomNumber > choice) {
            numberOfTry += 1;
            alert("C'est plus !");
        }else if(randomNumber < choice){
            numberOfTry += 1;
            alert("C'est moins !");
        }else{
            numberOfTry += 1;
            alert(`Bravo, vous avez réussi en ${numberOfTry} essai(s)`);
            isGameRunning = false;
        }
    }
 */

})();
