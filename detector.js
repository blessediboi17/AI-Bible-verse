function normalize(t){
 return t.toLowerCase()
 .replace("chapter","")
 .replace("verse","")
 .replace("to","")
 .replace("open","")
 .replace("book of","")
 .replace(":"," ");
}

function detectBibleVerse(text){

 text = normalize(text);

 // now supports ranges like 16 18
 const pattern =
 /(john|psalm|romans|matthew|mark|luke|acts|genesis)\s*(\d+)\s*(\d+)(?:\s*(\d+))?/;

 let m = text.match(pattern);

 if(m){
   let book = m[1];
   let chapter = m[2];
   let start = m[3];
   let end = m[4] || m[3];

   loadRange(book, chapter, start, end);
 }
}
 
