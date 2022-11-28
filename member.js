var input_id;
var input_pw;
var input_pwr;
var input_na;
var input_em;

var id;
var pw;
var pwr;
var em;
var na;

window.onload = function(){
    input_id = document.getElementById("id");
    input_pw = document.getElementById("pw");
    input_pwr = document.getElementById("pwr");
    input_na = document.getElementById("na");
    input_em = document.getElementById("em");
}


function check(){
     id = input_id.value;
     pw = input_pw.value;
     pwr = input_pwr.value;
     na = input_na.value;
     em = input_em.value;

    if(checkId() && checkPw() && checkPwr()&&checkna()&&checkEmail()){
        alert("회원가입 완료");
    } else {
        alert("회원가입 실패");
    }
}


function checkId(){
    if(id.length>=4 && id.length<=12){
        console.log("ok id");
        return true;
    } else {
        console.log("no id");
        return false;
    }
}
function checkPw(){
    if(pw.length>=4 && pw.length<=12){
        console.log("ok pw");
        return true;
    } else {
        console.log("no pw");
        return false;
    }
}
function checkPwr(){
    if(pwr.length>=4 && pwr.length<=12){
        console.log("ok pwre");
        return true;
    } else {
        console.log("no pwre");
        return false;
    }
}

function checkna(){
    if(na.length>=4 && na.length<=12){
        console.log("ok name");
        return true;
    } else {
        console.log("no name");
        return false;
    }
}
function checkEmail(){
    if(em.length>=4 && em.length<=12){
        console.log("ok em");
        return true;
    } else {
        console.log("no em");
        return false;
    }
}
