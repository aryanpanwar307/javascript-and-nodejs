class person{
    constructor(name,age){
        this.name = name,
        this.age = age
    }
    showDetails()
    {
        return this.name;
    }
}

let person1 = new person("aryan",23);
console.log(person1.name + " " + person1.age)