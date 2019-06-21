$(document).ready(function() {


    //LOCATIONS ANIMATION 
    setTimeout(function showLocatations() {
        $(".ny").show();
    }, 300);

    setTimeout(function showLocatations() {
        $(".london").show();
    }, 500);

    setTimeout(function showLocatations() {
        $(".bg").show();
    }, 700);

    setTimeout(function showLocatations() {
        $(".tokyo").show();
    }, 900);

    setTimeout(function showLocatations() {
        $(".sydney").show();
    }, 1100);


    //SCROLL ANIMATION
    $("html, body").animate({ scrollTop: $(".map").width()/5 }, 500);


    //HOVER
    $(".loc").on("mouseover", function(){
        $(this).addClass("bigger");
    });


    //MOUSEOUT
    $(".loc").on("mouseout", function(){
        $(this).removeClass("bigger");

    });
    

    //CLICK
    $(".loc").on("click", function(){
        $(this).toggleClass("bigger2"); 
        $(this).removeClass("bigger");
        $(this).next().toggle();   

        //set time
        var d = new Date();
        var h = d.getUTCHours();
        var m = d.getUTCMinutes();

        if (m.toString().length>2) {
            m = "0" + m;
        }

        $(".ny").find(".time").html(h - 4 + ":" + m);
        $(".london").find(".time").html(h + 1 + ":" + m);
        $(".bg").find(".time").html(h + 2 + ":" + m);
        $(".tokyo").find(".time").html(h - 15 + ":" + m);
        $(".sydney").find(".time").html(h + 14 + ":" + m);

        if (h < 4) {
            $(".ny").find(".time").html(h + 20 + ":" + m);
        }

        if (h > 23) {
            $(".london").find(".time").html(h - 11 + ":" + m);
        }

        if (h > 22) {
            $(".bg").find(".time").html(h - 12 + ":" + m);
        }

        if (h > 10) {
            $(".tokyo").find(".time").html(h - 14 + ":" + m);
        }

        else if (h < 14) {
            $(".tokyo").find(".time").html( h + 10 + ":" + m);
        }

    });

   


});