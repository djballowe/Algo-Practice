function digital_root(n) {
    let arr = Array.from(String(n), Number);
    let newNum = 0;
    for (let i = 0; i < arr.length; i++) {
       newNum += arr[i];
    }
    console.log(arr);
    if (newNum >= 10) {
        digital_root(newNum);
    }
}

console.log(digital_root(456));