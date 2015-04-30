
var $box = $('.box');

//var box = document.querySelectorAll('.box')[0]; //클래스가 box인 객체의 
								//태그를 담는 배열의 [0]을 반환 
var x = 10;



$(document).ready(function(endNum){
	return Math.floor(Math.random() * endNum) + 1;

});

	var x = 0;
	var speed = 5;

$box.click(function(){
	console.log("클릭!");
	$box.animate({
		top:100,
		left:200
	}, 5000);




	
/*
	var value = x + speed;
	$box.css("left", $box.offset().left += value);
	x=value;
	speed += 10;
	console.log($box.offset().left);
*/


});



/*
function randomNumber(endNum) //매개 변수 ()에 지정된 숫자 또는 표현식의 내림값을 반환.
//내림 값은 지정된 숫자나 표현식보다 작거나 같은 가장 가까운 정수
{
  return Math.floor(Math.random() * endNum) + 1;
}
*/


/*

function moveBox() //박스를 움직이는 함수
{

  var value = x + 5;

  box.style.left = value + 'px';

  x = value;
}
*/
/*

function startMove()
{
  //console.log('start')
  window.setInterval(moveBox, 100); //지정된 시간 후 특정 스크립트 코드가 포함된
  								//문자열을 반복하여 호출하는 메소드. 숫자는 0.001 단위이다
}


box.addEventListener('click', startMove); //클릭시 startMove 를 실행시킴 
*/