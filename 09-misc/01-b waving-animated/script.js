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
    
    let bigString = document.getElementById("target").innerHTML;
    bigString = [...bigString];
    console.log(bigString);
    bigStringLength = bigString.length;
    for(let i = 0; i < bigStringLength; i++){
        if(bigString[i] != " "){
            bigString[i] = `<span>${bigString[i]}</span>`;
        }
    }
    bigString = bigString.join('');
    document.getElementById("target").innerHTML = bigString;
    const daWave = () => {
        let textcounter = 1;
        let waveCounter = 0;
        let arrClassWaveSize = [ "xx-small", "x-small", "small", "medium", "large", "x-large", "xx-large"];
        arrClassWaveSize = [...arrClassWaveSize, ...arrClassWaveSize.reverse()];
        WaveSizeNumber = arrClassWaveSize.length - 1;
        console.log(arrClassWaveSize);
        interval1 = setInterval(() => {
            document.querySelector(`p span:nth-child(${textcounter})`).style.fontSize = `${arrClassWaveSize[waveCounter]}`;
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
