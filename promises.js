// its a inbuild constructor in javascript which can be used to handle asynchronous programming
//you can also make your own promises object which will require a function
// a new promise object with a function as argument and inside that pass two parameters(resolve, reject)
// resolve and reject are themselves functions whos work is to change the state of promise(in simple words what promise will return is given
// by resolve and reject and promise acquire that value which you can use when calling .then/catch method)

console.log("before function declared")
function addTwoNumbers(a, b) {
    return new Promise(function(resolve, reject) {
        //add some delay to check asynchrounous
      setTimeout(function() {
        const sum = a+b;
        if(sum)
        resolve(sum)
        else
        reject("invalid request")
      }, 2000);
    });
  }
console.log("before fun called");

addTwoNumbers(2, 3)   //call the function
.then(function(result) {
    console.log('The sum is ' + result);
    // resolve the new promise with the result
    // return result;  //not necessary in this case
})
.catch(function(error) {
    // print the error to the console
    console.log('An error occurred: ' + error);
    // reject the new promise with the error
    throw error;
});
console.log("after fun call")


  