/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    /*
    Exercice :
        new Set crée un objet qui est une sorte d'array n'acceptant que des valeurs uniques.
        En déroulant l'objet set dans une array, 
        l'on déroule les valeurs du set dans une nouvelle array.
        Cela revient à transformer le set en array.
    */

    const dedouble = () => {
        let fruits_unique = [...new Set(fruits)];
        console.log(fruits_unique);
    }

    document.getElementById("run").addEventListener("click", dedouble);

    // your code here
})();
