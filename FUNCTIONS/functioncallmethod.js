let persondetails ={

    fullname : function(city){
        return this.firstname +"  "+ this.lastname  +" ,"+ city
}}

const person1 ={
    firstname :"hari" ,
    lastname  : "ram"
}

const person2 ={
    firstname :"prem",
    lastname :"lal"
}

console.log(persondetails.fullname.call(person1,"mysore"));
console.log(persondetails.fullname.call(person2 ,"bangalore"));
//console.log(persondetails.fullname.apply(person1));