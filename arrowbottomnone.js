$(function(){   
    var chevrondown = $('id_chevron_down');   
    $(window).scroll(function () { 
        if ($(this).scrollTop() > 600) { 
            chevrondown.removeClass("chevron-down");
            chevrondown.addClass("arrowbottomnone");
        }
    
        else {

        }
    });  
});