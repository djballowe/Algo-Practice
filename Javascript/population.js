function nbYear(p0, percent, aug, p) {
    
    let year = 0;
    let downPopulation = Math.floor(p0);
    let dpercent = percent/100;

    // some kind of delcaration saying to repeat the formula is the pop is under target
    while (downPopulation < p) {
        downPopulation += (downPopulation*dpercent) + aug;
        Math.floor(downPopulation);
        year++;
        
    }
    return year;
}

console.log(nbYear(1500000.843947, 0.25, 1000, 2000000));