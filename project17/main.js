console.log("welcome to spotify");
//initialize the variables

let sonngIndex = 0;


const audioElement = new Audio("songs/1.mp3")



let masterPlay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar');
let gift = document.getElementById('gift');
let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "you are my love", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "tere dar par sanam", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName: "tere payar mai", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName: "mehbuba", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName: "jannat", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName: "sat sammander", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName: "safety dance", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName: "ishq", filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName: "ishq", filePath:"songs/9.mp3", coverPath:"covers/9.jpg"},
    {songName: "ishq", filePath:"songs/10.mp3", coverPath:"covers/10.jpg"},
   
]

songItem.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName('img')[0] = songs[i]. coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i]. songName;
})



//audioElement.play()

//handle ply/pause button

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
       
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gift.style.opacity = 1;
    }
    else{
         audioElement.pause();
       
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gift.style.opacity = 0;
    }
    


});

//listen to events
audioElement.addEventListener('timeupdate', ()=>{

    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
   
});

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
    
})

