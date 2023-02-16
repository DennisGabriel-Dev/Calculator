function insert(num){
    var numero = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = numero + num;
}
function clean(){
    document.getElementById('result').innerHTML = "";
}
function back(){
    var result = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = result.substring(0, result.length -1);
}
function calculate(){
    var result = document.getElementById('result').innerHTML;
    if(result){
        document.getElementById('result').innerHTML = eval(result);
    }else{
        document.getElementById('result').innerHTML = "empty field"
    }
}

document.addEventListener('keypress', function(e){
    if(e.which == 13){
       calculate();
       e.preventDefault();
    }
 }, false);
 document.addEventListener('keydown', function(e){
    if(e.which == 8){
       back();
    }
 }, false);

 var pressed = document.getElementById('result');

function keyPressed(event){
    event = event || window.event;
    var key = evt.keyCode || evt.which;
    return String.fromCharCode(key); 
}

document.onkeypress = function(event) {
    var str = keyPressed(event);
    pressed.innerHTML += str;
};