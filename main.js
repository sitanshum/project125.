rightWristX=0;
leftWristX=0;
difference=0;

function setup(){
    canvas=createCanvas(470,400);
    canvas.position(560,150);

    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("model has laoded");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        rightWristX=results[0].pose.rightWrist.x;
        leftWristX=results[0].pose.leftWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}

var name="";
function draw(){
    background ("rgb(154, 239, 141)");
document.getElementById("square_side").innerHTML="font size of the text will be="+difference+"px";
textSize(difference);
fill("black");
text(name,50,200);
}

function enter(){
    name=document.getElementById("text").value;
}