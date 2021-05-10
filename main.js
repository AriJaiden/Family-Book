var images=["Mom.jpg","Dad.jpg","Me.jpg"];
var names=["Susmita Mukherjee","Kaushik Mukherjee","Mrinalini Mukherjee"];
var i="0"
function next(){
    
    document.getElementById("family").src=images[i];
    document.getElementById("div").innerHTML=names[i];
    i++;
    if(i>2){i=0;}
}