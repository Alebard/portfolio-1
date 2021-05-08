$(document).ready(() => {


    new WOW().init();


    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        slideToClickedSlide: true,
        loop: true,
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        width: 200,
        breakpoints: {
            580: {
                slidesPerView: 3,
                width: 422,
                pagination: {
                    type: 'bullets',
                }
            },
            768: {
                slidesPerView: 3,
                width: 495,
                pagination: {
                    type: 'bullets',
                },
            },
            1023: {
                slidesPerView: 3,
                width: 701,
                pagination: {
                    type: 'bullets',
                },
            },

            1230: {
                slidesPerView: 3,
                width: 828,
                pagination: {
                    type: 'bullets',
                },
            }
        }
    });

    $('#discount-btn').click(() => {
        $('#discount-popup').css('display', 'flex');
        $('body').addClass('overflow-hidden');
    });


    $('#main .signup-btn').click(() => {
        $('#signup-popup').css('display', 'flex');
        $('body').addClass('overflow-hidden');
    });

    $('#masters .signup-btn').click((e) => {
        $('#signup-popup').css('display', 'flex');
        $('body').addClass('overflow-hidden');
        let masterName = $(e.target).siblings('.info-title').text().trim();
        $('#master option:contains('+ masterName +')').prop('selected', true);
        $('#master').selectmenu("refresh");
    });

    $('#discount-popup-close, #discount-popup').click((e) => {
        if (e.target.id === 'discount-popup' || e.target.id === 'discount-popup-close-img') {
            $('#discount-popup').hide();
            $('body').removeClass('overflow-hidden');

        }
    });

    $('#signup-popup-close, #signup-popup').click((e) => {
        if (e.target.id === 'signup-popup' || e.target.id === 'signup-popup-close-img') {
            $('#signup-popup').hide();
            $('body').removeClass('overflow-hidden');

        }
    });


    $('#datepicker').datepicker();
    (function (factory) {
        if (typeof define === "function" && define.amd) {

            // AMD. Register as an anonymous module.
            define(["../widgets/datepicker"], factory);
        } else {

            // Browser globals
            factory(jQuery.datepicker);
        }
    }(function (datepicker) {
        datepicker.regional.ru = {
            closeText: "Закрыть",
            prevText: "&#x3C;Пред",
            nextText: "След&#x3E;",
            currentText: "Сегодня",
            monthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
                "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],
            monthNamesShort: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн",
                "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            dayNames: ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"],
            dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
            dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
            weekHeader: "Нед",
            dateFormat: "dd.mm.yy",
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ""
        };
        datepicker.setDefaults(datepicker.regional.ru);
        return datepicker.regional.ru;
    }));

    $('#signup-dutton').click(() => {
        let name = $('#name');
        let service = $('#service');
        let datepicker = $('#datepicker');
        let tel = $('#tel');
        let master = $('#master');
        let times = $('#times');
        let inputs = $('input');
        let hasError = false;
        inputs.removeClass('input-red');
        $('.input-error').hide();
        for (var i = 0; i < inputs.length; i++) {
            var inputsElement = $($(inputs)[i]);
            if (inputsElement.val() === '') {
                inputsElement.siblings('.input-error').show();
                inputsElement.addClass('input-red');
                hasError = true;
            }
        }

        let select = $('select');
        for (var i = 0; i < select.length; i++) {
            var selectElemet = $($(select)[i]);
            selectElemet.siblings('.ui-button').removeClass('input-red');
            if (selectElemet.val() === null) {
                console.log(1);
                selectElemet.siblings('.input-error').show();
                selectElemet.siblings('.ui-button').addClass('input-red');
            }
        }

        if (!hasError) {
            //     $.ajax({
            //         type: 'post',
            //         url: 'mail.php',
            //         data: 'name=' + name.val() + '&service=' + service.val() + '&datepicker=' + datepicker.val() + '&tel=' + tel.val() + '&master=' + master.val() + '&times=' + times.val(),
            //         success: () => {
            //             $('#signup-block').hide();
            //             $('#signup-sent').show();
            //         },
            //         error: () => {
            //             $('#signup-popup').hide();
            //             alert('Ошибка сервера. Свяжитесь пожалуйста по номеру телефона');
            //             $('body').removeClass('overflow-hidden');
            //         }
            //     });
            // console.log(name.val() + service.val() + datepicker.val() + tel.val() +  master.val() + times.val());
            $('#signup-block').hide();
            $('#signup-sent').show();

        }
    })


    $(function () {
        $("#service").selectmenu({
            appendTo: ".input",
        });
        $("#master").selectmenu({
            appendTo: ".input"
        });
        $("#times").selectmenu({
            appendTo: ".input"
        });
    });



    $('.burger').click(() => {
        $('.burger span').toggleClass('active');
        $('#menu').toggleClass('flex');
        $('body').toggleClass('overflow-hidden');
    });

    $('#menu *').click(() =>{
        $('#menu').removeClass('flex');
        $('body').removeClass('overflow-hidden');
        $('.burger span').toggleClass('active');

    })

})


