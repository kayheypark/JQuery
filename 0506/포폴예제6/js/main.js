/* main.js */

$(document).ready(function(){

    $("article").mouseover(function(){

        var vid = $(this).find("video").get(0); // -첫번째 동영상 참조
        vid.currentTime=0; // 동영상의 재생위치를 처음(0)으로 설정
        vid.play(); // 동영상을 재생. , 일시정지: .pause(); , 불러오기: .load();

        // $(this).stop().animate({"width":"35%"},1000,"linear");
        // $(this).children("video").stop().animate({"opacity":"1"} , 1000, "linear");
        $(this).addClass("on");

    });

    $("article").mouseout(function(){
        // $(this).stop().animate({"width":"12%"},1000,"linear");
        // $(this).children("video").stop().animate({"opacity":"0"} , 1000, "linear");
        $(this).removeClass("on");
        
    });

}); //독레디닫기
