/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
        
    const passwordCheck = () => {
        let passwordOne = document.getElementById("pass-one");
        let passwordOneValue = document.getElementById("pass-one").value;
        let passwordTwo = document.getElementById("pass-two");
        let passwordTwoValue = document.getElementById("pass-two").value;
    
        if(passwordOneValue === ""){
            alert("Enter a password please !");
        } else if(passwordOneValue == passwordTwoValue){
            passwordOne.style.borderColor = "green";
            passwordTwo.style.borderColor = "green";
            passwordOne.style.backgroundColor = "rgba(155, 206, 127,0.4)";
            passwordTwo.style.backgroundColor = "rgba(155, 206, 127,0.4)";
        } else{
            // passwordOne.style.borderColor = "red";
            // passwordTwo.style.borderColor = "red";
            passwordOne.style.backgroundColor = "rgba(207, 85, 83,0.3)";
            passwordTwo.style.backgroundColor = "rgba(207, 85, 83,0.3)";

            passwordOne.classList.add("error");
            passwordTwo.classList.add("error");
        }
    }

    document.getElementById("run").addEventListener("click", passwordCheck);
})();
