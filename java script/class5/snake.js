let canvas = document.querySelector("canvas");
let pen = canvas.getContext("2d");
let snakeCell = [[0,0]]
let cell = 50;
let direction = "right";
let gameOver = false;
let score=0;

let randomCell = generateR();
let id = setInterval(()=>{
    update();
    draw();
    
},200)

document.addEventListener("keydown",(e)=>{
    console.log(e);
    if(e.key=="ArrowDown"){
        direction="down";
    }
    else if(e.key=="ArrowUp"){
        direction="up";
    }
    else if(e.key=="ArrowLeft"){
        direction="left";
    }
    else if(e.key=="ArrowRight"){
        direction="right";
    }
})

function draw(){
    if(gameOver==true){
        clearInterval(id);
        pen.fillStyle="snow";
        pen.font="40px sans-serif";
        pen.fillText("GAME OVER",190,230)
        return;
    }

    pen.fillStyle="red";
    pen.clearRect(0,0,600,500)
    for(let a of snakeCell){
        pen.fillRect(a[0],a[1],cell,cell);
    }

    pen.fillStyle="pink";
    pen.font="40px sans-serif";
    pen.fillText(`${score}`,280,40);

    pen.fillStyle="yellow";
    pen.fillRect(randomCell[0],randomCell[1],cell,cell);

}

function update(){
    let headX = snakeCell[snakeCell.length-1][0];
    let headY = snakeCell[snakeCell.length-1][1];
    let newX;
    let newY;
    
    if(direction=="right"){
        newX=headX+cell;
        newY=headY;
        if(newX >= 600){
            gameOver=true;
        }
    }
    else if(direction=="left"){
        newX=headX-cell;
        newY=headY;
        if(newX < 0){
            gameOver=true;
        }
    }
    else if(direction=="down"){
        newX=headX;
        newY=headY+cell;
        if(newY >= 500){
            gameOver=true;
        }
    }
    else{
        newX=headX;
        newY=headY-cell;
        if(newY < 0){
            gameOver=true;
        }
    }

    snakeCell.push([newX,newY]);
    if(newX==randomCell[0] && newY==randomCell[1]){
        score++;
        randomCell=generateR();
    }else{
        snakeCell.shift();
    }
}


function generateR(){
    return[
        Math.floor(Math.random()*550/cell)*cell,
        Math.floor(Math.random()*450/cell)*cell,
    ]
}