/* sub 공통 -----------------------------------------------------------------------------------------------------------------------------------------------*/



//[style] #sub-nav .cate.n1 .sub-list 리스트 자동화
var nav_list_l = $('header #gnb > li').length;
    
for (var n1 = 0; n1 <= nav_list_l; n1++ ){
    var nav_list_main = $('header #gnb .main').eq(n1).clone();
    $('#sub-nav .n1 .sub-list li').eq(n1).append(nav_list_main); 
};




$('.sub1').parent().siblings('header').find('.main').eq(0).css({'color':'#0E81A0'});
$('.sub2').parent().siblings('header').find('.main').eq(1).css({'color':'#0E81A0'});
$('.sub3').parent().siblings('header').find('.main').eq(2).css({'color':'#0E81A0'});
$('.sub4').parent().siblings('header').find('.main').eq(3).css({'color':'#0E81A0'});



//[style] #sub-nav .cate.n2 .sub-list 리스트 자동화

function nav_sub_auto(i){
    var gnb_sub_l = $('header #gnb > li').eq(i).find('.sub > li').length;
    
    for (var gnb_i = 0; gnb_i < gnb_sub_l; gnb_i++ ){
        var gnb_sub_c = $('header #gnb > li').eq(i).find('.sub > li').eq(gnb_i).clone();
        $('#sub-nav .n2 .sub-list').append(gnb_sub_c);
    };
};
   /*--------------------------------------------------
       각 도큐먼트마다 해당하는 변수값을 입력하여 하단 스크립트에 삽입
       
       nav_sub_auto(변수값 변경); 
    --------------------------------------------------*/
    
    





//[animation] #sub-nav .list - 클릭 : .sub-list 업/다운, 화살표 스타일 변경
    
$('#sub-nav .cate').click(function(){
    //화살표 배경 변경
    $(this).toggleClass('on');
    $(this).siblings().removeClass('on');
    //화살표 방향 변경
    if ($(this).hasClass('on') == true ) {
        $(this).find('em').text('▲');
    } else {
        $(this).find('em').text('▼');
    };
    
    //서브 리스트 슬라이드 업/다운
    $(this).find('.sub-list').slideToggle();
    $(this).siblings().find('.sub-list').slideUp();
});    
    
    //서브네비 밖으로 벗어나면 모든 효과 초기화
    $('#sub-nav').on('mouseleave', function(){
        $(this).find('.cate').removeClass('on');
        $(this).find('.sub-list').slideUp();
        $(this).find('em').text('▼');
    });






//[style] #sub-com h2(서브 섹션 타이틀) 자동 바꿈
    
var cate2_auto = $('#sub-nav .n2 .list .now').text();
$('#sub-com h2').text(cate2_auto);










/* sub3-2 -----------------------------------------------------------------------------------------------------------------------------------------------*/


//[style] #sub-com.sub3-2 배경색 바꿈
    
$('#sub3-2').parents('section').css({'background-color':'#eefcff'});





//[style] #sub3-2 .cont1 활성화시 #sub-com 높이 조절 함수
    
function sub_com_pdb (){
    if ( $('#sub3-2 .cont.on > div:first-of-type').hasClass('select') === true ){
        $('#sub-com').addClass('pdb');
    } else {
        $('#sub-com').removeClass('pdb');
    }
};
        
sub_com_pdb();





//[style] #sub3-2 .cont4 활성화시 #sub3-2 배경 색상 변경 함수
    
function sub32_bgc (){
    if ( $('#sub3-2 .cont.on').hasClass('cont4') === true ){
        $('#sub3-2').addClass('bgc');
    } else {
        $('#sub3-2').removeClass('bgc');
    }
};
        
sub32_bgc();






//[style] #sub3-2 의 높이를 활성화 된 .cont의 높이에 따라 변경
    
//#sub3-2의 기본 높이를 cont1의 높이로 설정
$('#sub3-2').height($('#sub3-2 .cont.on').height());
    
