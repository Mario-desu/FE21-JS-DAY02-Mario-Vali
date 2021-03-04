// CHallenge Exercises 

console.log('ATM MACHINE');

function ATM_Machine(notes1,notes2,notes3,notes4) 
{
		//var balance = 1500;
		var takemoney = "How much do you want to withdrawl? \n ";
		var response = "I want to withdraw: 280€ \n";
		


		return takemoney + response + "ATM machine will give you:" + "\n 2 notes of: " + notes1 +"€" + "\n 1 note of: " + notes2 + "€" + "\n 1 note of: " + notes3+"€"++ "\n 1 note of: " + notes4 + "€";   ; 

		
}
console.log(ATM_Machine(100,50,20,10))


console.log("Part b");
