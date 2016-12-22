$(function () {
	var rotationSnap = 80;
	var fireHeight = document.querySelectorAll('.fire');
	var knob = document.getElementById('knob');
	var temp = document.getElementById('temp');
	var fire2 = document.querySelector('.two');
	var fire4 = document.querySelector('.four');
	var maxRotation = 180;
	Draggable.create("#knob", {
		type:"rotation",
		bounds:{minRotation: -90, maxRotation: 90},
		onDrag:dragUpdate,
		throwProps:true,
		onThrowUpdate:dragUpdate,
	});

	Draggable.create("#knob2", {
		type:"rotation",
		bounds:{minRotation: 0, maxRotation: 80	},
		onDrag:funcUpdate,
		throwProps:true,
		onThrowUpdate:funcUpdate,
		liveSnap: true,
		snap:function(endValue) {
		console.log("was here");
			return Math.round(endValue / rotationSnap) * rotationSnap;
		}
	});

	function funcUpdate(){
		var val = (knob2._gsTransform.rotation/maxRotation);
		var percent = val * 100;
		if(percent == 0){
			fire2.style.display = 'block';
			fire4.style.display = 'block';
		} 
		if(percent > 0) {
			fire2.style.display = 'none';
			fire4.style.display = 'none';
		}
	}

function dragUpdate(){
	var val = (knob._gsTransform.rotation/maxRotation);
	var percent = val * 100;
	if(percent > 0){
		percent = percent + 50;
	}
	percent = (percent > 100) ? 100 : percent;
	if(percent < 0){
		percent = Math.abs(-50 + Math.abs(percent));
	}
	percent = (percent < 0) ? 0 : percent;

	TweenLite.set(fireHeight, {height:"auto"})
	TweenLite.to(fireHeight, 0.2, {height:Math.floor(percent), width: Math.floor(percent) })
	temp.innerHTML = Math.floor(percent);
}

});