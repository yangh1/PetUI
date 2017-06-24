$(document).ready(function () {

    var numitems = $(".products-list li").length;
    $(".products-list").css("column-count", Math.ceil(numitems / 3));

    var more_products = false;

    $('#more_products').click(function (e) {

        if (more_products) {
            $(".glyphicon.glyphicon-menu-up")[0].setAttribute("class", "glyphicon glyphicon-menu-down");
            more_products = false;
            $('.products').css({
                'height': '550px'
            })
        } else {
            $(".glyphicon.glyphicon-menu-down")[0].setAttribute("class", "glyphicon glyphicon-menu-up");
            more_products = true;
            e.stopPropagation();
            $('.products').css({
                'height': 'auto'
            })
        }

    });

});
