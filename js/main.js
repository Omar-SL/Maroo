/* global $ */
$(function(){
        "use strict";
        $('.info li').click(function(){
            $(this).addClass('selected').siblings('li').removeClass('selected');
            $('.content div').hide();
        $('.'+$(this).data('class')).fadeIn();
    });
});
