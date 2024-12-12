function add1(){
var x= Number(document.getElementById('input11').value);//体重
var y= Number(document.getElementById('input12').value);//身長
//身長を変換
y= y/100;
//BMIの計算
var bmi= x/(y*y);
alert(bmi.toFixed(2));
}
