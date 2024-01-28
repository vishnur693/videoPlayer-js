let playBtn = document.getElementById('play-btn');
let video = document.querySelector("video");
let progressBar=document.querySelector('.progress-bar')
let progressRange=document.querySelector('.progress-range')

let isVideoPlaying = false;



//lets play or pause the video
function playOrPauseVideo(event) {
    console.log(event)
    if (!isVideoPlaying) {
        video.play();
        isVideoPlaying = true;
        playBtn.classList.replace('fa-play', 'fa-pause');
    } else {
        video.pause();
        isVideoPlaying = false;
        playBtn.classList.replace('fa-pause', 'fa-play');
    }
}

//progress bar
function progressVideo(event){
    // console.log(event.target.currentTime,event.target.duration)
    let width=(event.target.currentTime/event.target.duration*100)
    progressBar.style.cssText= `width:${width}%`
  
}
//update progressRange
function updateSeekbar(event){
   let currentPoint=event.offsetX
   let progressWidth=this.clientWidth
   let currentRange=currentPoint/progressWidth*video.duration
   video.currentTime=currentRange
  

}


//lets addevent listeners
playBtn.addEventListener("click", playOrPauseVideo);
video.addEventListener("click", playOrPauseVideo);
document.addEventListener('keyup',event=>{
    if(event.code==='Space'){
        // console.log("key pressed")
        playOrPauseVideo()
    }
})

video.addEventListener('timeupdate',progressVideo)
progressRange.addEventListener('click',updateSeekbar)
