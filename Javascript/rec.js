function digital_root(n) {
    let string = n.toString().split('');
    
    while (string.length != 1) {
        string.pop();
    }
    return string.join('');
}

console.log(digital_root(456))