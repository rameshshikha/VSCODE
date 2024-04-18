//unstrict mode

console.log(this);        //this  is pointing  to window object


function a(){
    console.log(this);     //in a standard function, it point to window object
}

let b =()=>{
   console.log(this);
}                           //in an arrow function, it point to window object

a()
b()

let obj ={
    pame :"aaa" ,
      greet :function(){
        console.log(this);          //inside an object, this keyword points towards the object
        console.log(this.pname);     //here this keyword will give the property value
      }, 
      b : ()=>{
   console.log(this);            //   pint toward window object
   console.log(this.pname);
      }                               //undefined
}
obj.greet()
obj.b()