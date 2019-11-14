alert("Стандартный вид уравнения: \n aх²+bx+c=0");
var a = parseInt(prompt("Введите a",1));
var b = parseInt(prompt("Введите b", 1));
var c = parseInt(prompt("Введите c", 1));
alert(a+"х²+"+b+"x+"+c+"=0");
function Mat(a,b,c){
 return b*b - 4*a*c
}
var D = Mat(a,b,c);
function first(a,b,c){ var one = -b;
var two = 2*a;
return one / two 
}
var x = first(a,b,c);
function sec(a,b,c){ var one = -b;
var two = - Math.sqrt(D)
var three = one + two ;
var four = 2*a;
return three / four
}
var x1 = sec(a,b,c);
function thr(a,b,c){ var one = -b;
var two = Math.sqrt(D)
var three = one + two ;
var four = 2*a;
return three / four
}
var x2 = thr(a,b,c);
var result;
if (D < 0){alert("У данного уравнения нет корней")} else {if(D === 0){result = "x="+x;}else {result="x1="+x1+" x2="+x2;}}
if (D === 0 || D > 0){alert(result);};
var resultText = "<h2>"+"Ваш ответ:"+"<br>"+result+"</h2>";
var example = "<h2>"+"Стандартный вид уравнения:"+"<br>"+"aх²+bx+c=0"+"</h2>";
var yourExample ="<h2>"+"Ваше уравнение:"+"<br>"+a+"х²+"+b+"x+"+c+"=0"+"</h2>";
var divElement = document.createElement('div');
divElement.innerHTML = example + yourExample + resultText;
document.body.style.fontWeight = "bold";
document.body.append(divElement);