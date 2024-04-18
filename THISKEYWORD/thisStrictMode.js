//under STRICT MODE
"use strict"
console.log(this);    //this keyword points towards window object

function a(){
    console.log(this);  // this keyword points to undefined  
}

let b =()=>{
    console.log(this);   // arrow fn, this points to window object
}
a()
b()

let obj ={
    pame :"aaa" ,
      greet :function(){
        console.log(this);          //inside an object, this keyword points towards the object
        console.log(this.pame);     //here this keyword will give the property value
      } ,
      b : ()=>{
        console.log(this);            // this keyword gives window object
        console.log(this.pname);      // undefined
           }
}
obj.greet()
obj.b()