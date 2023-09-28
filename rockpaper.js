let playerScore=document.querySelector(".yourscore");
let computerScore=document.querySelector(".aiscore");
const myButton=document.querySelectorAll('.rock,.paper,.scissors');
let congratulations=document.querySelector('.congratulations');
let myChoice;
let computerChoice;
let player=0;
let computer=0;


myButton.forEach(button=>button.addEventListener('click',()=>{
    button.style.transform = 'scale(1.1)';
    button.style.borderColor = '#ffc600';
    button.style.boxShadow = '0 0 1rem #ffc600';

    setTimeout(() => {
        button.style.transform = 'none';
        button.style.borderColor = 'rgba(0, 0, 0, 0.529)';
        button.style.boxShadow = 'none';
    }, 200);

    myChoice=button.className;
    console.log(myChoice)
    getComputerChoice();
    getPlayRound(myChoice,computerChoice);
    game();
    playerScore.textContent=`Your score:${player}`;
    computerScore.textContent=`AI score:${computer}`;
    



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

function getPlayRound(myChoice,computerChoice){
    if(myChoice==computerChoice){
        console.log("you both have chosen the same item!");
    }
    else if(myChoice=="paper"&& computerChoice=="rock"){
        player++;
        console.log("you've won paper beats rock! You have "+player+" points!");
        return(player)
    }
    else if(myChoice=="paper"&& computerChoice=="scissors"){
        computer++;
        console.log("you've lost scissors beats paper! Your opponent has "+computer+" points" )
        return(computer)
    }
    else if(myChoice=="rock"&& computerChoice=="paper"){
        computer++;
        console.log("you've lost paper beats rock! Your opponent has "+computer+" points")
        return(computer)
    }
    else if(myChoice=="rock"&& computerChoice=="scissors"){
        player++;
        console.log("you've won rock beats scissors!  You have "+player+" points!")
        return(player)
    }
    else if(myChoice=="scissors"&& computerChoice=="rock"){
        computer++;
        console.log("you've lost rock beats scissors! Your opponent has "+computer+" points")
        return(computer)
    }
    else if(myChoice=="scissors"&& computerChoice=="paper"){
        player++;
        console.log("you've won scissors beats paper!  You have "+player+" points!")
        return(player)
    }
    else
        return("wtf.")  
}

function game(){
    if (player==5){
        alert("Congratulations, you won")
        congratulations.textContent="You won out of 5 tries";
        player=0  
        }
    else if(computer==5){
        congratulations.textContent="You lost out of 5 tries";
        alert("better luck next time")
         computer=0
        }
    }
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
function getcomputerChoice(){
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
let computerChoice=getcomputerChoice();
console.log(computerChoice)




function getPlayRound(computerChoice,computerChoice){
    if(computerChoice==computerChoice){
       console.log("you both have chosen the same item!");
    }
    else if(computerChoice=="paper"&& computerChoice=="rock"){
        player++;
       console.log("you've won paper beats rock! You have "+player+" points!");
        return(player)
    }
    else if(computerChoice=="paper"&& computerChoice=="scissors"){
        computer++;
       console.log("you've lost scissors beats paper! Your opponent has "+computer+" points" )
        return(computer)
    }
    else if(computerChoice=="rock"&& computerChoice=="paper"){
        computer++;
       console.log("you've lost paper beats rock! Your opponent has "+computer+" points")
       return(computer)
    }
    else if(computerChoice=="rock"&& computerChoice=="scissors"){
        player++;
       console.log("you've won rock beats scissors!  You have "+player+" points!")
       return(player)
    }
    else if(computerChoice=="scissors"&& computerChoice=="rock"){
        computer++;
       console.log("you've lost rock beats scissors! Your opponent has "+computer+" points")
       return(computer)
    }
    else if(computerChoice=="scissors"&& computerChoice=="paper"){
        player++;
       console.log("you've won scissors beats paper!  You have "+player+" points!")
       return(player)
    }
    else{
        return("wtf.")
}
let playRound=getPlayRound(computerChoice,computerChoice)
console.log(playRound)


function game(){
    while(computer<=5 && player<=5){
        let computerChoice = getComputerChoice();
        let computerChoice = getcomputerChoice();
         getPlayRound(computerChoice, computerChoice);

    if (player==5){
        return console.log("you won")    
        }
    else if(computer==5){
        return console.log("You lost")
            }    }
    }
game();
*/