// function sumValues(num1, num2, add){
//     if(add){
//         const result = 0;
//         result = num1 + num2;
//         console.log('values added: ', result);
//     }
//     else return;
//     console.log('final result: ', result);
// }

// sumValues(10, 10, true);

function discountPrices(prices, discount){
    const discounted = [];
    //const finalPrice = 0;
    const length = prices.length;

    for(let i = 0; i < prices.length; i++){
        const discountedPrice = prices[i] * (1-discount);
        //finalPrice = Math.round(discountedPrice * 100) / 100;
        //discounted.push(finalPrice);
        discounted.push(discountedPrice);
    }

    //console.log(i);
    //console.log(length);
    //console.log(discountedPrice);
    //console.log(finalPrice);

    return discounted;
}
discountPrices([100,200,300], 0.5);