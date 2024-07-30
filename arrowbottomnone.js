$(function(){   
    var chevrondown = $('#chevron_down');   
    $(window).scroll(function () { 
        if ($(this).scrollTop() > 500) { 
            chevrondown.removeClass("chevron-down");
            chevrondown.addClass("arrowbottomnone");
        }
    
        else {
            
        }
    });  
});