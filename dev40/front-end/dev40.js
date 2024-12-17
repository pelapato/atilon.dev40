const escrever = document.querySelector(".escrever");
const technologias = ["Web Designer","Game","Dev"]
console.log(escrever);
const menu = document.querySelector("#menu");
const menu_linha = document.querySelector("#linha");
const nav = document.querySelector("nav");

var sistema_de_menu_verify = 1;

const sistema_de_menu=()=>{
    menu.addEventListener('click',()=>{
        menu_linha.classList.toggle("lin");

        sistema_de_menu_verify++
        let verify_cont =(sistema_de_menu_verify%2==0) ? true : false;  
        if(verify_cont){
            nav.classList.add("menu_ativo");
        }else{
            nav.classList.remove("menu_ativo");
        }
    })
}
sistema_de_menu()