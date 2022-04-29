var commonChars = function(words) {
    let matches = [];
    let map = {};
    
        for(let val of words[0]){
            if (map[val]) {
                map[val] = map[val] + 1; //if there is more than one letter +1 to value
            } else {
                map[val] = 1;   // else value = 1  
        }
    }
        for (let i = 1; i < words.length; i++) {
            compare = {};
            for(let val of words[i]) { // same thing just with object compare
                if (compare[val]) {
                    compare[val] = compare[val] + 1;
                } else {
                    compare[val] = 1 //else compare value = 1
                }
            }
            for (const [key, value] of Object.entries(map)) {
                if(compare[key]) {                  //if compare has the same key as map 
                    if (value > compare[key]) {     //if value of map is > value @ compare[key]
                        map[key] = compare[key]     //map[key] = compare[key]
                    } else {
                        map[key] = value           //else map[key] value stays the same
                    }
                } else {
                    delete map[key];                // no match? delete map[key]
                }   
            }
        }
        for (const [key, value] of Object.entries(map)) {
            for (let i = 0; i < value; i++) {
                matches.push(key);
            }
        }
        return matches;
    }
    






console.log(commonChars(["bella", "label", "roller"]));

// you only need to compare the letters in the first word
// find a way to iterate over the first word and then compare those letters to the other two words
// assign words[0] to a value and use that to compare as you only need that one separated.
// use word[0] as the key
// compare the first word to the key and populate a new array with only the matches 
// compare the next word with the matches and populate the array with only matches