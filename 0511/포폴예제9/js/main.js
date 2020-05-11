/* main.js */
$(document).ready(function () {
    $("html, body").stop().animate({"scrollTop":0}, 1500, "swing"); // 새로고침하면 scrollTop 0
    
    //윈도우에서 스크롤을 움직일 때
    $(window).scroll(function(){
        var scroll = $(this).scrollTop();//현재 스크롤 위치값


        //스크롤 값 만큼 아티클이 움직여라
        for(var i=0;i<=4;i++){
            $("section>article").eq(i).css({"transform":"translateZ("+(-(i*5000)+scroll)+"px)"});
        }

        // $("section>article").eq(0).css({"transform":"translateZ("+(0+scroll)+"px)"});
        // $("section>article").eq(1).css({"transform":"translateZ("+(-5000+scroll)+"px)"});
        // $("section>article").eq(2).css({"transform":"translateZ("+(-10000+scroll)+"px)"});
        // $("section>article").eq(3).css({"transform":"translateZ("+(-15000+scroll)+"px)"});
        // $("section>article").eq(4).css({"transform":"translateZ("+(-20000+scroll)+"px)"});
        //.on이 추가되라

        for(var i=0;i<=4;i++){
            if(scroll>=(i*5000) && scroll<((i+1)*5000)){
            $(".snb li").removeClass("on");
            $(".snb li").eq(i).addClass("on");
            $("article").removeClass("on");
            $("article").eq(i).addClass("on");
            }


        }

        // if(scroll>=0 && scroll<5000){ // box1
        //     $(".snb li").removeClass("on");
        //     $(".snb li").eq(0).addClass("on");
        //     $("article").removeClass("on");
        //     $("article").eq(0).addClass("on");
        // }

        // if(scroll>=5000 && scroll<10000){ // box2
        //     $(".snb li").removeClass("on");
        //     $(".snb li").eq(1).addClass("on");
        //     $("article").removeClass("on");
        //     $("article").eq(1).addClass("on");
        // }

        // if(scroll>=10000 && scroll<15000){ // box3
        //     $(".snb li").removeClass("on");
        //     $(".snb li").eq(2).addClass("on");
        //     $("article").removeClass("on");
        //     $("article").eq(2).addClass("on");
        // }

        // if(scroll>=15000 && scroll<20000){ // box4
        //     $(".snb li").removeClass("on");
        //     $(".snb li").eq(3).addClass("on");
        //     $("article").removeClass("on");
        //     $("article").eq(3).addClass("on");
        // }

        // if(scroll>=20000 && scroll<25000){ // box5
        //     $(".snb li").removeClass("on");
        //     $(".snb li").eq(4).addClass("on");
        //     $("article").removeClass("on");
        //     $("article").eq(4).addClass("on");
        // }

        
    });

    //마우스 움직일 때 이미지 움직여라
    $("body").mousemove(function(e){
        var posX = e.pageX/100;
        var posY = e.pageY/150;
        //.obj11{position:absolute;left:-270px;bottom:-100px;}
        $(".obj11").css({"left":-270-posX,"bottom":-100-posY});
        $(".obj12").css({"left":-270-posX,"bottom":-100-posY});
        $(".obj13").css({"left":-270-posX,"bottom":-100-posY});

        $(".obj21").css({"left":-270-posX,"bottom":-100-posY});
        $(".obj22").css({"left":-270-posX,"bottom":-100-posY});

        $(".obj31").css({"left":-270-posX,"bottom":-100-posY});
        $(".obj32").css({"left":-270-posX,"bottom":-100-posY});

        $(".obj41").css({"left":-270-posX,"bottom":-100-posY});
        $(".obj42").css({"left":-270-posX,"bottom":-100-posY});
        $(".obj43").css({"left":-270-posX,"bottom":-100-posY});
        
        $(".obj51").css({"left":-270-posX,"bottom":-100-posY});
        $(".obj52").css({"left":-270-posX,"bottom":-100-posY});
        $(".obj53").css({"left":-270-posX,"bottom":-100-posY});

    });

    //li를 클릭했을 때 몇번째 li 인지 알고 스크롤 탑값이 움직여라

    $(".snb li").click(function(){
        var a = $(this).index(); //0,1,2,3
        $("html,body").stop().animate({"scrollTop":5000*a},1500,"swing");
    });




}); //독닫기