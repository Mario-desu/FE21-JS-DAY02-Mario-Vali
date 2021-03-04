// INTERMEDIATE Exc

// Exercise 1 


( () => {
	var a = "i am web developer";
	console.log(a.charAt(0));


})

// Non anonymous function
console.log("\t Non anonymous function")
function vali(a) {
	return a.charAt(0).toUpperCase() + a.slice(1);
}
console.log(vali("i am a web developer"));

// Anonnymous Self Executing Functions (() => {})
console.log("\t Anonnymous Self Executing Functions (() => {})")
const Capitalize = (para1) =>
 {
	//var para1 = "i am web developer1"
	return para1.charAt(0).toUpperCase() + para1.slice(1);
	//return result;
}
console.log(vali("i am web developer"))

// Intermediate Exercise 2

console.log("\t\t Intermediate Exercise 2")

function Average_Grade(Math, Physics, English) 
{
	sum = Math + Physics + English;
	average = (Math + Physics + English)/3;

	result = "Sum:" + sum + "\nAverage: " + average;
	console.log(result);
}
Average_Grade(3,4,5)

