function setup() {

    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function draw() {

    background('#ffff00');
    textSize(difference);
    fill('#00ff00');
    text('Ritayush', 200, 225);

}

function modelLoaded() {

    console.log('PoseNet is initialized!');

}

difference = 0;
leftWristX = 0;
rightWristX = 0;

function gotPoses(results) {

    if (results.length > 0) {

        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

    }

}