noseX=0;
noseY=0;
difference=0;
leftwristX=0;
rightwristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("posenet is loaded");
}

function draw(){
    background("#34d8eb");
    document.getElementById("text_size").innerHTML="font size of the text is ="+difference+"px";
    fill("#cf0606");
    textSize(difference);
    text("Ishaan",50,200);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;

        difference=floor(leftwristX-rightwristX);
    }
}