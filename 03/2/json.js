
// 박스오피스  데이터 가져오기
var btnSearch = document.getElementById('sch_btn');

btnSearch.addEventListener('click', sch);

function sch(event){
var textbox = document.getElementById('textbox').value;

var listTemplate = document.getElementById('listTemplate').innerHTML;
var boxOfficeAPI = "https://apis.daum.net/search/web?apikey=009ef25c80d4bdf6be2b36055697361b&q="+textbox+"&output=json&pageno=1";
// console.log(listTemplate);

getJSON(boxOfficeAPI , function(kakaoAPIdata){

  console.log(kakaoAPIdata.channel.item)

  // 템플릿 가져와서  해석하기
  var html = tmpl(listTemplate, {list: kakaoAPIdata.channel.item});


  // 해석된 html을 $wrap 넣어주기
  document.getElementById('wrap').innerHTML += html;


});

};