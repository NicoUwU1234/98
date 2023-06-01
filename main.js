var speechrecognition = window.webkitSpeechRecognition;
var recognition = new speechrecognition();

function inicio(){
    document.getElementById("Text-box").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("Text-box").innerHTML = content;
    speak();
}

function speak(){
    var synth = window.SpeechSynthesis;
    speak_data = document.getElementById("Text-box").value;
    var uttherThis = new SpeechSynthesisUtterance(speak_data);
    synt.speak(uttherThis);
    Webcam.attach(camara);
}

Webcam.set({
    width:350,
    height:250,
    image_format:'png',
    png_quality:90
});
camara = document.getElementByIdZ("camara");
