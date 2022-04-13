canvas=document.getElementById("myCanvas");
ctx=canvas.getContext('2d');
color="cyan";



function circle (x,y,z){
    ctx.beginPath();
 ctx.strokeStyle = z;
  ctx.lineWidth = 2; 
  ctx.arc(x, y, 40 ,0 , 2*Math.PI); 
  ctx.stroke();
}
ctx.beginPath();
ctx.strokeStyle = "grey";
 ctx.lineWidth = 2; 
ctx.rect(150,150,430,200);
ctx.stroke();
circle(250,210,"blue");
circle(350,210,"black");
circle(450,210,"red");
circle(300,250,"orange");
circle(400,250,"green");
