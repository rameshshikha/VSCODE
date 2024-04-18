//class


class person
{

        constructor(empname, age, details)
        {
                    this.empname=empname
                    this.age=age
                    this.details=details
        }


}
      let data1= new person('don', 5, function details1(a,b) {
         c=a+b
        console.log(c);
    })

      data1.details(4,3)
      let data2=new person('din', 4)
      let data3=new person('bin',9)

     console.log(data1);
     console.log(data2.age);
     console.log(data3.age);
      console.log(typeof(data1));