function toCamelCase(str){
    let ans = ''
    for(let i = 0; i < str.length; i++) {
        if(str[i] === '-' || str[i] === '_') {
            
            str[i-1] = str[i-1].toUpperCase();
        }
     
    }
}

console.log(toCamelCase("the_stealth_warrior"));