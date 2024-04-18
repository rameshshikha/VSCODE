
//constructor function

function person(empname, age, details)  {
    this.empname=empname
    this.age=age 
    this.details= details
}

      let data1=new person('shikha',28)
      console.log(data1);

      //using another function inside constructor function

      let data2=new person('shilpa' , 25 , function details() {
        console.log('details are'+ "  "+ this.empname );
        
      })
    console.log(data2);
    console.log(data2.details);
    console.log(data2.empname);
    data2.details();