var mouseEvent="empty";
var last_x,last_y;
canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d");
color = "black";
width_of_line = 1;

var width=screen.width;
new_width=screen.width-99;
new_height=screen.height-126;
if (width<992) {
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").width=new_height;
    document.body.style.overflow = "hidden";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){    
    last_x=e.touches[0].clientX-canvas.offsetLeft;
    last_y=e.touches[0].clienty-canvas.offsettop;
}


canvas.addEventListener("touchmove",my_touchMove);
function my_touchMove(e){
    current_x=e.touches[0].clientX-canvas.offsetLeft;
    current_y=e.touches[0].clienty-canvas.offsettop;
    
    ctx.beginPath(); 
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.moveTo(last_x,last_y);
    ctx.lineTo(current_x,current_y);
    ctx.stroke();
    
   last_x=current_x;
   last_y=current_y;
}
