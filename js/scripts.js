const elementTextArea = document.getElementById("textarea")

const elementCheckBox = document.getElementById("checkbox")

const elementTotalcharacters = document.getElementById("Totalcharacters")
const elementWordCount = document.getElementById("wordcount")
const elementSentenceCount = document.getElementById("sentencecount")

//const totalCounts = document.querySelectorAll(".counter-total")

let text = elementTextArea.value;


//Primero: el contador de caracteres lee si el check box esta seleccionado(excluye los espacios)
const spaceExcludeCheckBox = () => {
let text = elementTextArea.value;

    if (elementCheckBox.checked) {
        text = text.replace(/\s+/g, "");
    }
    return text;
}

const charactersCounts = () => {
    let text = spaceExcludeCheckBox();

    const words = text.split(/\s+/).filter(word => word.length > 0);
    elementWordCount.textContent = words.length;
}

const wordCounts = () => {
    let text = spaceExcludeCheckBox();

    const words = text.split(/\s+/).filter(word => word.length > 0);  
    elementWordCount.textContent = words.length;
}
    

const sentenceCounts = () => {
    let text = spaceExcludeCheckBox();

   const lineBreaks = text.match(/\n/g);
    if (lineBreaks === null) {
        elementSentenceCount.textContent = 0;
    } else {
        elementSentenceCount.textContent = lineBreaks.length;
    }
}

elementTextArea.addEventListener('input',charactersCounts);
elementTextArea.addEventListener('input',wordCounts );
elementTextArea.addEventListener('input',sentenceCounts );

elementCheckBox.addEventListener('change',charactersCounts);


//Segundo, en base del primero cuente el numero de caracteres con y sin espacios
//como cuenta: 
//los caracteres por la cantidad del lenght
//Word Count: por el numero de espacios.
//sentence por el numero de  enter en el teclado
//const counts = () => {
//    let text = spaceExcludeCheckBox();
//    elementTotalcharacters.textContent = text.length;

   //const words = text.split(/\s+/).filter(word => word.length > 0);  
   // elementWordCount.textContent = words.length;

   // elementSentenceCount.textContent = (text.match(/\n/g)).length; me da error por null
//   const lineBreaks = text.match(/\n/g);
//    if (lineBreaks === null) {
//        elementSentenceCount.textContent = 0;
//    } else {
//        elementSentenceCount.textContent = lineBreaks.length;
//    }
//} Lo siento, hice una mega funcion primero...