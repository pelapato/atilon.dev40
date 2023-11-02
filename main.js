let menu=document.querySelector("span.menu")
let ul=document.querySelector("ul#navegation_links")
menu.onclick=()=>{
  ul.classList.toggle("ativo")
  console.log("clicado")
}
