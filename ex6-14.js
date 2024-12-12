function change1(){
var imgElement= document.getElementById('bulb').src=
'./image/OIP.jpg';
var bulboffSrc='./image/bulb-off.png';
//3秒後に元に戻す
setTimeout(function(){
imgElement.src=bulboffSrc;
},3000);
