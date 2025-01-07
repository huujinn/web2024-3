function check(){
var year=documment.getElementById('year').value;
year=parseInt(year);
if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
{alert("閏年");} else {alert("平年");}
}
