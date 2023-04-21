/*const fullname = document.getElementById ("fullname")
const changeFullName = document.getElementById ("changeFullName")
const errorName = document.getElementById("errorName")

const numberCard = document.getElementById ("numberCard")
const errorNumber = document.getElementById ("errorNumber")
const changeNumberCard = document.getElementById ("changeNumberCard")

fullname.addEventListener ("input" , ()=>{
    changeFullName.innerHTML = fullname.value.toUpperCase()
    let validation = new RegExp ('^[A-Z ]+$', 'i',);

    if(!validation.test(fullname.value)){
        errorName.innerHTML = "Currently Error"

    }  else errorName.innerHTML = ""
})


numberCard.addEventListener("input", ()=>{
    changeNumberCard.innerHTML = numberCard.value
    let validation = new RegExp ('^[0-9 ]+$', 'i')
    if (!validation.test (numberCard.value)){
        errorNumber.innerHTML = "Currently Error"
    }
    else errorNumber.innerHTML = ""
})*/

class Card{
    constructor(){

        //Nombre de tarjeta
        this.fullname = document.getElementById ("fullname")
        this.changeFullName = document.getElementById ("changeFullName")
        this.errorName = document.getElementById("errorName")

        //Numero de tarjeta
        this.numberCard = document.getElementById ("numberCard")
        this.errorNumber = document.getElementById ("errorNumber")
        this.changeNumberCard = document.getElementById ("changeNumberCard")
    }

    agregarNombre(){
        this.fullname.addEventListener("input", ()=>{
            this.changeFullName.innerHTML = Object.values(this.fullname).toUpperCase
        } )
    }

    verificarNombre(nombre){
        let validation = new RegExp ('^[A-Z ]+$', 'i',);
        if(!validation.test(nombre.value)){
            this.errorName.innerHTML = "Currently Error"
        }else this.errorName.innerHTML = ""

    }
}


//Objetos

const card = new Card();

card.agregarNombre();