//Standard fUNCTION
function add(a,b) {
    console.log(a+b);
    
}
add(4,5)
//add(5,8)
//add(9,6)

//FUNCTION EXPRESSION
   let myFunction=function(a,b) 
   {
        return a+b
   }
   console.log(myFunction(5,6));


   //Immediately invoked function()()IIF
   (function iif(a,b) {

    console.log(a*b);
   })
   (3,5)
   

   //ARROW FUNCTION or ANONYMOUS FUNCTION
 
    
     let arw1=(a,b)=>a+b;   //simplified way
       console.log(arw1(3,5));

       let arw2 = a=> a;
       console.log(arw2(4));
       
       let arw3=(a,b)=> {
         // return a+b
          if(a<b)
          {
            console.log(a);
          }
        
          
       }
       console.log(arw3(7,9));
       