
var replace=document.querySelector("#replace");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var message=document.querySelector("#message");
var boxes=document.querySelectorAll(".square");

var hard=document.querySelector("#hard");
var easy=document.querySelector("#easy");
var tough=6;

hard.addEventListener("click",function(){
hard.classList.add("selected");
easy.classList.remove("selected");
tough=6;
run(tough);

});

easy.addEventListener("click",function(){
hard.classList.remove("selected");
easy.classList.add("selected");
tough=3;
run(tough);
});



var colors=pickRandomColor(6);
var pickedColor=pickColor();
replace.textContent=pickedColor;

reset.addEventListener("click",function(){
run(tough);

});

function run(toughness){

colors=pickRandomColor(toughness);
console.log(colors);
pickedColor=pickColor();

for(var i=0;i<colors.length;i++)
   {
    boxes[i].style.backgroundColor=colors[i];}
for(var i=colors.length;i<boxes.length;i++)
    boxes[i].style.backgroundColor= "black";

replace.textContent=pickedColor;

h1.style.backgroundColor="black";
message.textContent=null;

}


for(var i=0;i<boxes.length;i++)
{
    boxes[i].style.backgroundColor=colors[i];

    boxes[i].addEventListener("click",function(){

    if(this.style.backgroundColor==pickedColor)
    {changeColor(tough);message.textContent="Correct";h1.style.backgroundColor=pickedColor;}
    else   
    {this.style.backgroundColor="black";message.textContent="Try Again";}

    }

    );


}


function changeColor(toughness){

for(var i=0;i<toughness;i++)
boxes[i].style.backgroundColor=pickedColor;
}
function pickColor(){
var pick=Math.floor(Math.random()*colors.length);
return colors[pick];
}

function pickRandomColor(num){

var arr=[];

for(var i=0;i<num;i++)
arr.push(pickColors());

return arr;

}

function pickColors(){

var r=Math.floor(Math.random()*256);
var g=Math.floor(Math.random()*256);
var b=Math.floor(Math.random()*256);

return ( "rgb("+r+", "+g+", "+ b+")" );

}

