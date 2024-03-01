let footerbar=document.querySelector(".footerbar")
let asagiButon=document.querySelector(".asagi")
let yuxariButon=document.querySelector(".yuxari")
asagiButon.addEventListener("click",function(){
    asagiButon.classList.add("none")
    footerbar.classList.add("move")
    yuxariButon.classList.remove("none")
})
yuxariButon.addEventListener("click",function(){
    asagiButon.classList.remove("none")
    footerbar.classList.remove("move")
    yuxariButon.classList.add("none")
})