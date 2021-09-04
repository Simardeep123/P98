var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function Start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult= function(e){
    console.log(e);
    var speech =e.results[0][0].transcript;
    console.log(speech);
    document.getElementById("textbox").innerHTML = speech;
    speak();
}
function speak(){
    var synth = window.speechSynthesis;
var speakdata = document.getElementById("textbox").value;
var utter= new SpeechSynthesisUtterance(speakdata);
synth.speak(utter);
Webcam.attach(camera);
}

var camera = document.getElementById("camera");
Webcam.set({
    width: 360,
    height: 250,
image_format: 'jpeg',
jpeg_quality: 90
});