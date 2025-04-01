const userInput = document.getElementById('userInput')
const countdown = document.getElementById('countdown')
const result = document.getElementById('result')
const restart = document.getElementById('restart')
let seconds = 5

restart.addEventListener('click', start)

start()


/* FIRST SOLUTION

function start() {
    result.innerHTML=''
    const myInterval = setInterval(reduceCountdown, 1000)
    countdownFunction().then((resolve) =>{ 
        clearInterval(myInterval)
        seconds = 5
        if(resolve == userInput.value){
            result.innerHTML = `
            <p class = "green">Enhorabuena, has salvado el mundo</p>
            <p>Tu número ${userInput.value} es el mismo que el número ${resolve}</p>
            `
        }else{
            result.innerHTML = `
            <p class = "red">Fallaste, la bomba ha estallado</p>
            <p>Tu número ${userInput.value} es diferente al número ${resolve}</p>
            `
        }
    })
}

function countdownFunction(){
    return new Promise((resolve) => {
        setTimeout(() => {
            let ans = 1 + Math.floor(Math.random()*3)
            resolve(ans) 
        }, 6100)
    })
}*/

/* LIVE REVIEW SOLUTION */
function start() {
    restart.style.display = 'none'
    result.innerHTML=''
    seconds = 5
    const intervalo = setInterval(() => {
        if(seconds === 0){
            clearInterval(intervalo)
            let ans = 1 + Math.floor(Math.random()*3)
            checkResult(ans)
            restart.style.display = ''
        }
        reduceCountdown()
    }, 1000);
}

function reduceCountdown() {
    countdown.textContent = 'Cuenta atrás: '+seconds+' segundos'
    seconds--
}

function checkResult(ans) {
    if(ans == userInput.value){
        result.innerHTML = `
        <p class = "green">Enhorabuena, has salvado el mundo</p>
        <p>Tu número ${userInput.value} es el mismo que el número ${ans}</p>
        `
    }else{
        result.innerHTML = `
        <p class = "red">Fallaste, la bomba ha estallado</p>
        <p>Tu número ${userInput.value} es diferente al número ${ans}</p>
        `
    }
}