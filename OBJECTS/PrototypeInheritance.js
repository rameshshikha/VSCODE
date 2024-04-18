//parent object

   let car={
    name :'BMW',
    YOP  :'2015',
    color :'black',
     enginetype :'fourstroke' ,
    details() { console.log(`the details of car is name :${this.name}
     yop: ${this.YOP} color :${this.color}  and engine: ${this.enginetype}`)
        
      }  }

      console.log(car);

  //CHILD OBJECT    
     let car1=Object.create(car)
     car1.YOP ='2024'
     car1.name='jaquar'
     car1.color='blue'
     car1.fueltype='diesel'
     console.log(car1);
       car1.details()
       console.log(car1.fueltype);
       console.log(Object.getPrototypeOf(car1));

     