let  PERSONALDETAILS = {

     pname : 'abc',
     page :  15,
     "phone num" : 5432167892,
     address : ['bangalore','mysore'],
     details : function() {
        console.log('the details are  '+ "  "+ this.pname+ "  " + this.page);
    },
        spouse:{
            sname:'xyz',
               sage:20
                }
     }
          console.log(PERSONALDETAILS.pname);
          console.log(PERSONALDETAILS.page);
          console.log(PERSONALDETAILS.spouse.sage);
          console.log(PERSONALDETAILS.address[0])
          console.log(PERSONALDETAILS['pname']);
          console.log(PERSONALDETAILS['spouse']['sage']);
          console.log(PERSONALDETAILS["phone num"]);
          console.log(PERSONALDETAILS['address'][1]);
          console.log(PERSONALDETAILS);

          //to delete a property
          delete PERSONALDETAILS.address
          console.log(PERSONALDETAILS);

          //to add a property
          PERSONALDETAILS.location='newdelhi'
          console.log(PERSONALDETAILS);

          //to modify a property
          PERSONALDETAILS.pageage=25
          console.log(PERSONALDETAILS.page);





