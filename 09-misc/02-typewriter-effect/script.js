/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    
    let alreadyDone = false;
    const typeWriter = () => {
        if(! alreadyDone){
            let bigString = document.getElementById("target").innerHTML;
            arrBigString = [...bigString];
            let arrBigStringLength = arrBigString.length;
            for(let i = 0; i < arrBigStringLength; i++){
                arrBigString[i] = `<span style="visibility: hidden">${arrBigString[i]}</span>`;
            }
            arrBigString = arrBigString.join('');
            document.getElementById("target").innerHTML = arrBigString;
            alreadyDone = true;
        }
        let textcounter = 1;
        let interval1 = setInterval(() => {
            document.querySelector(`p span:nth-child(${textcounter})`).style.visibility = "visible";
            textcounter += 1;
            if(textcounter == arrBigStringLength){
                clearInterval(interval1);
            }
        }, 100);
    }
    
    document.getElementById("run").addEventListener("click", typeWriter);

})();
