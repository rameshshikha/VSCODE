//using Async function
async function execute() {
    


console.log('login to application');
let p=new Promise((resolve,reject)=>{
    
    //asyncrhonous code

    setTimeout(() => { resolve('Navigate to home page')
    reject('error')  }, 2000);
})
await p.then((msg)=>{console.log(msg);}).catch
((msg)=>{console.log(msg);})


let p1=new Promise((resolve,reject)=>{
      
    //asynchronous code

    setTimeout(() => {  resolve('get the title')
    reject('error')
        
    }, 2000);
})
await p1.then((msg)=>{console.log(msg);}).catch((msg)=>{
    console.log(msg);
})

console.log('logging out from application');
}
execute()