var uniqueInOrder=function(iterable){
    if (typeof(iterable === 'string')) {
        chars = Array.from(iterable);
        let unique = chars.filter((x, index) => {
            return chars.indexOf(x) === index;
        });
        return unique;
    } else {
        let unique = iterable.filter((x, index) => {
            return iterable.indexOf(x) === index;
        });
        return unique;
    }
}

console.log(uniqueInOrder([1, 2, 2, 2, 3, 3, 4, 5, 6, 6, 6, 7, 8]));