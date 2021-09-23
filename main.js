img=""
status=""
objects=[]

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
   // rect(30,60,459,350);
   // text("Dog", 45,75)
   // fill("#FF0000")
   // noFill()    //Used to unset the color//
    // stroke("#FF0000")

  //  fill("#FF0000")
   // stroke("#FF0000")
  //  noFill()
  //  text("Cat", 320, 120)
    // rect(300,90,270,320)//

    // Using for-loop to draw a rectangle, labels , color

    if(status !="")
    {
        for(i=0; i<objects.length; i++)
        {
            document.getElementById("status").innerHTML="Status: Objects Detected"

            fill("#FF0000")
            percent=floor(objects[i].confidence * 100)
            text(objects[i].label+ " " + percent + "%",objects[i].x,objects[i].y)
            noFill()
            stroke("#FF0000")
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
        }
    }

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
        objects=results;
    }
}
