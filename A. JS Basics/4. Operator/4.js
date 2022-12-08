let x = 5;
let y = 2;

// OPERATOR
// + : Add
console.log(x+y);
// - : Substract
console.log(x-y);
// * : Multiple
console.log(x*y);
// ** : Exponen
console.log(x**y);
// / : Division
console.log(x/y);
// % : Moduls (mod)
console.log(x%y);
// ++ : Increment
var i = 0;
while(i < 10){
	console.log(i++);
}
// -- : Decrement
while(i > -10){
	console.log(i--);
}

// PRECEDENCE
// (), *, /, +, -

// ASSIGN OPERATOR
// = | x = y | y = x
console.log(x == 5);
// += | x += y | x = x + y
console.log(x += 1);
// -+ | x -= y | x = x - y
console.log(x -= 1);
// *= | x *= y | x = x * y
console.log(x *= 2);
// /= | x /= y | x = x / y
console.log(x /= 2);
// %= | x %= y | x = x % y
console.log(x %= 2);
// hasil akhir x menjadi 1;

// COMPARISON OPERATORS
// == : equal to
console.log(y == 2);
// === : equal value & equal type
console.log(x === 1);
// != : not equal
console.log(x != 1);
// !== : not equal value & equal type
console.log(x !== 1);
// > : greater then | >= : greater then or equal to
console.log(x > y);
// < : less then | <= : less then or equal to
console.log(x < y);
// ? : ternary operator
console.log(x = 1 ? "benar" : "salah");

// LOGICAL OPERATOR
x = 5;
y = 2;
// && : logical and
console.log(x == 5 && y == 1 ? "benar" : "salah");
// || : logical or
var n = 1;
var m = 2;
console.log(n == 1 || m == 1 ? "benar" : "salah");
// ! : logical not
console.log(!true);

// TYPE OPERATOR
// typeof : return the type of a variable
console.log(typeof "text");
console.log(typeof false);
console.log(typeof 30);
// instanceof : return true if an object an instance of an object
var name = new String("joni");
console.log(name instanceof String);

// DATA TYPES
// decimal : 1.4
// string : "text"
// number : 13
