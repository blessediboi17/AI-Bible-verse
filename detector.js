function normalize(text){

 return text.toLowerCase()
 .replace("chapter","")
 .replace("verse","")
 .replace("open to","")
 .replace("book of","");
}

function detectBibleVerse(text){

 text = normalize(text);

 const pattern =
 /(genesis|exodus|leviticus|numbers|deuteronomy|joshua|judges|ruth|1 samuel|2 samuel|1 kings|2 kings|psalm|proverbs|isaiah|jeremiah|matthew|mark|luke|john|acts|romans|1 corinthians|2 corinthians|galatians|ephesians|philippians|colossians|hebrews|james|1 peter|2 peter|revelation)\s*(\d+)\s*(\d+)/;

 let match = text.match(pattern);

 if(match){

   let book = match[1];
   let chapter = match[2];
   let verse = match[3];

   loadVerse(book, chapter, verse);
 }
   }
  
