/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {    
    const ask_sex = () => {
        let sex = "";
        sex = prompt("Quel est votre sexe ? (Homme/Femme/Autre)");
        sex = sex.toUpperCase();
        if( sex != "HOMME" && sex != "FEMME" && sex !="AUTRE"){
            alert("Veuillez indiquer Homme ou Femme ou Autre")
            ask_sex();
        }
        return sex;
    }
    
    const asking = () => {
        let age = prompt("Quel âge avez-vous ?");
        let sex = ask_sex();
        let city = prompt("De quelle ville venez-vous ?");
        let confirmation = confirm("Confirmez vous les données suivantes?\n" + age + " ans\n" + sex + "\n" + city)
        if (confirmation == TRUE){
            alert("Bienvenue !");
        }
        else{
            alert("Veuiller fournir vos données exactes");
            asking();
        }
    }
    asking();
})();
