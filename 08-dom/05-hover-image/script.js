/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    let img = document.querySelector(".material > figure:nth-child(1) > img:nth-child(1)")
    let imgHoverSrc = img.dataset.hover;
    let imgInitialSrc = img.src;
    const hover = () => img.src = imgHoverSrc;
    const unHover = () => img.src = imgInitialSrc;
    img.addEventListener("mouseenter", hover);
    img.addEventListener("mouseleave", unHover);

})();
