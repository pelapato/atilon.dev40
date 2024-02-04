const btnFechar=document.getElementById("btn_fechar")
const btnAbrir=document.getElementById("btn_abrir")
const menu=document.querySelector('.nav')

btnAbrir.addEventListener('click',()=>{
  menu.classList.add('open')
  btnFechar.addEventListener('click',()=>{
   menu.classList.remove('open')
  })
})

/*RESET*/

window.animation=ScrollReveal({reset:true})

animation.reveal('.txt',{
  duration:1000,
  origin:"left",
  distance:"90px",
  delay:200
})
animation.reveal('.criado', {
  duration: 1000,
  delay:400,
  origin:"right",
  distance:"90px"
})
animation.reveal('.text', {
  duration:1000,
  delay:200,
  distance: "90px"
})
animation.reveal('.div', {
  duration: 1000,
  origin: "left",
  distance: "90px"
})
animation.reveal('.img', {
  duration: 1000,
  delay:300,
  origin:"left",
  distance: "150px"
})
animation.reveal('.fala',{
  duration: 1000,
  delay:200,
  distance: "90px"
})
animation.reveal('.input', {
  duration: 1000,
  origin: "right",
  distance: "90px"
})
animation.reveal('.pt-1', {
  delay: 400
})
animation.reveal('.pt-2', {
  delay: 500
})
animation.reveal('.pt-3', {
  delay: 600
})
animation.reveal('.pt-4', {
  delay:700
})