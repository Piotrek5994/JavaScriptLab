document.addEventListener("keypress", onKeyPress);
document.getElementById("recordBtn").addEventListener("click", recordSound);
let element = document.getElementById("recordBtn");

document.getElementById("playBtn").addEventListener("click", playRecordedSounds);
document.getElementById("stopBtn").addEventListener("click", stopPlayback);


const KeyToSound = {
  q: document.querySelector("#s1"),
  w: document.querySelector("#s2"),
  e: document.querySelector("#s3"),
  r: document.querySelector("#s4"),
};

function onKeyPress(event) {
  const sound = KeyToSound[event.key];
  playSound(sound);
}

function playSound(sound) {
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}

const channel = [];
let isRecording = false; 

function recordSound() {
  isRecording = !isRecording;
  if (isRecording) {
    channel.length = 0; 
    element.style.background = "green";
  }
  else{
    element.style.background = "red";
  }
  document.addEventListener("keypress", function (event) {
    if (isRecording) {
      const sound = KeyToSound[event.key];
      if (sound) {
        channel.push(event.key); 
      }
    }
  });
}

let playbackIndex = 0; 
let playbackTimeout; 

function playRecordedSounds() {
  if (channel.length === 0) {
    console.log("Channel is empty. Record something first.");
    return;
  }

  isRecording = false;
  element.style.background = "blue";
  playbackIndex = 0;
  playNextSoundInSequence();
}

function playNextSoundInSequence() {
  if (playbackIndex < channel.length) {
    const key = channel[playbackIndex];
    const sound = KeyToSound[key];

    playSound(sound);

    playbackTimeout = setTimeout(function () {
      playbackIndex++;
      playNextSoundInSequence();
    }, 500); 
  } else {
    element.style.background = "red";
  }
}

function stopPlayback() {
  clearTimeout(playbackTimeout);
  element.style.background = "red";
  playbackIndex = 0;
}