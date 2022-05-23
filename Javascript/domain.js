function domainName(url){
    const domain = (new URL(url)).hostname.replace('www.', '');
    let small = domain.substring(0, domain.lastIndexOf('.'));
        if(small.includes('.')) {
            return small.substring(0, small.lastIndexOf('.'));
        } else {
            return small;
    }
}

console.log(domainName("www.xakep.ru"));