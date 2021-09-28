var nose_x = 0;
var nose_y = 0;
function preload(){
    clownNose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPoses);
}
function modelLoaded(){
    console.log("model is Loaded");
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(clownNose, nose_x, nose_y, 30, 30);
}
function take_SnapShot(){
    save("me.png");
}
function getPoses(results){
    if (results.length > 0) {
        console.log(results);
        console.log("x = " + results[0].pose.nose.x);
        console.log("y =" + results[0].pose.nose.y);
        nose_x = results[0].pose.nose.x - 15;
        nose_y = results[0].pose.nose.y - 15;
    }
}