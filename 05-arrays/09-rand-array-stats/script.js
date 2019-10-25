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
    const stat = () => {
        let arr_random = [];
        for(let i=1;i<=10;i++){
            arr_random[i-1] = Math.floor(Math.random() * 101);
            document.getElementById(`n-${i}`).innerHTML = arr_random[i-1];
        }
        let min = Math.min(...arr_random);
        let max = Math.max(...arr_random);
        let sum = arr_random.reduce((a,b) => a + b);
        let average = sum / arr_random.length;
        
        document.getElementById(`min`).innerHTML = min;
        document.getElementById("max").innerHTML = max;
        document.getElementById("sum").innerHTML = sum;
        document.getElementById('average').innerHTML = average;
    }

    document.getElementById("run").addEventListener("click", stat);


})();
