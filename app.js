let gameSeq=[];
let userSeq=[];

let color=["red", "green", "blue", "yellow"];

let start=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){       //step1
    h3.innerText="";
    if(start==false){
        console.log("Game Started");
        start=true;
        levelup();
    }
})

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function divFlash(div){
    div.classList.add("flash2");
    setTimeout(function(){
        div.classList.remove("flash2");
    }, 250);
}


function levelup(){     //step2
    userSeq=[];
    
    level++;
    h2.innerText=`Level ${level}`;

    let randtIdx=Math.floor(Math.random()*3);
    let randCol=color[randtIdx];
    gameSeq.push(randCol);
    console.log(gameSeq);
    let randbtn=document.querySelector(`.${randCol}`);
    btnFlash(randbtn);

}

let body=document.querySelector("body");
let h3=document.querySelector("h3");
function checkAns(idx){

    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup, 1000);
        }
    }else{
            h2.innerText=`Game Over! Press any key to start the game`;
            h3.innerText=`Your score is ${level-1}`;
            divFlash(body);
            reset();


        }
    
}

function reset(){
    start=false;
    level=0;
    gameSeq=[];
    userSeq=[];
   

}


function btnPressed(){

    
    let btn= this;
    btnFlash(btn);
    
    let userCol=btn.getAttribute("id");
    userSeq.push(userCol);

    checkAns(userSeq.length-1);



}

let btnAll=document.querySelectorAll(".btn");   //step 3
 for(btn of btnAll){
    btn.addEventListener("click",btnPressed);

 }