// 활성화 된 .cont의 높이가 달라질 때마다 #sub3-2 의 높이를 변경
function sub32_h (){
    $('#sub3-2').height($('#sub3-2 .cont.on').height());
};
    
sub32_h();







//[animation & style] #sub3-2 .cont .list .item 클릭 이벤트
    
$('#sub3-2 .cont .list .item').click(function(){
    //item 클릭시 스타일 변경
    $(this).toggleClass('on');
    $('.item.on').append('<span class="chosen">[선택됨]</span>');
    
    //item 최대 3개로 선택 제한
    var count = $('#sub3-2 .cont .list .item.on').length;
    if ( count > 3 ){
        $(this).removeClass('on');
        alert('최대 3개까지 중복선택 가능합니다.');
    } 
});






// 이전버튼 클릭시 (.cont 중) 전 단계 보이기
    
$('#sub3-2 .cont .btn .prev').click(function(){
    //현재 페이지 인덱스 가져오기
    var i = $(this).parents('.cont').index();
    
    // 현재 아이템, 페이지 숨김
    $('#sub3-2 .cont').eq(i).find('.item').css({'display':'none'});
    $('#sub3-2 .cont').removeClass('on');
    
    //이전 단계 페이지 보이기
    $('#sub3-2 .cont').eq(i-1).addClass('on');
    
    //모든 셀렉트칸 비우기
    $('.select p span').empty();
    
    //이전 단계에 선택된 아이템 이름 가져와서 셀렉트 칸에 표시하기
    var on_strong = $('#sub3-2 .cont').eq(i-2).find('.list .item.hide strong').get();
    var on_strong_l = on_strong.length;
        
    for(var n = 0; n < on_strong_l; n++){
        $('.select p span').append('<em>' + on_strong[n].innerHTML + '</em>')
    };
    
    //이전 단계에 보관된(현재 셀렉트칸에 표시된) 아이템 버리기
    $('#sub3-2 .cont').eq(i-1).find('.list .item').removeClass('hide');
    
    //모든 아이템 선택표시 지우기
    $('#sub3-2 .cont .list .item').removeClass('on');
    
    //모든 [선택됨] 표시 지우기
    $('.item .chosen').remove();
    
    //sub3-2높이, 전체 타이틀 부분 높이 재측정
    sub32_h();
    sub_com_pdb();
});






// 다음버튼 클릭시 (.cont 중) 다음 단계 보이기 & item 선택하지 않고 다음버튼 클릭시 경고창 띄위기, 현재 페이지 유지
    
