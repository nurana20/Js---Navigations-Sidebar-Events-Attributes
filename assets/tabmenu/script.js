let lis = document.querySelectorAll("li");
let cofes = document.querySelectorAll(".cofe");
let aTegs=document.querySelectorAll(".cofe a")
let linkler=["https://m.youtube.com/watch?v=gnf3pnp7c58&pp=ygUZZXNwcmVzc28gbmFzxLFsIHlhcMSxbMSxcg%3D%3D","https://m.youtube.com/watch?v=EbvbcNI5AEs&pp=ygUObGF0dGUgeWFwxLFtxLE%3D","https://m.youtube.com/watch?v=HDLsLu2Ta8A&pp=ygUbY2FwcHVjY2lubyBuYXPEsWwgeWFwxLFsxLFy","https://m.youtube.com/watch?v=kszQacqX9u0&pp=ygUaYW1lcmljYW5vIG5hc8SxbCB5YXDEsWzEsXI%3D","https://m.youtube.com/watch?v=yxkntWwsA5E&pp=ygUabWFjY2hpYXRvIG5hc8SxbCB5YXDEsWzEsXI%3D","https://m.youtube.com/watch?v=L-wdVq_WH2I&pp=ygUWbW9jaGEgbmFzxLFsIHlhcMSxbMSxcg%3D%3D","https://m.youtube.com/watch?v=2qMLgBITNEc&pp=ygUKRmxhdCBXaGl0ZQ%3D%3D"]
lis.forEach((li,index) => {
    li.addEventListener("click", function() {
        cofes.forEach(cofe => cofe.classList.add("none"));
        aTegs.forEach(a=>a.setAttribute("href",linkler[index]))
        cofes[index].classList.remove("none");
    });
});
