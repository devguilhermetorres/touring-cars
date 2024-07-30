function validarRegister(){
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