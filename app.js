document.addEventListener("keydown",function(e){
    var audio = document.querySelector(`audio[key-code="${e.keyCode}"]`);
    if(!audio)
    {
        return;
    }
    audio.currentTime = 0;
    audio.play();
    var div = document.querySelector(`div[key-code="${e.keyCode}"]`);
    div.classList.add("playing");

})

function endfunction(e){
    if(e.propertyName!== 'transform')return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener("transitionend",endfunction);
});