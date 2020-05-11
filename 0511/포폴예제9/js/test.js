/* test.js */

$(document).ready(function () {
    $("html, body").stop().animate({"scrollTop":0}, 1500, "swing"); // 새로고침하면 scrollTop 0 

    $(window).scroll(function(){
        var scroll = $(this).scrollTop(); // 현재스크롤 위치값
        $("h1").text(scroll);
        
        //section>article:nth-of-type(1) {transform:  translateZ(0px);}
        //section>article:nth-of-type(2) {transform:  translateZ(-5000px);}
        //section>article:nth-of-type(3) {transform:  translateZ(-10000px);}
        //section>article:nth-of-type(4) {transform:  translateZ(-15000px);}
        //section>article:nth-of-type(5) {transform:  translateZ(-20000px);}
        $("section>article").eq(0).css({"transform":"translateZ("+(0+scroll)+"px)"});
        $("section>article").eq(1).css({"transform":"translateZ("+(-5000+scroll)+"px)"});
        $("section>article").eq(2).css({"transform":"translateZ("+(-10000+scroll)+"px)"});
        $("section>article").eq(3).css({"transform":"translateZ("+(-15000+scroll)+"px)"});
        $("section>article").eq(4).css({"transform":"translateZ("+(-20000+scroll)+"px)"});

        if(scroll>=0 && scroll<5000){ // box1
            $(".gnb li").removeClass("on");
            $(".gnb li").eq(0).addClass("on");
            $("article").removeClass("on");
            $("article").eq(0).addClass("on");
        }

        if(scroll>=5000 && scroll<10000){ // box2
            $(".gnb li").removeClass("on");
            $(".gnb li").eq(1).addClass("on");
            $("article").removeClass("on");
            $("article").eq(1).addClass("on");
        }

        if(scroll>=10000 && scroll<15000){ // box3
            $(".gnb li").removeClass("on");
            $(".gnb li").eq(2).addClass("on");
            $("article").removeClass("on");
            $("article").eq(2).addClass("on");
        }

        if(scroll>=15000 && scroll<20000){ // box4
            $(".gnb li").removeClass("on");
            $(".gnb li").eq(3).addClass("on");
            $("article").removeClass("on");
            $("article").eq(3).addClass("on");
        }

        if(scroll>=20000 && scroll<25000){ // box5
            $(".gnb li").removeClass("on");
            $(".gnb li").eq(4).addClass("on");
            $("article").removeClass("on");
            $("article").eq(4).addClass("on");
        }

    }); //스크롤움직였을때닫기








}); // 독레디닫기