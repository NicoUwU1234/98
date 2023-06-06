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
    if(content == "selfie"){
        console.log("tomando selfie")
        speak();
    }
    document.getElementById("Text-box").innerHTML = content;
    speak();
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = document.getElementById("Text-box").value;
    speak_data = "tomando tu selfie en 5 segundos";
    var uttherThis = new SpeechSynthesisUtterance(speak_data);
    synt.speak(uttherThis);
    //setTimeout();
    Webcam.attach(camara);
    setTimeout(function(){
        tomarfoto();
        guardarfoto();
    },5000);
}

Webcam.set({
    width:350,
    height:250,
    image_format:'png',
    png_quality:90
});
camara = document.getElementByIdZ("camara");
function tomarfoto(){
    Webcam.snap(function(data_uri){
 document.getElementById("resultado").innerHTML = '<img id="selfie" src="'+data_uri+'">';
    });
}
function guardarfoto(){
    link = document.getElementById("link");
    image = document.getElementById("selfie").scr;
link.href = image;
link.click;
}