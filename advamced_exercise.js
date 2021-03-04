// Advanced Exercise

console.log("Advanced | Time Convert");
function Time_Convert(argument1)
 {
 	var num = argument1;
 	// create hour
 	var hours = argument1 / 60; // hours = 3.333333333
 	// Math.floor -- gives the largest integer which is less or equal to the given number
  	var rhours = Math.floor(hours);
  	// used to generate minutes from the result of hours
 	var minutes = (hours-rhours) * 60;
 	var rminutes = Math.round(minutes); //round to the nearst integer
 	return num + "minutes = " + rhours + "hour(s) and " + rminutes +"minute(s)";

}
console.log(Time_Convert(200));
/* console.log("Hours: ", 235/60);
console.log("Math.floor():",rhours=Math.floor(235/6));
console.log(((235/60 - Math.floor(235/60)))*60);
console.log(Math.round(200/60 - Math.floor(200/60))*60); */ 