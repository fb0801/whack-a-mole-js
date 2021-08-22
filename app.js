const squares =document.querySelectorAll('.square') //get all the elements called sqaure
const mole = document.querySelectorAll('.mole')//get all the mole elements
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let currentTime = 60
let hitPosition
let timerId = null //use let as the data will always change

function randomSquare(){
    squares.forEach(square =>{
        //remove the class names and mole
        square.classList.remove('mole')
    })
    let randomPosition = squares[Math.floor(Math.random() * 9)]
    //give a random position 
    randomPosition.classList.add('mole')

//pass the random hit to a ID
hitPosition = randomPosition.id

}

squares.forEach(square => {
    sqaure.addEventListener('mousedown', () => {
    // if hit with our mouse and id = to our postion then we win the game
    if(square.id == hitPosition){
        //result = result + 1
        result++
        score.textContent = result
        hitPosition = null
    }
})
})


//move the mole
function moveMole(){
    
    timerId = setInterval(randomSquare, 1000)
}

moveMole() //call the function


//countdown function
function countDown(){
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime==0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Final score is: ' + result)
    }
}

//let timerId = setInterval(countDown, 1000)
let countDownTimerId = setInterval(countDown, 1000)