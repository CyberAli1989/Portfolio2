$(function () {
    $('nav ul li').click(function (e) {
        e.preventDefault();
        $('nav ul li').removeClass('active');
        $(this).addClass('active');
    });


    $('#about').hide()
    $('#resume').hide()
    $('#works').hide()
    $('#blog').hide()
    $('#contact').hide()
    $('[data-id="about"]').click(function (e) {
        e.preventDefault();
        $('#home').removeClass('enter').addClass('exit');
        $('#about').removeClass('enter').addClass('exit');
        $('#resume').removeClass('enter').addClass('exit');
        $('#blog').removeClass('enter').addClass('exit');
        $('#contact').removeClass('enter').addClass('exit');
        $('#works').removeClass('enter').addClass('exit');
        $('nav').addClass('smallNav').removeClass('bigNav')
        setTimeout(() => {
            $('#about').show().addClass('enter');
            $('#home').hide()
            $('#resume').hide()
            $('#works').hide()
            $('#blog').hide()
            $('#contact').hide()

        }, 1500);
    });

    $('[data-id="home"]').click(function (e) {
        e.preventDefault();
        $('#about').removeClass('enter').addClass('exit');
        $('#about').removeClass('enter').addClass('exit');
        $('#resume').removeClass('enter').addClass('exit');
        $('#blog').removeClass('enter').addClass('exit');
        $('#contact').removeClass('enter').addClass('exit');
        $('#works').removeClass('enter').addClass('exit');
        $('nav').addClass('bigNav').removeClass('smallNav');
        setTimeout(() => {
            $('#home').show().addClass('enter');
            $('#about').hide();
            $('#resume').hide()
            $('#works').hide()
            $('#blog').hide()
            $('#contact').hide()
        }, 1500);
    });

    $('[data-id="resume"]').click(function (e) {
        e.preventDefault();
        $('#about').removeClass('enter').addClass('exit');
        $('#home').removeClass('enter').addClass('exit');
        $('#blog').removeClass('enter').addClass('exit');
        $('#contact').removeClass('enter').addClass('exit');
        $('#works').removeClass('enter').addClass('exit');
        $('nav').addClass('smallNav').removeClass('bigNav');
        setTimeout(() => {
            $('#resume').show().addClass('enter');
            $('#about').hide()
            $('#works').hide()
            $('#home').hide()
            $('#blog').hide()
            $('#contact').hide()

        }, 1500);
    });
    $('[data-id="works"]').click(function (e) {
        e.preventDefault();
        $('#about').removeClass('enter').addClass('exit');
        $('#home').removeClass('enter').addClass('exit');
        $('#resume').removeClass('enter').addClass('exit');
        $('#blog').removeClass('enter').addClass('exit');
        $('#contact').removeClass('enter').addClass('exit');
        $('nav').addClass('smallNav').removeClass('bigNav')
        setTimeout(() => {
            $('#works').show().addClass('enter');
            $('#about').hide()
            $('#resume').hide()
            $('#home').hide()
            $('#blog').hide()
            $('#contact').hide()

        }, 1500);
    });

    $('[data-id="blog"]').click(function (e) {
        e.preventDefault();
        $('#about').removeClass('enter').addClass('exit');
        $('#home').removeClass('enter').addClass('exit');
        $('#resume').removeClass('enter').addClass('exit');
        $('#works').removeClass('enter').addClass('exit');
        $('#contact').removeClass('enter').addClass('exit');
        $('nav').addClass('smallNav').removeClass('bigNav')
        setTimeout(() => {
            $('#blog').show().addClass('enter');
            $('#about').hide()
            $('#resume').hide()
            $('#home').hide()
            $('#works').hide()
            $('#contact').hide()

        }, 1500);
    });

    $('[data-id="contact"]').click(function (e) {
        e.preventDefault();
        $('#about').removeClass('enter').addClass('exit');
        $('#home').removeClass('enter').addClass('exit');
        $('#resume').removeClass('enter').addClass('exit');
        $('#works').removeClass('enter').addClass('exit');
        $('#blog').removeClass('enter').addClass('exit');
        $('nav').addClass('bigNav').removeClass('smallNav')
        setTimeout(() => {
            $('#contact').show().addClass('enter');
            $('#about').hide()
            $('#resume').hide()
            $('#home').hide()
            $('#works').hide()
            $('#blog').hide()

        }, 1500);
    });
});