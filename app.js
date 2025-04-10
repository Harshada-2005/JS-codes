let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#newbtn");
let msgcont = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; //playerX,playerO
let winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];




const resetgame = () =>
{
    turn0 = true;
    enablebox();
    msgcont.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",() => {
    
    if (turn0)  {
      box.style.color ="blue";
       box.innerText ="O";
       
       turn0 = false;
    } else{
        box.innerText="X";
        box.style.color ="red";
        turn0 = true;
    }

    box.disabled = true;
    checkWinner();
});
});
const disablebox = () =>
{
  for(let box of boxes)
  {
    box.disabled = true;
  }
}
const enablebox = () =>
    {
      for(let box of boxes)
      {
        box.disabled = false;
        box.innerText = "";
      }
    }

const showWinner = (winner) => {
    msg.innerText = `Congratulations !! Winner is ${winner}`;
    msgcont.classList.remove("hide");
    disablebox();
}

const checkWinner = ()=> {

    for( let patterns of winPattern){
        
        let pos1 = boxes[patterns[0]].innerText;
        let pos2 = boxes[patterns[1]].innerText;
        let pos3 = boxes[patterns[2]].innerText;
    

 if(pos1 != "" && pos2 != "" && pos3 != ""){
    if(pos1 == pos2 && pos2 == pos3){
        
        showWinner(pos1);
    }
 }
 }
};

newbtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);