var board = document.getElementById("board");


function make_board(){

  var ck=1;
  var template = document.getElementById("board_color").innerHTML;
  var color;
  var str="";
  for(var i=0; i<4; i++){
    for(var j=0; j<4; j++){
      if(ck===1) color="black"
        else color="white"
        str += template.replace("{color}", color);
        ck = -ck;
    }
    //board.innerHtml += "<br>";
    ck = -ck;
  }
  board.innerHTML = str;

}



  var before_class;
  var before_color;

function Click_trans(event){  
 
  if(before_color === 1){document.getElementById("red").id = "non_red_black" ; }
  if(before_color === -1){document.getElementById("red").id = "non_red_white"; }

  if(event.target.className === "black"){
  before_color = 1;
  before_class = "black";
  event.target.id = "red";
 
  }

if(event.target.className === "white"){
  before_color = -1;
   before_class = "white";
  event.target.id = "red";

  }
  
}




make_board();

board.addEventListener('click', Click_trans);
