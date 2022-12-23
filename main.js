noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550 , 400);
    canvas = createCanvas(550 , 400);
    canvas.position(675,150);
    video.position(50,150)
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is initialized!');
}

function draw()
{
    background('#6bdcff');
    document.getElementById("square_sides").innerHTML="Width and Height of a square will be = " + difference +"px"
    fill('#e8020a');
    stroke('#02f72b');
    square(noseX,noseY,difference);
}

function gotPoses(results)
{
if(results.length>0)
{
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("NoseX = "+noseX+"NoseY = "+noseY);
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference =floor =  (leftWristX - rightWristX);
    console.log("leftWristX = "+ leftWristX +"rightWristX = " + rightWristX +"difference = " + difference);
}
}

