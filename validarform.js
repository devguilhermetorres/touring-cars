function validarCadastrar(){
    var button = document.getElementsByClassName("enviarform");
    var modeloVazio = modelo.value;
    var nomeVazio = nome.value; 
    var emailVazio = email.value;
    var numeroVazio = numero.value;
    
    if( !(modeloVazio == "") && !(nomeVazio == "") && !(emailVazio == "") &&     !(numeroVazio == "") ){
    document.cadastrar.idButton.disabled=false;
    button.style.background = "red";
}
    
    
    else{
        document.cadastrar.idButton.disabled=true;
        button.style.background = "black";
    }
    
    }