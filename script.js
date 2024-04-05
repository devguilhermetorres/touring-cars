function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let menuMobileicon = document.querySelector('.mobile-menu-icon');
    var body = document.getElementById("body");

 

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "imgs/menublack.png";
        body.style.position = "relative";
        menuMobileicon.style.position= "relative";
        body.style.overflow = "scroll";
        menuMobileicon.classList.remove('menu-open');
        
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "imgs/closeblack.png";
        body.style.overflow = "hidden";
        menuMobileicon.style.position= "fixed";

        menuMobileicon.classList.add('menu-open');
    }
};

function menuShowFiltrar() {
    let button = document.querySelector('.showfiltrar');
    let arrow = document.querySelector('.iconarrow');
    let filtro = document.querySelector('.full2');


    if (button.classList.contains('open')) {
        button.classList.remove('open');
        filtro.style.display = "block";
        document.querySelector('.iconarrow').src = "imgs/up-chevron.svg";
        button.style.border = "1px solid #363636";
        
        
    } else {
        button.classList.add('open');
        document.querySelector('.iconarrow').src = "imgs/down-chevron.svg";
        filtro.style.display = "none";
        button.style.border = "1px solid #ccc";
    }
};


function validarCadastrar(){
    var button = document.getElementsByClassName(".button");
    var modeloVazio = modelo.value;
    var nomeVazio = nome.value; 
    var emailVazio = email.value;
    var numeroVazio = numero.value;
    
    if( !(modeloVazio == "") && !(nomeVazio == "") && !(emailVazio == "") &&     !(numeroVazio == "") ){
    document.cadastrar.idButton.disabled=false;
    document.cadastrar.idButton.classList.remove("button");
    document.cadastrar.idButton.classList.add("buttonactive");
}
    
    
    else{
        document.cadastrar.idButton.disabled=true;
        document.cadastrar.idButton.classList.remove("buttonactive");
        document.cadastrar.idButton.classList.add("button");
    }
    
};