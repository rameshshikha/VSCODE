  //*  ......................1. STRINGLENGTH............ */

  let x="HELLOWORLD fhghgg"
  let y=x.length
  console.log(y);

  //** .....................2.charAt()........... */
     let c=x.charAt(3);
     console.log(c);
//*.....................3.charcodeAt().............*/

   let d=x.charCodeAt(4);
   console.log(typeof(d));
   console.log(d);
   //*..................4.string at()..................*/

   let  s=x[4]
   console.log(typeof(s));
   //*..................5.slice().....................*/
   let q=x.slice(5,10);
   console.log(q);

   //*................6.SubString()........................*/
   let t=x.substring(5,10);
   console.log(t);

//*..................7.substr()..........................*/
     let g=x.substr

     //..............8.tolowercase().........................*/
     let v=x.toLowerCase();
     console.log(v);
     //.................9.touppercase().........................*/
     let i=x.toUpperCase()
     console.log(i);

     //*..............10.concat()............................*/

     let k='hello' +" "+'world'
     let m=k.concat('world')
     console.log(k);
     console.log(m);

     //................11.trim()...............*/
     let j='      hello world          '
     let o=j.trim()
         console.log(o);

    //...............12.trimstart()..........................*/
           let v1=j.trimStart()
           console.log(v1);

    //..................13.trimend().........................*/
    let x1=j.trimEnd()
    console.log(x1);       

    //...................14.repeat().........................*/

           let u=x.repeat(2)
           console.log(u);

    //.................15.replace().......................*/
    let l=x.replace("WORLD", "india")
    console.log(l);       
    //..................16.split()........................*/
         let z=x.split( " " )
         console.log(z);
