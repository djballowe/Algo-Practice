function digital_root(n) {
    let arr = Array.from(String(n), Number);
    let newNum = 0;
    for (let i = 0; i < arr.length; i++) {
       newNum += arr[i];
    }
    
    if (newNum < 10) {
        return newNum;
    } else {
        return digital_root(newNum);
    }
}

console.log(digital_root(456));