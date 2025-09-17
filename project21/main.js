document.onkeydown = function(e){
    console.log("the key code is: " , e.keyCode);
    if(e.keyCode == 38){
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(()=>{
            dino.classList.remove('animateDino');

        }, 300);
       
    }
    if(e.keyCode == 39){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + 'px';
    }
    if(e.keyCode == 37){
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112 )+ 'px';
    }

}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));



    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
    
    offsetX = Math.abs(dx-ox);
    offsetY = Math.abs(dy-oy);

    if(offsetX<93 && offsetY<52){
        gameover.style.visibility = 'visible';
        obstacle.classList.remove('obstacleANI');
    }
}, 100);
