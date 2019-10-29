/* becode/javascript
 *
 * /08-dom/02-select-two/script.js - 8.2: sélection par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    // let arrp = document.querySelector("p.target").innerHTML = "owned"

    let htmlCollection = document.getElementsByClassName("target");
    let arrClassTarget = [...htmlCollection];
    arrClassTarget.forEach(elm => elm.innerHTML = "Owned");
    console.log(arrClassTarget);

    // OR USE QUERYSELECTOR !!! (Easier !)

})();
