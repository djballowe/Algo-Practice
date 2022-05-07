function fizzBuzz(int) {
    let final = [];
    for (let i = 1; i <= int; i++) {
        if (i % 3 !== 0 && i % 5 !== 0) {
            console.log(i);
        }
        if (i % 3 === 0) {
            console.log('fizz');
        }
        if (i % 5 === 0) {
            console.log('buzz');
        } 
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        }
    }
    
}

fizzBuzz(20);