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
    
    let alreadyDone = false;
    if(! alreadyDone){
        let bigString       = document.getElementById("target").innerHTML;
            bigString       = [...bigString];
            bigStringLength = bigString.length;
        for(let i = 0; i < bigStringLength; i++){
            if(bigString[i] != " "){
                bigString[i] = `<span style="visibility: hidden">${bigString[i]}</span>`;
            }
        }
        bigString = bigString.join('');
        document.getElementById("target").innerHTML = bigString;
        alreadyDone = true;
    }
    
    const daWave = () => {
        let textcounter = 1;
        let waveCounter = 0;
        let arrClassWaveSize = [ "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large"];
            arrClassWaveSize = [...arrClassWaveSize, ...arrClassWaveSize.reverse()];
        let WaveSizeNumber   = arrClassWaveSize.length - 1;
        let interval1 = setInterval(() => {
            let selector = document.querySelector(`p span:nth-child(${textcounter})`);
            selector.style.fontSize   = `${arrClassWaveSize[waveCounter]}`;
            selector.style.visibility = `visible`;
            textcounter += 1;
            waveCounter += 1;
            waveCounter > WaveSizeNumber ? waveCounter = 0 : 0;
            if(textcounter == bigStringLength){
                clearInterval(interval1);
            }
        }, 100);
    }
    document.getElementById("run").addEventListener("click", daWave);
})();
