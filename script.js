const colorCodeContainer = document.getElementById("color-code")
const optionContainer = document.getElementById("options-container")
const scoreContainer = document.getElementById("score");
let randomColor = null;
let score = 0;


function generateRandomNumberBetween(min, max){
    return min + Math.floor(Math.random() * (max - min + 1))
}


function generateRandomColorRGB(){
  const red = generateRandomNumberBetween(0, 255);
  const green = generateRandomNumberBetween(0, 255);
  const blue = generateRandomNumberBetween(0, 255);   
return `RGB(${red}, ${green}, ${blue})`;
}
  function incrementScore() {
    score += 1;
   // console.log(score);
    const sc = document.getElementById('score');
         sc.innerText = score;
  }
function validateResult(el){
    
    const selectedColor = el.target.style.backgroundColor
   //console.log(selectedColor === randomColor);
    if(selectedColor === randomColor){
       incrementScore();
    } else{
        score = 0;
    }
    window.localStorage.setItem("score",score); 
    startGame();
}

function startGame(){
    score = Number(window.localStorage.getItem('score')) ?? 0;
    scoreContainer.innerText = score;
    optionContainer.innerHTML = null;
    randomColor = generateRandomColorRGB();
    colorCodeContainer.innerText = randomColor;

const asnIndex = generateRandomNumberBetween(0,5);
 
for(let i=0; i<6; i++){
    const div = document.createElement("div");
    div.addEventListener('click', validateResult)
    div.style.backgroundColor = i === asnIndex ? randomColor : generateRandomColorRGB();
    optionContainer.append(div);
}
}

window.addEventListener("load", () => startGame())


