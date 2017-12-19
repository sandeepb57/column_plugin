
(function ($) {
    $.fn.column_grid = (function () {
        var number1 = 0;
        var number2 = 0;
        $('.heading').each(function () {
            number1 += 1;
            $(this).addClass("column_name-" + number1.toString());
        });
        $('.data').each(function () {

            if (number2 == $('.heading').length) {
                number2 = 0;
            }
            number2 += 1;
            $(this).addClass("column_name-" + number2.toString());
        });

        this.bind("contextmenu", function () {
            var sub_menu = '<div class="columns_dropdown"><ul>';
            for (var i = 0; i < $(this).siblings().andSelf().length; i++) {
                var check_mark = $(this).siblings().andSelf()[i].classList[1] == 'displayblock' ? 'displayblock' : 'displaynone';
                sub_menu += '<li class="column_toggle ' + $(this).siblings().andSelf()[i].classList[2] + '"><i class="fa fa-check ' + check_mark + '" aria-hidden="true"></i> ' + $(this).siblings().andSelf()[i].innerText + '</li>';
            }
            sub_menu += '</ul></div>';
            $(".container").append(sub_menu);
            $(".columns_dropdown").css({ position: "absolute", top: event.pageY, left: event.pageX });

            $(".column_toggle").click(function () {

                if ($(".heading." + $(this).context.classList[1]).hasClass("displayblock")) {
                    if ($(".heading.displaynone").length < 5) {
                        $(".heading." + $(this).context.classList[1]).removeClass("displayblock " + $(this).context.classList[1]).addClass("displaynone " + $(this).context.classList[1]);
                        $(".data." + $(this).context.classList[1]).removeClass("displayblock " + $(this).context.classList[1]).addClass("displaynone " + $(this).context.classList[1]);

                        $(".column_toggle." + $(this).context.classList[1] + " > .fa-check").removeClass("displayblock").addClass("displaynone");
                    } else {
                        $(".container").append('<div class="toast"><label>Must Have Minimum 5 Columns.</label></div>').fadeIn();
                        setTimeout(function () {
                            $(".toast").fadeOut().remove();
                        }, 3000);
                    }

                } else {

                    $(".heading." + $(this).context.classList[1]).removeClass("displaynone " + $(this).context.classList[1]).addClass("displayblock " + $(this).context.classList[1]);
                    $(".data." + $(this).context.classList[1]).removeClass("displaynone " + $(this).context.classList[1]).addClass("displayblock " + $(this).context.classList[1]);
                    $(".column_toggle." + $(this).context.classList[1] + " > .fa-check").removeClass("displaynone").addClass("displayblock");
                }
            });
            $(".container, .heading, .data").mouseenter(function () {
                $(".columns_dropdown").remove();
            });
            return false;
        });
    });
}(jQuery));