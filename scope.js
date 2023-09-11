// scope -> the area till where the variable or the function can be found is called the scope of variable or function

// console.log(nm);
// var nm = 10;
// console.log(nm);
// function fn() {
//     console.log(nm);    
//     var nm = 20;
//     console.log(nm);  
//     var val = 30; 
// }
// fn();
// console.log(val);

// output -> undefined, 10, undefined, 20, val is not defined(scope of val is only inside function fn)
// functions have there own execution context thats why line 7 prints undefined because it was allocated memory and
// and value = undefined 

// lexical scope 

// var nm = 10;
// function fn() {
//     console.log(nm);  
// }
 
// output -> 10  fn does not have the required variable so its looks for the lexical scope that is outside where the
// function was DEFINED

// var nm = 10;
// function fn2(){
//     console.log(nm);   //defined
// };
// function fn1(){
//     var nm = 20;
//     fn2();  //called
// }
// fn1();

// output -> 10 because lexical scope of fn2 will be outside where it was defined

var nm = 10;
fn1();
function fn1(){
    var nm = 20;
    function fn2(){
        console.log(nm);   //defined
    }
    fn2();   //called
}

// output -> 20 because lexical scope for fn2 will be inside fn1