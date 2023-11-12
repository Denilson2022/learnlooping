/* const temperaturaCelsius = [
    0, 22, 31, 40, 45, 12, 5
]

const toFarenhait = value => ((value * 9)/5)+32
const temperaturaFarenhait = temperaturaCelsius.map(toFarenhait)

console.log(temperaturaCelsius);
console.log(temperaturaFarenhait); 

 */


function temp(grau){

    const temperaturaCelsius = []

    temperaturaCelsius.push(grau)
    
    const toFarenhait = value => ((value * 9)/5)+32
    const temperaturaFarenhait = temperaturaCelsius.map(toFarenhait)
    
    return temperaturaFarenhait
}

console.log(temp(100)); 





