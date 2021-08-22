const square =document.querySelectorAll('.square') //get all the elements called sqaure
const mole = document.querySelectorAll('.mole')//get all the mole elements
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0

function randomSquare(){
    square.forEach(className =>{
        //remove the class names and mole
        className.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random()) * 9]
    //give a random position 
    randomPosition.classList.add('mole')

//pass the random hit to a ID
hitPosition = randomPosition.id

}

square.forEach(id => {
    id.addEventListener('mouseup', () =>{
    // if hit with our mouse and id = to our postion then we win the game
    if(id.id===hitPosition){
        result = result + 1
        score.textContent = result
    }
})
})


//move the mole
function moveMole(){
    let timerId = null //use let as the data will always change
    timerId = setInterval(randomSquare, 1000)
}

moveMole() //call the function


