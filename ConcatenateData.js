function concatenateData(input) {
    let firstName = input[0]
    let secondName = input[1]
    let age = Number(input[2])
    let town = input[3]
    
    let res = `You are ${firstName} ${secondName}, a ${age}-years old person from ${town}.`
    console.log (res)
    
    }
    
    concatenateData (["Mariq", "Ivanova", 19, "Chirpan"])
