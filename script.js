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
        button.style.border = "1px solid #000000";
        document.querySelector('.iconarrow').style  = "max-width: 13px; margin-left: 5px; transform: rotate(0deg);"
        
    } else {
        button.classList.add('open');
        filtro.style.display = "none";
        button.style.border = "1px solid #c2c2c2";
        document.querySelector('.iconarrow').style  = "max-width: 13px; margin-left: 5px; transform: rotate(180deg);"
    }
};


function validarRegister(){
    var button = document.getElementsByClassName(".button");
    var modeloVazio = modelo.value;
    var nomeVazio = nome.value; 
    var emailVazio = email.value;
    var numeroVazio = numero.value;
    
    if( !(modeloVazio == "") && !(nomeVazio == "") && !(emailVazio == "") &&     !(numeroVazio == "") ){
    document.register.idButton.disabled=false;
    document.register.idButton.classList.remove("button");
    document.register.idButton.classList.add("buttonactive");
}
    
    
    else{
        document.register.idButton.disabled=true;
        document.register.idButton.classList.remove("buttonactive");
        document.register.idButton.classList.add("button");
    }
    
};

/*function EnviadoComSucesso() {
    alert('Enviado com sucesso! Entraremos em contato o mais rápido.');document.location='index.html';
}*/


