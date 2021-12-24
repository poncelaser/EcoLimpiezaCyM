const header = document.getElementById("header");
const plans = document.getElementById("plans");

const btnConoce = document.getElementById("btnConoce");
const btnLinkedin = document.getElementById("btnLinkedin")



btnConoce.addEventListener("click",function(){
    console.log(btnLinkedin);
    plans.scrollIntoView({
        behavior: 'smooth'
    })
})
btnLinkedin.addEventListener("click",function(){
    header.scrollIntoView({
        behavior: 'smooth'
    })
})