$(function(){   
    var arrowbottom = $('#arrowbottomcentral');   
    $(window).scroll(function () { 
        if ($(this).scrollTop() > 250) { 
            arrowbottom.removeClass("arrowbottomcentralizadora");
            arrowbottom.addClass("arrowbottomnone");
        }
    
        else {

        }
    });  
});