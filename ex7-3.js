function add1(){
var x= Number(document.getElementById('input11').value);
var y= Number(document.getElementById('input12').value);
//身長を変換
x= x/100;
//BMIの計算
var bmi= y/(x*x);
alert(y/x*x);
}
