let version = "kjv";

function changeVersion(v){
 version = v;
}

async function loadVerse(book, chapter, verse){

 let file =
 version === "kjv"
 ? "bible_kjv.json"
 : "bible_niv.json";

 try{

 let data = await fetch(file);
 let bible = await data.json();

 let text =
 bible[book]?.[chapter]?.[verse];

 if(text){
   showOverlay(book, chapter, verse, text);
 }else{
   showOverlay(book, chapter, verse,
   "Verse not found in database");
 }

 }catch(e){
   alert("Bible file missing");
 }
}

function showOverlay(book, chapter, verse, text){

 let box =
 document.getElementById("overlay");

 box.innerHTML = `
 <b>${book.toUpperCase()} ${chapter}:${verse}</b>
 <br>${text}
 `;
}
  
