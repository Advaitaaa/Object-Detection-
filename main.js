img=""
status=""
function preload()
{
    img= loadImage("dog_cat.jpg");
}

function setup()
{
    canvas=createCanvas(640,420);
    canvas.center();
    object_detector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function draw()
{
    image(img,0,0,640,420);
    rect(30,60,459,350);
    text("Dog", 45,75)
    fill("#FF0000")
    noFill()    //Used to unset the color//
    stroke("#FF0000")

    fill("#FF0000")
    stroke("#FF0000")
    noFill()
    text("Cat", 320, 120)
    rect(300,90,270,320)
}

function modelLoaded()
{
    console.log("modelLoaded")
    status=true
    object_detector.detect(img,gotresults)
}

function gotresults(error,results)
{
    if (error)
    {
        console.log(error)
    }
    else 
    {
        console.log(results)
    }
}
