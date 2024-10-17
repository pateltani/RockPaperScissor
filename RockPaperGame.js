let userScore = 0;
let compScore =0;

const choices=document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");

const userScorePara =docment.querySelector("#user-score");
const compScorePara =docment.querySelector("#comp-score");

const genCompchoice =() =>{
     const options =["rock" ,"paper","scissors"];
    const randIdx =Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame=() =>{
  
 msg.innerText = "Game draw . Play Again";
 msg.style.backgroundColor  ="#081b31";
};

const showWinner =(userWin,userChoice,compChoice) =>{
   if (userWin){
    userScore++;
    userScorePara.innerText=userScore;
    
    msg.innerText = `you win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor ="green";
   }else{
    compScore++;
    compScorePara.innerText=compScore;
    
    msg.innerText = `you lost! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor ="red";
   }
}

const playGame =() =>{
  console.log("user Choice=",userChoice);
  const compChoice= genCompChoice();
  console.log("comp Choice=",compChoice);

if(userChoice===compChoice){
  drawGame();
} else {
  let userWin= true;
  if(userChoice ==="rock"){
    userWin=compChoice ==="paper"? false: true;
  }else if (userChoice==="paper"){
    userWin=compChoice==="scissors"?false :true;
  } else{
    userWin=compChoice==="rock" ?false:true;
  }
  showWinner(userWin ,userChoice,compChoice);
}

};


choices.forEach((choice)=> {
  console.log(choice);
  choice.addEventListener("click",()=> {
    const userChoice = choice.getattribute("id")
    console.log('choice was clicked',userChoice);
   playGame(userChoice);
  });
});