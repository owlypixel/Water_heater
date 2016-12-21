$(function () {
  var rotationSnap = 30;
  Draggable.create(".knob", {
      type:"rotation",
      bounds:{minRotation: -90, maxRotation: 90	},
      onDrag:dragUpdate,
      throwProps:true,
       onThrowUpdate:dragUpdate,
      snap:function(endValue) {
        return Math.round(endValue / rotationSnap) * rotationSnap;
      }
  });

  var fireHeight = document.querySelectorAll('.fire');
  var knob = document.getElementById('knob');
  var maxRotation = 180;

 //  TweenMax.set( fireHeight, {
	//   height: '80px'
	  
	// });
	 //  TweenMax.set( fireHeight, {
		//   height: 'auto'
		  
		// });
	 

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
		  // TweenMax.set(dialLine, {
		  //   drawSVG:percent + '%'
		  // })
			  // TweenMax.from(fireHeight, 0.5, {
		   //    height: 0,
		   //    ease: Back.easeOut
		   //  });
	TweenLite.set(fireHeight, {height:"auto"})
    TweenLite.to(fireHeight, 0.2, {height:Math.floor(percent), width: Math.floor(percent) })
		  
		  // fireHeight.style.height = Math.floor(percent);
		  // fireHeight.style.height = Math.floor(percent);
		  // dialValue.style.height = Math.floor(percent);
		 // console.log("dragging");
  
	}
	 // TweenMax.set(content, {
  //     height: "auto"
  //   });
  //   TweenMax.from(content, 0.5, {
  //     height: 0,
  //     ease: Back.easeOut
  //   });


});