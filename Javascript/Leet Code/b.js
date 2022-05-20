/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        if (['(', '[', '{'].includes(s[i])) {
            stack.push(s[i]);
        } else {
            if (stack.length === 0) {
                return false;
            }
            let j = stack.pop();
            if (j === '(' && s[i] !== ')') {
                return false;
            } else if (j === '[' && s[i] !== ']') {
                return false;
            } else if (j === '{' && s[i] !== '}') {
                return false;
            }
        }
    }
    if (stack.length !== 0) {
        return false;
    }
    return true;
};

// )}]

// [(())]

// []()
