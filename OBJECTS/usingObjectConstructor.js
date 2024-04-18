//object constructor

let obj=new Object()
obj.objname='object'
obj.objno= 6,
obj.objarray=[2,3,4]
//console.log(obj);
//console.log(obj.objname);
    //     console.log(obj.hasOwnProperty('objname'));
    //     console.log(obj.propertyIsEnumerable('objname'));
    //   //   console.log(obj.isPrototypeOf('pname'));
    //    //  console.log(obj.toString('objname'));
    //     // console.log(obj.valueOf(obj));
    //      console.log(Object.entries(obj));  
       
    //      console.log(Object.keys(obj));
         
 


let shik=new Object()
shik.address=['ajsks','dhfjd',446738]
//console.log(shik.address);
   
                

       //using entries convert the object to array hence we can use forof loop

    //    let array=Object.entries(shik);
    //    for (const iterator of array) {
    //           console.log(iterator);
        
    //    }
       Object.defineProperty(shik,'prop',{
        enumerable:false,
        value:123345
       })
       console.log(shik);
            
       



// for (const key in obj) {
//             // if (typeof(obj.objname =='string'))
//             // console.log(obj.objname);
//         console.log(obj[key]);
       
                
            // }

            // for (const iterator of obj) {     //object is not iterable
                                                    //object is enumerable while arrays and strings are iterable
             //     console.log(iterator);
            // }



        
        

   