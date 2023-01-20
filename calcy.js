function clrsc(){
document.getElementById("result").value="";
}
function prt(value){
    document.getElementById("result").value+=value;
}
function cal(){
    var a=document.getElementById("result").value;
   var b=eval(a)
    document.getElementById("result").value=b;
}