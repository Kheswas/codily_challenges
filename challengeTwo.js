const array = A;
    const pairedArray = array.sort();

    let oddElement;

    for(let i = 0; i< pairedArray.length; i++) {
        const thisElement = sortedArray[i];
        const elementAhead = sortedArray[i+ 1]

        if(thisElement === elementAhead) {

            i++;
        } else {
            oddElement = thisElement;
        }
    }
    return oddElement;
}
