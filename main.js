var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);

    if (Content == "take my selfie") {
        console.log("Taking Selfie");
        speak();


    }
}

function speak() {
    var synth = window.speechSynthesis;

    speak_data = "taking your selfie in 5 seconds";
    
    var utterthis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterthis);

    Webcam.attach(camera);

    setTimeout(function(){
        takeSnaphot();
        save();
    }, 5000);
}

camera = document.getElementById("camera");

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:100
});

function takeSnaphot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_img" src="'+data_uri+'">';
    });
}

function save() {
    link = document.getElementById("link");
    image = document.getElementById("selfie_img").src;
    link.href = image;
    link.click();
}