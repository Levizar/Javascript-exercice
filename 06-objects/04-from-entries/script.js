/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    // Déroule l'objet via une fonction reduce => Très Tricky, à éviter
    const createObj = () => {
        const keys   = ["name", "species", "age", "gender", "color"];
        const values = ["Skitty", "cat", 9, "female", "tabby"];
        const merged = keys.reduce((obj, key, index) => ({ ...obj, [key]: values[index] }), {})
        console.log(merged);
    }
    
    // bonne méthode
    const createObjFromEntries = () => {
        const keys   = ["name", "species", "age", "gender", "color"];
        const values = ["Skitty", "cat", 9, "female", "tabby"];
        // crée l'objet avec la fonction fromEntries depuis l'array crée via la map [keys, values]
        const objmerged = Object.fromEntries(keys.map((a,i) => [keys[i], values[i]]))
        console.log(objmerged);
    }

    document.getElementById("run").addEventListener("click", createObjFromEntries);
    
})();
