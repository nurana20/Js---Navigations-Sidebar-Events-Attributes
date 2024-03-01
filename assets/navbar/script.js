let deleteButton=document.querySelector(".xbutton")
let navbar=document.querySelector(".navbar")
let burgerButton=document.querySelector(".burger")
deleteButton.addEventListener("click",function(){
    deleteButton.classList.add("none")
    navbar.classList.add("move")
    burgerButton.classList.remove("none")
})
burgerButton.addEventListener("click",function(){
    deleteButton.classList.remove("none")
    navbar.classList.remove("move")
    burgerButton.classList.add("none")
})