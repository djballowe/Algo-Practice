function table(key){
    //your code here
    switch (key) {
        case 'A': return 'T';
        case 'T': return 'A';
        case 'G': return 'C';
        case 'C': return 'G';
        default: return -1;
    }
  }

function DNAStrand(dna) {
    if (dna === null) {
        return -1;
    }
    let nstring = [];
    
    for (let i = 0; i < dna.length; i++) {
        string = table(dna.charAt(i));
        nstring.push(string);
    }
    return nstring.join('');
}



console.log(DNAStrand('ATTGC'));