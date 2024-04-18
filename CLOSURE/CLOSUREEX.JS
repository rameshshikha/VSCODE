
   let variable='global'
   function outer(a){
    let count=0;
       
     function inner() {
        console.log(++count + "  "+variable +" "+a);
        
     }
     return inner 
   }
     let ret = outer(100);
     ret()
     ret()
     let ret1= outer(200);
     ret1()
     let ret2= outer(300);
     ret2 ()