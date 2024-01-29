let menu =document.querySelector("header")
let navegationMenu = document.querySelector("#topoHeader")
let fecharMenu=document.querySelector("img#fecharMenu")


//fun;ao do navegation
menu.addEventListener("click",()=>{
  navegationMenu.classList.add('active')
  console.log('clicou!!')
  fecharMenu.addEventListener('click',()=>{
    navegationMenu.classList.remove('active')
  })
})