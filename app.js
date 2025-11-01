let userScore = 0;
let compScore = 0;

//here we have access which one from the three choice(stone,paperor scissors)is going to be selected
//to access the choices :

const choices = document.querySelectorAll(".choice");


//accessing any part

const msg = document.querySelector("#msg");

//accessing user and comp score 
const user_Score = document.querySelector("#user-score");
const comp_Score = document.querySelector("#comp-score");

const genCompChoice = () => {

    const options = ["stone","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
    //here computer will select random value(rock ,  paper , scissors)

};

const drawGame = () => {
    console.log("Game was draw.");
    msg.innerText = "Game was Draw.";
    msg.style.backgroundColor="#081b31";
};

const showWinner = (userWin , userChoice, compChoice) => {
    if(userWin){
        userScore++;
        user_Score.innerText = userScore;
        console.log("You Win.");
        msg.innerText = `You Win.Your ${userChoice} won over ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        comp_Score.innerText = compScore
        console.log("You Lost.Play again.");
        msg.innerText = `Computer Win.Play Again!.Computer ${compChoice} won over ${userChoice}`;
        msg.style.backgroundColor = "orange";

    }
};

const playGame = (userChoice) => {
    console.log("user choice =",userChoice);
    
    //now we have to print computer choice
    const compChoice = genCompChoice();
    console.log("Comp choice = ", compChoice);


    if(userChoice === compChoice){
        //draw conditon
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "stone"){

            //now computter could onlly have two choices (paper, scissors)
            userWin = compChoice === "paper"? false: true;
        }else if(userChoice==="paper"){

            //now  computer can only have two option (stone, scissor) kyuki agar comp  ne bhi paper select kiya toh wo draw condition ho jayegga.
            userWin = compChoice === "scissors"?false:true;
        }else{
            //comp  have (stone or paper)
            userWin = compChoice === "stone"?false:true;
        }
        showWinner(userWin, userChoice,compChoice);
            
    }
};

choices.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click", () =>{   //here we are adding a aeventListner so  that jaise hi kisi bhi ek choice par click karenge toh print function perform karega.
        const userChoice = choice.getAttribute("id");    // by doing this we can also know which id  was selected 
        console.log("choices was selected",userChoice);
        playGame(userChoice); //we are passing userChoice value to the playGame function
    });
});