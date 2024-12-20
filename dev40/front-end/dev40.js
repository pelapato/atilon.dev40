//CDN - ScrollReveal
window.animation = ScrollReveal({reset:true});

//texto da ladidng-page
animation.reveal('.h1',{
    duration:2000,
    distance:'-30px',
})
animation.reveal('.p',{
    duration:1800,
    distance:'-20px',
    delay:200
})
animation.reveal('.redes',{
    duration:1200,
    distance:'-40px',
    delay:200
})
/*animation.reveal('.txt_um',{
    duration:900,
    distance:'10px',
    origin:'right',
    delay:100
})
animation.reveal('.txt_dois',{
    duration:900,
    distance:'10px',
    origin:'right',
    delay:100
})
animation.reveal('.txt_tres',{
    duration:900,
    distance:'10px',
    origin:'right',
    delay:100
})
animation.reveal('.txt_quatro',{
    duration:900,
    distance:'10px',
    origin:'riht',
    delay:100
})*/

//main - ladding-page
const escrever = document.querySelector(".escrever");
const technologias = ["Web Designer","Game","Dev"]
console.log(escrever);

//header - menu
const menu = document.querySelector("#menu");
const menu_linha = document.querySelector("#linha");
const nav = document.querySelector("nav");
const links = [...document.querySelectorAll(".link")]
//header - menu - tema
const btn_tema = document.querySelector("#btn_tema");
const secao_tema = document.querySelector("#sistema-de-tema > ul");
const btn_sub_tema = [...document.querySelectorAll(".btn_sub_tema")];

const logo = document.querySelector("#logo_header");

const projetos = [...document.querySelectorAll(".projeto")];
const titulos = [...document.querySelectorAll("#projetos h1,#conhecimentos h3,#conhecimentos p")];

const tema_principal = document.querySelector("#tema_principal");
const ceta = document.querySelector("#ceta");

const data = new Date();
//let hora = data.getHours();
const m = data.getMinutes();
const s = data.getSeconds();
let hora = 10;
console.log("sao: "+hora+" horas e: "+(m - 20)+" minutos e: "+s+"segundos");

var verificador = 1;



const sistema_de_tema=()=>{
    btn_tema.addEventListener('click',()=>{
        secao_tema.classList.toggle("secao_tema");
    })
    secao_tema.addEventListener('mouseleave',()=>{
        secao_tema.classList.remove("secao_tema");
    })
    btn_sub_tema.map((e,ind,vetor)=>{
        e.addEventListener('click',()=>{
            let srcSvg = e.firstElementChild.attributes[0].textContent
            tema_principal.setAttribute('src',`${srcSvg}`)
            let inicioEl = [...document.querySelectorAll("#inicio > div > article > #nome,.h1")];
            if(ind==0){
                window.document.querySelector("header").style.background="black";
                window.document.querySelector("#inicio,#projetos").style.background="white";
                window.document.querySelector("#inicio,#projetos").style.transition=".5s";
                window.document.querySelector("#projetos").style.background="white";
                window.document.querySelector("#conhecimentos").style.background="white";
                inicioEl.map((e)=>{
                    e.style.color="black";
                    window.document.querySelector("h3").style.color="#333333";
                })
                titulos.map((e)=>{
                    e.style.color="rgb(5,8,17)";
                })
                projetos.map((e)=>{
                    e.style.background="rgb(5, 8, 17)";
                })
            }//light
            else if(ind==1){
                window.document.querySelector("header").style.background="rgb(5, 8, 17)";
                window.document.querySelector("#inicio,#projetos").style.background="rgb(5, 8, 17)";
                window.document.querySelector("#projetos").style.background="rgb(5, 8, 17)";
                window.document.querySelector("#conhecimentos").style.background="rgb(5, 8, 17)";
                inicioEl.map((e)=>{
                    e.style.color="white";
                    window.document.querySelector("h3").style.color="rgb(187, 187, 187)";
                })
                titulos.map((e)=>{
                    e.style.color="white";
                })
            }//noite
        })
    })
}
sistema_de_tema();


var sistema_de_menu_verify = 1;

const sistema_de_menu=()=>{
    menu.addEventListener('click',()=>{
        sistema_de_menu_verify++
        let verify_cont =(sistema_de_menu_verify%2==0) ? true : false;  
        if(verify_cont){
            nav.classList.add("menu_ativo");
            menu_linha.classList.add("lin");
        }else{
            nav.classList.remove("menu_ativo");
            menu_linha.classList.remove("lin");
        }
    })
    links.map((e)=>{
        e.addEventListener('click',()=>{
            nav.classList.remove("menu_ativo");
            menu_linha.classList.remove("lin");
        })
    })
}
sistema_de_menu()

//conhecimento
const linguaguem = [...document.querySelectorAll("#linguaguems > div")];
const texto_linguaguem = document.querySelector("#texto_linguaguem");

const efeito_de_mouse=()=>{
    const info = ["Linguegem De Marcacao Para Web.Responsavel Pelos Elementos Visuais.","Lingugem De Estilizacao Voltada Para Designer Na Web","Responsavel Por Criar Aplicacoes Back-End Dentro E Fora Do Navegador.","Framework Para Criacao de Sites Responsivos E Dinamicos Para Dispositivos Moveis.","Linguagem Back-End Responsavel Por Trabalhar Com IA E Gerenciamento De Sistema.","Linguagem Responsavel Por Da Interatividade Na Web.","Gerenciador De Bancos De dados Altamente Poderoso Com NodeJs","Engine Responsavel Por criar Jogos 2D E 3D.","Linguagem Para Criar Jogos e Sites,Usada Com foco Na Unity","Softwer Que Permite Trabalhar Com Designer Na Web Na Interface Do Usuario(UI) E Experiencia do usuario(UX)."]

    linguaguem.map((e,ind,vetor)=>{
        e.addEventListener('mousemove',(evt)=>{
            //O elemento que houve o mousemove, traz uma informacao
            texto_linguaguem.innerHTML = info[ind];
        })
        e.addEventListener('mouseleave',()=>{
            texto_linguaguem.innerHTML = "Passe o mouser na linguaguem ou toque nela e veja a informacao*";
        })
    })
}
efeito_de_mouse();