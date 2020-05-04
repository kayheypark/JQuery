/* main/js */

$(document).ready(function () {
    //현재 시간 표시

    var timer = setInterval(function(){
        var today = new Date(); //현재시간
        var nowHour = today.getHours(); //시
        var nowMin = today.getMinutes(); //분
        var nowSec = today.getSeconds(); //초

        //0~9 00~09
        if (nowSec<10){
            nowSec = "0" + nowSec;
        }
        if (nowMin<10){
            nowMin = "0" + nowMin;
        }
        if (nowHour<10){
            nowHour = "0" + nowHour;
        }
    
        $("figure p span").eq(0).text(nowHour);
        $("figure p span").eq(1).text(nowMin);
        $("figure p span").eq(2).text(nowSec);
    }, 1000);


    //6~11 아침이미지, 11~17 점심이미지, 17~20저녁이미지 한밤중
    var timer2 = setInterval(function(){
        var now = new Date(); // 현재시간객체
        var hr = now.getHours();
        if(hr>=6 && hr<11){ //morning
            $("#wrap").removeClass();
            $("#wrap").addClass("morning");
            
        }else if(hr>=11 && hr<17){ //afternoon
            $("#wrap").removeClass();
            $("#wrap").addClass("afternoon");
            
        }else if(hr>=17 && hr<20){ //evening
            $("#wrap").removeClass();
            $("#wrap").addClass("evening");
            
        }else{ //night
            $("#wrap").removeClass();
            $("#wrap").addClass("night");

        }

    }, 100000);

    //section li 클릭
    $("section li").click(function(){

        $("section li").removeClass("on");
        $(this).addClass("on");
    
        var className = $(this).children("a").text();

        $("#wrap").removeClass();
        $("#wrap").addClass(className); //morning, afternoon, evening, night



    });

}); //독레디닫기