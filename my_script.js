audio.addEventListener("timeupdate", updateProcess, false);
function playAndPause(){
	var playPause = document.getElementById('btPlay');
	if(audio.pause || audio.ended){
		playPause.title = "Pause";
		playPause.innerHTML = "Pause";
		audio.play();
	}
	else {
		palyPause.title = "Play";
		playPause.innerHTML = "Play";
		audio.pause();
	}

	function setVolume(){
		var volume = document.getElementById('volume');
		audio.volume = volume.value;
	}

	function Mute(){
		audio.muted = !audio.muted;
	}

	function updateProcess(){
		var pro= document.getElementById('process');
		var volume = 0;
		if(audio.currentTime > 0) {
			value = Math.floor((100 / audio.duration) * audio.currentTime);
		}
		process.style.width = value + "%";
	}
}