var cantidad1 = document.getElementById("cant1");
var cantidad2 = document.getElementById("cant2");
var cantidad3 = document.getElementById("cant3");
var botoncal =document.getElementById("cal");

botoncal.addEventListener("click",FunctionRecibo);

function FunctionRecibo(){
    var can1 = parseInt(cantidad1.value);
    var can2 = parseInt(cantidad2.value);
    var can3 = parseInt(cantidad3.value);
    var newdoc =document.createElement("div");
    var t1=document.createTextNode(can1+"+"+can2+"+"+can3+"="+"$"+((can1*35)+(can2*36)+(can3*25)));
    newdoc.appendChild(t1);
    document.getElementsByTagName("h3")[0].appendChild(newdoc);

}

