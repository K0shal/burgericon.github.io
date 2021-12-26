const icon=document.getElementById('cix');
icon.addEventListener('click',(event)=>{
    document.getElementsByClassName('before')[0].classList.toggle('dis');
    document.getElementsByClassName('nav')[0].classList.toggle('chan');
document.getElementsByClassName('one')[0].classList.toggle('cross1');
document.getElementsByClassName('two')[0].classList.toggle('cross2');
document.getElementsByClassName('three')[0].classList.toggle('cross3');
});