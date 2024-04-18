let patient1={
    pname : "uthpal" ,
    page :  "28",
    pdisease: "food poision",
    admission :"20-3-2024"

}
let patient2={
    pname : "xxx" ,
    page :  "20",
    pdisease: "fever",
    admission :"21-3-2024"

}

function patientdetails(city , hospital){
    console.log(`the patient ${this.pname} ,${this.page} having disease 
    ${this.pdisease}admitted on ${this.admission},${city+hospital}`);

}
//..........callmethod...........
patientdetails.call(patient1, 'mysore','mghospital')
patientdetails.call(patient2, 'bangalore', 'hmhospital')
//...........applymethod.................
patientdetails.apply(patient1,['mysore', 'mghospital'])
patientdetails.apply(patient2,[ 'bangalore', 'hmhospital'])
//..............bindmethod..........................
      let b=patientdetails.bind(patient1)
      console.log(b);
      b()