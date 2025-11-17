// solution 1

function formatValue(params:string | number | boolean): string | number | boolean{
    if (typeof params === "string") {
        return params.toUpperCase();
    }else if(typeof params === "number"){
        return params * 10
    }else if (typeof params === "boolean") {
        return !params
    }
    throw new Error("Invalid type");
}

// solution 2

function getLength(params:string | unknown[]):number {
    if (typeof params === 'string') {
        return params.length
    }else if (Array.isArray(params)) {
        return params.length
    }
    throw new Error("Invalid Type")
}


// solution 3

class Person{
    name:string;
    age:number
    constructor(name:string,age:number){
        this.name=name;
        this.age=age
    }
    getDetails():string{
        return `Name: ${this.name}, Age: ${this.age}`
    }
}


// solution 4

function filterByRating(params:Array<{title:string,rating:number}>) :Array<{title:string,rating:number}>|[] {
    return params.filter((item)=>item.rating>=4)
}

