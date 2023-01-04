
    // RÉCUPÉRER LE CONTENU TEXTE DE LA BALISE h1 //
var text = document.getElementsByClassName('title'); //La méthode  getElementsByClassName renvoie une collection d'éléments avec un ou des noms de classe spécifiés.
console.log(text); // affiche sur la console la variable.

    console.log("Premier H1-> :",text[0].textContent);
//---------------------------------------------------------------------------------------------//

    // RÉCUPÉRER LE HTML DE LA PREMIÈRE BALISE li //
var list = document.querySelector('#menu li'); //La méthode querySelector() renvoie le premier élément qui correspond à un sélecteur CSS.//
console.log("------Récupérer le HTML du premier <li> (3 méthodes)---------------------------------");

console.log("first LI:",list.innerHTML); // Affiche sur la console 'la chaine de caractère' et la propriété souhaiter.

console.log("first LI2:",list.innerHTML);

console.log("first LI3:",list.innerHTML);

//---------------------------------------------------------------------------------------------//


    // RÉCUPÉRER LE HTML DE LA DERNIÈRE BALISE li //
var last = document.querySelector('#menu li:last-child')
console.log("------Récupérer le HTML du dernier <li>--------------------------------------");
console.log("last LI:",last.innerHTML);
//---------------------------------------------------------------------------------------------//


    // RÉCUPÉRER LE HTML DE LA TROISIEME BALISE li //

var last = document.querySelector('#menu li:nth-child(3n)')
console.log("------Récupérer le HTML du troisième <li>--------------------------------------");
console.log("Nbre total de LI 4");
console.log("Troisièeme LI:",last.innerHTML);
//---------------------------------------------------------------------------------------------//

    //RÉCUPÉRER LE HTML DE LA BALISE ul //

var All= document.querySelector('ul')
console.log("------Récupérer le HTML du parent de <ul>--------------------------------------");
console.log("HTML du parent de <ul>:");
console.log(All.parentNode.innerHTML);
//---------------------------------------------------------------------------------------------//

    //RÉCUPÉRER LE HTML DE LA QUATRIEME BALISE li //

var parentli= document.querySelector('li:nth-child(4n)')
console.log("------Récupérer le HTML du parent du quatrième <li>--------------------------------------");
console.log("Nombre totale de LI 4");
console.log("Troisième LI: choix <span>4<span>");
console.log("HTML du parent du quatrième <li>:");

console.log(parentli.parentNode.innerHTML);
//---------------------------------------------------------------------------------------------//

    //- QUAND LA SOURIS SURVOLE ul, TOUT LE RESTE PASSE EN ROUGE, SINON EN NOIR.
var survole = document.querySelector('ul'|| 'h1');
    survole.addEventListener('mouseover', function handleMouseOver() {
    survole.style.color = 'red'}
    );

    survole.addEventListener('mouseout', function handleMouseOut() {
    survole.style.color = 'black';
      });
//---------------------------------------------------------------------------------------------//









//   // 2eme Manière//

    // // RÉCUPÉRER LE CONTENU DU h1 //

// const h1 = document.getElementsByClassName('title');
// console.log(h1[0].textContent);

    // // RÉCUPÉRER LE HTML DE LA PREMIÈRE BALISE li //

// const liste = document.querySelector('ul');
// console.log(liste.firstElementChild.innerHTML);

    // // RÉCUPÉRER LE HTML DE LA DERNIÈRE BALISE li //

// console.log(liste.lastElementChild.innerHTML);

    // // RÉCUPÉRER LE HTML DE LA TROISIEME BALISE li //

// console.log(liste.children[2].innerHTML);

    // // RÉCUPÉRER LE HTML DU PARENT DE LA BALISE ul //

// console.log(liste.parentNode.innerHTML);

    // // RÉCUPÉRER LE HTML DU PARENT DE LA QUATRIÈME BALISE li //

// console.log(liste.children[3].parentNode.innerHTML);

    // // QUAND LA SOURIS SURVOLE <ul>, TOUT LE TEXTE PASSE EN ROUGE //

// liste.addEventListener("mouseenter", function survol(event) {
//     event.target.style.color = "red";
// })

// liste.addEventListener("mouseleave", function survolSortie(event) {
//     event.target.style.color = "black";
// })












