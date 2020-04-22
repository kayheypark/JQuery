/*main.js*/

var $devWidth;
var $limitsize=768

$(document).ready(function () {
    $devWidth = $("body").width();
    $(window).resize(function(){
        $devWidth = $("body").width();
        console.log($devWidth);
    });



    /* 전체메뉴 */
    $("div.allmenu_view").click(function(e){
        e.preventDefault(); // <a>요소의 기본값 동작으로 새 페이지가 열리는 것을 방지
        $(this).hide(10, function(){
            $("nav.allMenu_box").slideDown("slow");
        }); // 콜백함수
       
    });

    $("a.all_close").click(function(e){
        e.preventDefault(); // <a>요소의 기본값 동작으로 새 페이지가 열리는 것을 방지
        $("nav.allMenu_box").slideUp(1000, function(){
            $("div.allmenu_view").show(10);
        });

    });

    /*주메뉴*/
    $(".gnb>ul>li>a").bind("mouseover focus", function(){ //mouseout

        if($devWidth<$limitsize) return false; // 리턴펄스 : 함수 실행 정지
        $(".gnb>ul>li>ul").hide();
        $(this).next().show();

        $(".gnb>ul>li>a").css({"height":"29px","background":"none"});
        $(this).css({"height":"32px","background":"url(images/over_icon.gif) no-repeat 50% 100%"});

    });

    $(".gnb").bind("mouseleave blur", function(){ //mouseenter
        if($devWidth<$limitsize) return false; // 리턴펄스 : 함수 실행 정지
        $(".gnb>ul>li>ul").slideUp(50);
        $(".gnb>ul>li>a").css({"height":"29px","background":"none"});

    });

    /*탭메뉴*/
    $(".content2>section>h2>a").bind("click focus", function(e){ //a 클릭
        e.preventDefault();
        $(".content2>section>div").hide();
        $(this).parent().next().show();

        $(".content2>section>h2>a>img").each(function(){
            $(this).attr("src",$(this).attr("src").replace("_over.gif",".gif"));
        });
        $(this).children().attr("src",$(this).children().attr("src").replace(".gif","_over.gif"));

    });

    /*배너*/
    
    var $bnnNum=0; // 배너 1: bnnNum=0 , 배너2 :  bnnNum=1 
    var lastNum=$("div.book_frame>section").size()-1; // 마지막 인덱스 번호
    $("a.next").click(function(){
        if($bnnNum>=lastNum) $bnnNum=-1; /* 롤링 취소 : return flase; 멈춰라 */
        $bnnNum++
        //기차움직인다.
        $book_w=$("body>section").width();
        $("div.book_frame").stop().animate({"left":-$book_w*$bnnNum},300,"linear",function(){
            $(".book_roll img").attr("src","images/state_out.png");
            $(".book_roll img").eq($bnnNum).attr("src","images/state_over.png");
        });


    });
    $("a.prev").click(function(){
        if($bnnNum<=0) $bnnNum=lastNum+1; /* 롤링 취소 : return flase; 멈춰라 */
        $bnnNum--
        //기차움직인다.
        $book_w=$("body>section").width();
        $("div.book_frame").stop().animate({"left":-$book_w*$bnnNum},300,"linear",function(){
            $(".book_roll img").attr("src","images/state_out.png");
            $(".book_roll img").eq($bnnNum).attr("src","images/state_over.png");
        });

    });

//모바일 기기의 방향을 전환(가로/세로)할 때 화면의 너비가 달라지는 것에 대비해서 항상 바른 위치에 있도록 
//애니메이션 적용

$("body>section").bind("orientationchange",function(e){
        $book_w=$("body>section").width();
        $(".book_frame").stop().animate({left:-$book_w*$bnnNum},300);
    });

    //모바일에서
    $("body>section").bind("swipeleft",function(){
        $(".next").trigger("click");//trigger() 클릭한거처럼 강제로 이벤트 발생
    });

    $("body>section").bind("swiperight",function(){
        $(".prev").trigger("click");//trigger() 클릭한거처럼 강제로 이벤트 발생
    });

    //autoBanner
    function autoBanner(){
        if($bnnNum>=lastNum) $bnnNum=-1;
        $bnnNum++;

        $book_w=$("body>section").width();
        $("div.book_frame").stop().animate({"left":-$book_w*$bnnNum},300,"linear",function(){
            $(".book_roll img").attr("src","images/state_out.png");
            $(".book_roll img").eq($bnnNum).attr("src","images/state_over.png");
        });
       //next버튼 눌렀을때

    }

    var $autoBtn = setInterval(autoBanner,5000);

}); // 독레디 닫기