var employee = [];

employee[0] = {
	name: "Emp1", 
	age: 30,
	salary: 50000,
	address: {
		city: "Bangalore",
		state: "Karnataka",
		pincode: "560047"
	}
};

employee[1] = {
	name: "Emp2", 
	age: 26,
	salary: 35000,
	address: {
		city: "Mumbai",
		state: "Maharastra",
		pincode: "123456"
	}
};

employee[2] = {
	name: "Emp3", 
	age: 35,
	salary: 80000,
	address: {
		city: "Bangalore",
		state: "Karnataka",
		pincode: "560045"
	}
};

employee[3] = {
	name: "Emp4", 
	age: 32,
	salary: 60000,
	address: {
		city: "Kolkata",
		state: "West Bengal",
		pincode: "234567"
	}
};

employee[4] = {
	name: "Emp5", 
	age: 25,
	salary: 30000,
	address: {
		city: "Bangalore",
		state: "Karnataka",
		pincode: "560032"
	}
};


for(var item in employee){
console.log("Name: "+employee[item].name);
console.log("Age: "+employee[item].age);
console.log("Salary: "+employee[item].salary);
console.log("Address: "+employee[item].address.city+","+employee[item].address.state+","+employee[item].address.pincode);
}