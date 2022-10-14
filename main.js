Webcam.set({
    height:300,
    width:400,
    image_format:"png",
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
    });
}

console.log("ml5 version:",ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/MNzFHFBXn/model.json");

function modelLoaded(){
    console.log("model loaded !")
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is - "+prediction_1;
    utter_this = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utter_this);
}

function gesture(){
    img = document.getElementById("captured_image");
    classifier.classify(img,gotResult)
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }