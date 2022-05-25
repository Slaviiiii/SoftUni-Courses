function comission(input) {
    let town = input[0];
    let price = Number(input[1]);


    switch (town) {
        case 'Sofia':
            if (price >= 0 && price <= 500) {
                console.log((price * 0.05).toFixed(2));
            } else if (price > 500 && price <= 1000) {
                console.log((price * 0.07).toFixed(2));
            } else if (price > 1000 && price <= 10000) {
                console.log((price * 0.08).toFixed(2));
            } else if (price > 10000) {
                console.log((price * 0.12).toFixed(2));
            }; break;

        case 'Varna':
            if (price >= 0 && price <= 500) {
                console.log((price * 0.045).toFixed(2));
            } else if (price > 500 && price <= 1000) {
                console.log((price * 0.075).toFixed(2));
            } else if (price > 1000 && price <= 10000) {
                console.log((price * 0.10).toFixed(2));
            } else if (price > 10000) {
                console.log((price * 0.13).toFixed(2));
            }; break;

        case 'Plovdiv':
            if (price >= 0 && price <= 500) {
                console.log((price * 0.055).toFixed(2));
            } else if (price > 500 && price <= 1000) {
                console.log((price * 0.08).toFixed(2));
            } else if (price > 1000 && price <= 10000) {
                console.log((price * 0.12).toFixed(2));
            } else if (price > 10000) {
                console.log((price * 0.145).toFixed(2));
            }; break;
            
        
    }
    if (price < 0) {
        console.log('error');
    }else if (town != 'Sofia' && town != 'Varna' && town != 'Plovdiv'){
        console.log('error');
    }

}

comission(['Sofia', "-500"])




