console.log("Welcome to Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let songitems = Array.from(document.getElementsByClassName('songitem'));

let songs = [
    {songName: "Tu Mileya", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Gul", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Samjho Na", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Dooriyan", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Choo Lo", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Lamhey", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
]

// audioElement.play();

// Handle Play/Pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-regular fa-circle-play');
        masterPlay.classList.add('fa-regular fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-regular fa-circle-pause');
        masterPlay.classList.add('fa-regular fa-circle-play');
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

songitems.forEach((element,i)=>{
    console.log(element,i);
    // element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].src = songs[i].coverPath;
})

const makeAllPlays = ()=>{
    e.target.classList.add('fa-regular fa-circle-pause');
    Array.from(document.getElementsByClassName('songItemPlay')).forEach(element=>{
        e.target.classList.remove('fa-regular fa-circle-pause');
        e.target.classList.add('fa-regular fa-circle-play');

    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach(element=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-regular fa-circle-play');
        e.target.classList.add('fa-regular fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-regular fa-circle-play');
        masterPlay.classList.add('fa-regular fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=5){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-regular fa-circle-play');
    masterPlay.classList.add('fa-regular fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-regular fa-circle-play');
    masterPlay.classList.add('fa-regular fa-circle-pause');
})