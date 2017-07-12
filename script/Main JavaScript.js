/*  <!-- Javascript Project --- Ahmed Adel Mohamed --- 3 months Program--> */

window.onload = function () {

        $("div,p").css('visibility','hidden');

    $('.start-game').on('click', function (e) {
        player = document.getElementById("name_text").value;
        getName(e);
       
    });



    $(".img1").on("click", function () {
        sessionStorage.setItem('key', player);
        location.href = "Game%20Page.html?1";
    });

    $(".img2").on("click", function () {
        sessionStorage.setItem('key', player);
        location.href = "Game%20Page.html?2";
    });

    $(".img3").on("click", function () {
        sessionStorage.setItem('key', player);
        location.href = "Game%20Page.html?3";
    });

    $(".img4").on("click", function () {
        sessionStorage.setItem('key', player);
        location.href = "Game%20Page.html?4";
    });

}

function getName(e) {
    e.preventDefault();
    if (player!== '') {
        $("form").fadeOut("slow");
        $("div,p").css('visibility', 'visible');
    }
    else {
        $('input[type=text]').addClass('shake');
        setTimeout(function () { $('input[type=text]').removeClass('shake') }, 500);
        return false;
    }
    
    

}
