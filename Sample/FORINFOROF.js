let k=[10,20,30,'a']
for (const index in k) {
   console.log(k[index]+'  '+index);
}

for (const iterator of k) {
  //  if(iterator==10)
    console.log(iterator);
    
}
// for (const index in k) {
//   //  if (index==2) {
//         console.log(k[index]);        
//     }
// }

let arr=[10,20,30,'hello']
//    arr.forEach(ele=>{           //foreach uses some functions or callbackfunctions => syntax of arrow function
//     console.log(ele*2);
//    })
//    let n=null
//    console.log(n);
//    n='hi'
//   console.log(n);

for (const key in arr) {
        if(typeof(key)==='string'){
            console.log(arr[key]);
        }
        
    }

   