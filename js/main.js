const fullname = document.getElementById ("fullname")
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
})
