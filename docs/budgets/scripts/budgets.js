$(document).ready(function () {

function resize()
{
    var limit = 1500;
    var width = Math.floor($(window).width()/100)*100;
    var margin = (100 - ($(window).width() - width)) / -2;
    width += 200;
    margin = ($(window).width() - limit) / 2;
    /*
    if (limit < $(window).width()) {
        $("#hero").css({
            "width": limit + "px",
            "margin-left": "auto"
        });
    }
    */
    if ($(window).width() <= 320) {
        $("#hero").css({
            "width": 300 + "px",
            "margin-left": "auto"
        });
    }
    else {
        $("#hero").css({
            "width": limit + "px",
            "margin-left": margin + "px"
        });
    }
    hero_image();
}

function hero_image()
{
    var max = 1100;
    var min = 320 / 2 * 5;
    var width = $(window).width()

    if (width <= min) {
        var margin = (width - min) / 4;

        $("#hero_image").css({
            "width": min + "px",
            "margin-left": margin + "px"
        });
    }
    else if (width <= max) {
        $("#hero_image").css({
            "width": width + "px",
            "margin-left": "auto"
        });
    }
    else {
        $("#hero_image").css({
            "width": max + "px",
            "margin-left": "auto"
        });
    }
}

function animation()
{
    $("#hero").empty();
    $("#hero").fadeTo(0, 0.0, function() {});

    for (var i = 0; i < 45; i++)
    {
        var logo_index = Math.floor(Math.random()*7);
        var logo_angle = Math.floor(Math.random()*4);

        $("#hero").append('<img src="https://subkernel.github.io/www/budgets/images/logo_'+logo_index+'_'+logo_angle+'.png" width="100" height="100" />');
    };

    $("#hero").fadeTo( "slow" , 1.0, function() {});
    $('#hero img').animate({  borderSpacing: 360 }, {
        step: function(now,fx) {
          $(this).css('-webkit-transform','rotate('+now+'deg)'); 
          $(this).css('-moz-transform','rotate('+now+'deg)');
          $(this).css('transform','rotate('+now+'deg)');
        },
        duration:'slow'
    },'linear', function() {
    });
}

resize();
animation();

$("#hero").click(function() {
    animation();
});

window.onresize = resize;

if (1 < window.devicePixelRatio)
{
    var images = document.getElementsByTagName("img"), image, original_path, retina_path;
    for (i = 0; i < images.length; i++)
    {
        image = images[i];
        original_path = image.getAttribute('src');
        retina_path = original_path.replace(/\.\w+$/, function(match) { return "_2x" + match; });
        image.setAttribute('src', retina_path);
    }
}

})
