let screen = document.getElementById("screen");
let allButtons = document.querySelectorAll("button");
let screenOutput = "";

function factorial(n) {
    if (n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

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

        else if (buttonText == 'del') {
            screenOutput = screenOutput.slice(0, -1);
            screen.value = screenOutput;
        }

        else if (buttonText == 'n!') {
            buttonText = '!';
            screenOutput += buttonText;
            screen.value = screenOutput;
        }

        else if (buttonText == '=') {
            if (screen.value.includes("!")) {
                let n = screen.value.slice(0, -1);
                screenOutput = factorial(n);
                screen.value = '=' + screenOutput;
                screenOutput = screen.value.substring(1);
            }
            else {

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
        }

        else {
            screenOutput += buttonText;
            screen.value = screenOutput;

        }
    })

}
