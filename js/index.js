
// #sec-group1 .banner ******* swiper

var swiper = new Swiper(".swiper-banner", {
    spaceBetween: 30,
    effect: "fade",
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination-bullets",
        clickable: true,
    },
});






// #sec-group3 --------------------------------------------------------------------
// #sec-group3 .exper - 슬라이드 번호, 자동슬라이드


// 슬라이드 전체 페이지 수
var exper_l = $('#sec-group3 .exper .frame .slide').length;
$('#sec-group3 .box1 .page .frac .total').text(exper_l);


//슬라이드 넘김
function exper_sliding (){
    //슬라이드 이동
    $('#sec-group3 .exper .frame').finish().animate({'left':-750},300);

    //슬라이드 활성화
    $('#sec-group3 .exper .frame .slide').eq(5).addClass('on').siblings().removeClass('on');
    
    //활성화된 슬라이드 번호
    var exper_i = $('#sec-group3 .exper .frame .slide').eq(5).attr('data-page');
    $('#sec-group3 .box1 .page .frac .now').text(exper_i);
    
    //활성화된 슬라이드 이미지 애니메이션
    $('#sec-group3 .exper .frame .slide').find('em').removeClass('on');
    $('#sec-group3 .exper .frame .slide').eq(5).find('em').addClass('on');
    
    //슬라이드 넘김, 슬라이드 원위치, 활성화된 슬라이드 말풍선 애니메이션
    $('#sec-group3 .exper .frame').animate({'left':-510},0, function(){
        $('#sec-group3 .exper .frame .slide').eq(0).appendTo('#sec-group3 .exper .frame');
        $('#sec-group3 .exper .frame .slide > span').removeClass('on');
        $('#sec-group3 .exper .frame .slide.on > span').addClass('on');
    });
};


//슬라이드 넘김 자동화, 호버-멈춤
var es_auto = setInterval('exper_sliding()', 3000);


$('#sec-group3 .exper .frame .slide').hover(
    function(){
        clearInterval(es_auto);
    }, function(){
        es_auto = setInterval('exper_sliding()', 3000);
    }
);




// .page .next 클릭 - 다음 슬라이드로 넘긴 후, 자동슬라이드
$('#sec-group3 .box1 .page .next').click(function(){
    clearInterval(es_auto);
    exper_sliding();
    es_auto = setInterval('exper_sliding()', 3000);
});





// .page .prev 클릭 - 이전 슬라이드로 넘긴 후, 자동슬라이드

$('#sec-group3 .box1 .page .prev').click(function(){
    clearInterval(es_auto);
    
    
    //슬라이드 프레임 왼쪽으로 990에 위치, 마지막 슬라이드를 첫번째로 이동
    $('#sec-group3 .exper .frame').animate({'left':-990},0);
    $('#sec-group3 .exper .frame .slide').eq(exper_l-1).prependTo('#sec-group3 .exper .frame');

    //이전 슬라이드 활성화
    $('#sec-group3 .exper .frame .slide').eq(4).addClass('on').siblings().removeClass('on');
    
    //활성화된 슬라이드 번호
    var exper_i = $('#sec-group3 .exper .frame .slide').eq(4).attr('data-page');
    $('#sec-group3 .box1 .page .frac .now').text(exper_i);
    
    //활성화된 슬라이드 이미지 애니메이션
    $('#sec-group3 .exper .frame .slide').find('em').removeClass('on');
    $('#sec-group3 .exper .frame .slide').eq(4).find('em').addClass('on');
    
    //이전 슬라이드로 넘김, 슬라이드 원위치, 활성화된 슬라이드 말풍선 애니메이션
    $('#sec-group3 .exper .frame').finish().animate({'left':-510},300, function(){
        $('#sec-group3 .exper .frame .slide > span').removeClass('on');
        $('#sec-group3 .exper .frame .slide.on > span').addClass('on');
    });
    
    //활성화된 슬라이드 딜레이
    $('#sec-group3 .exper .frame').delay(3000);
    
    es_auto = setInterval('exper_sliding()', 3000);
});






// #sec-group3 .reco ******** swiper

var mainSwiper = new Swiper(".swiper-reco", {
    slidesPerView: 'auto',

    spaceBetween: 0,
    loop: true,
    
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    
    pagination: {
        el: ".swiper-pagination-fraction",
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            if(current >= 9 ){
                current = current-8;
                return current + '/' + (total - 8); 
            } else {
                return current + '/' + (total - 8); 
            }
        }
    },
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';
    
    return direction;
}

var pagingSwiper = new Swiper(".swiper-reco", {
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: true,
    
    pagination: {
        el: ".swiper-pagination-progressbar",
        type: "progressbar",
    },
});

mainSwiper.controller.control = pagingSwiper;





// #sec-group4 ---------------------------------------------------------------------




// #sec-group4 .board - .menu li 클릭: 해당 .sub 메뉴 활성화, 밑줄, 글자색 변경

$('#sec-group4 .board .menu li').click(function(){
    var i = $(this).index();
    $('#sec-group4 .wrap .board .sub .cont').eq(i).addClass('on').siblings().removeClass('on');
    $(this).addClass('on').siblings().removeClass('on');
});




















