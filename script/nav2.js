// 1. 서브숨기기 <ul class="sub">*3
// 2. gnb 마우스를 올리면 <ul class="gnb"><li>*3
// 3. sub 3개가 모두 출력 <ul class="sub">*3
// 4. gnb 마우스를 나가면
// 5. sub 3개 모두 숨기기
// 6. gnb 모든 메뉴에 마우스 올리면 sub 모두 출력하기
// 동적 절차 체크 후 HTML 태그 확인 후
// HTML DOM  필요 변수 생성
const sub = document.querySelectorAll('.sub')
const gnb = document.querySelectorAll('.gnb > li')
console.log(sub,gnb)
// 1. 서브숨기기 style=display:none;
sub[0].style.display = 'none';
sub[1].style.display = 'none';
sub[2].style.display = 'none';
// 2. gnb 마우스를 올리면
gnb[0].addEventListener('mouseover',function(){
    console.log('test') //확인용 test로 위에 적용한 마우스 올렸을때 test 콘솔에 나오는지 확인하기!
    // 3. sub 3개가 모두 출력
    sub[0].style.display = 'block';
    sub[1].style.display = 'block';
    sub[2].style.display = 'block';
})
// 4. gnb 마우스를 나가면
gnb[0].addEventListener('mouseout',function(){
    console.log('test')
    // 5. sub 3개 모두 숨기기
    sub[0].style.display = 'none';
    sub[1].style.display = 'none';
    sub[2].style.display = 'none';
})
// 6. gnb 모든 메뉴에 마우스 올리면 sub 모두 출력하기
gnb[1].addEventListener('mouseover',function(){
    console.log('test')
    sub[0].style.display = 'block';
    sub[1].style.display = 'block';
    sub[2].style.display = 'block';
})
gnb[1].addEventListener('mouseout',function(){
    console.log('test')
    sub[0].style.display = 'none';
    sub[1].style.display = 'none';
    sub[2].style.display = 'none';
})
gnb[2].addEventListener('mouseover',function(){
    console.log('test')
    sub[0].style.display = 'block';
    sub[1].style.display = 'block';
    sub[2].style.display = 'block';
})
gnb[2].addEventListener('mouseout',function(){
    console.log('test')
    sub[0].style.display = 'none';
    sub[1].style.display = 'none';
    sub[2].style.display = 'none';
})
// 방법2 (간편하게 한번에 몰아서)
/* subHide()
gnb[0].addEventListener('mouseover', subShow)
gnb[0].addEventListener('mouseout', subHide)
gnb[1].addEventListener('mouseover', subShow)
gnb[1].addEventListener('mouseout', subHide)
gnb[2].addEventListener('mouseover', subShow)
gnb[2].addEventListener('mouseout', subHide)
function subShow(){
    sub[0].style.display = 'block';
    sub[1].style.display = 'block';
    sub[2].style.display = 'block';
}
function subHide(){
    sub[0].style.display = 'none';
    sub[1].style.display = 'none';
    sub[2].style.display = 'none';
} */