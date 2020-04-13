function galleryLoad(){
    var myList = document.getElementById("galleryList"); // ul
    var theAtag = myList.getElementsByTagName("a"); // li a 4개
    var theGallery = document.getElementById("gallery"); // 큰 img
    var myImg = myList.getElementsByTagName("img"); // 작은img 4개

    for(var i=0;i<theAtag.length;i++){
        theAtag[i].onmouseover=theAtag[i].onfocus=function(){ // a
            //큰img 바꿔라
            theGallery.src=this.href;


            //작은img 바꿔라 out.jpg, over.jpg
            for(var k=0;k<myImg.length;k++){ //나머지 모두 흑백으로 세팅하기
                myImg[k].src = myImg[k].src.replace("over.jpg","out.jpg");
            }
            this.children[0].src=this.children[0].src.replace("out.jpg","over.jpg");

            clearTimeout(myAuto); // 작은이미지a에 마우스 올렸을 때 오토배너 정지
            addNum = this.children[0].alt.charAt(2)-1;// 0,1,2,3 순서

        }//onmouseover
        theAtag[i].onmouseout=theAtag[i].onblur=function(){
            setTimeout(autoBanner,1500); // 작은이미지a에 마우스 뗏을 때 오토배너 재시작

        }
    }//for문
    var addNum=0; //배너 번호
    function autoBanner(){
        addNum++;
        if(addNum>=theAtag.length){ //0,1,2,3
            addNum=0;
        }
        theAtag[addNum].onmouseover();
        myAuto= setTimeout(autoBanner,1500);
    }//오토배너
    var myAuto = setTimeout(autoBanner,1500); // 최초 autoBanner 함수 호출

    //큰그림a
    var aGallery = document.getElementById("aGallery");
    //큰그림a에 마우스 올렸을 때 오토배너 정지
    aGallery.onmouseover=aGallery.onfocus=function(){
        clearTimeout(myAuto);
    }
    //큰그림a에 마우스 뗏을 때 재시작
    aGallery.onmouseout=aGallery.onblur=function(){
        myAuto= setTimeout(autoBanner,1500);
    }
  

    



}

if(window.addEventListener){
    window.addEventListener("load",galleryLoad,false);
} else if(window.attachEvent) {
    window.attachEvent("onload",galleryLoad);
}