/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    
    let target = document.getElementById("target");
    let table = document.createElement("table");
    target.appendChild(table);
    table = document.querySelector("table");
    
    
    
    for(i=1;i<=11;i++){
        let tr = document.createElement("tr");
        table.appendChild(tr)
        for(j=1;j<=10;j++){
            let td = document.createElement("td");
            target.querySelector(`tr:nth-child(${i})`).appendChild(td);
            if(i==1){
                target.querySelector(`tr:nth-child(${i}) td:nth-child(${j})`).innerHTML = `Table de ${j}`;
            } else {
                target.querySelector(`tr:nth-child(${i}) td:nth-child(${j})`).innerHTML = (i-1)*j;
            }
        }
    }
    

})();
