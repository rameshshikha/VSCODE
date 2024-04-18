document.getElementById('hh').innerHTML='hai good evening'
document.getElementById('tt').innerHTML='JS session is going on'


document.getElementById('cc').onclick=demo
function demo() {
    document.getElementById('cc').innerHTML='clicked'
    
}

document.getElementById('dd').onclick=demo2
function demo2() {
    document.getElementById('dt').innerHTML=Date();
}

document.getElementsByName('month').onclick=demo3
function demo3(){
document.getElementsByName('month').innerHTML=month();
}