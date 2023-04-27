/* ------------------------------------ */
/* --- Exercice 1 --- */
// avec toggle
const textE1 = document.querySelector("#ex1 .exercice-sandbox :nth-child(2)");
const btnE1 = document.querySelector("#ex1 .exercice-sandbox > .js-button-ex1");
btnE1.addEventListener("click", function() {
    textE1.classList.toggle('text-disable');
});
/* ------------------------------------ */
/* --- Exercice 2 --- */

function getScrollValue(event) {
    document.getElementById("ex2-scroll-value").innerHTML = window.scrollY
}
window.addEventListener("scroll", getScrollValue);

/* ------------------------------------ */
/* --- Exercice 3 --- */
const animalsArray = document.querySelector("#ex3-animals");
const btnE3 = document.querySelector("#ex3 .exercice-sandbox :first-child");
btnE3.addEventListener("click", function() {
    animalsArray.appendChild(animalsArray.firstElementChild);
})

/* ------------------------------------ */
/* --- Exercice 4 --- */
let counter = 0;
const textE4 = document.getElementById('txt-e4')
const btnE4 = document.querySelector('#ex4 .exercice-sandbox :first-child');


const arrayCoolors = ["btn-blue", "btn-red", "btn-green"] // à revoir avec ça

btnE4.addEventListener("click", function () {
    counter++;
    if (counter === 1) {
        btnE4.classList.add("btn-blue");
    } else if (counter === 2) {

        btnE4.classList.remove("btn-blue");
        btnE4.classList.add("btn-red");
    }else if (counter === 3) {
        btnE4.classList.remove("btn-red");
        btnE4.classList.add("btn-green");
    }

     if (counter > 3) {
        counter = 1;
        btnE4.classList.remove("btn-green");
        btnE4.classList.add("btn-blue");
     }
    console.log(counter);

});
/* ------------------------------------ */
/* --- Exercice 5 --- */


const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

function getCharacter(index) {
	return hexCharacters[index];
}

function generateJustOneColor(){
	let hexColorRep = "#";
    for (let position = 0; position < 6; position++){
        const randomPosition = Math.floor (Math.random() * hexCharacters.length);
        hexColorRep += getCharacter(randomPosition);
    }
	return hexColorRep;
}
console.log(generateJustOneColor());

//-------------------------------------------------//
const hoverButtons = document.querySelectorAll("#ex5 .exercice-sandbox .flex-list .button");
console.log(hoverButtons);

hoverButtons.forEach(function(button) {
    button.addEventListener("mouseover", function() {
    this.style.backgroundColor = generateJustOneColor();
    });
});


/* ------------------------------------ */
/* --- Exercice 6 --- */



/* ------------------------------------ */
/* --- Exercice 7 --- */

const taskList = [
    "🥖 Acheter du pain",
    "🗑️ Descendre la poubelle",
    "🐶 Sortir le chien",
    "🍽️ Faire la vaisselle",
    "🧹 Passer l'aspirateur",
    "🌳 Tondre la pelouse"
];


/* ------------------------------------ */
/* --- Exercice 8 --- */
