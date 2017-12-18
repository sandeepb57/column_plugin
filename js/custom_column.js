
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

        this.click(function () {
            $(".columns_dropdown > ul").children().remove();
            var sub_menu = '';
            //console.log($(this).siblings().andSelf()[0].classList[1]);
            for (var i = 0; i < $(this).siblings().andSelf().length; i++) {
                sub_menu += '<li class="column_toggle ' + $(this).siblings().andSelf()[i].classList[1] + '">' + $(this).siblings().andSelf()[i].innerText + '</li>';
            }
            $(".columns_dropdown > ul").append(sub_menu);
            $(".columns_dropdown").css({"display": "block"});
            $(".columns_dropdown").css({ position: "absolute", top: event.pageY, left: event.pageX });

            $(".column_toggle").click(function () {
                if ($(".heading." + $(this).context.classList[1]).attr('style') != undefined && $(".heading." + $(this).context.classList[1]).attr('style') == 'display: none;' && $(".heading." + $(this).context.classList[1]).attr('style') != 'display: block;') {
                    $(".heading." + $(this).context.classList[1]).show();
                    $(".data." + $(this).context.classList[1]).show();
                } else {
                    $(".heading." + $(this).context.classList[1]).hide();
                    $(".data." + $(this).context.classList[1]).hide();
                }
            });
        });

        this.blur(function(){
            console.log('blur');
            $(".columns_dropdown").hide();
        });
    });
}(jQuery));