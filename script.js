//form validate

function validateRegister(){
    var modelVazio = model.value;
    var nameVazio = name.value; 
    var emailVazio = email.value;
    var numberVazio = number.value;
    
    if( !(modelVazio == "") && !(nameVazio == "") && !(emailVazio == "") &&     !(numberVazio == "") ){
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

//menu mobile

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let menuMobileicon = document.querySelector('.mobile-menu-icon');
    var body = document.getElementById("body");


    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.add('menu-closed');
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "imgs/icons8-menu.svg";
        body.style.position = "relative";
        menuMobileicon.style.position= "relative";
        body.style.overflow = "scroll";
        
    } else {
        menuMobile.classList.add('open');
        menuMobile.classList.remove('menu-closed');
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

//number filter

document.getElementById('number').addEventListener('input', function (e) {
    let input = e.target.value;
    input = input.replace(/\D/g, ''); 

    if (input.length <= 10) {
        input = input.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
    } else {
        input = input.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
    }

    e.target.value = input;
});

//subscribe

function validateSubscribe(){
    var emailVazio = Email.value;
    
    if(!(emailVazio == "")){
    document.subscribe.idButton.disabled=false;
    document.subscribe.idButton.classList.remove("buttonsubscribe");
    document.subscribe.idButton.classList.add("buttonsubscribeactive");
}
    
    else{
        document.subscribe.idButton.disabled=true;
        document.subscribe.idButton.classList.remove("buttonsubscribeactive");
        document.subscribe.idButton.classList.add("buttonsubscribe");
    }
    
}

//filter stock

function category(c){
    var item = document.getElementById('item-'+c).innerHTML;
    document.getElementsByTagName('input')[0].value = item;
}

function category1(c){
    var item = document.getElementById('iitem-'+c).innerHTML;
    document.getElementsByTagName('input')[1].value = item;
}

function dropDown(p){
    var e = document.getElementsByClassName('dropDown')[0];
    var d = ['block', 'none'];
    e.style.display = d[p];   
}

function dropDown2(p){
    var e = document.getElementsByClassName('dropDown2')[0];
    var d = ['block', 'none'];
    e.style.display = d[p];   
}

function category2(c){
    var item2 = document.getElementById('item2-'+c).innerHTML;
    document.getElementsByTagName('input')[10].value = item2;
}

function category3(c){
    var item2 = document.getElementById('iitem2-'+c).innerHTML;
    document.getElementsByTagName('input')[11].value = item2;
}

function dropDown3(p){
    var e = document.getElementsByClassName('dropDown3')[0];
    var d = ['block', 'none'];
    e.style.display = d[p];   
}

function dropDown4(p){
    var e = document.getElementsByClassName('dropDown4')[0];
    var d = ['block', 'none'];
    e.style.display = d[p];   
}
