let playerScore=document.querySelector(".yourscore")
let computerScore=document.querySelector(".aiscore");
const myButton=document.querySelectorAll('.rock,.paper,.scissors')
//const resultText=alert("")
let myChoice;
let computerChoice;

myButton.forEach(button=>button.addEventListener('click',()=>{
    myChoice=button.className;
    console.log(myChoice)
    getComputerChoice();

function getComputerChoice(){
    let choice= Math.floor(Math.random()*3)+1;
        if (choice==1){
            computerChoice="rock";}
        else if (choice==2){
            computerChoice="paper";}
        else{
            computerChoice="scissors"
        };
        console.log(computerChoice);
    
    };
}))

/*function getComputerChoice(){
  let choice= Math.floor(Math.random()*3)+1;
    if (choice==1){
        computerChoice="rock";}
    else if (choice==2){
        computerChoice="paper";}
    else{
        computerChoice="scissors"
    };
    console.log(computerChoice);

};
//let computerChoice=getComputerChoice();

/*
function getPlayerSelection(){
    const myChoice=prompt("Enter your choice of rock paper or scissors").toLowerCase();
    if(myChoice=="rock"){
        return(myChoice);
    }
    else if(myChoice=="paper"){
        return(myChoice);
    }
    else if(myChoice=="scissors"){
        return(myChoice);
    }
    else
        return('This is neither "rock","paper", or "scissors"')
}
let playerSelection=getPlayerSelection();
console.log(playerSelection)




function getPlayRound(playerSelection,computerChoice){
    if(playerSelection==computerChoice){
       console.log("you both have chosen the same item!");
    }
    else if(playerSelection=="paper"&& computerChoice=="rock"){
        playerScore++;
       console.log("you've won paper beats rock! You have "+playerScore+" points!");
        return(playerScore)
    }
    else if(playerSelection=="paper"&& computerChoice=="scissors"){
        computerScore++;
       console.log("you've lost scissors beats paper! Your opponent has "+computerScore+" points" )
        return(computerScore)
    }
    else if(playerSelection=="rock"&& computerChoice=="paper"){
        computerScore++;
       console.log("you've lost paper beats rock! Your opponent has "+computerScore+" points")
       return(computerScore)
    }
    else if(playerSelection=="rock"&& computerChoice=="scissors"){
        playerScore++;
       console.log("you've won rock beats scissors!  You have "+playerScore+" points!")
       return(playerScore)
    }
    else if(playerSelection=="scissors"&& computerChoice=="rock"){
        computerScore++;
       console.log("you've lost rock beats scissors! Your opponent has "+computerScore+" points")
       return(computerScore)
    }
    else if(playerSelection=="scissors"&& computerChoice=="paper"){
        playerScore++;
       console.log("you've won scissors beats paper!  You have "+playerScore+" points!")
       return(playerScore)
    }
    else
        return("wtf.")
}
let playRound=getPlayRound(playerSelection,computerChoice)
console.log(playRound)


function game(){
    while(computerScore<=5 && playerScore<=5){
        let computerChoice = getComputerChoice();
        let playerSelection = getPlayerSelection();
         getPlayRound(playerSelection, computerChoice);

    if (playerScore==5){
        return console.log("you won")    
        }
    else if(computerScore==5){
        return console.log("You lost")
            }    }
    }
game();
*/