function setup(){
    canvas= createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,500)
}

song1 = "";
song2 = "";

function preload(){
    song1 = loadSound("Otherstep.mp3");
    song1 = loadSound("Shulk.mp3")
}

function play(){

}