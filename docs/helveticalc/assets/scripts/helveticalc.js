$(document).ready(function () {
    var array = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"];
    array.sort(function() {return 0.5 - Math.random()});
    /*
    for (i = 0; i < 30; i++)
    {
        $("#scroller").append("<li><img src='assets/images/calc_"+array[i]+".png' /></li>");
    }
    $("#scroller").simplyScroll();
    */
    /*
    $("#header").append("<img class='calc' src='assets/images/calc_01.png' />");
    $("#header").append("<img class='calc' src='assets/images/calc_02.png' />");
    */
    
    
    //var calcs = $('#header ul li img');
    var width = 0;
    var height = 0;
    
    function resize()
    {
        /*
        width = $(window).width();
        height = $(window).height();

        $("#header").css({
            "width": width + "px", 
            "height": height + "px",
        });
        $("#log").css({
            "width": width + "px", 
            "height": height + "px",
        });
        
        if (width < 767)
        {
            $("#hero").css({
                "padding-top": height + "px",
            });
        }
        */
    }
    /*
    resize();
    window.onresize = resize;
    
    for (i = 1; i < 31; i++)
    {
        if (i < 10) $("#header ul").append("<li ><img src='assets/images/calc_0"+i+".png' /></li>");
        else $("#header ul").append("<li><img src='assets/images/calc_"+i+".png' /></li>");
    }
*/
    function loop()
    {
        /*
        var top = $('#header ul').css('top').replace(/[^-\d\.]/g, '');
        if (top < -274)
        {
            $("#header ul").css({"top": "-10px"});
        }
        $("#header ul li:first").remove();
        
        if (30 < i) i = 0;
        i++;
        if (i < 10)
        {
            $("#header ul").append("<li ><img src='assets/images/calc_0"+i+".png' /></li>");
        }
        else
        {
            $("#header ul").append("<li><img src='assets/images/calc_"+i+".png' /></li>");
        }
        
        $("#header ul").animate({
            "top": "-=100px",
        }, 1000, 'linear', function(){
            loop();
        });
        */
        /*
        if (30 < i)
        {
            i = 0;
            //$("#header ul").css({"top": "0px"});
        }

        $("#header ul li:first").remove();
        
        i++;
        if (i < 10)
        {
            $("#header ul").append("<li ><img src='assets/images/calc_0"+i+".png' /></li>");
        }
        else
        {
            $("#header ul").append("<li><img src='assets/images/calc_"+i+".png' /></li>");
        }
        
        $("#header ul").animate({
            "top": "-=100px",
        }, 1000, 'linear', function(){
            loop();
        });
        */
    }
    loop();

    /*
    for (i = 0; i < calcs.length; i++)
    {
        $(calcs[i]).css({
            "left": 20 + (200 * i) + "px", "top": "20px"
        });
    }
    
    function loop()
    {
        for (i = 0; i < calcs.length; i++)
        {
            var calc = calcs[i];
            if ($(calc).css('left').replace(/[^-\d\.]/g, '') < -160.0)
            {
                $(calc).css({
                    "left": width + "px"
                });
            }
            
            $(calc).animate({
                "left": "-=100px",
            }, 1000, 'linear', function(){
                loop();
            });
        }
    }
    loop();
*/

if (1 < window.devicePixelRatio && 568 < $(window).width())
{
    var images = document.getElementsByTagName("img"), image, original_path, retina_path;
    for (i = 0; i < images.length; i++)
    {
        image = images[i];
        original_path = image.getAttribute('src');
        retina_path = original_path.replace(/\.\w+$/, function(match) { return "@2x" + match; });
        image.setAttribute('src', retina_path);
    }
}

})
