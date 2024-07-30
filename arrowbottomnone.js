$(function(){   
    var chevrondown = $('#id-chevron-down');   
    $(window).scroll(function () { 
        if ($(this).scrollTop() > 600) { 
            chevrondown.removeClass("chevron-down");
            chevrondown.addClass("arrowbottomnone");
        }
    
        else {

        }
    });  
});