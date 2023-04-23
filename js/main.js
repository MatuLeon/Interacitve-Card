

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
            this.changeFullName.innerHTML = this.fullname.value.toUpperCase()
            this.verificarNombre()
        })
    }

    verificarNombre(){
        let validation = new RegExp ('^[A-Z ]+$', 'i',);
        if(!validation.test(this.fullname.value)){
            this.errorName.innerHTML = "Currently Error"
        }else this.errorName.innerHTML = ""

    }

    agregarNumero(){
        this.numberCard.addEventListener("input", ()=>{
            this.changeNumberCard.innerHTML = this.numberCard.value
            this.verificarNumero()
        })
    }

    verificarNumero(){
        let validar = new RegExp ('^[0-9 ]+$', 'i');
        if (!validar.test(this.numberCard.value)){
            this.errorNumber.innerHTML = "Currently Error"
        }else this.errorNumber.innerHTML = ""
    }

}


//Objetos
const card = new Card();


//Eventos
card.agregarNombre();
card.agregarNumero();