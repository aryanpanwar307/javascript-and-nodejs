function anything(name,age,callback1, callback2){
    let personName = name;
    let personAge = age;
    callback1(personName);
    callback2(personAge);
}

function printname(msg){
    console.log(msg);
}
function printage(msg){
    console.log(msg);
}

anything("aryan",23,printname,printage)