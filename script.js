function validateRegister(){
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
    
}

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let menuMobileicon = document.querySelector('.mobile-menu-icon');
    var body = document.getElementById("body");


    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "imgs/icons8-menu.svg";
        body.style.position = "relative";
        menuMobileicon.style.position= "relative";
        body.style.overflow = "scroll";
        menuMobileicon.classList.remove('menu-open');
        
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "imgs/icons8-close.svg";
        body.style.overflow = "hidden";
        menuMobileicon.style.position= "fixed";

        menuMobileicon.classList.add('menu-open');
    }
};

function menuShowFilter() {
    let button = document.querySelector('.showfiltrar');
    let arrow = document.querySelector('.iconarrow');
    let filtro = document.querySelector('.full2');


    if (button.classList.contains('opened')) {
        button.classList.remove('opened');
        filtro.style.display = "block";
        button.style.border = "1px solid #000000";
        document.querySelector('.iconarrow').style  = "max-width: 11px; margin-left: 5px; transform: rotate(180deg);"
        
    } else {
        button.classList.add('opened');
        filtro.style.display = "none";
        button.style.border = "1px solid #c2c2c2";
        document.querySelector('.iconarrow').style  = "max-width: 11px; margin-left: 5px; transform: rotate(0deg);"
    }
};

document.getElementById('numero').addEventListener('input', function (e) {
    let input = e.target.value;
    input = input.replace(/\D/g, ''); // Remove todos os caracteres não numéricos

    if (input.length <= 10) {
        input = input.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else {
        input = input.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    }

    e.target.value = input;
});

