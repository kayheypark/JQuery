/* main.js */
$(document).ready(function () {

    var numAc = $("article").size(); //아티클의 갯수
    var widSec = numAc*200;

    $("section").width(widSec+600); //5600
    $("body").height(widSec); //5600

    $("html, body").animate({"scrollTop":widSec},2000,"linear");


    $("article h2").click(function(e){
        e.preventDefault();
        $("article").removeClass("on");
        $(this).parent().addClass("on");

        var src = $(this).children("a").attr("href");
        $(this).siblings("p").children("img").attr("src", src);

        //$(선택자).attr("속성");           속성값반환
        //$(선택자).attr("속성","값");       속성값바꾸기
    });
    
    /* close */
    $("article span").click(function(){
        $(this).parent().removeClass("on");
        
    });




/* scroll */
$(window).scroll(function(){
    var scroll = $(this).scrollTop();
    $("section").stop().animate({"left":-scroll},600,"linear");

});

/* gnb */
//li를 클릭했을 때
$(".gnb li").click(function(){
    var i = $(this).index(); // 0,1,2,3
    var posNavi = i*1000;
    $("html, body").scrollTop(posNavi);

    $(".gnb li").removeClass("on");
    $(this).addClass("on");
});

$("header").click(function(){
    $("article").removeClass("on");
    
});

}); //독 닫기