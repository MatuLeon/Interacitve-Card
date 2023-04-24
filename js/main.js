let form = document.getElementById ("form")

class Card{
    constructor(){

        //Nombre de tarjeta
        this.fullname = document.getElementById ("fullname");
        this.changeFullName = document.getElementById ("changeFullName");
        this.errorName = document.getElementById("errorName");

        //Numero de tarjeta
        this.numberCard = document.getElementById ("numberCard");
        this.errorNumber = document.getElementById ("errorNumber");
        this.changeNumberCard = document.getElementById ("changeNumberCard");

        //Fecha expiración
        this.dateMM = document.getElementById ("dateMM");
        this.changeMM = document.getElementById ("changeMM");
        this.dateYY = document.getElementById ("dateYY");
        this.changeYY = document.getElementById ("changeYY");
        this.errorFecha = document.getElementById ("errorFecha");

        //CVC
        this.cvc = document.getElementById ("cvc");
        this.errorCVC = document.getElementById ("errorCVC");
        this.changeCVC = document.getElementById ("changeCVC")


        //BUTTON
        this.button = document.getElementById ("button")
    }


    agregarNombre(){
        this.fullname.nodeValue
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
        return true

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



    agregarFechaMM(){
        this.dateMM.addEventListener ("input", ()=>{
            this.changeMM.innerHTML = this.dateMM.value + "/"
            this.verificarMM()
        })
    }

    verificarMM(){
        let validar = new RegExp ('^[0-9 ]+$', 'i');
        if (!validar.test(this.dateMM.value) || (this.dateMM.value <= 0 || this.dateMM.value >12)){
            this.errorFecha.innerHTML = "Currently Error"
        }else this.errorFecha.innerHTML = ""
    }



    agregarFechaYY(){
        this.dateYY.addEventListener ("input", ()=>{
            this.changeYY.innerHTML = this.dateYY.value
            this.verificarYY()
        })
    }

    verificarYY(){
        let validar = new RegExp ('^[0-9 ]+$', 'i');
        if (!validar.test(this.dateYY.value) || (this.dateYY.value <23 || this.dateYY.value > 30) ){
            this.errorFecha.innerHTML = "Currently Error"
            return form = false
        }else this.errorFecha.innerHTML = ""
        return form = true
    }



    agregarCVC(){
        this.cvc.addEventListener ("input", ()=>{
            this.changeCVC.innerHTML = this.cvc.value
            this.verificarCVC();
        })
    }

    verificarCVC(){
        let validar = new RegExp ('^[0-9 ]+$', 'i');
        if (!validar.test(this.cvc.value)){
            this.errorCVC.innerHTML = "Currently Error"
            return form = false
        }else this.errorCVC.innerHTML = ""
        return form
    }

    formEnviado(){
        this.button.addEventListener ("click", ()=>{
            if (this.fullname.value != null && this.numberCard.value != 0 && this.cvc.value != 0 && this.dateMM.value != 0){
                form.remove()

            }
        })
    }

}


//Objetos
const card = new Card();


//Eventos
card.agregarNombre();
card.agregarNumero();
card.agregarFechaMM();
card.agregarFechaYY();
card.agregarCVC();
card.formEnviado();

