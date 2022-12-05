"use strict"

$(document).ready(function () {
    $(".preloader").css("display", "none");
});

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
// -------------------------------------------------------------------------------------------------------------------------------

$(document).ready(function () {

    let options = {
        threshold: [0.5]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animation');

    elements.each((i, el) => {
        observer.observe(el);
    });


    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
            }
        });
    }

    //-----------------------------------------------------------------------------------------------

    let optionsImg = {
        threshold: [0.1]
    };
    let observerImg = new IntersectionObserver(onEntryImg, optionsImg);
    let elementsImg = $('.lazy-img');

    elementsImg.each((i, el) => {
        observerImg.observe(el);
    });


    function onEntryImg(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.src = change.target.dataset.src;
            }
        });
    }
    //--------------------------------------------------------------------------------------------------------------

    let optionsStat = {
        threshold: [0.5]
    };
    let observerStat = new IntersectionObserver(onEntryStat, optionsStat);
    let elementsStat = $('.statAnimation');

    elementsStat.each((i, el) => {
        observerStat.observe(el);
    });


    function onEntryStat(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                if (!$('.statAnimation').hasClass("done")) {
                    $('.statAnimation').addClass("done");
                    $('.statAnimation').spincrement({
                        thousandSeparator: "",
                        duration: 3000
                    });
                }
            }
        });
    }

    //------------------------------------------------------------------------------------------------------------------------------
    $('.image-link').magnificPopup({
        type: 'image'
    });

    function showModal() {
        setTimeout(function () {
            $('#advert').modal('show');
        }, 20000);
    }
    showModal();

    //-------------------------------------------------------------------------------------------------------------------------------
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
    //----------------------------------------------------------------------------
    
    $("#inputTel").mask("+7 (999) 999-99-99");
    
    //-------------------------------
    
    new WOW().init();
    
    //------------------------------------------------------------------
    
    $('form').submit(function(event){
        event.preventDefault();
        $.ajax({
            type: "POST",
            url: "php/mail.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");
            alert("Успешно отправлено");
            $("form").trigger("reset");
        });
        return false;
    });
    
    
    
    
    
    
    
});
