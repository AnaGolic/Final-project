
let button = document.querySelector('#learnButton')
let mute = document.querySelector('#mute')
let play = document.querySelector('#play')
let music = document.querySelector('#player')
let nav = document.querySelector('#menu-toggle')


button.addEventListener('click', openPopUp)
play.addEventListener('click', playMusic)
mute.addEventListener('click', muteMusic)

function openPopUp(e){
    let person = prompt('Please enter your name')
    if(person === ""){
        alert('Invalid name!')
        return false
    }
    localStorage.setItem('name' + Number(localStorage.length + 1), person)
}

function playMusic(e){
    music.play()
    play.style.display = 'none'
    mute.style.display = 'block'
    
}
function muteMusic(e){
    music.pause()
    mute.style.display = 'none'
    play.style.display = 'block'
}







/* function handleOutboundLinkClicks(event){
    ga('send', 'event', {
        eventCategory:'Outbound Link',
        eventAction:'click',
        eventLabel: event.target.href ,
        transport: 'beacon'
    })
}

import lottieWeb from 'https://cdn.skypack.dev/lottie-web';

const playIconContainer = document.getElementById('play-icon');
const audioPlayerContainer = document.getElementById('audio-player-container');
const seekSlider = document.getElementById('seek-slider');
const volumeSlider = document.getElementById('volume-slider');
const muteIconContainer = document.getElementById('mute-icon');
let playState = 'play';
let muteState = 'unmute';

const playAnimation = lottieWeb.loadAnimation({
  container: playIconContainer,
  path: 'https://maxst.icons8.com/vue-static/landings/animated-icons/icons/pause/pause.json',
  renderer: 'svg',
  loop: false,
  autoplay: false,
  name: "Play Animation",
});

const muteAnimation = lottieWeb.loadAnimation({
    container: muteIconContainer,
    path: 'https://maxst.icons8.com/vue-static/landings/animated-icons/icons/mute/mute.json',
    renderer: 'svg',
    loop: false,
    autoplay: false,
    name: "Mute Animation",
});

playAnimation.goToAndStop(14, true);

playIconContainer.addEventListener('click', () => {
    if(playState === 'play') {
        playAnimation.playSegments([14, 27], true);
        playState = 'pause';
    } else {
        playAnimation.playSegments([0, 14], true);
        playState = 'play';
    }
});

muteIconContainer.addEventListener('click', () => {
    if(muteState === 'unmute') {
        muteAnimation.playSegments([0, 15], true);
        muteState = 'mute';
    } else {
        muteAnimation.playSegments([15, 25], true);
        muteState = 'unmute';
    }
});

const showRangeProgress = (rangeInput) => {
    if(rangeInput === seekSlider) {
      audioPlayerContainer.style.setProperty('--seek-before-width', rangeInput.value / rangeInput.max * 100 + '%');
    } else {
      audioPlayerContainer.style.setProperty('--volume-before-width', rangeInput.value / rangeInput.max * 100 + '%');
    }
}

seekSlider.addEventListener('input', (e) => {
    showRangeProgress(e.target);
});
volumeSlider.addEventListener('input', (e) => {
    showRangeProgress(e.target);
});

Resources */

