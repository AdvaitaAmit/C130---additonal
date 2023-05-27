noseX = 0;
noseY = 0;


function preload(){
   necklace = loadImage("necklacepng.png") 
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        noseX = results[0].pose.nose.x -70;
        noseY = results[0].pose.nose.y +50;
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    image(necklace, noseX, noseY, 100, 100);
}

function snapshot(){
    save('filtered-image.png')
}