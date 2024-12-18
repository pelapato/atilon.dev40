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

//header - menu - tema
const btn_tema = document.querySelector("#btn_tema");
const secao_tema = document.querySelector("#sistema-de-tema > ul");
const btn_sub_tema = [...document.querySelectorAll(".btn_sub_tema")];

const sistema_de_tema=()=>{
    btn_tema.addEventListener('click',()=>{
        secao_tema.classList.toggle("secao_tema")
    })

    secao_tema.addEventListener('mouseleave',()=>{
        
    })
}
sistema_de_tema();


//conhecimento
const linguaguem = [...document.querySelectorAll("#linguaguems > div")];
const texto_linguaguem = document.querySelector("#texto_linguaguem");

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

//efeito de hover nas habilidades
const efeito_de_mouse=()=>{
    const info = ["html","css","nodejs","boostrap","python","java script","mysql","unity","csharp","figma"]

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