function toCamelCase(str){
    let ans = [];
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '-' || str[i] === '_') {
            a = str[i+1].toUpperCase();
            ans.push(a);
            
        } else {
            ans.push(str[i]);
        }
        
    }
    return ans;
}

console.log(toCamelCase("the_stealth_warrior"));