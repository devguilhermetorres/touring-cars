function validarCadastrar(){
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
    
    }