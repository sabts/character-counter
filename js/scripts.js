const elementTextArea = document.getElementById("textarea")

const elementCheckBox = document.getElementById("checkbox")
const elementTimeReading = document.getElementById("readingtime")

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

//Segundo, en base del primero cuente el numero de caracteres con y sin espacios
//como cuenta: 
//los caracteres por la cantidad del lenght
//Word Count: por el numero de espacios.
//sentence por el numero de enter en el teclado

const charactersCounts = () => {
    let text = spaceExcludeCheckBox();

    elementTotalcharacters.textContent = text.length;
}

const wordCounts = () => {
    let text = spaceExcludeCheckBox();

    words = text.split(/\s+/).filter(word => word.length > 0);  
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

const timeReading = () => {
    let readingPerMinute = 250;
    let text = elementTextArea.value;
    let words = text.split(/\s+/).filter(word => word.length > 0);
    
    const readingTimeByWords= Math.ceil(words.length /readingPerMinute);elementTimeReading.textContent = 'Approx. reading time: '+ readingTimeByWords + ' minute';
}

elementCheckBox.addEventListener("change",charactersCounts);
elementTextArea.addEventListener("input", timeReading)

elementTextArea.addEventListener("input",charactersCounts);
elementTextArea.addEventListener("input",wordCounts );
elementTextArea.addEventListener("input",sentenceCounts );