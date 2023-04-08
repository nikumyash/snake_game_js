const LINE_PIXEL_COUNT = 40;
const TOTAL_PIXEL_COUNT = LINE_PIXEL_COUNT**2;

let totalFoodEaten = 0;
let totalDistanceTraveled = 0;

const container = document.querySelector('#Container');
// creating game pixels
const createGamePixels = ()=>{
    for(let i =1;i<=TOTAL_PIXEL_COUNT;i++){
        container.innerHTML = `${container.innerHTML} <div class="gamePixels" id = "pixel${i}"></div>`
    }
}


const gamePixels = document.getElementsByClassName("gamePixels");
// creating current position of the food
let currentFoodPosition = 0;
const createFood = ()=>{
    gamePixels[currentFoodPosition].classList.remove("food");
    currentFoodPosition = Math.floor(Math.random()*TOTAL_PIXEL_COUNT);
    gamePixels[currentFoodPosition].classList.add("food")
}

// start the snake behaviour
const LEFT_DIR = 37;
const UP_DIR = 38;
const RIGHT_DIR = 39;
const DOWN_DIR = 40;

let snakeCurrentDirection = RIGHT_DIR;
const changeDirection = newDirectionCode =>{
    if(newDirectionCode == snakeCurrentDirection)return;
    if((newDirectionCode == UP_DIR && snakeCurrentDirection!==DOWN_DIR) ||(newDirectionCode == RIGHT_DIR && snakeCurrentDirection!==LEFT_DIR) ||(newDirectionCode == LEFT_DIR && snakeCurrentDirection!==RIGHT_DIR)  || (newDirectionCode == DOWN_DIR && snakeCurrentDirection!==UP_DIR)  ){
        snakeCurrentDirection = newDirectionCode;
    }
}
let currentHeadPosition = TOTAL_PIXEL_COUNT/2;
let snakeLength = 100;


// snake movement -- incomplete
const moveSnake = ()=>{
    switch(snakeCurrentDirection){
        case LEFT_DIR:
            --currentHeadPosition;
            const isHeadAtleft = currentHeadPosition% LINE_PIXEL_COUNT == LINE_PIXEL_COUNT-1 || currentHeadPosition<0;
            if(isHeadAtleft){
                currentHeadPosition = currentHeadPosition + LINE_PIXEL_COUNT;
            }
        break;
        case RIGHT_DIR:
            ++currentHeadPosition;
            const isHeadAtRight = currentHeadPosition% LINE_PIXEL_COUNT ==0;
            if(isHeadAtRight){
                currentHeadPosition = currentHeadPosition - LINE_PIXEL_COUNT;
            }
        break;
        case UP_DIR:
            cuurentHeadPosition = currentHeadPosition - LINE_PIXEL_COUNT
            const isHeadAtTop = currentHeadPosition <0;
            if(isHeadAtTop){
                currentHeadPosition = currentHeadPosition + TOTAL_PIXEL_COUNT;
            }
        break;
        case DOWN_DIR:
            cuurentHeadPosition = currentHeadPosition + LINE_PIXEL_COUNT
            const isHeadAtDown = currentHeadPosition >TOTAL_PIXEL_COUNT-1;
            if(isHeadAtDown){
                currentHeadPosition = currentHeadPosition - TOTAL_PIXEL_COUNT;
            }
        break;
        default:
        break;
    }
    let nextHeadPixel = gamePixels[currentHeadPosition];
    if(nextHeadPixel.classList.contains('snakeBody')){
        alert(`You have eaten ${totalFoodEaten} food and traveled ${totalDistanceTraveled} blocks.`);
        window.location.reload();
    }
    nextHeadPixel.classList.add('snakeBody');
}


createGamePixels();
createFood();
setTimeout(moveSnake,100);
