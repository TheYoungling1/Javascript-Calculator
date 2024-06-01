
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }

    clear () {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operator = undefined
      }
    
    appendNumber (number) {
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperations (operator) {
        // If no operator chosen
        if (this.currentOperand === '') {
            return
        }

        this.operator = operator;
        // Move the expression before up the div as the first part of the operand
        this.previousOperand = this.currentOperand;
        this.currentOperand = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.previousOperand)
        const current = parseFloat(this.currentOperand)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operator) {
          case '+':
            computation = prev + current
            break
          case '-':
            computation = prev - current
            break
          case 'x':
            computation = prev * current
            break
          case '÷':
            computation = prev / current
            break
          default:
            return
        }
        this.currentOperand = computation
        this.operator = undefined
        this.previousOperand = ''
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
        if (this.operator != null) {
            this.previousOperandTextElement.innerText =
            `${this.previousOperand} ${this.operator}`
        } else {
            this.previousOperandTextElement.innerText = ''
        }
    }
}

const numberButtons = document.querySelectorAll('.number')
const operationButtons = document.querySelectorAll('.input')
const equalsButton = document.querySelector('.equals')
const allClearButton = document.querySelector('#clear')
const previousOperandTextElement = document.querySelector('#history')
const currentOperandTextElement = document.querySelector('#calculation')


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)


numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
 })

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperations(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})