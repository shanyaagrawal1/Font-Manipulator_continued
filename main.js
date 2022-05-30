function setup(){
    canvas=createCanvas(550,550);
    canvas.position(525, 200);
    video=createCapture(VIDEO);
    video.size(400,400);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    }
    function modelLoaded(){
        console.log('PoseNet has been initialized');
    }
    function draw(){
        background("#87cefa");
    }
    function gotPoses(results){
        if(results.length>0){
            console.log(results);
        }
    }