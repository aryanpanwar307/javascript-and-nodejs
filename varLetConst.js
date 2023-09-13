//var -> can be used before initialization, can be redeclared, functional scope

console.log(nam);
var nam;
nam = "aryan";
console.log(nam);
function fn(){
    console.log(nam);
    var nam = "ap"
    console.log(nam);
}
fn();
console.log(nam);
//output -> undefined, aryan , undefined, ap, aryan

//var does not have block scope as seen in above example when used inside function new memory is allocated
//while here in block scope it does not reallocate it changes the previous value;
var n = 10;
console.log(n)
{
    console.log(n);
    var n = 20;
    console.log(n);
}
console.log(n);
//output -> 10, 10, 20, 20

//let -> cannot be redeclared, used block space, cannot be accessed before declaration(temporal dead zone)

let n = 90;
console.log(n);
{ 
    let n = 80;
    console.log(n);
}
console.log(n)  // output -> 90, 80, 90

//temporal dead zone
console.log(n);
let n = 90;   //output -> error, cannot use before initialiazation

//if not declared/initialized in block it searches the variable in upper block(does not enter in TDZ if not initialized in that scope)
//eg-1
let n = 90;
{
    console.log(n);
    let n;
}  
//output -> error

// eg-2
let n = 90;
{
    console.log(n);
}
// output -> 90

//const -> same as let but cannot be reassigned and should have some value during declaration/initialization
const n = 10;
n=20;
console.log(n); //output -> error(reassign)

//variable shadowing is nothing just redeclaring variables inside the different scope
// legal shadowing eg-
            // const n = 10 
            // {
            //     let n = 20;
            // }
//illegal shadowing eg-
            // const n = 10;
            // {
            //     var n = 20;
            // } 
//this cannot be done because var's scope is functional not block