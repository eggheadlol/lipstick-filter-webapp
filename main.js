noseX=0;
noseY=0;

function preload(){
lipstick_nose= loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();

video=createCapture(VIDEO);
video.size(300,300);
video.hide();


posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",gotposes);
}
function draw(){
image(video,0,0,300,300)
image(lipstick_nose,noseX,noseY,30,30);

}
function take_snapshot(){
  save("isabella.png");
}
function modelloaded(){
  console.log("posenet is initialized");
}
function gotposes(results){
  if(results.length>0){
    console.log(results);
    console.log("nose x= "+results[0].pose.nose.x);
    console.log("nose y= "+results[0].pose.nose.y);
  noseX=results[0].pose.nose.x -20;
  noseY=results[0].pose.nose.y +30;
  }
}