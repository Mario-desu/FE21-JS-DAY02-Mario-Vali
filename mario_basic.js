//Basic Exercise 1

function crystalGazer(numberChildren,partnerName,location,jobTitle) {

    return `You will be a ${jobTitle} in ${location} and married to ${partnerName} with ${numberChildren} children. `
}

console.log (crystalGazer(4,"Andrea","Vienna","programmer"));


//Basic Exercise 2

const ageCalculator =(birthYear, currentYear)=> {
    return (currentYear-birthYear)}
var age = ageCalculator(1983,2021);
var age2 = age-1;

console.log (`May age is ${age} or ${age2}`);


//Basic Exercise 3

// const recentYear = new getFullYear();

// console.log(recentYear.getFullYear);


//Basic Exercise 4



function degreesToRadians(degrees) {

    return (degrees*(Math.PI/180));
}

var resultRadians = degreesToRadians(90);

console.log (resultRadians);

//Basic Exercise 5

function calc(width,height,depth){
    let area = width*height;
    let volume = width*height*depth;

    return (`Area:${area}<br> Volume:${volume}`)
    
}

document.write (calc (2,4,5));

