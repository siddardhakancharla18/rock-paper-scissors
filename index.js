const rock=document.getElementById("rkbt");
const paper=document.getElementById("pbt");
const scissor=document.getElementById("sbt");
//let a;
const words = ["Rock","Paper","Scissors"];
//let randomIndex;
function play(a){
    document.getElementById("h2").textContent=`${a}`;
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    document.getElementById("h3").textContent=randomWord;
    if(a==randomWord){
        document.getElementById("h4").textContent="DRAW";
    }
    else if((a=="Paper" && randomWord=="Rock")||
           (a=="Rock" && randomWord=="Scissors")||
           (a=="Scissor" && randomWord=="Paper")){
        document.getElementById("h4").textContent="player"
    } 
    else{
        document.getElementById("h4").textContent="computer"
    }
}
rock.onclick = () => play("Rock");
paper.onclick =() => play("Paper");
scissor.onclick = () => play("Scissors");