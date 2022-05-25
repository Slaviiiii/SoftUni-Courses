function fruitShop(input) {
    let product = input[0];
    let day = input[1];
    let productCount = Number(input[2]);
    let productPrice = 0;

    if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' ||
        day === 'Thursday' || day === 'Friday') {
        switch (product) {
            case 'banana': productPrice = productCount * 2.50;
                console.log((productPrice).toFixed(2)); break;
            case 'apple': productPrice = productCount * 1.20;
                console.log((productPrice).toFixed(2)); break;
            case 'orange': productPrice = productCount * 0.85;
                console.log((productPrice).toFixed(2)); break;
            case 'grapefruit': productPrice = productCount * 1.45;
                console.log((productPrice).toFixed(2)); break;
            case 'kiwi': productPrice = productCount * 2.70;
                console.log((productPrice).toFixed(2)); break;
            case 'pineapple': productPrice = productCount * 5.50;
                console.log((productPrice).toFixed(2)); break;
            case 'grapes': productPrice = productCount * 3.85;
                console.log((productPrice).toFixed(2)); break;
            default : console.log('error'); break;
        }
    }
    if (day === 'Saturday' || day === 'Sunday') {
        switch (product) {
            case 'banana': productPrice = productCount * 2.70;
                console.log((productPrice).toFixed(2)); break;
            case 'apple': productPrice = productCount * 1.25;
                console.log((productPrice).toFixed(2)); break;
            case 'orange': productPrice = productCount * 0.90;
                console.log((productPrice).toFixed(2)); break;
            case 'grapefruit': productPrice = productCount * 1.60;
                console.log((productPrice).toFixed(2)); break;
            case 'kiwi': productPrice = productCount * 3;
                console.log((productPrice).toFixed(2)); break;
            case 'pineapple': productPrice = productCount * 5.60;
                console.log((productPrice).toFixed(2)); break;
            case 'grapes': productPrice = productCount * 4.20;
                console.log((productPrice).toFixed(2)); break;
            default : console.log('error'); break;
        }
    } if (day != 'Monday' && day != 'Tuesday' && day != 'Wednesday' && day != 'Thursday' &&
        day != 'Friday' && day != 'Saturday' && day != 'Sunday') {
        console.log('error');
    }
}
fruitShop(["apple", "Monday", "2"])