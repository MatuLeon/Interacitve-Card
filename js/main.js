//Constantes Nombre
const fullname = document.getElementById ("fullname");
const changeFullName = document.getElementById ("changeFullName");
const errorName = document.getElementById("errorName");


//Constantes Numero de tarjeta
const numberCard = document.getElementById ("numberCard");
const errorNumber = document.getElementById ("errorNumber");
const changeNumberCard = document.getElementById ("changeNumberCard");



//Constantes Fecha expiración 
const fechaMM = document.getElementById ("MM");
const fechaYY = document.getElementById ("YY");
const changeYY = document.getElementById ("changeYY");
const changeMM = document.getElementById ("changeMM");
const errorNumberFecha = document.getElementById ("errorNumberFecha");

//Constantes CVC
const cvcNumber = document.getElementById ("cvcNumber");
const errorCVC = document.getElementById ("errorCVC");
const changeCVC = document.getElementById ("changeCVC")


//Button
const button = document.getElementById("button")


fullname.addEventListener ("input" , ()=>{
    changeFullName.innerHTML = fullname.value.toUpperCase()
    let validation = new RegExp ('^[A-Z ]+$', 'i',);

    if(!validation.test(fullname.value)){
        errorName.innerHTML = "Currently Error"

    }  else errorName.innerHTML = ""
    return true
})


numberCard.addEventListener("input", ()=>{
    changeNumberCard.innerHTML = numberCard.value
    let validation = new RegExp ('^[0-9 ]+$', 'i')
    if (!validation.test (numberCard.value)){
        errorNumber.innerHTML = "Currently Error"
    }
    else errorNumber.innerHTML = ""
    return true
})


fechaMM.addEventListener ("input", ()=>{
    changeMM.innerHTML = fechaMM.value + "/"
    let validationFecha = Number(fechaMM.value)
    let validation = new RegExp ('^[0-9]+$', 'i')

    if (!validation.test (fechaMM.value)){
        errorNumberFecha.innerHTML = "Currently Error"

    } 
    
    else if (validationFecha >= 13 || validationFecha <= 0){
        errorNumberFecha.innerHTML = "Currently Error"
    }

    else errorNumberFecha.innerHTML = ""
    return true

})

fechaYY.addEventListener ("input", ()=>{
    changeYY.innerHTML = fechaYY.value
    let validationFecha = Number(fechaYY.value)
    let validation = new RegExp ('^[0-9]+$', 'i')

    if (!validation.test (fechaYY.value)){
        errorNumberFecha.innerHTML = "Currently Error"
    }
    else errorNumberFecha.innerHTML = ""   
    return true
    
})


cvcNumber.addEventListener ("input", ()=>{
    changeCVC.innerHTML = cvcNumber.value
    let validationLenght = Number(cvcNumber.value)
    let validation = new RegExp ('^[0-9]+$', 'i')

    if (!validation.test (cvcNumber.value)){
        errorCVC.innerHTML = "Currently Error"
    } 
    else errorCVC.innerHTML = ""
    return true

})


button.addEventListener("onclick", (e)=>{
    e.preventDefault();
    form.reset();
    
})

