
let buttonList = document.querySelectorAll("button");
let output = document.querySelector("#output");

console.log(buttonList);


let printValue = null;
let clicks = 0 , operator = 0 , valueOne = 0, valueTwo = 0;


for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].onclick = function () {
        let input = buttonList[i].innerHTML;

        if (isNaN(input)) {
            operator = input;
            printValue += operator;
            output.value = printValue;
            clicks = 0;
            return;
        } else {
            if (!operator) {
                //If Number and a operator hasnt been pressed yet
                if (clicks > 0) {
                    valueOne = valueOne + input;
                } else {
                    valueOne = input;
                }
                printValue = valueOne;
            } else {
                //If Number and operator has been pressed need to assign to ValueTwo;
                if (clicks > 0) {
                    valueTwo = valueTwo + input;
                } else {
                    valueTwo = input;
                }
                printValue += input;
            }
        }

        clicks++;
        output.value = printValue;

        // console.log('valueOne is: ' + valueOne);
        // console.log('valueTwo is: ' + valueTwo);
        // console.log('PrintValue is: ' + printValue);


    }
}


let enterButton = document.querySelector('#enter');
let result;

enterButton.onclick = function() {
    if (output.value == result) {
        printValue = '';
        clicks = 0, operator = 0, valueOne = 0, valueTwo = 0;
        output.value = printValue;
        return;
    }


    switch (operator) {
        case '+': 
            result = parseInt(valueOne) + parseInt(valueTwo);
        break;

        case '-': 
        result = parseInt(valueOne) - parseInt(valueTwo);
        break;

        case '*': 
        result = parseInt(valueOne) * parseInt(valueTwo);
        break;

        case '/': 
        result = parseInt(valueOne) / parseInt(valueTwo);
        break;
    }

    output.value = result;

};

