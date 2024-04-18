//var a=5
for(var b=1; b<=5;b++){
    console.log(b);                     //for loop
}

let arr=[10,20,30,40,50]
for(let i=0; i<arr.length;i++)
{
   console.log(arr[i]);                    //for loop
}

let a=['apple', 'mango','kiwi']
for(let i=0;i<a.length;i++){
  //  Process.stdout.write(a[i]);
   console.log(a[i]);                     //for loop
}
let k=[10,'hi','A',null]
           //  for(let i=0; i<k.length;i++){
                  //  Process.stdout.write(k[i]);
                  //  console.log(k[i]);
          //   }
 //while loop
     /*        let index=0
             while(index<k.length){
                console.log(k[index]);
             }        
            /*    let number=10
             do{
                console.log(number);              //do while loop
                number++ 
             }while(number>=0 && number<=10);  */
 /*do{
      console.log(k[index]);
    index++
  }while(index<k.length);  */

 
      for (const index in k) {
      console.log(k[index]+''+index)
        
    }
  

