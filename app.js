const emailInput = document.getElementById("email");
const invaildLabel = document.getElementById("test");

emailInput.addEventListener('input', () => {
    if(emailInput.validity.valid){
        emailInput.classList.remove("invaild");
        invaildLabel.classLis.remove("invaild");
    }else{
        emailInput.classList.add("invaild");
        invaildLabel.classList.add("invaild");
    }
});
