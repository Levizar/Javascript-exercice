/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    let alreadydone = false;
    const daWave = () => {
        if(! alreadydone){
            let bigString = document.getElementById("target").innerHTML;
            bigString = [...bigString];
            console.log(bigString);
            bigStringLength = bigString.length;
            let waveCount = 0;
            let arrClassWaveSize = [ "small", "medium", "large", "x-large", "xx-large", "x-large", "large", "medium"]
            for(let i = 0; i < bigStringLength; i++){
                if(bigString[i] != " "){
                    bigString[i] = `<span class="wave${waveCount}" style="font-size: ${arrClassWaveSize[waveCount]}">${bigString[i]}</span>`;
                    waveCount += 1;
                    waveCount > 7 ? waveCount = 0 : 0;
                }
            }
            bigString = bigString.join('');
            document.getElementById("target").innerHTML = bigString;
            alreadydone = true;
        }
    }
    
    document.getElementById("run").addEventListener("click", daWave);


})();
