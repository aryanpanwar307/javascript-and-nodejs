let person = {
    name:"aryan",
    age:23
}

let showDetails = function(city){
    console.log(this.name + " " + this.age + " lives in " + city)
}

let bindFun = showDetails.bind(person);
bindFun();


// so make the polyfill we need to understand how bind works , bind needs a function which is to be bound(showDetails)
// to the object(person) which is passed as a parameter to the bind fun and it returns a function with updated changes.

// 1. we create a function prototype myBind which is a function takes the object as a parameter
// 2. 'this' refers to the function which is to be bound i.e in below case 'this' refers to showDetails because we will write showDetails.myBind
// 3. it will return a function with the updated changes , generally we would have written showDetails.call(person) so we wrote the same thing

Function.prototype.myBind = function(obj){
    let fun = this
    return function(){
        fun.call(obj)
    }
}

let myBindFun = showDetails.myBind(person);
myBindFun();

// if you want to pass some parameters through bind that can we done as shown below :-

Function.prototype.myBind = function(...args){
    let fun = this
    let param = args.slice(1) //since the first argument is the object so we pass except that.
    return function(){
        fun.call(args[0],param)
    }
}

let myBindFun = showDetails.myBind(person, "agra");
myBindFun();