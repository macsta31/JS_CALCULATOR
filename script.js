
let buffer = "0";
let currentTotal = 0;
// console.log(parseInt(buffer));



let previousOpp = null;

const calcScreen = document.querySelector("#calc-numbers");

document.querySelector('#button-container').addEventListener('click', (event) => {
    buttonClick(event.target.textContent);
})

let buttonClick = (value) => {
    if(isNaN(parseInt(value))){
        handleOpp(value);
    }else{
        handleNum(value);
    }
    rerenderScreen();
    
}

let handleOpp = (value) => {
    switch(value) {
        case "AC":
            buffer = "0"
            previousOpp = "null"
            break;
        case "=":
            if(previousOpp === null){
                return;
            } 
            Operation(parseInt(buffer));
            buffer = "" + currentTotal;
            previousOpp = null;
            currentTotal = 0;
            break;
        default:
            handleMath(value);
            break;
    }
}

let handleNum = (value) => {
    if(buffer === "0"){
        buffer = value;
    }
    else {
        buffer += value;
    }
}

let handleMath = (value) => {
    const internalBuffer = parseInt(buffer);
    if(currentTotal === 0){
        currentTotal = internalBuffer;
    }else{
        Operation(internalBuffer);
    }
    previousOpp = value;

    buffer = "0";
}

let Operation = (internalBuffer) => {
    if(previousOpp === "+"){
        currentTotal += internalBuffer;
    }else if(previousOpp === "-"){
        currentTotal -= internalBuffer;
    }else if(previousOpp === "X"){
        currentTotal *= internalBuffer;
    }else{
        currentTotal /= internalBuffer;
    }
}


let rerenderScreen = () => {
    calcScreen.value = buffer;
}
