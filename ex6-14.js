function change1(){
document.getElementById('bulb').src=
'./image/OIP.jpg';
var chan='./image/bulb-off.png';
//3秒後に元に戻す
setTimeout(function(){
document.getElementById('bulb').src=
chan;},3000);
}
