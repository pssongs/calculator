let operatorPressed = false;


const numberBtn = document.querySelectorAll("[data-number]")
const operatorBtn = document.querySelectorAll("[data-operator]")
const clearBtn = document.querySelector("#clear")
const deleteBtn = document.querySelector("#delete")
const equalBtn = document.querySelector('#equalsBtn')
const pointBtn = document.querySelector('#pointBtn')

let topScreen = document.querySelector('#topscreen')
let bottomScreen = document.querySelector('#bottomscreen')

const inputNum = (button) => {
    let num = button.textContent
    if(!(bottomScreen.textContent == '' && num == 0)){
        bottomScreen.textContent += num
        //makes possible for more operations in one line
        operatorPressed = false
    }
    
}

const addOperator = (button) => {
    //so two operators are not next to each other
    if(operatorPressed){
        let str = bottomScreen.textContent.slice(0,-1) + button.textContent
        bottomScreen.textContent = str
    }
    else {
        bottomScreen.textContent += button.textContent
        operatorPressed = true
        operatorUsed = button.textContent
    }
}

const disable = () => {
    const btn = document.querySelectorAll('.btn')
    btn.forEach(btn => {
        if(btn.textContent != 'Clear'){
            btn.classList.add('disable')
        }
    })
}

const enable = () => {
    const btn = document.querySelectorAll('.btn')
    btn.forEach(btn => {
        btn.classList.remove('disable')
    })
}

const equal = () => {
    try {
        eval(bottomScreen.textContent)
    } catch (error){
        bottomScreen.textContent = "ERROR CLEAR AND TRY AGAIN"
        disable()
    }

    let str = bottomScreen.textContent.slice(-1)
    if(!!str.match(/[^0-9]/)){
        topScreen.textContent = ''
        bottomScreen.textContent = 'ERROR CLEAR AND TRY AGAIN'
        disable()
    } else if(eval(bottomScreen.textContent) == 'Infinity'){
        topScreen.textContent = ''
        bottomScreen.textContent = 'ERROR CLEAR AND TRY AGAIN'
        disable()
    } else if(Number.isInteger(eval(bottomScreen.textContent))){
        bottomScreen.textContent = eval(bottomScreen.textContent)
        topScreen.textContent = bottomScreen.textContent
    }
    else{
        bottomScreen.textContent = parseFloat(eval(bottomScreen.textContent).toFixed(3))
        topScreen.textContent = bottomScreen.textContent
    }
}

numberBtn.forEach(button => {
    button.addEventListener('click', function() {
        inputNum(button)
    })
})

operatorBtn.forEach(button => {
    button.addEventListener('click', function() {
        addOperator(button)
    }
    )
})

equalBtn.addEventListener('click', function() {
    //catches for any error ex. double points
    equal()
})

clearBtn.addEventListener('click',() => {
    bottomScreen.textContent = ''
    topScreen.textContent = ''
    enable()
})

deleteBtn.addEventListener('click',() => {
    bottomScreen.textContent = bottomScreen.textContent.slice(0,-1)
})

pointBtn.addEventListener('click',() => {
    bottomScreen.textContent += '.'
})