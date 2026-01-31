function startListening(){

 const Speech =
 window.SpeechRecognition ||
 window.webkitSpeechRecognition;

 if(!Speech){
   alert("Your phone browser does not support speech recognition");
   return;
 }

 let rec = new Speech();

 rec.continuous = true;
 rec.interimResults = false;

 document.getElementById("status").innerText =
 "Listening...";

 rec.onresult = function(e){

  let said =
  e.results[e.results.length-1][0].transcript;

  document.getElementById("status").innerText =
  "Heard: " + said;

  detectBibleVerse(said);

 };

 rec.start();
      }
