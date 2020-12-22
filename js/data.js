// JavaScript Document
var t=0;
var s =Number(document.getElementById("res"));
var i=0;
var price=0;
function Formdata1(data){

if (data.date.value.length < 3)
{
alert('Заполните поле "Дата посещения"');
return false;}

if (data.time.value.length < 3)
{
alert('Заполните поле "Время посещения');
return false;} 
    
if (data.gos != null && data.gos.value.length < 0 )
{
alert('Заполните поле "Количество гостей"');
return false;}
}
    
function Formdatafooter(data){

if (data.name != null && data.name.value.length < 3 )
{
alert('Заполните поле "Ваше имя"');
return false;}

if(form.email != null && data.email.value.length == 0)
{
alert('поле "E-Mail" пустое');
return false;}

if(data.email != null && data.email.value.length < 6)
{
alert('слишком короткий "E-Mail"');
return false;}

if(!(/^\w+[-_\.]*\w+@\w+-?\w+\.[a-z]{2,4}$/.test(data.email.value)) )
{
alert("Введите правильный E-Mail адрес");
return false;}
if (data.SMS != null && data.SMS.value.length < 10 )
{
alert('Сообщение слишком короткое');
return false;}
}


function Formdata2(data){
    
if (data.name != null && data.name.value.length < 3 )
{
alert('Заполните поле "Имя гостя"');
return false;}
    
if(data.phone != null && data.phone.value.length == 0)
{
alert('поле "Контактный телефон" пустое');
return false;}
  
if(data.tel != null && data.tel.value.length < 5)
{
alert('поле "Контактный телефон" должно содержать минимум пять символов');
return false;}
  
if(!(/^[0-9-+()s]+z/.test(data.phone.value+"z")))
{
alert('"Контактный телефон" указан неверно');
return false;}


if(form.email != null && data.email.value.length == 0)
{
alert('поле "E-Mail" пустое');
return false;}

if(data.email != null && data.email.value.length < 6)
{
alert('слишком короткий "E-Mail"');
return false;}

if(!(/^\w+[-_\.]*\w+@\w+-?\w+\.[a-z]{2,4}$/.test(data.email.value)) )
{
alert("Введите правильный E-Mail адрес");
return false;}
    
if (data.SMS != null && data.SMS.value.length < 10 )
{
alert('Сообщение слишком короткое');
return false;}
}
    


function Oform(){
   var name = document.getElementById("name");
   var time = document.getElementById("time");
   var date = document.getElementById("date");
   var col = document.getElementById("ColGos");
   var tel = document.getElementById("tel");
   var em = document.getElementById("em");
   var poz = document.getElementById("poz");
   var oformlenie = document.getElementById("result");
   document.getElementById("result").value="Дата бранирования "+date.value+" \nВремя бранирования "+time.value+" \nСтол № "
       +t+" \nКолличество гостей "+col.value+" \nИмя гостя "+name.value+" \nНомер телефона "+tel.value
       +" \nПочта "+em.value+" \nВаши пожелания: "+poz.value;
    console.log("11111111111");

}





 function myFunction1() {
                var change = document.getElementById("res");
                var input = document.getElementById("ColGos");
                var k=0;
                if (k==0)
                {
                    document.getElementById("ColGos").value ="0";
                    change.innerHTML = "1000";
                    s=1000;
                    input.setAttribute("max",6);
                    t=1;
                    console.log(s);
                }
                else {
                    document.getElementById("ColGos").value="0";
                    change.innerHTML = "0";
                    s=0;
                    console.log(s);
                }
            }
 function myFunction2() {
                var change = document.getElementById("res");
                var input = document.getElementById("ColGos");
                var k=0;
                if (k==0)
                {
                    document.getElementById("ColGos").value ="0";
                    change.innerHTML = "2000";
                    s=2000;
                    input.setAttribute("max",4);
                    t=2
                    console.log(s);
                }
                else {
                    document.getElementById("ColGos").value="0";
                    change.innerHTML = "0";
                    s=0;
                    console.log(s);
                }
            }
 function myFunction3() {
                var change = document.getElementById("res");
                var input = document.getElementById("ColGos");
                var k =0;
                if (k==0)
                {
                    document.getElementById("ColGos").value ="0";
                    change.innerHTML = "3000";
                    s=3000;
                    input.setAttribute("max",2);
                    k++;
                    console.log(s);
                    t=3
                }
                else{
                    document.getElementById("ColGos").value="0";
                    change.innerHTML = "0";
                    s=0;
                    console.log(s);
                }
            }
function Price(){
    price=s+((Number(document.getElementById("ColGos").value))*300);
    document.getElementById("res").innerHTML=price;
    console.log(price);
}
setInterval("Price()",500);


