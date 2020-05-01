/* mian.js */
$(document).ready(function () {
    //햄버거버튼 클릭 이벤트
    $("a.btnMenu").click(function(){
        $(this).fadeOut();
        $("#wrap>header").addClass("on");
        $("#content").addClass("on");
    });
        

    $(".gnb li").click(function(){
       $("a.btnMenu").fadeIn();
       $("#wrap>header").removeClass("on");
       $("#content").removeClass("on");

       var i = $(this).index();
       //.index() 클릭한 요소가 몇번째 요소인지 알아내는 것
       console.log(i);

       $("#content>section").removeClass("on");
       $("#content>section").eq(i).addClass("on");
    });
    //주메뉴 클릭 이벤트
});