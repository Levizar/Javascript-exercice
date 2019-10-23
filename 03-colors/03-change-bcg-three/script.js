/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    const bgchange = () => {
        let rdm_a = Math.floor(Math.random() * 256);
        let rdm_b = Math.floor(Math.random() * 256);
        let rdm_c = Math.floor(Math.random() * 256);
        let rgb = `rgb(${rdm_a},${rdm_c},${rdm_c})`;
        document.body.style.backgroundColor = rgb;
    }
    document.getElementById("run").addEventListener("click", bgchange);
})();
