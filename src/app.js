import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

  function generatorExcuses(){
    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];
    let allDomains = []; 
    const addDomains = (pronoun, adj, noun) => ( allDomains[allDomains.length] = {pronoun, adj, noun})

    for (let index1 = 0; index1 < pronoun.length; index1++) {
        for (let index2 = 0; index2 < adj.length; index2++) {
          for (let index3 = 0; index3 < noun.length; index3++) {
            addDomains(pronoun[index1], adj[index2], noun[index3])
          }
        }  
    }

    console.log(allDomains)
    return allDomains; 
  }
  generatorExcuses(); 

};
