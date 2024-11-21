$(document).ready(function() {
    $('#mobile_btn').on('click', function (){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    
    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0

        if(scrollPosition <= 0){
            header.css('box-shadow', 'none');
        }
        else{
            header.css('box-shadow', '8px 8px 8px rgba(0,0,0,0.3');
        }


        sections.each(function(i) {
        const section = $(this);
        const sectionTop = section.offset().top - 96;
        const sectionBottom = sectionTop+ section.outerHeight();

         if (scrollPosition >= sectionTop && scrollPosition < sectionBottom){
            activeSectionIndex = i;
            return false;
        }

        })
        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');

    });


    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 5000,
        distance: '20%'
    });

    ScrollReveal().reveal('#dogs', {
        origin: 'left',
        duration: 3000,
        distance: '20%'
    });

    ScrollReveal().reveal('#dogs', {
        origin: 'left',
        duration: 3000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonials_content', {
        origin: 'right',
        duration: 4000,
        distance: '20%'
    });
    ScrollReveal().reveal('#testimonials_chef', {
        origin: 'left',
        duration: 4000,
        distance: '20%'
    });

    ScrollReveal().reveal('#equipe', {
        origin: 'left',
        duration: 4000,
        distance: '20%'
    });

    ScrollReveal().reveal('.footer', {
        origin: 'top',
        duration: 5500,
        distance: '20%'
    });



});
