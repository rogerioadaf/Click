const count = document.getElementById('count')
const btn = document.getElementById('btn')

var aux = 0

function lessDigit(digit){
    if (digit < 10){
        return('0000'+ digit)
    }
    if (digit < 100){
        return('000'+ digit)
    }
    if (digit < 1000){
        return('00'+ digit)
    }
    if (digit < 10000){
        return('0'+ digit)
    }
    else{
        return digit
    }
}


function counter(){
    btn.addEventListener("mousedown", () => {
        btn.style.background = 'rgb(64, 221, 135)'
    })
    
    btn.addEventListener("mouseup", () => {
        btn.style.background = 'rgb(64, 160, 216)'
    })
    
    btn.addEventListener("click", () => {
        aux++
        count.innerText = 'Counter: ' + lessDigit(aux)
    })
}

counter()
