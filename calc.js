
let screen = document.getElementById("screen");
let allButtons = document.querySelectorAll("button");
let screenOutput = "";

for (button of allButtons) {
    button.addEventListener("click", function (element) {
        buttonText = element.target.innerText;

        if (buttonText == 'x') {
            buttonText = '*';
            screenOutput += buttonText;
            screen.value = screenOutput;
        }
        else if (buttonText == 'C') {
            screenOutput = "";
            screen.value = screenOutput;
        }
        else if (buttonText == 'pi') {
            buttonText = Math.PI;
            screenOutput += buttonText;
            screen.value = screenOutput;
        }

        else if (buttonText == 'sin') {

            buttonText = "Math.sin(";
            screenOutput += buttonText;
            screen.value = screenOutput;
        }

        else if (buttonText == 'cos') {
            buttonText = "Math.cos(";
            screenOutput += buttonText;
            screen.value = screenOutput;
        }

        else if (buttonText == 'tan') {
            buttonText = "Math.tan(";
            screenOutput += buttonText;
            screen.value = screenOutput;
        }

        else if (buttonText == 'mod') {
            buttonText = "%";
            screenOutput += buttonText;
            screen.value = screenOutput;
        }

        else if (buttonText == 'sqrt') {
            buttonText = "Math.sqrt(";
            screenOutput += buttonText;
            screen.value = screenOutput;
        }

        else if (buttonText == 'log') {
            buttonText = "Math.log10(";
            screenOutput += buttonText;
            screen.value = screenOutput;
        }
        else if (buttonText == '%') {
            buttonText = "*(1/100)*";
            screenOutput += buttonText;
            screen.value = screenOutput;
        }
        else if (buttonText == 'sqr') {
            buttonText = `*${screenOutput}`;
            screenOutput += buttonText;
            screen.value = screenOutput;
        }
        else if (buttonText == '^') {
            buttonText = `**`;
            screenOutput += buttonText;
            screen.value = screenOutput;
        }

        else if (buttonText == '=') {


            try {
                screen.value = '=' + eval(screenOutput);
                screenOutput = screen.value.substring(1);    
            }
            catch (err) {
                screenOutput = err;
                screen.value = screenOutput;
                screenOutput = "";
            }
        }
        else if (buttonText == 'del') {
            screenOutput = screenOutput.slice(0, -1);
            screen.value = screenOutput;
        }

        else {
            screenOutput += buttonText;
            screen.value = screenOutput;
            
        }
    })
    
}