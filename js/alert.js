"use strict"

$(document).ready(function () {
    $(".preloader").css("display", "none");


    function calc() {
        var hsitetype = document.getElementById("hsitetype");
        var hadapt = document.getElementById("hadapt");
        var hsitedes = document.getElementById("hsitedes");
        var result = document.getElementById("result");

        var timecode = 0;
        timecode += parseInt(hsitetype.options[hsitetype.selectedIndex].getAttribute('value1'));
        timecode += parseInt(hadapt.options[hadapt.selectedIndex].getAttribute('value1'));
        timecode += parseInt(hsitedes.options[hsitedes.selectedIndex].getAttribute('value1'));
        if (timecode == 1) {
            timeresult.innerHTML = timecode + " день";
        };
        if (timecode >= 2 && timecode <= 4) {
            timeresult.innerHTML = timecode + " дня";
        };
        if (timecode >= 5) {
            timeresult.innerHTML = timecode + " дней";
        };

        var price = 0;
        price += parseInt(hsitetype.options[hsitetype.selectedIndex].value);
        price += parseInt(hadapt.options[hadapt.selectedIndex].value);
        price += parseInt(hsitedes.options[hsitedes.selectedIndex].value);

        result.innerHTML = price;
    };



    let options = {
        threshold: [0.5]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.stat-ani');
    elements.each((i, el) => {
        observer.observe(el);
    });



    function onEntry(statEntry) {
        statEntry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('stat-ani-show');

            }

        });
    };

    function numAni() {
        $('.b').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });

    };

    $.when(onEntry(statEntry)).done(function () {
        numAni();
    });

    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();

        $('.section').each((i, el) => {

            if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
                $('nav a').each((i, el) => {
                    if ($(el).hasClass('active')) {
                        $(el).removeClass('active');
                    }
                });

                $('nav li:eq(' + i + ')').find('a').addClass('active');
            }

        });

    });

});
