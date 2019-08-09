// 이거는 사용하지 않을 예정.

const container = document.querySelector('.counter');
const buttonDiv = document.querySelector('.buttons');
const secInput = document.getElementById('seconds');

var seconds;
var remseconds;
var minuts;
var toCount = false;

function toSubmit() {
    display('start');
    display('reset');
    remove('seconds');
    remove('ok');
    seconds = Number(secInput.value);
    counting();
}
function display(e) {
    document.getElementById(e).style.display = 'block';
}
function remove(e) {
    document.getElementById(e).style.display = 'none';
}
function check(stat){
    toCount =  stat.value;
    if(stat.id == 'start'){
        display('stop');
        remove('start');
        display('reset');
    }
    else if(stat.id =='stop'){
        display('continue');
        remove('stop');
        display('reset');
    }
    else{
        display('stop');
        remove('continue');
        display('reset');
    }
}
function toReset(){
    location.href="{% url './../../templates/timer.html' %}";
}
function count(){
    if (seconds > 0) {
        if (toCount == true) {
            seconds--;
            remseconds =seconds % 60;
            minuts = Math.floor(seconds / 60);
            if(minuts < 10){
                minuts = '0'+ minuts;
            }
            if(remseconds < 10){
                remseconds = '0'+ remseconds;
            }
            container.innerHTML = minuts + ':' + remseconds;
        }
    }
    else {
        container.innerHTML = 'TIME OUT!';
        buttonDiv.style.opacity = '1';
        remove('stop');
        display('reset');
    }
}
function counting(){
    remseconds =seconds % 60;
    minuts = Math.floor(seconds / 60);
    if(minuts < 10){
        minuts = '0'+ minuts;
    }
    if(remseconds < 10){
        remseconds = '0'+ remseconds;
    }
    container.innerHTML = minuts + ':' + remseconds;
    setInterval(count, 1000);

}