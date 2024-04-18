// console.log("login to apllication");{
//    addtoCart("pants","dresses","kurtis") 
//      proceedRToPayement(orderID) ;{
        
//     }}
//     console.log('fetch the total amount to pay');
//     console.log('payment ids successfull');{
//         console.log('logout from application');
//     }




      console.log(("login to application"));
      console.log("click on add to cart and add some products");
    let p1=new Promise((resolve,reject)=>{
      
       setTimeout ( (()=> {
        reject("error")
         resolve("pyment is successfull")
          
           })
        )},2000);

        let p2=new Promise((resolve,reject)=>{
          setTimeout(()=>{    
          resolve('fetch the total amount to pay')
        
          reject('error')
            },2000);
        })
        console.log('logout from application');
       Promise.all([p1,p2]).then((msg)=>{console.log(msg);}).catch((error)=>{console.log(error);})
     //  Promise.any([p1,p2]).then((msg)=>{console.log(msg);}).catch((error)=>{console.log(error)})