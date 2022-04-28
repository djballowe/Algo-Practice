function login() {
    let userName = prompt('Whos there?');
    if (userName === 'Admin') {
        let pass = prompt('Enter Password');
        if (pass = 'TheMaster') {
            alert('Welcome');
        } else {
            alert('Wrong password')
        }
        if (pass === null || '') {
            alert('Cancled')
        }
        
    } 
    if (userName === ('' || null)) {
        alert('Canceled');
    } else {
        alert('I dont know you')
    }
}

function login();