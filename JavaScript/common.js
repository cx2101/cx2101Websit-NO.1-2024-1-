function toggleSound(){
    var music = document.getElementById('haoyu');
    console.log(music);
    console.log(music.paused);
    if(music.paused){
        music.paused = false;
        music.play();
    }
}
setInterval('toggleSound(),1')