let userScore=0;
let compScore=0;
const userScorePara=document.querySelector('#user-score');
const compScorePara=document.querySelector('#comp-score');

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

genCompChoice=()=>{
    options=["rock","paper","scissors"];
    randomIdx=Math.floor(Math.random()*3);
    return options[randomIdx];
}

const drawGame=()=>{
    console.log("drawGame");
    msg.innerText="game draw.Try again...";
    msg.style.backgroundColor="yellow";
    msg.style.color="black";
};
const showWinner=(userWin,userChoice,compChoice)=>{
if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    msg.innerText=`You win ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
}else{
    compScore++;
    compScorePara.innerText=compScore;
    msg.innerText=`You lose ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor="red";

}
};
playGame=(userChoice)=>{
console.log("userChoice:",userChoice);
compChoice=genCompChoice();
console.log("compChoice:",compChoice);

if(userChoice==compChoice){
    drawGame();
}else{
    if(userChoice=="rock"){
        userWin=compChoice=="scissors"?true:false;
    }
    else if(userChoice=="paper"){
        userWin=compChoice=="scissors"?true:false;
    }
    else{
        userWin=compChoice=="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
}

};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener(("click"),() => {
 userChoice=choice.getAttribute("id");
        console.log("choice id: ",userChoice);
        playGame(userChoice);
        });
    });