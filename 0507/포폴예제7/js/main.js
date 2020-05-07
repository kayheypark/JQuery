$(document).ready(function () {
    //로딩페이지
    function imagesProgress(){
        var $container = $('#progress'), // div
            $progressBar = $container.find('.progress-bar'), // span
            $progressText = $container.find('.progress-text'), // span

            imgLoad = imagesLoaded('body'),
            imgTotal = imgLoad.images.length, // body 전체 이미지 수를 저장

            imgLoaded = 0, // 이미지 로딩한 숫자
            current = 0, // text에 들어갈 숫자

            progressTimer = setInterval(updateProgress, 1000 / 60);

            imgLoad.on('progress', function(){
                imgLoaded++;
            });

            function updateProgress(){
                var target = (imgLoaded / imgTotal) * 100;
                    current += (target - current) * 0.1;

                    $progressBar.css({width:current+'%'});
                    $progressText.text(Math.floor(current)+'%');

                    if(current >= 100){
                        clearInterval(progressTimer);
                        $container.addClass('progress-complete');

                        $progressBar.add($progressText).delay(500).animate({opacity:0},250,function(){
                            $container.animate({top:'-100%'}, 1000);

                        });
                    }
                    if(current>99.9){
                        current = 100;
                    }

            }; //updateProgress()
    }//imagesProgress()
    imagesProgress();

    //imgm생성 0~199
    
    var imgs='';
    for(var i=0;i<=199;i++){
        imgs += "<img src='img/pic"+i+".jpg' alt='이미지' />"
        
    }
    $("section").html(imgs);

    //mousemove
    $("body").mousemove(function (e) { 
        var posX = e.pageX; //현재 마우스 X좌표값
        var wid = $(window).width(); //현재 윈도우 가로값
        var percent = Math.floor((posX/wid)*200); // 마우스 움직임에 따라 몇번째 이미지

        $("section>img").hide();
        $("section>img").eq(percent).show();
        
    });
});