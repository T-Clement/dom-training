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


/* ------------------------------------ */
/* --- Exercice 5 --- */


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
