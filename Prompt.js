import Prompt from "prompt-sync";
const prom=Prompt()

// let d=parseInt(prom('Enter the value'))
// console.log((d));
// console.log(typeof(d));
// let s=parseFloat(prom('enter the next value'))
// let q=Number(prom('enter the value'))
// console.log(typeof(q));
// console.log(typeof(s));
//    let c = s-d;
// console.log((c));

// //entering an array
// let array=prom('enter the values');
//       let arr=array.split(",")
//       console.log(arr);

      //entering array with limited number

      let arr =[]
      for(let i=0;i<=10;i++){
        arr.push(prom('enter the value'))
      }
      console.log( arr);

