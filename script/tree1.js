// 부모 parentNode, parentElement 속성
const nav_a_all = document.querySelectorAll('nav a')
const nav_a = document.querySelector('nav a')
console.log(nav_a_all) //Node List 0 1 (배열로 a 2개 인식)
console.log(nav_a) //태그 상 먼저 시작대상기준 a (1개 인식)
//(객체.속성)
console.log(nav_a_all[0].parentNode) //[0]X ->undefined [0]O ->nav
console.log(nav_a_all[1].parentNode) //[1]X ->undefined [1]O ->nav
console.log(nav_a.parentNode) //nav
//(객체.속성.속성)
console.log(nav_a_all[0].parentNode.parentNode) //header
console.log(nav_a_all[1].parentNode.parentNode) //header
console.log(nav_a.parentNode.parentNode) //header
//객체.속성1.속성2(css).속성3 = 값'배경색(노랑)'
nav_a.parentNode.style.backgroundColor = 'yellow'; //nav(a의 부모)
nav_a_all[0].parentNode.parentNode.style.backgroundColor = '#f0c'; //header(a의 부모의부모)
nav_a.parentElement.style.border = '2px solid blue'; //nav(a의 부모)
//nav_a.parentNode.parentNode.style = 'width:700px height:100px' //header(a의 부모의부모)
//style에 바로 값을 쓰면 기존 값은 지워진다. 
nav_a.parentNode.parentNode.style.width ='700px'; //header
nav_a.parentNode.parentNode.style.height ='100px'; //header
nav_a.parentNode.parentNode.style.backgroundImage ='url(./images/logo.jpg)'; //header
//애니메이션
nav_a_all[1].addEventListener('mouseover',function(){
    console.log('test')
    nav_a_all[1].parentNode.style.borderbottom = '5px solid red' //nav
})
nav_a_all[1].addEventListener('mouseout',function(){
    console.log('test')
    nav_a_all[1].parentNode.style.border = '0' //'none' //nav
})
//자식, 자손잡기 childNodes, children
const header = document.querySelector('header')
const headerChild = header.childNodes; //공백까지
const headerChild2 = header.children; //요소만
console.log(header)
console.log(headerChild) //결과호출 = 공백까지
console.log(headerChild[1]) //h1
console.log(headerChild[3]) //nav
headerChild[1].style.backgroundColor = 'yellow'
console.log(headerChild2) //결과호출 = 요소만
console.log(headerChild2[0])
console.log(headerChild2[1])
console.log(headerChild2[0].children) //a
console.log(headerChild2[0].children[0]) //a
//(위) 추가 속성 및 메소드를 연결해서 다양한 기능 수행
//headerChild2[0].children[0].style (O)
//headerChild2[0].children[0].addEventListener (O)
console.log(headerChild2[0].innerHTML)
console.log(headerChild2[0].innerText)
//(위) 단순 읽기, 변경 단순 수행
//headerChild2[0].innerHTML.style (X)
//headerChild2[0].innerHTML.addEventListener (X)