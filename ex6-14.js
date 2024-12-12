function change1(){
var imgElement=document.getElementById('bulb');
var bulboffSrc='./image/bulb-off.png';
var bulbonSrc='./image/OIP.jpg';
//新しい画像に変更
imgElement.src=bulbonSrc; 
//3秒後に元に戻す
setTimeout(function(){
imgElement.src=bulboffSrc;
},3000);
