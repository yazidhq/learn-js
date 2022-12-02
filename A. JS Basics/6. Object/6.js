let biodata = document.getElementById('objek')

const person = {
	Name : "Yazid Dhiaulhaq Ismail",
	Nicname : "Yazid",
	Age : 20,
	Status : "College",
	Biodata : function(){
		return "Name : " + this.Name +
		 	   "<br>Age : " + this.Age +
			   "<br>Status : " + this.Status
	}
};

// theres 2 way to call property of object
console.log(person.Name); // or
console.log(person["Name"]);

// input to html with call function at object
biodata.innerHTML = person.Biodata();

x = new String();
y = new Date();
z = new Number();
i = new Boolean();
console.log(x);
console.log(y);
console.log(z);
console.log(i);