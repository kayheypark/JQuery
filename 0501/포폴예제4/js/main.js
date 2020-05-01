/* main.js */
$(document).ready(function () {

    $("html,body").stop().animate({"scrollTop":0},2000,"swing");




    var ht = $(window).height();
    $("section").height(ht);

    $(window).resize(function(){
        var ht = $(window).height();
        $("section").height(ht);
    });

    $("section").mousemove(function(e){
        var posX = e.pageX;      // 마우스 커서의 x축 좌표값
        var posY = e.pageY;     // 마우스 커서의 Y축 좌표값

        //+반대방향, -같은방향
        //.obj11 { right: 20px; bottom: 20px;}
        $(".obj11").css({"right":20-(posX/30),"bottom":20-(posY/30)});
        $(".obj12").css({"right":20+(posX/30),"bottom":20+(posY/30)});
        $(".obj13").css({"top":20-(posX/30),"bottom":20-(posY/30)});

        $(".obj21").css({"right":20-(posX/15),"bottom":20-(posY/30)});
        $(".obj22").css({"right":20+(posX/30),"bottom":20+(posY/15)});

        $(".obj31").css({"right":20-(posX/30),"bottom":20-(posY/30)});
        $(".obj32").css({"right":20+(posX/30),"bottom":20+(posY/30)});
        $(".obj33").css({"right":20-(posX/30),"bottom":20-(posY/10)});

        $(".obj41").css({"right":20-(posX/30),"bottom":20-(posY/30)});
        $(".obj42").css({"right":20+(posX/30),"bottom":20+(posY/10)});
    });

    $(".gnb li").click(function(){
        var i = $(this).index(); //0,1,2,3
        var ht = $(window).height();
        var nowTop = ht*i;
        $("html,body").stop().animate({"scrollTop":nowTop},1400);
    });

    $(window).scroll(function(){
        var ht = $(window).height();
        var scroll = $(window).scrollTop(); //현재 스크롤탑 값
        console.log(scroll);

        /*
        if(scroll>=ht*0 && scroll<ht*1){ // section0
            $(".gnb li").removeClass("on");
            $(".gnb li").eq(0).addClass("on");

        }

        if(scroll>=ht*1 && scroll<ht*2){ // section1
            $(".gnb li").removeClass("on");
            $(".gnb li").eq(1).addClass("on");
        }

        if(scroll>=ht*2 && scroll<ht*3){ // section2
            $(".gnb li").removeClass("on");
            $(".gnb li").eq(2).addClass("on");
        }

        if(scroll>=ht*3 && scroll<ht*4){ // section3
            $(".gnb li").removeClass("on");
            $(".gnb li").eq(3).addClass("on");
        }

        위 코드를 아래로 단축할 수 있다.
        */

        
        for(var k=0;k<=3;k++){
            if(scroll>=ht*k && scroll<ht*(k+1)){
                $(".gnb li").removeClass("on");
                $(".gnb li").eq(k).addClass("on");
            }
        }


    });//scroll

    //mousewheel
    $("section").mousewheel(function(event, delta){
        if(delta>0){
            //마우스 휠을 올렸을 때, 양수값
            var prev = $(this).prev().offset().top;
            $("html,body").stop().animate({"scrollTop":prev},1400);
            
        } else if(delta<0){
            // 마우스 휠 내렸을때, 음수값
            var next = $(this).next().offset().top;
            $("html,body").stop().animate({"scrollTop":next},1400);

        }
    });










});//독레디닫기