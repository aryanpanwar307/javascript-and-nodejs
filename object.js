//everything is object
// object -> its a key value pair where key can be string or number and value can be anything.

const obj = {
    name:"aryan",
    age:21,
    role:function(){
        console.log("developer")
    }
}
for(let key in obj){
    console.log(key + ":" + obj[key])
}
obj.role()

//but arrays are also objects ...lets see -> arrays as objects
const arr = [1,2,3,4,5]
console.log(arr)    //[1,2,3,4,5]
arr.name = "aryan"
console.log(arr);   //[1,2,3,4,5,name:'aryan] (strange right)

for(let key in arr)
{
    console.log(key + ":" + arr[key])   //0:1,1:2,2:3,3:4,4:5,name:aryan
}
// output is same as that of objects so it is observed that arr are also objects and its indexes are the key of that obj. 


//functions as objects -> ke value pair and extra feature is that it has code property -> it can run the code written inside function
// whenever the function is invoked
function fn()
{
    console.log("i am function")
}
fn.prop = "i am property of function"
fn.methodFun = function(){
    console.log("i am method of function")
}
fn();
fn.methodFun();
console.log(fn.prop);
console.log(fn);

// everything is object other tha 6 primitive types
// those are -> number, string, boolean, undefined, null, symbol