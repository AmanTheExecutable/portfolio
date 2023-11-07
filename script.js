$(document).ready(function () {
    let menuIcon = $('#menu-icon');
    let navbar = $('.navbar');
    let sections = $('section');
    let navLinks = $('header nav a');
    let header = $('header');
    let footer = $('footer');

    menuIcon.on('click', function () {
        menuIcon.toggleClass('bx-x');
        navbar.toggleClass('active');
    });

    $(window).on('scroll', function () {
        sections.each(function () {
            let top = $(window).scrollTop();
            let offSet = $(this).offset().top - $(window).height() / 2 - 125;
            let height = $(this).outerHeight() + $(window).height();
            let id = $(this).attr('id');

            if (top >= offSet && top < offSet + height) {
                navLinks.removeClass('active');
                $('header nav a[href*=' + id + ']').addClass('active');
                $(this).addClass('show-animate');
            }
        });

        header.toggleClass('sticky', $(window).scrollTop() > 100);
        menuIcon.removeClass('bx-x');
        navbar.removeClass('active');

        // footer.toggleClass('show-animate', $(window).innerHeight() + $(window).scrollTop() >= $(document).height());
    });
});
