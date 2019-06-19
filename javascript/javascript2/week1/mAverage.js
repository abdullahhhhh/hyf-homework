const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

// (1)
function average (housePrices){
    let sum = 0;
    for ( let i = 0; i< housePrices.length; i++){
        sum += housePrices[i];
    }
    return sum / housePrices.length;
}
//housePrices;
console.log(average(housePrices));

function median (housePrices){
    let median =0;
    const arrayLenght = housePrices.length;

    if( arrayLenght % 2 === 0){
        median = (housePrices[arrayLenght/ 2-1]+ housePrices[arrayLenght/ 2]) 
    } else { 
        median = housePrices [(arrayLenght-1)/2]; // output the middle number only
    }
    return median;
}
console.log(median(housePrices));

function myFunction(){
document.getElementById("average").value = average(housePrices);
document.getElementById("median").value = median(housePrices);
}