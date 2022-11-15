// VAR, LET, CONST
// VAR = Variables are containers for storing data (storing data values).
var number1 = 10;
var number2 = 10;
console.log(number1 + number2); // var can be change of value
var number1 = 20;
var number2 = 20;
console.log(number1 + number2);

// LET = Variables defined with let cannot be Redeclared, must be Declared before use, have Block Scope.
let named = "Den";
let nemed = "Don" // named has already been declared.
console.log(named);
	// block Scope
	{
		let x = 10;
		console.log(x);
	}
	//console.log(x); ===>>> // x cannot use here, because let have block scope
	// example redeclare
	let l = 10;
	console.log(l) // Here l is 10
	{
	let l = 2;
	console.log(l) // Here l is 2
	}
	console.log(l) // Here l is 10
	// exit

// CONST = Variables defined with const cannot be Redeclared, cannot be Reassigned, have Block Scope.
	// cant reassigned
	const PI = 3.14; 
		// PI = 3.14; // This will give an error
	// must be assign
	const PI2 = 3.14; 
		// const PI3; // This will give error
		// PI3 = 3.14 ; // This will give error
	console.log(PI + PI2);
	// can use for constant array
	const game = ['dota', 'csgo', 'pubg'];
	// block scope
	const cn = 20;
	console.log(cn);// Here cn is 10
	{
	const cn = 4;
	console.log(cn);// Here cn is 2
	}
	console.log(cn);// Here cn is 10

// var = Declare a variable
var stat1 = document.getElementById('stat1');
var stat2 = document.getElementById('stat2');
var stat3 = document.getElementById('stat3');
var btn = document.getElementById('btn');

// let = Declare a block variable
let x, y, z;
x = 5; // statement 1
y = 5; // statement 2
z = x + y; // statement 3
stat1.innerHTML = z;

btn.addEventListener('click', function btn(){
	// const = Declare a block constant
	const x = stat2;
	const y = stat3;
	x.innerHTML = 'Hello JS';
	y.innerHTML = 'Im Here';
})

// if = Marks a block of statements to be executed on a conditions
let f = document.getElementById('f');
let kondisi = 5
if (kondisi < 10) {
	f.innerHTML = 'This is "if" statement';
};

// switch = Marks a block of statements to be executed in different cases
let swt = document.getElementById('swt');
let day;
switch(new Date().getDay()){
	case 0: day = 'Sunday';
	break;
	case 1: day = 'Monday';
	break;
	case 2: day = 'Tuesday';
	break;
	case 3: day = 'Wednesday';
	break;
	case 4: day = 'Thursday';
	break;
	case 5: day = 'Friday';
	break;
	case 6: day = 'Saturday';
	break;
}
swt.innerHTML = `Today is ${day}`;

// for = Marks a block of statment to be executed in a loop
let fr = document.getElementById('fr');
let name = ['Andi', 'Dono', 'Santi'];
let i;
let text = '';
for (i = 0; i < name.length; i++) {
	text = text + (name[i]) + '<br>';
};
fr.innerHTML = text;

// function = Declare a functions
let fun = document.getElementById('fun');
function add(num1, num2){
	// return = Exits a function and return the value
	return num1 + num2;
};
fun.innerHTML = add(100,33);

// try = Implements error handling to a block of statements
let tr = document.getElementById('tr');
try{
	var t = 10;
	if (t % 2 == 0) {
		tr.innerHTML = "Success";
	};
}
catch{
	tr.innerHTML = "Error";
}