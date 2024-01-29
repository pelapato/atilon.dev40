let menu =document.querySelector("header")
let navegationMenu = document.querySelector("#topoHeader")
let fecharMenu=document.querySelector("img#fecharMenu")

const lang=[...document.querySelectorAll('.techBTN')]

let valor=document.querySelector("#valor")
let linguaguem=document.querySelector('#ling')
const level=document.querySelector('#livel')
let html=[...document.querySelectorAll('.html')]
let res=true


//fun;ao do navegation
menu.addEventListener("click",()=>{
  navegationMenu.classList.add('active')
  console.log('clicou!!')
  fecharMenu.addEventListener('click',()=>{
    navegationMenu.classList.remove('active')
  })
})

lang.map((bt)=>{
  bt.addEventListener('click',(evt)=>{
    level.style.display = "flex"
    valor.innerHTML = linguaguem.innerHTML = bt.innerHTML
    html.map((e,ind) => {
      if(bt.innerHTML=='CSS'){
        switch (ind) {
          case 0:
            e.innerHTML="Propriedades basicas"
            break;
          case 1:
            e.innerHTML="seletores css"
            break;
          case 2:
            e.innerHTML = "flex,grid responsivo"
            break;
          case 3:
            e.innerHTML = "propriedades flex"
            break;
          case 4:
            e.innerHTML = "propriedades grid"
            break;
          case 5:
            e.innerHTML = "animação com @keyframes"
            break;
          case 6:
            e.innerHTML = "responsivo com @media"
            break;
          case 7:
            e.innerHTML = "fonts,texto"
            break;
          case 8:
            e.innerHTML = "seletores especias webkit"
            break;
          default:
            console.log('fim')
            break
        }
      }
      if(bt.innerHTML=="JS"){
        switch (ind) {
          case 0:
            e.innerHTML = "Variavel"
            break;
          case 1:
            e.innerHTML = "tipo de dados"
            break;
          case 2:
            e.innerHTML = "operadores relacionais,logicos,bitwise, aritmeticos"
            break;
          case 3:
            e.innerHTML = "função,anonima,arrow function,geradora,controladora"
            break;
          case 4:
            e.innerHTML = "spread, função parametrizada"
            break;
          case 5:
            e.innerHTML = "relação Dom"
            break;
          case 6:
            e.innerHTML = "metodos map,forEach,appendChild,remove,toggle,add etc..."
            break;
          case 7:
            e.innerHTML = "escopo,erros de java script e seus poblemas"
            break;
          case 8:
            e.innerHTML = "modo reatrito e use struct etc..."
            break;
          default:
            console.log('fim')
            break
        }
      }
    })
  })
})