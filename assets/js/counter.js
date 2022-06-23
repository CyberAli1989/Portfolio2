$(function () {
    $('[data-id="about"]').click(function (e) {
        console.log(2);
        e.preventDefault();
        setTimeout(() => {
            var counter = 0;
        var a = 0;
        var b = 0;
        var c = 0;
        var d = 0;
        var i = setInterval(function () {
            $('.count1').html(a);
            $('.count2').html(b);
            $('.count3').html(c);
            $('.count4').html(d);

            // $('.box #counter h2').css('background-color', 'red');
            counter++;
            if (a == 5) {
                a = 5;
            } else {
                a++;
            }

            if (b == 10) {
                b = 10
            } else {
                b++
            }
            if (c == 8) {
                c = 8;
            } else {
                c++;

            }
            if (d == 10) {
                d = 10;
            } else {
                d++
            }

            if (counter == 11) {
                clearInterval(i);
            }
        }, 50);
        }, 2000);
    });

});