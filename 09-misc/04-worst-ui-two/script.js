/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2): phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    
    // Fonction lancée depuis un foreach button avec l'ID en paramètre

    const numeroter = (btn) => {
        // récupération du bouton pressé et impact sur celui-ci
        let target      = document.getElementById("target");
        let button      = document.getElementById(`${btn}`);
        let min         = target.dataset.min;
        let max         = target.dataset.max;
        let valueButton = button.innerHTML;
        // Mettre + devant value pour le transformer en entier
        valueButton = +valueButton +1;

        // Si le bouton passe le max, il revient au min
        if(valueButton > max){
            valueButton = min;
        }
        // rajoute un 0 devant si la valeur est inférieur à 10
        if(btn != "part-one" && valueButton < 10){
            valueButton = `0${valueButton}`
        }
        // renvoie la valeur du boutton dans HTML
        button.innerHTML = valueButton;

        // Récupération de la cible et des valeurs de tous les boutons
        let valueButtonOne   = document.getElementById("part-one").innerHTML;
        let valueButtonTwo   = document.getElementById("part-two").innerHTML;
        let valueButtonThree = document.getElementById("part-three").innerHTML;
        let valueButtonFour  = document.getElementById("part-four").innerHTML;

        // Impact sur la cible 
        target.innerHTML = `+${valueButtonOne}${valueButtonTwo}${valueButtonThree}${valueButtonFour}`

    }
    
    
    Array.from(document.querySelectorAll("button")).forEach(($btn) =>
        $btn.addEventListener("click", () => (numeroter($btn.id), false)))

})();
