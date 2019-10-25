/* becode/javascript
 *
 * /05-arrays/10-reduce-array/script.js - 5.10: utilisation d'un reducer
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const people = [
        {
            firstname: "Grenville",
            lastname: "Stive",
            age: 64,
        },
        {
            firstname: "Luis",
            lastname: "Jedrzejewsky",
            age: 73,
        },
        {
            firstname: "Teodor",
            lastname: "Warrington",
            age: 56,
        },
        {
            firstname: "Danya",
            lastname: "Bigby",
            age: 17,
        },
        {
            firstname: "Jemmy",
            lastname: "Goodbur",
            age: 87,
        },
        {
            firstname: "Vilhelmina",
            lastname: "Fost",
            age: 43,
        },
        {
            firstname: "Igor",
            lastname: "Putson",
            age: 45,
        },
        {
            firstname: "Klement",
            lastname: "Braybrook",
            age: 88,
        },
        {
            firstname: "Trefor",
            lastname: "Le Jean",
            age: 69,
        },
        {
            firstname: "Tarrah",
            lastname: "de Clerc",
            age: 77,
        },
        {
            firstname: "Brad",
            lastname: "Hookes",
            age: 82,
        },
        {
            firstname: "Kippar",
            lastname: "Fancet",
            age: 25,
        },
        {
            firstname: "Jecho",
            lastname: "Hawket",
            age: 87,
        },
        {
            firstname: "Lief",
            lastname: "Blazy",
            age: 80,
        },
        {
            firstname: "Jo-ann",
            lastname: "Sacase",
            age: 81,
        },
    ];

    /* 
    Renvoie l'age sous forme d'un nombre en créant une array contenant les ages et
    en réduisant l'array à la somme de ses valeurs 
    */

    const total_age = () => {
        console.log(people.map(x => x.age).reduce((acc, elm) => acc+elm));
    }

    /*
    Renvoie l'age sous forme d'un nombre en réduisant l'array sur base de la valeur de
    la propriété age de chaque évélement.
    */

    const age_no_more_array = () => {
        return console.log(people.reduce((acc, elm) => acc + elm.age,0));
    }

    /* 
    Renvoie un objet contenant uniquement la propriété age et dont la valeur est obtenue en
    réduisant l'array sur base de la valeur de la propriété age de chaque élément.
    Pour obtenir un objet, il faut demander à la fonction callback de renvoyer un objet et
    l'accumulateur doit être une propriété.
    */

    const age_object = () => {
        return console.log(people.reduce((acc, elm) => ({age: acc.age + elm.age})));
    }

    document.getElementById("run").addEventListener("click", total_age);
    document.getElementById("run").addEventListener("click", age_no_more_array);
    document.getElementById("run").addEventListener("click", age_object);


    // your code here
})();
