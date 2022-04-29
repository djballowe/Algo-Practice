// var commonChars = function(words) {
    //bbc = []
    //let key = []
    //key.push(words[0]);
    //stinky = key.join('');
    //words.shift();
    //compare = words.join('');
    
    //for (let i = 0, len = stinky.length; i < len; i++) {
        //if(compare.indexOf(stinky[i]) !=1) {
            //sim = stinky.charAt(i);
            //bbc.push(sim);
        //}
    //}
    //return bbc;
//};

var commonChars = function(words) {
    let fin = [];
    let key = [];
   key.push(words[0]);
   for (let i = 0; i < words; i++) {
       if (key.indexOf(words[i]) !=1) {
           sim = words.charAt(i);
           fin.push(sim);
       }
       
   }
   return fin;
};






console.log(commonChars(["bella", "label", "roller"]));

// you only need to compare the letters in the first word
// find a way to iterate over the first word and then compare those letters to the other two words
// assign words[0] to a value and use that to compare as you only need that one separated.
// use word[0] as the key