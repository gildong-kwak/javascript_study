//배열
let yoil = [] //빈 배열
console.log(yoil)
yoil = ['월','화','수','목','금','토','일'];
console.log(yoil)
console.log(`오늘은 ${yoil[0]}요일입니다.`) ///오늘은 월요일입니다.
//배열 작성법 2.
let yoil_v2 = new Array(2); //빈 배열
console.log(yoil_v2)
console.log(yoil_v2[1]) //undefined
yoil_v2[1] = '월'
console.log(yoil_v2)
yoil_v2[0] = '일'
console.log(yoil_v2[0]+'요일')
console.log(yoil_v2)
console.log('----------------------------')
//배열 기초 문제
//1. 원하는 색상을 6개 배열로 각각 저장하고 그 중 좋아하는 색상 2개 골라서 콘솔에 출력하세요.
//콘솔결과 예) 좋아하는 색상은 o,o 입니다.
const color = ['빨강','주황','노랑','파랑','보라','핑크','하늘']
console.log(`좋아하는 색상은 ${color[5]}, ${color[6]} 입니다.`)
//좋아하는 과일을 5개 배열로 저장하고 모두 역순으로 출력해보세요.
const fruit = ['토마토','수박','복숭아','자두','체리']
console.log(`${fruit[4]}, ${fruit[3]}, ${fruit[2]}, ${fruit[1]}, ${fruit[0]}`) //방법1
let fruitlist = new Array ('토마토','수박','복숭아','자두','체리')
console.log(fruitlist)
//역순 출력
let result = `${fruitlist[4]}, ${fruitlist[3]},${fruitlist[2]},${fruitlist[1]},${fruitlist[0]}`
console.log(result) //방법2
//날씨카드(맑음, 흐림, 비, 눈)을 배열로 생성하고 이번주 기상예보를 출력하세요.
//결과 예)
//월요일 : 맑음
//화요일 : 눈
//수요일 : 비
//목요일 : 흐림
//금요일 : 맑음
//토요일 : 맑음
//일요일 : 눈
//yoil = ['월','화','수','목','금','토','일']; 앞에 요일 씀
const weather = ['맑음','흐림','비','눈']
console.log(`${yoil[0]}요일 : ${weather[0]}`)
console.log(`${yoil[1]}요일 : ${weather[3]}`)
console.log(`${yoil[2]}요일 : ${weather[2]}`)
console.log(`${yoil[3]}요일 : ${weather[1]}`)
console.log(`${yoil[4]}요일 : ${weather[0]}`)
console.log(`${yoil[5]}요일 : ${weather[0]}`)
console.log(`${yoil[6]}요일 : ${weather[3]}`)
console.log('----------------------------')
let cgv = new Array(8)
console.log(cgv)
console.log(cgv.length)
cgv[0] = 'A1'
console.log(cgv)
cgv[1] = 'C3'
console.log(cgv)
cgv.push('F5')
console.log(cgv)
//배열 속성 활용
let megabox = [] //빈 배열
console.log(megabox)
console.log(megabox.length) //빈 개체 갯수는 0
megabox.push('A2')
console.log(megabox)
megabox.push('B1') //맨뒤로
console.log(megabox)
megabox.unshift('A1') //맨앞으로
console.log(megabox)
megabox.pop() //맨뒤값제거
console.log(megabox)
megabox.shift() //맨앞값제거
console.log(megabox)
megabox.push('F5','F6')
console.log(megabox)
console.log('----------------------------')
let lottecinema = []
console.log(lottecinema)
console.log(lottecinema.length)
lottecinema.unshift('A1','A2','A3')
console.log(lottecinema)
lottecinema.push('B1','B2','B3')
console.log(lottecinema)
lottecinema.shift()
console.log(lottecinema)
lottecinema.pop()
console.log(lottecinema)
let price = 10000
//ex) 좌석 배열에 3개의 좌석 정보가 들어있을 때
//예매하신 좌석은 총 3좌석이며 성인 1인당 10000원 기준으로 총 결제 금액은 30000원 입니다.
//결제 하기 클릭 후 메세지 출력
//방법1
//console.log(`예매하신 좌석은 총 ${lottecinema.length}좌석이며 성인 1인당 ${price}원 기준으로 총 결제 금액은 ${price*lottecinema.length}원 입니다.`)
//방법2
let total = `예매하신 좌석은 총 ${lottecinema.length}좌석이며 성인 1인당 ${price}원 기준으로 총 결제 금액은 ${price*lottecinema.length}원 입니다.`
console.log(total)
//뒤로가기 인원 수정
lottecinema.pop()
//결제 하기 클릭 후 메세지 출력
//방법1
//console.log(`예매하신 좌석은 총 ${lottecinema.length}좌석이며 성인 1인당 ${price}원 기준으로 총 결제 금액은 ${price*lottecinema.length}원 입니다.`)
//방법2
total = `예매하신 좌석은 총 ${lottecinema.length}좌석이며 성인 1인당 ${price}원 기준으로 총 결제 금액은 ${price*lottecinema.length}원 입니다.`
console.log(total)
//뒤로가기 인원 수정
lottecinema.push('C1','C2')
//결제 하기 클릭 후 메세지 출력
//방법1
//console.log(`예매하신 좌석은 총 ${lottecinema.length}좌석이며 성인 1인당 ${price}원 기준으로 총 결제 금액은 ${price*lottecinema.length}원 입니다.`)
//방법2
total = `예매하신 좌석은 총 ${lottecinema.length}좌석이며 성인 1인당 ${price}원 기준으로 총 결제 금액은 ${price*lottecinema.length}원 입니다.`
console.log(total)
//함수로 간편하게 호출 할 수 있게 만들기
function movie(){
    total = `예매하신 좌석은 총 ${lottecinema.length}좌석이며 성인 1인당 ${price}원 기준으로 총 결제 금액은 ${price*lottecinema.length}원 입니다.`
console.log(total)
}
movie() //함수로 간편하게 호출