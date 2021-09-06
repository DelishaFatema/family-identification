function preload() {

}

function setup() {
    canvas = createCanvas(300, 250);
    video = createCapture(VIDEO);
    canvas.center();
    video.hide();

}

function draw() {
    image(video, 0, 0, 300, 250);
    image(video, gotResult);

}