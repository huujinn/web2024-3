function add71(){
var x= Number(document.getElementById('input21').value);//体重
var y= Number(document.getElementById('input24').value);//身長
//身長をメートルに変換
y= y/100;
//BMIの計算
var bmi= x/(y*y);
alert(bmi.toFixed(2));
if(bmi < 18.5)
{alert("低体重");} else if(bmi >= 18.5 && bmi < 25)
{alert("普通");} else {alert("肥満");}
}
