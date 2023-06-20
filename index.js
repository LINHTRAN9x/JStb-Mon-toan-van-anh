function caculateTotal(){
var toanScore = parseFloat(document.getElementById("toan").value);
var vanScore = parseFloat(document.getElementById("van").value);
var anhScore = parseFloat(document.getElementById("anh").value);

var total=toanScore+vanScore+anhScore;
var result="";

if (total>=10){
    result="Ban da do truong A";
}else if(total>=5){
    result="ban da do truong B";
}else{
    result="ban da truot !";
}

document.getElementById("result").innerHTML="Ket qua "+ result;
}