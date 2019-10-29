/* becode/javascript
 *
 * /09-misc/03-worst-ui-one/script.js - 9.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    let slider = document.getElementById("slider");
    let target = document.getElementById("target");
    const numberChanger = () => {
        let value = slider.value;
        target.innerHTML = `+${value}`;
        slider.addEventListener("mouseup", clearInterval(interval1));
    }
    slider.addEventListener("mousedown",() => (interval1=setInterval(numberChanger, 100)));
})();
