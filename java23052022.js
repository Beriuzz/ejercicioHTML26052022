var textonumero = document.getElementById("txtnumero");
var botoncalcular =document.getElementById("btncal");
var botonotratabla = document.getElementById("btnrei");

botoncalcular.addEventListener("click",funcionTable);
botonotratabla.addEventListener("click",funcionReiniciar);

function funcionTable(){
    var numero = parseInt(textonumero.value);
    for(var i=1;i<10;i++){
        var newdoc =document.createElement("div");
        var t= document.createTextNode(numero +"X"+i+"="+(numero*i));
        newdoc.appendChild(t);
        document.getElementsByTagName("h3")[0].appendChild(newdoc);
    }
}
function funcionReiniciar(){
    location.reload(true);
}
