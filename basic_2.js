		// BASIC EXERCISES
// EXercise 1
function crytalGazer(number_of_childrens, partners_name, geographic_location, job_title)
{
	var result =`You will be a ${job_title} in ${geographic_location} and married to ${partners_name} with ${number_of_childrens} childrens`;;
	console.log(result);
}
crytalGazer(4, "My_Lady", "Vienna", "Web Developer");


// Basic Exercise 2

console.log("Basic_Exercise 2")

function ageCalculator(birth_year, current_year){
	var a = current_year - birth_year[0];
	var b = current_year - birth_year[1];
	return "You will be either\t" + a +"\t"+ "or\t" +b +"\tyears old";
	//return [a,b]

}
console.log(ageCalculator([1995,2001], 2021))

console.log("Basic_Exercise 4")

function Degree_Radian_Conversion(degree) {

	var a = Math.PI;
	var radian = degree * (a/180);
	let result = `The output Radian is ${radian}`;;
	console.log(result);
}
Degree_Radian_Conversion("90")
console.log("Basic Exercise 5")
// Basic Exercise 5
function area_volume(width, height, depth){
	var area = width * height;
	var volume = width * height * depth;
	var result = "The area of the box is: " + area + "\nThe volume of the box: " + volume;
	console.log(result);
	return result;
}
area_volume(7,2,5);

