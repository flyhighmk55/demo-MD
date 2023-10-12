/*  header -----------------------------------------------------------------------------------------------------------------------------------------------*/

// window 사이즈 재 측정

var bw = $('body').width();
$(window).resize(function(){
    bw = $('body').width();
}); 








//[animation] #gnb - 마우스 오버/리브 : .sub 페이드 인/아웃
    
$('#gnb').on('mouseenter', function(){
    //서브 배경 슬라이드 다운
    $('header .sub-bg').addClass('on');
    
    //서브 매뉴 슬라이드 다운
    $('#gnb .sub').addClass('on');
    
    //해더 이외 암전 커버
    $('#gnb-cover').addClass('dark');
});
    
    
$('header').on('mouseleave', function(){
    //서브 배경 슬라이드 업
    $('header .sub-bg').removeClass('on');
    
    //서브 매뉴 슬라이드 업
    $('#gnb .sub').removeClass('on');
    
    //해더 이외 밝기 초기화
    $('#gnb-cover').removeClass('dark');
});





//[animation] #nav-all || #nav-all-popup .close - 클릭 : #nav-all-popup 페이드 인/아웃
    
$('#nav-all').on('click', function(){
    //팝업네비 보이기
    $('#nav-all-popup').fadeIn(500);
    //팝업 메뉴 활성화시 화면 스크롤 금지
    $('html').css({'overflow-y':'hidden'});
});
    
    
$('#nav-all-popup .close').on('click', function(){
    //팝업네비 숨기기
    $('#nav-all-popup').fadeOut(500);
    
    //화면 스크롤 초기화
    $('html').css({'overflow-y':'visible'});
});





