$('#sub3-2 .cont .btn .next').click(function(){
    //현재 페이지 인덱스 가져오기
    var i = $(this).parents('.cont').index();
    
    //현재 페이지에서 선택된 아이템 갯수 구하기
    var count = $(this).parents('.cont').find('.item.on').length;
    
    //현재 페이지에서 선택된 아이템들의 데이터레커멘드값 가져오기
    var item_i1 = $(this).parents('.cont').find('.item.on').eq(0).attr('data-reco');    
    var item_i2 = $(this).parents('.cont').find('.item.on').eq(1).attr('data-reco');    
    var item_i3 = $(this).parents('.cont').find('.item.on').eq(2).attr('data-reco');    

    
    
    if ( count > 0 ) { //아이템을 3개 이상 선택했을 경우
        if ( count == 1 && $('.item.on').hasClass('n9') === true ){
            // 마지막 아이템 한개만 선택했을 경우 마지막 페이지로 바로 연결
            $('#sub3-2 .cont').removeClass('on');
            $('#sub3-2 .cont:last-child').addClass('on');
        } else {
            // 선택한 아이템의 하위 아이템을 담은 다음 페이지로 연결
            $('#sub3-2 .cont').removeClass('on');
            $('#sub3-2 .cont').eq(i+1).addClass('on');
            
            $('#sub3-2 .cont').eq(i+1).find('.'+item_i1).css({'display':'flex', 'background-color':'#ddf7f7', 'border-color':'#ddf7f7'});
            $('#sub3-2 .cont').eq(i+1).find('.'+item_i2).css({'display':'flex', 'background-color':'#f6f6f6', 'border-color':'#f6f6f6', 'color':'#666666'});
            $('#sub3-2 .cont').eq(i+1).find('.'+item_i3).css({'display':'flex', 'background-color':'#eaf3ff', 'border-color':'#eaf3ff', 'color':'#5578a6'});
            
            //현재 셀렉트칸 비우기
            $('.select p span').empty();
            
            //다음 단계에 선택된 아이템 이름 가져와서 셀렉트 칸에 표시하기
            var on_strong = $('#sub3-2 .cont').eq(i).find('.list .item.on strong').get();
            var on_strong_l = on_strong.length;
                

            for(var n = 0; n < on_strong_l; n++){
                if ( i+1 == 3 ){ //.cont4에서는 셀렉트 항목을 타이틀 칸에 표시
                    $('.cont4 .cate .final').eq(n).append('<em>' + on_strong[n].innerHTML + '</em>');
                } else {
                    $('.cont .select p span').append('<em>' + on_strong[n].innerHTML + '</em>');
                }
            };
        }
        //현재 선택된 아이템 보관하기
        $('#sub3-2 .cont').eq(i).find('.list .item.on').addClass('hide');
        //현재 선택된 아이템 선택표시 지우기
        $('#sub3-2 .cont').eq(i).find('.list .item').removeClass('on');
        //모든 [선택됨] 표시 지우기
        $('.item .chosen').remove();
        
    } else { //아이템을 선택하지 않고 다음버튼을 눌렀을 경우 페이지 이동없이 경고창 띄우기
        if ( i > 0 ){
            //두번째, 세번째 단계에서
            alert('관심서비스를 선택해주세요.')
            $('#sub3-2 .cont').eq(i+1).removeClass('on');
            $('#sub3-2 .cont').eq(i).addClass('on');
        } else {
            //첫번째 단계에서
            alert('관심분야를 선택해주세요.')
            $('#sub3-2 .cont').eq(i+1).removeClass('on');
            $('#sub3-2 .cont').eq(i).addClass('on');
        }
    }
    
    //sub3-2높이, 전체 타이틀 부분 높이 재측정 & 배경색상 변경조건 확인
    sub32_h();
    sub_com_pdb();
    sub32_bgc();
});








//.cont4 .cate li 클릭
    
$('#sub3-2 .cont4 .cate li').click(function(){
    $(this).addClass('on').siblings().removeClass('on');
    
    var i = $(this).index(); $(this).parents('.cont4').find('.reco').eq(i).addClass('on').siblings().removeClass('on');
});



// 다시추천받기 클릭시 .cont1 보이기, 선택 관련 모든 클래스 초기화
    
$('#sub3-2 .cont4 .btn > div').click(function(){
    //.cont4 페이지 감추기, .cont1 페이지 보이기
    $(this).parents('.cont:last-child').removeClass('on');
    $('#sub3-2 .cont:first-child').addClass('on');
    
    //셀렉트 항목 비우기
    $('.cont .select p span').empty();
    $('.cont4 .cate .final').empty();
    $('#sub3-2 .cont4 .cate li').eq(0).addClass('on').siblings().removeClass('on');
    
    //아이템 선택 및 보관 기록 모두 지우기, 지난 아이템 숨기기
    $('#sub3-2 .cont:not(.cont1) .list .item').removeClass('on hide').css({'display':'none'});
    //sub3-2높이, 전체 타이틀 부분 높이 재측정 & 배경색상 변경조건 확인
    sub32_h();
    sub_com_pdb();
    sub32_bgc();
});





//













