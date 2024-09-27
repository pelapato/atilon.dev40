let nav,menu,clima,varX,imgRolagem_Topo,fechar

menu = document.querySelector(".text_menu")
nav = document.querySelector("nav")
verify = 1
cima = document.createElement("strong")
cima.setAttribute('id','Rolagem_Topo')
varX = document.createElement("a")
varX.setAttribute('href','#logo')
imgRolagem_Topo =document.createElement('img')
fechar=document.querySelector("span#fechar")

imgRolagem_Topo.setAttribute('src','./src/imagens/chevron-up.svg')
document.querySelector("body").appendChild(cima)
cima.appendChild(varX)
varX.appendChild(imgRolagem_Topo)

menu.addEventListener('click',()=>{
    ++verify
    if(verify%2==0){
        nav.classList.add("menu_visibility")
        document.querySelector("main").addEventListener('click',()=>{
            nav.classList.remove('menu_visibility')
        })
    }else{
        nav.classList.remove("menu_visibility")
    }
})

fechar.addEventListener('click',()=>{
  nav.classList.remove("menu_visibility")
})
//