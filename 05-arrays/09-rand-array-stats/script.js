/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const statOverRandomNumberOperator = () => {
        let arrRandomNumbers = [];
        for(let i=1;i<=10;i++){
            arrRandomNumbers[i-1] = Math.floor(Math.random() * 101);
            document.getElementById(`n-${i}`).innerHTML = arrRandomNumbers[i-1];
        }
        let min = Math.min(...arrRandomNumbers);
        let max = Math.max(...arrRandomNumbers);
        let sum = arrRandomNumbers.reduce((acc,rest) => acc + rest);
        let average = sum / arrRandomNumbers.length;
        
        document.getElementById(`min`).innerHTML = min;
        document.getElementById("max").innerHTML = max;
        document.getElementById("sum").innerHTML = sum;
        document.getElementById('average').innerHTML = average;
    }

    document.getElementById("run").addEventListener("click", statOverRandomNumberOperator);


})();
