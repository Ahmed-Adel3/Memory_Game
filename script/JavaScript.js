window.onload = function () {


    var arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

    arr = shuffle(arr);
	console.log(arr);
    arr = load_images(arr);
	console.log(arr);

    $('img').css({ "visibility": "hidden" });
  
    setTimeout('$("img").css({ "visibility": "Visible" })', 3000);

    name = sessionStorage.getItem('key');

    timerFun(1);
    get_image = document.getElementsByTagName("td");

    for (i = 0; i < arr.length; i++) {
        $(get_image[i]).css({
            'background-image': "url(" + arr[i] + ")",
            'background-size': "125px 125px",
            'background-repeat': "no-repeat"
        });
    }

    $("img").on("click", function ()
    {
        $(this).addClass("selected").css({ "visibility": "hidden" })

        if ($("img[class=selected][class!=match]").length == 2 && $(".selected").first().parent().css('background-image') == $(".selected").last().parent().css('background-image'))
        {
            $(".selected").first().addClass("match").removeClass("selected");
            $(".selected").last().addClass("match").removeClass("selected");
        }

        else if ($("img[class=selected][class!=match]").length == 2 && $(".selected").first().parent().css('background-image') != $(".selected").last().parent().css('background-image'))
        {
             setTimeout('$(".selected").removeClass("selected").css({ "visibility": "Visible" })' , 200)
        }
        check_win();
    })

    $(".again").on("click", function () {
        location.reload();
    });
    $(".menu").on("click", function () {
                                         location.href = "index.html";
                                        });
   
};

function shuffle(arr) {

    var new_arr = [];
    while (arr.length > 0) {
        random_num = Math.floor(Math.random() * (arr.length));
        removed_item = arr.splice(random_num, 1)[0];
        new_arr.push(removed_item);
    }
    return new_arr;
}

function load_images(arr) {
    var img = [];
    for (i = 0; i < arr.length; i++) {
        img[i] = arr[i];

        set = window.location.href.charAt(window.location.href.length - 1)

                if (set == 1)  {
                    img[i] = "img/Sweets/" + arr[i] + ".png";
                  $("body").css("background-image", "url(img/Sweets-bg.jpg)")
                               }

            else if (set == 2) {
                img[i] = "img/Minions/" + arr[i] + ".png";
                $("body").css("background-image", "url(img/minions-bg.png)")
                               }

            else if (set == 3) {
                img[i] = "img/Angrybirds/" + arr[i] + ".png";
                $("body").css("background-image", "url(img/Angrybirds-bg.jpg)")
                               }

            else               {
                img[i] = "img/Animals/" + arr[i] + ".png";
                $("body").css("background-image", "url(img/Animals-bg.jpg)")
                               };
    }
    return img;
}

function check_match() {

    if ($(".selected").first().parent().css('background-image') == undefined || $(".selected").last().parent().css('background-image'))
    { }

    else if ( $("img[class=selected][class!=match]").length == 2 && $(".selected").first().parent().css('background-image') == $(".selected").last().parent().css('background-image'))
    {

        $(".selected").first().addClass("match").removeClass("selected");
        $(".selected").last().addClass("match").removeClass("selected");
    }

}

function check_win()
{

        if ($("img[class!=selected][class=match]").length == 16) {
            clearInterval(intervalID);
            $('img').off('click');
            $('span').html(name);
            $("#win").removeClass('hidden').addClass('lightbox').hide().show(3000);
            $("#game").css('opacity', 0.5);
            
            clearTimeout(timeoutID);
        }
}

function timerFun(time) {
    minutes = (time - 1);
    seconds = 60;
    intervalID = setInterval(function () {
                                                seconds--;
                                                if (seconds == -1) {  seconds = 59; minutes--;  }    
                                                $(".timer").html(minutes + " &nbsp;" + seconds);
                                         }, 1000)

    timeoutID = setTimeout(function () {
                    clearInterval(intervalID);
                    $('img').off('click');
                    $('span').html(name);
                    $("#lost").removeClass('hidden').addClass('lightbox').hide().show(3000);
                    $("#game").css('opacity', 0.5);
    }, (60 * 1000 * time + 1000));
}

