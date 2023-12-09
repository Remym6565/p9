

// Parallaxe du titre du logo
window.addEventListener('DOMContentLoaded', function () {
jQuery(document).ready(function ($) {

    $(window).scroll(function () {
        var offset = $(window).scrollTop();
        $('.logo-container').css('transform', 'translateY(' + offset * 0.5 + 'px)');
    });

})
})