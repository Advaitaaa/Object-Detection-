img=""

function preload()
{
    img= loadImage("dog_cat.jpg");
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
}

function draw()
{
    image(img,0,0,640,420);
    rect(30,60,459,350);
    text("Dog", 45,75)
    fill("#FF0000")
    noFill()    //Used to unset the color//
    stroke("#FF0000")
}