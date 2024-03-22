function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let acessarestoque2 = document.querySelector('#estoque2');
    const viewportWidth = window.innerWidth;
    var w = window, 
    d = document, 
    e = d.documentElement, 
    g = d.getElementsByTagName('body')[0], 
    x = w.innerWidth || e.clientWidth || g.clientWidth;



    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "imgs/menublack.png";
        acessarestoque2.classList.remove('acessarestoque3');
        acessarestoque2.classList.add('acessarestoque2');
        
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "imgs/closeblack.png";
        acessarestoque2.classList.remove('acessarestoque2');
        acessarestoque2.classList.add('acessarestoque3');
    }

    if (x > 1000) {
        acessarestoque2.style.display = "none"
    }

    else {
        
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