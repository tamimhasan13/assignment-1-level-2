//problem-1
const filterEvenNumbers = (values: number[]):number[] => {
  
  return values.filter((value)=> value%2==0);
};

//problem-2
 const reverseString=(values:string):string=>{
    let reverseValue="";
    for(let i=values.length-1;i>=0;i--){
        reverseValue+=values[i];
    }
    return reverseValue
 }
// problem-3
type StringOrNumber = string | number;
const checkType=(value:StringOrNumber)=>{
    if(typeof value ==="string"){
        return "String";
    }
    else{
      return "Number";
    }
}

// problem-4
const getProperty=<T extends object,K extends keyof T>(obj:T,key:K):T[K]=>{
    return obj[key]
}
//problem-5
interface Book{
    title:string;
    author:string;
    publishedYear:number;
}

const toggleReadStatus=(book:Book):Book & {isRead:boolean}=>{
 return {...book,isRead:true}
}


//problem-6
class Person {
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
}
class Student extends Person {
  grade: string;
  constructor(name:string,age:number,grade: string) {
    super(name, age);
    this.grade=grade;
  }
  getDetails():string{
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}
//problem-7
const getIntersection=(arr1:number[],arr2:number[]):number[]=>{
    const result=arr1.filter((value)=>arr2.includes(value));
    return result
}
//  console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
