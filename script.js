const video = document.getElementById('video1');

// track if the video is muted or not
let isMuted = true;

// Play video with sound from the beginning on the first click
video.addEventListener('click', () => {
  if (isMuted) {
    video.currentTime = 0; 
    video.muted = false;  
    video.play();          
    isMuted = false;      
  } else {
    video.muted = true;    
    isMuted = true;        
  }
});

// Autoplay in muted mode 
video.muted = true; 
video.play();

// Select all video elements with the class 'reusable-video'
const videos = document.querySelectorAll(".reusable-video");

videos.forEach((video) => {
  
  //  play the video when the mouse enters 
  video.addEventListener("mouseenter", () => {
    video.play(); // Starts the video playback
  });

  //   pause the video when the mouse leaves 
  video.addEventListener("mouseleave", () => {
    video.pause(); 
  });

});


// Get the hamburger icon and the header options element
const hamburgerIcon = document.getElementById("hamburger-icon");
const headerOptions = document.getElementById("header-options");

// Toggle the 'open' class to show/hide the header options
hamburgerIcon.addEventListener("click", () => {
  headerOptions.classList.toggle("open");
});
