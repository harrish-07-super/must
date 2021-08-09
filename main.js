mustacheX=0;
mustacheY=0;


function preload(){
    under_nose=loadImage("https://i.postimg.cc/BnPmjL07/mu.png");
}

function setup(){
    canvas=createCanvas(600,400);
    canvas.center();
img=createCapture(VIDEO);
img.hide();

posenet=ml5.poseNet(img,modeloaded);


posenet.on("pose", getpose);

}

function modeloaded(){
    console.log("poseNet model is loaded");
}

function getpose(results){
if(results.length>0){

    console.log(results);

    mustacheX=results[0].pose.nose.x-70;

    mustacheY=results[0].pose.nose.y-80;

    console.log("nose x = " + mustacheX);
    
    console.log("nose y = " + mustacheY);

}
}


function draw(){
image(img,0,0,600,400);

image(under_nose,mustacheX,mustacheY,100,80);
}

function take_photo(){
    save("mustacheface.jpg");
}
