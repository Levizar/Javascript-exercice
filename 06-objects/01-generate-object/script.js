/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    const obj = () => {
        let brice = {
            lastname : "Bar",
            firstname: "Brice",
            age      : "42 ans",
            city     : "Near Namur",
            country  : "Belgium"
        }
        console.log(brice);
    }


    document.getElementById("run").addEventListener("click", obj)

})();
