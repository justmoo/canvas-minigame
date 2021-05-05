let canvas = document.getElementById("canvas");
let image = document.getElementById("wiz");
let context = canvas.getContext("2d");
let player = {
    w:70,
    h:70,
    x:400,
    y:400,
    speed:5,
    dx:0, 
    dy:0
}
function update(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    player.x += player.dx
    player.y += player.dy
    context.drawImage(image, player.x, player.y, player.w, player.h);
    requestAnimationFrame(update)
}

document.addEventListener("keyup", keyUp);
document.addEventListener("keydown", keyDown);


function keyDown(e){
    if(e.key === "ArrowUp" || e.key === "Up"){
        player.dy = -player.speed
    }
    else if(e.key === "ArrowDown" || e.key === "Down"){
        player.dy = player.speed
    }
    else if(e.key === "ArrowRight" || e.key === "Right"){
        player.dx = player.speed
    }
    else if(e.key === "ArrowLeft" || e.key === "Left"){
        player.dx = -player.speed
    }
}

function keyUp(e){
    if(e.key === "ArrowUp" || e.key === "Up" || e.key === "ArrowDown" || e.key === "Down" || e.key === "ArrowRight" || e.key === "Right" || e.key === "ArrowLeft" || e.key === "Left" ){
        player.dx=0;
        player.dy=0;
        }
}
update();