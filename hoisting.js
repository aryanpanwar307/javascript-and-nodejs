// for variables -> memory is allocated for variables even before the code is executed
// and undefined is set in the memory until assigned some value
console.log("a is",a); 
var a;
console.log("a is",a);
a=10;
console.log("a is",a);

// output -> a is undefined , a is undefined , a is 10

// for functions ->  proper memory with value is allocated for functions even before the code is executed.
fn();
function fn(){
    console.log("this is fn function")
}
fn();

// output -> this is fn function , this is fn function

// ex - 1
function fn(){console.log("first")}
function fn(){console.log("sec")}
function fn(){console.log("third")}
fn();

// output -> third

// ex - 2
function fn(){console.log("first")}
fn();
function fn(){console.log("sec")}
fn();
function fn(){console.log("third")}

// output -> third , third

// ex - 3
fn();
var fn = function () {
    console.log("special example");
}
fn();

// output -> error that function fn does not exist because fn is a variable
// who stores a function so initially it just a variable with value undefined not a function

console.log(fn);
var fn = function () {
    console.log("special example");
}
fn();

// output -> undefined , special example because initially fn is a variable with nothing in it that is
// memory will be allocated with value undefined and after defining we can use it as a function
