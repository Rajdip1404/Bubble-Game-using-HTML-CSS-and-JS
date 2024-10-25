let timer = 60;
let score = 0;

function getNewTarget(){
    const targetval = document.querySelector("#targetval");
    targetval.innerHTML = Math.floor(Math.random() * 10)+1;
}

function makeBubble(){
    const pbottom = document.querySelector("#pbottom");
    for(let i = 0; i < 119; i++){
        let bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.innerHTML = Math.floor(Math.random() * 10)+1;
        pbottom.appendChild(bubble);
    }
}

function clearBubbles(){
    const pbottom = document.querySelector("#pbottom");
    pbottom.innerHTML = "";
}

function runTimer(){
    const timerval = document.querySelector("#timerval");
    let timerFunction = setInterval(() => {
        if(timer > 0){
            timer--;
            timerval.innerHTML = timer;
        }
        else{
            clearInterval(timerFunction);
            timerval.innerHTML = "Game Over";
            alert("Game Over");
            document.querySelector("#pbottom").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}
function increaseScore(){
    const scoreval = document.querySelector("#scoreval");
    score += 10;
    scoreval.innerHTML = score;
    clearBubbles();
    makeBubble();
}

document.addEventListener('DOMContentLoaded', function() {
    makeBubble();
    runTimer();
    getNewTarget();

    document.querySelector("#pbottom").addEventListener("click", function(event){
        if(event.target.innerHTML == targetval.innerHTML){
            increaseScore();
        }
    })
});
