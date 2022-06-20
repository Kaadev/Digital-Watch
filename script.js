var saudar = document.getElementById('saudar')
var data = new Date()
var hora = data.getHours()

if(hora < 12){
saudar.innerHTML = 'Good Morning!'
} else if( hora <= 18){
saudar.innerHTML = 'Good afternoon!'
} else{
saudar.innerHTML = 'Good evening!'
}
       
function diaSemana(){
var relogio = document.getElementById('relogio') 
var data = new Date()
var diaSemana = data.getDay()

switch(diaSemana){ 
case 0:
relogio.innerHTML = 'Sunday'
break
case 1:
relogio.innerHTML = 'Monday'
break
case 2:
relogio.innerHTML = 'Tuesday'
break
case 3:
relogio.innerHTML = 'Wednesday'
break
case 4:
relogio.innerHTML = 'Thursday'
break
case 5:
relogio.innerHTML = 'Friday'
break
case 6:
relogio.innerHTML = 'Saturday'
break
} 
}

function relogio(){
var data = new Date()
var horas = data.getHours()
var minutos = data.getMinutes()
var segundos = data.getSeconds()

if(horas < 10){
horas = '0'+horas
} else if(minutos < 10){
minutos = '0'+minutos
} else if(segundos < 10){
segundos = '0'+segundos
}
document.querySelector('#relogio').innerHTML= horas+':'+minutos+':'+segundos
}
window.setInterval('relogio()', 1000) //Atualizado a cada 1000 milissegundos (1 segundo)