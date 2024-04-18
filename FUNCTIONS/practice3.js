var a=3
let b=4
const c=5

function sample() 
{
    var a1=30
    let b1=40
    const c1=50
    console.log(b)
    console.log(c)
    {
        var a4=13
        let b4=14
        const c4=15
       // console.log(a5) //error
        //console.log(b5) //error
    }
    console.log(a4)
    //console.log(b4) //error
   // console.log(c4)  //error
  

}

sample()

    {
        var a3=3000
        let b3=4000
        const c3=5000
       // console.log(a1)  error

       function sample2() {
                 var a5=130
                 let b5=140
                 const c5=150
       } 
       sample2()
      // console.log(a5)  //error
      // console.log(b5)      //error
    }
    

