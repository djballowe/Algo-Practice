function digital_root(n) {
    let arr = Array.from(String(n), Number);
    let newNum = 0;
    for (let i = 0; i < arr.length; i++) {
       newNum += arr[i];
    }
    return newNum;
}

console.log(digital_root(456))