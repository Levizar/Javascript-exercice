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
    
    
    const typeWriter = () => {
        let bigString = document.getElementById("target").innerHTML;
        bigString = [...bigString];
        console.log(bigString);
        bigStringLength = bigString.length;
        let waveCount = 0;
        for(let i = 0; i < bigStringLength; i++){
                bigString[i] = `<span style="visibility: hidden">${bigString[i]}</span>`;
        }
        bigString = bigString.join('');
        document.getElementById("target").innerHTML = bigString;
        let textcounter = 1;
        interval1 = setInterval(() => {
            document.querySelector(`p span:nth-child(${textcounter})`).style.visibility = "visible";
            textcounter += 1;
            if(textcounter == bigStringLength){
                clearInterval(interval1);
            }
        }, 100);
        // for(let i = 1; i < (bigStringLength-1); i++){
        // }
        
    }
    
    document.getElementById("run").addEventListener("click", typeWriter);

})();
