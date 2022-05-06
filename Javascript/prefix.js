/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let first = strs[0];                            // first is equal to first word in the array
    let ans = '';                                   // set ans to an empty string
    
    for (let j = 0; j < first.length; j++) {        // going through each letter
        for (let i = 1; i < strs.length; i++) {     // going through each string in the array
            if (first[j] !== strs[i][j]) {          // stop at the first non match
                return ans;                         // return everything up to the point where they dont match
            }   
        }
       ans = ans.concat(first[j]);                  // push the letter[j] into the ans
    }
};

