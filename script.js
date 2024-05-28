
document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll(".input, .number");
    const results = document.querySelector("#calculation");
    const history = document.querySelector("#history")

    let first_term = "";
    let operator = "";
    let second_term = "";

    buttons.forEach(button => {
        button.addEventListener("click", function(e) {
            const buttonId = e.target.id;
            if (buttonId) {
                results.textContent += buttonId;
            }
            if (buttonId === "clear") {
                results.textContent = " ";
                history.textContent = " ";
            }
            if (buttonId === "+" || buttonId === "-" || buttonId === "x" || buttonId === "/") {
                first_term = results.textContent.slice(0, -1);
                operator = buttonId;
            } 
            else if (buttonId === "=") {
                const terms = results.textContent.split(operator);
                second_term = terms[1].slice(0, -1);
                history.textContent = first_term + operator + second_term + "=";
                results.textContent = calculate(first_term, second_term, operator);
            }
        });
    });
});


function calculate (first_term, second_term, operator) {
    let result = 0;
    switch(operator) {
        case "+" :
            result = parseInt(first_term) + parseInt(second_term);
            return result;
        case "-" :
            result = parseInt(first_term) - parseInt(second_term);
            return result;
        case "x" :
            result = parseInt(first_term) * parseInt(second_term);
            return result;
        case "/" :
            result = parseInt(first_term) / parseInt(second_term);
            return result;
    }
}
