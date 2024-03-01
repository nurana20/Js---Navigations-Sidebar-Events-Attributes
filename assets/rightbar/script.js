let deletebuton=document.querySelector(".xbuton")
let burgerbuton=document.querySelector(".burger")
let sidebar=document.querySelector(".sidebar")
deletebuton.addEventListener("click",function(){
    deletebuton.classList.add("none")
    sidebar.classList.add("move")
    burgerbuton.classList.remove("none")
})
burgerbuton.addEventListener("click",function(){
    deletebuton.classList.remove("none")
    sidebar.classList.remove("move")
    burgerbuton.classList.add("none")
})