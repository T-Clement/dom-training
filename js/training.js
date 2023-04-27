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

// function generate random color
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

//-------------------------------------------------//
const hoverButtons = document.querySelectorAll("#ex5 .exercice-sandbox .flex-list .button");

// function who add forEach element in the array an eventListener, which when hovering on buttons call the function generateRandomColor
hoverButtons.forEach(function(button) {
    button.addEventListener("mouseover", function() {
    this.style.backgroundColor = generateJustOneColor();
    });
});


/* ------------------------------------ */
/* --- Exercice 6 --- */
// get access to text inside of the <p></p>
const textE6 = document.getElementById('ex6-paragraph').textContent.trim();
// delete all the text
document.getElementById('ex6-paragraph').textContent = ""; 
console.log(textE6);

// index for target with charAt()
let index = 0;

// loop each 50ms, get the index and the character corresponding and add it to the <p></p> with a span
// stop ? when there is no more index ? 
const timer = setInterval(() => {
    if (index < textE6.length) {
        const newLetter = textE6.charAt(index);
        const letterAdded = document.createElement('span');
        letterAdded.textContent = newLetter;
        document.getElementById('ex6-paragraph').appendChild(letterAdded);
        index++;
        // console.log(letterAdded);
    } else {
        clearInterval(timer); // to stop the loop
    }
}, 50);
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
