let firstOperand = ''
let secondOperand = ''
let currentNumber = ''
let operatorPressed = false;
let operatorUsed = ''

const numberBtn = document.querySelectorAll("[data-number]")
const operatorBtn = document.querySelectorAll("[data-operator]")
const clearBtn = document.querySelector("#clear")
const deleteBtn = document.querySelector("#delete")
const equalBtn = document.querySelector('#equalsBtn')
const pointBtn = document.querySelector('#pointBtn')

let topSreen = document.querySelector('#topscreen')
let bottomScreen = document.querySelector('#bottomscreen')

const inputNum = (button) => {
    let num = button.textContent
    if(bottomScreen.textContent == '' && num == 0){

    }else {
        bottomScreen.textContent += num
        operatorPressed = false
    }
    
}


operatorBtn.forEach(button => {
    button.addEventListener('click', function() {
        if(bottomScreen.textContent == ''){

        }
        //so two operators are not next to each other
        else if(operatorPressed && secondOperand == ''){
            let str = bottomScreen.textContent.slice(0,-1) + button.textContent
            bottomScreen.textContent = str
        }
        else {
            bottomScreen.textContent += button.textContent
            operatorPressed = true
            operatorUsed = button.textContent
        }
        
    }
    )
})

numberBtn.forEach(button => {
    button.addEventListener('click', function() {
        inputNum(button)
    })
})

equalBtn.addEventListener('click', function() {
    let str = bottomScreen.textContent.slice(-1)
    if(!!str.match(/[^0-9]/)){
        bottomScreen.textContent = 'ERROR CLEAR AND TRY AGAIN'
    } else {
        bottomScreen.textContent = eval(bottomScreen.textContent)
        topSreen.textContent = bottomScreen.textContent
    }
})

clearBtn.addEventListener('click',() => {
    bottomScreen.textContent = ''
})

deleteBtn.addEventListener('click',() => {
    bottomScreen.textContent = bottomScreen.textContent.slice(0,-1)
})