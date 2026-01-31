async function loadRange(book, chapter, start, end){

 let file =
 version === "kjv" ? "bible_kjv.json" : "bible_niv.json";

 let data = await fetch(file);
 let bible = await data.json();

 let verses = [];

 for(let v = Number(start); v <= Number(end); v++){

   let t = bible[book]?.[chapter]?.[v];

   if(t){
     verses.push(v + ". " + t);
   }
 }

 showOverlay(book, chapter, start, end, verses.join(" "));
}

function showOverlay(book, chapter, s, e, text){

 document.getElementById("overlay").innerHTML = `
 <b>${book.toUpperCase()} ${chapter}:${s}-${e}</b><br>
 ${text}
 `;
}

function loadStream(){
 let url = document.getElementById("liveUrl").value;
 document.getElementById("stream").src = url;
}
