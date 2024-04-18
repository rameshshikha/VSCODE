class Encap{

    #pin=5555

    get getpin(){
    return this.#pin
    }

    set setpin(value){

        this.#pin=value
    }}
       let en=new Encap()
    console.log(en.getpin);

    en.setpin=1534
    console.log(en.getpin);

