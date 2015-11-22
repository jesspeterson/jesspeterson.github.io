document.getElementById("collaborate").addEventListener("click", TogetherJS, false); 

var partners = [];
var partnersFlags = {};

var NUM_PARTNERS = 4;



//on client connection, create canvas with randomly chosen color context and below current canvas (number of elements in dict = -z)
TogetherJS.hub.on("togetherjs.hello", function (msg) {
    if (! msg.sameUrl) {
        return;
    }
    var context = document.getElementById('c').getContext('2d');
    TogetherJS.send({
        type: "init",
        'context': context
    });
});

//on receiving a connection, create a new canvas for that client, save it
TogetherJS.hub.on("init", function (msg) {
    if (! msg.sameUrl) {
        return;	
    }
    if (partners.length < NUM_PARTNERS - 1 && partners.indexOf(msg.clientId) < 0) {
    	partners.push(msg.clientId);
    	var index = partners.indexOf(msg.clientId);
    	var ctx = document.getElementById("c-" + index.toString()).getContext('2d');
    	var strokeStyle = msg.context.strokeStyle;
    	ctx.strokeStyle = "#"+((1<<24)*Math.random()|0).toString(16);  //randomly set stroke style
		if (strokeStyle =! null) {
			ctx.strokeStyle = strokeStyle; //but if possible, have it match the other person's color
		}

    	partnersFlags[msg.clientId] = false;
    	console.log("Added new Partner");
    }
    console.log("Partner couldn't be added.")
});

///////////////////////////////////////////////////


TogetherJS.hub.on("SimplePencil", function (msg) {
    if (! msg.sameUrl) {
        return;
    }
    var index = partners.indexOf(msg.clientId);
    if (index >= NUM_PARTNERS) {
    	return;	
    }
    console.log("index");
    console.log(index);
    var ctx = document.getElementById("c-" + index.toString()).getContext('2d');


    var onmousedown = function(e) {
   	  console.log("onmousedown!");
	  partnersFlags[index] = true;
	  ctx.beginPath();
	  console.log(e.clientX, e.clientY);
	  ctx.moveTo(e.clientX - buttonOffsetX, e.clientY - buttonOffsetY);
	};
	var onmousemove = function(e) {
	  if (partnersFlags[index]) {
	    ctx.lineTo(e.clientX - buttonOffsetX, e.clientY - buttonOffsetY);
	    ctx.stroke();
	  }
	};
	var onmouseup = function() {
	  partnersFlags[index] = false;
	};

	if (msg.e === 'mouseDown') {
		onmousedown(msg);
	} else if (msg.e === 'mouseMove') {
		onmousemove(msg);
	} else {
		onmouseup(msg);
	}

});








TogetherJS.hub.on("EdgeSmoothShadow", function (msg) {
    if (! msg.sameUrl) {
        return;
    }
    var index = partners.indexOf(msg.clientId);
    if (index >= NUM_PARTNERS) {
    	return;	
    }
    var ctx = document.getElementById("c-" + index.toString()).getContext('2d'); 
	console.log('edge');


	var onmousedown = function(e) {
	  partnersFlags[index] = true;
	  ctx.beginPath();
	  ctx.lineWidth = 10;
	  ctx.lineJoin = ctx.lineCap = 'round';
	  ctx.shadowBlur = 1;
	  ctx.shadowColor = ctx.strokeStyle;
	  ctx.moveTo(e.clientX - buttonOffsetX, e.clientY - buttonOffsetY);
	  
	};
	var onmousemove = function(e) {
	  if (partnersFlags[index]) {
	    ctx.lineTo(e.clientX - buttonOffsetX, e.clientY - buttonOffsetY);
	    ctx.stroke();
	  }
	  
	};
	var onmouseup = function() {
	  partnersFlags[index] = false;
	};

	if (msg.e === 'mouseDown') {
		onmousedown(msg);
	} else if (msg.e === 'mouseMove') {
		onmousemove(msg);
	} else {
		onmouseup(msg);
	}
  
});


TogetherJS.hub.on("SmoothConnection", function (msg) {
	if (! msg.sameUrl) {
        return;
    }
    var index = partners.indexOf(msg.clientId);
    if (index >= NUM_PARTNERS) {
    	return;	
    }
    var ctx = document.getElementById("c-" + index.toString()).getContext('2d'); 


	var onmousedown = function(e) {
	  partnersFlags[index] = true;
	  ctx.beginPath();
	  ctx.lineWidth = 10;
	  ctx.lineJoin = ctx.lineCap = 'round';
	  ctx.moveTo(e.clientX - buttonOffsetX, e.clientY - buttonOffsetY);
	  if (TogetherJS.running) {
        TogetherJS.send({type: "modeSmoothConnection", e: 'mouseDown', clientX: e.clientX, clientY: e.clientY});
      }
	};
	var onmousemove = function(e) {
	  if (partnersFlags[index]) {
	    ctx.lineTo(e.clientX - buttonOffsetX, e.clientY - buttonOffsetY);
	    ctx.stroke();
	  }
	  if (TogetherJS.running) {
        	TogetherJS.send({type: "modeSmoothConnection", e: 'mouseMove', clientX: e.clientX, clientY: e.clientY});
      }
	};
	var onmouseup = function() {
	  partnersFlags[index] = false;
	  if (TogetherJS.running) {
        	TogetherJS.send({type: "modeSmoothConnection", e: "mouseUp"});
      }
	};


	if (msg.e === 'mouseDown') {
		onmousedown(msg);
	} else if (msg.e === 'mouseMove') {
		onmousemove(msg);
	} else {
		onmouseup(msg);
	}
});




TogetherJS.hub.on("PointBased", function (msg) {
	if (! msg.sameUrl) {
        return;
    }
    var index = partners.indexOf(msg.clientId);
    if (index >= NUM_PARTNERS) {
    	return;	
    }
    var ctx = document.getElementById("c-" + index.toString()).getContext('2d'); 


	// ctx.lineWidth = 10;
	ctx.lineJoin = ctx.lineCap = 'round';

	var points = [ ];

	var onmousedown = function(e) {
	  partnersFlags[index] = true;
	  points.push({ x: e.clientX - buttonOffsetX, y: e.clientY - buttonOffsetY});
	  if (TogetherJS.running) {
        TogetherJS.send({type: "PointBased", e: 'mouseDown', clientX: e.clientX, clientY: e.clientY});
      }
	};

	var onmousemove = function(e) {
	  if (!partnersFlags[index]) return;

	  // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	  points.push({ x: e.clientX - buttonOffsetX, y: e.clientY - buttonOffsetY });

	  ctx.beginPath();
	  ctx.moveTo(points[0].x, points[0].y);
	  for (var i = 1; i < points.length; i++) {
	    ctx.lineTo(points[i].x, points[i].y);
	  }
	  ctx.stroke();
	  if (TogetherJS.running) {
        TogetherJS.send({type: "PointBased", e: 'mouseMove', clientX: e.clientX, clientY: e.clientY});
      }
	};

	var onmouseup = function() {
	  partnersFlags[index] = false;
	  points.length = 0;
	  if (TogetherJS.running) {
        TogetherJS.send({type: "PointBased", e: 'mouseUp', clientX: e.clientX, clientY: e.clientY});
      }
	};


	if (msg.e === 'mouseDown') {
		onmousedown(msg);
	} else if (msg.e === 'mouseMove') {
		onmousemove(msg);
	} else {
		onmouseup(msg);
	}

});



TogetherJS.hub.on("PointBasedShadow", function (msg) {
	if (! msg.sameUrl) {
        return;
    }
    var index = partners.indexOf(msg.clientId);
    if (index >= NUM_PARTNERS) {
    	return;	
    }
    var ctx = document.getElementById("c-" + index.toString()).getContext('2d'); 

	ctx.lineWidth = 10;
	ctx.lineJoin = ctx.lineCap = 'round';
	ctx.shadowBlur = 10;
	ctx.shadowColor = ctx.strokeStyle;

	var points = [ ];

	var onmousedown = function(e) {
	  partnersFlags[index] = true;
	  points.push({ x: e.clientX - buttonOffsetX, y: e.clientY - buttonOffsetY });
	  if (TogetherJS.running) {
        TogetherJS.send({type: "PointBasedShadow", e: 'mouseDown', clientX: e.clientX, clientY: e.clientY});
      }
	};

	var onmousemove = function(e) {
	  if (!partnersFlags[index]) return;

	  // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	  points.push({ x: e.clientX - buttonOffsetX, y: e.clientY - buttonOffsetY });

	  ctx.beginPath();
	  ctx.moveTo(points[0].x, points[0].y);
	  for (var i = 1; i < points.length; i++) {
	    ctx.lineTo(points[i].x, points[i].y);
	  }
	  ctx.stroke();
	  if (TogetherJS.running) {
        TogetherJS.send({type: "PointBasedShadow", e: 'mouseMove', clientX: e.clientX, clientY: e.clientY});
      }
	};

	var onmouseup = function() {
	  partnersFlags[index] = false;
	  points.length = 0;
	  if (TogetherJS.running) {
        TogetherJS.send({type: "PointBasedShadow", e: 'mouseUp', clientX: e.clientX, clientY: e.clientY});
      }
	};


	if (msg.e === 'mouseDown') {
		onmousedown(msg);
	} else if (msg.e === 'mouseMove') {
		onmousemove(msg);
	} else {
		onmouseup(msg);
	}

});





TogetherJS.hub.on("EdgeSmoothing", function (msg) {
    if (! msg.sameUrl) {
        return;
    }
    var index = partners.indexOf(msg.clientId);
    if (index >= NUM_PARTNERS) {
    	return;	
    }
    var ctx = document.getElementById("c-" + index.toString()).getContext('2d');

	var onmousedown = function(e) {
	  partnersFlags[index] = true;
	  ctx.moveTo(e.clientX - buttonOffsetX, e.clientY - buttonOffsetY);
	  if (TogetherJS.running) {
        TogetherJS.send({type: "EdgeSmoothing", e: 'mouseDown', clientX: e.clientX, clientY: e.clientY});
      }
	};
	var onmousemove = function(e) {
	  if (partnersFlags[index]) {
	  	var lineWidth = 7*ctx.lineWidth;
	  	var lineWidth2 = 2*lineWidth;
	  	var lineWidth4 = 2*lineWidth2;
	  	console.log("lineWidth : ",lineWidth);
	    var radgrad = ctx.createRadialGradient(e.clientX - buttonOffsetY,e.clientY - buttonOffsetY,lineWidth,e.clientX - buttonOffsetX,e.clientY - buttonOffsetY,lineWidth2);
	    var color_alpha = chroma(ctx.strokeStyle).alpha(0.5).css();
	    var color_alpha2 = chroma(ctx.strokeStyle).alpha(0).css();
	    radgrad.addColorStop(0 	, ctx.strokeStyle);
	    radgrad.addColorStop(0.5, color_alpha);
	    radgrad.addColorStop(1 	, color_alpha2);
	    ctx.fillStyle = radgrad;
	    
	    ctx.fillRect(e.clientX - buttonOffsetX - lineWidth2, e.clientY - buttonOffsetY - lineWidth2, lineWidth4, lineWidth4);
	  }
	  if (TogetherJS.running) {
        TogetherJS.send({type: "EdgeSmoothing", e: 'mouseMove', clientX: e.clientX, clientY: e.clientY});
      }
	};
	var onmouseup = function() {
	  partnersFlags[index] = false;
	  if (TogetherJS.running) {
        TogetherJS.send({type: "EdgeSmoothing", e: 'mouseUp', clientX: e.clientX, clientY: e.clientY});
      }
	};



	if (msg.e === 'mouseDown') {
		onmousedown(msg);
	} else if (msg.e === 'mouseMove') {
		onmousemove(msg);
	} else {
		onmouseup(msg);
	}

});




TogetherJS.hub.on("EdgeSmoothingEnhanced", function (msg) {
    if (! msg.sameUrl) {
        return;
    }
    var index = partners.indexOf(msg.clientId);
    if (index >= NUM_PARTNERS) {
    	return;	
    }
    var ctx = document.getElementById("c-" + index.toString()).getContext('2d');


	function distanceBetween(point1, point2) {
	  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
	}
	function angleBetween(point1, point2) {
	  return Math.atan2( point2.x - point1.x, point2.y - point1.y );
	}
	ctx.lineJoin = ctx.lineCap = 'round';

	var lineWidth = 4*ctx.lineWidth;
	var lineWidth2 = 2*lineWidth;
	var lineWidth4 = 2*lineWidth2;


	var lastPoint;

	var onmousedown = function(e) {
	  partnersFlags[index] = true;
	  lastPoint = { x: e.clientX - buttonOffsetX, y: e.clientY - buttonOffsetY};
	  if (TogetherJS.running) {
        TogetherJS.send({type: "EdgeSmoothingEnhanced", e: 'mouseDown', clientX: e.clientX, clientY: e.clientY});
      }
	};

	var onmousemove = function(e) {
	  if (!partnersFlags[index]) return;
	  
	  var currentPoint = { x: e.clientX - buttonOffsetX, y: e.clientY - buttonOffsetY};
	  var dist = distanceBetween(lastPoint, currentPoint);
	  var angle = angleBetween(lastPoint, currentPoint);
	  
	  for (var i = 0; i < dist; i+=5) {
	    
	    x = lastPoint.x + (Math.sin(angle) * i);
	    y = lastPoint.y + (Math.cos(angle) * i);
	    
	    var radgrad = ctx.createRadialGradient(x,y,lineWidth,x,y,lineWidth2);
	    
	    var color_alpha = chroma(ctx.strokeStyle).alpha(0.5).css();
	    var color_alpha2 = chroma(ctx.strokeStyle).alpha(0).css();
	    radgrad.addColorStop(0 	, ctx.strokeStyle);
	    radgrad.addColorStop(0.5, color_alpha);
	    radgrad.addColorStop(1 	, color_alpha2);
	    
	    ctx.fillStyle = radgrad;
	     ctx.fillRect(x-lineWidth2, y-lineWidth2, lineWidth4, lineWidth4);
	  }
	  
	  lastPoint = currentPoint;
	  if (TogetherJS.running) {
        TogetherJS.send({type: "EdgeSmoothingEnhanced", e: 'mouseMove', clientX: e.clientX, clientY: e.clientY});
      }
	};

	var onmouseup = function() {
	  partnersFlags[index] = false;
	  if (TogetherJS.running) {
        TogetherJS.send({type: "EdgeSmoothingEnhanced", e: 'mouseUp', clientX: e.clientX, clientY: e.clientY});
      }
	};




	if (msg.e === 'mouseDown') {
		onmousedown(msg);
	} else if (msg.e === 'mouseMove') {
		onmousemove(msg);
	} else {
		onmouseup(msg);
	}


});




TogetherJS.hub.on("BezierCurves", function (msg) {
    if (! msg.sameUrl) {
        return;
    }
    var index = partners.indexOf(msg.clientId);
    if (index >= NUM_PARTNERS) {
    	return;	
    }
    var ctx = document.getElementById("c-" + index.toString()).getContext('2d');

	function midPointBtw(p1, p2) {
	  return {
	    x: p1.x + (p2.x - p1.x) *0.5,
	    y: p1.y + (p2.y - p1.y) *0.5
	  };
	}

	ctx.lineWidth = 1;
	ctx.lineJoin = ctx.lineCap = 'round';

	var points = [ ];

	var onmousedown = function(e) {
	  partnersFlags[index] = true;
	  points.length=0;
	  points.push({ x: e.clientX - buttonOffsetX, y: e.clientY - buttonOffsetY});
	  if (TogetherJS.running) {
        TogetherJS.send({type: "BezierCurves", e: 'mouseDown', clientX: e.clientX, clientY: e.clientY});
      }
	};

	var onmousemove = function(e) {
	  if (!partnersFlags[index]) return;
	  
	  points.push({ x: e.clientX - buttonOffsetX, y: e.clientY - buttonOffsetY});

	  // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	  
	  var p1 = points[0];
	  var p2 = points[1];
	  
	  ctx.beginPath();
	  ctx.moveTo(p1.x, p1.y);

	  for (var i = 1, len = points.length; i < len; i++) {
	    // we pick the point between pi+1 & pi+2 as the
	    // end point and p1 as our control point
	    var midPoint = midPointBtw(p1, p2);
	    ctx.quadraticCurveTo(p1.x, p1.y, midPoint.x, midPoint.y);
	    p1 = points[i];
	    p2 = points[i+1];
	  }
	  // Draw last line as a straight line while
	  // we wait for the next point to be able to calculate
	  // the bezier control point
	  ctx.lineTo(p1.x, p1.y);
	  ctx.stroke();
	  if (TogetherJS.running) {
        TogetherJS.send({type: "BezierCurves", e: 'mouseMove', clientX: e.clientX, clientY: e.clientY});
      }
	};

	var onmouseup = function() {
	  partnersFlags[index] = false;
	  points.length = 0;
	  if (TogetherJS.running) {
        TogetherJS.send({type: "BezierCurves", e: 'mouseUp', clientX: e.clientX, clientY: e.clientY});
      }
	};




	if (msg.e === 'mouseDown') {
		onmousedown(msg);
	} else if (msg.e === 'mouseMove') {
		onmousemove(msg);
	} else {
		onmouseup(msg);
	}

});




TogetherJS.hub.on("Inclined", function (msg) {
    if (! msg.sameUrl) {
        return;
    }
    var index = partners.indexOf(msg.clientId);
    if (index >= NUM_PARTNERS) {
    	return;	
    }
    var ctx = document.getElementById("c-" + index.toString()).getContext('2d');

	var img = new Image();
	// img.src = 'http://www.tricedesigns.com/wp-content/uploads/2012/01/brush2.png';
	img.src = 'http://jsrun.it/assets/4/4/C/u/44CuF.png';

	function distanceBetween(point1, point2) {
	  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
	}
	function angleBetween(point1, point2) {
	  return Math.atan2( point2.x - point1.x, point2.y - point1.y );
	}

	ctx.lineJoin = ctx.lineCap = 'round';

	var lastPoint;

	var onmousedown = function(e) {
	  partnersFlags[index] = true;
	  lastPoint = { x: e.clientX - buttonOffsetX, y: e.clientY - buttonOffsetY};
	  if (TogetherJS.running) {
        TogetherJS.send({type: "Inclined", e: 'mouseDown', clientX: e.clientX, clientY: e.clientY});
      }
	};

	var onmousemove = function(e) {
	  if (!partnersFlags[index]) return;
	  
	  var currentPoint = { x: e.clientX - buttonOffsetX, y: e.clientY - buttonOffsetY};
	  var dist = distanceBetween(lastPoint, currentPoint);
	  var angle = angleBetween(lastPoint, currentPoint);
	  
	  for (var i = 0; i < dist; i++) {
	    x = lastPoint.x + (Math.sin(angle) * i) - 25;
	    y = lastPoint.y + (Math.cos(angle) * i) - 25;
	    ctx.drawImage(img, x, y);
	  }
	  
	  lastPoint = currentPoint;
	  if (TogetherJS.running) {
        TogetherJS.send({type: "Inclined", e: 'mouseMove', clientX: e.clientX, clientY: e.clientY});
      }
	};

	var onmouseup = function() {
	  partnersFlags[index] = false;
	  if (TogetherJS.running) {
        TogetherJS.send({type: "Inclined", e: 'mouseUp', clientX: e.clientX, clientY: e.clientY});
      }
	};



	if (msg.e === 'mouseDown') {
		onmousedown(msg);
	} else if (msg.e === 'mouseMove') {
		onmousemove(msg);
	} else {
		onmouseup(msg);
	}


});



TogetherJS.hub.on("RotatinStrokes", function (msg) {
    if (! msg.sameUrl) {
        return;
    }
    var index = partners.indexOf(msg.clientId);
    if (index >= NUM_PARTNERS) {
    	return;	
    }
    var ctx = document.getElementById("c-" + index.toString()).getContext('2d');


	// based on http://www.tricedesigns.com/2012/01/04/sketching-with-html5-canvas-and-brush-images/

	var img = new Image();
	img.src = 'http://jsrun.it/assets/o/K/x/Y/oKxYC.png';
    
	// img.src = 'http://www.tricedesigns.com/wp-content/uploads/2012/01/brush2.png';
	img.width = 10;

	function distanceBetween(point1, point2) {
	  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
	}
	function angleBetween(point1, point2) {
	  return Math.atan2( point2.x - point1.x, point2.y - point1.y );
	}
	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	ctx.lineJoin = ctx.lineCap = 'round';

	var lastPoint;

	var onmousedown = function(e) {
	  partnersFlags[index] = true;
	  lastPoint = { x: e.clientX - buttonOffsetX, y: e.clientY - buttonOffsetY };
	  if (TogetherJS.running) {
        TogetherJS.send({type: "RotatinStrokes", e: 'mouseDown', clientX: e.clientX, clientY: e.clientY});
      }
	};

	var onmousemove = function(e) {
	  if (!partnersFlags[index]) return;
	  
	  var currentPoint = { x: e.clientX - buttonOffsetX, y: e.clientY - buttonOffsetY};
	  var dist = distanceBetween(lastPoint, currentPoint);
	  var angle = angleBetween(lastPoint, currentPoint);
	  
	  for (var i = 0; i < dist; i++) {
	    x = lastPoint.x + (Math.sin(angle) * i);
	    y = lastPoint.y + (Math.cos(angle) * i);
	    ctx.save();
	    ctx.translate(x, y);
	    ctx.scale(0.5, 0.5);
	    ctx.rotate(Math.PI * 180 / getRandomInt(0, 180));
	    ctx.drawImage(img, 0, 0);
	    ctx.restore();
	  }
	  
	  lastPoint = currentPoint;
	  if (TogetherJS.running) {
        TogetherJS.send({type: "RotatinStrokes", e: 'mouseMove', clientX: e.clientX, clientY: e.clientY});
      }
	};

	var onmouseup = function() {
	  partnersFlags[index] = false;
	  if (TogetherJS.running) {
        TogetherJS.send({type: "RotatinStrokes", e: 'mouseUp', clientX: e.clientX, clientY: e.clientY});
      }
	};

	if (msg.e === 'mouseDown') {
		onmousedown(msg);
	} else if (msg.e === 'mouseMove') {
		onmousemove(msg);
	} else {
		onmouseup(msg);
	}
});



TogetherJS.hub.on("VariableSegment", function (msg) {
    if (! msg.sameUrl) {
        return;
    }
    var index = partners.indexOf(msg.clientId);
    if (index >= NUM_PARTNERS) {
    	return;	
    }
    var ctx = document.getElementById("c-" + index.toString()).getContext('2d');

	function getRandomInt(min, max) {
	  return 0|(Math.random() * (max - min + 1)) + min;
	}

	ctx.lineJoin = ctx.lineCap = 'round';
	/*ctx.shadowBlur = 10;
	ctx.shadowColor = 'rgb(0, 0, 0)';*/

	var points = [ ];

	var onmousedown = function(e) {
	  partnersFlags[index] = true;
	  points.push({ 
	    x: e.clientX - buttonOffsetX, 
	    y: e.clientY - buttonOffsetY,
	    width: getRandomInt(3, 5)
	  });
	  if (TogetherJS.running) {
        TogetherJS.send({type: "VariableSegment", e: 'mouseDown', clientX: e.clientX, clientY: e.clientY});
      }
	};

	var onmousemove = function(e) {
	  if (!partnersFlags[index]) return;

	  //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	  
	  points.push({ 
	    x: e.clientX - buttonOffsetX, 
	    y: e.clientY - buttonOffsetY,
	    width: getRandomInt(3, 5)
	  });

	  for (var i = 1; i < points.length; i++) {
	    ctx.beginPath();
	    ctx.moveTo(points[i-1].x, points[i-1].y);
	    ctx.lineWidth = points[i].width;
	    ctx.lineTo(points[i].x, points[i].y);
	    ctx.stroke();
	  }
	  if (TogetherJS.running) {
        TogetherJS.send({type: "VariableSegment", e: 'mouseMove', clientX: e.clientX, clientY: e.clientY});
      }
	};

	var onmouseup = function() {
	  partnersFlags[index] = false;
	  points.length = 0;
	  if (TogetherJS.running) {
        TogetherJS.send({type: "VariableSegment", e: 'mouseUp', clientX: e.clientX, clientY: e.clientY});
      }
	};


	if (msg.e === 'mouseDown') {
		onmousedown(msg);
	} else if (msg.e === 'mouseMove') {
		onmousemove(msg);
	} else {
		onmouseup(msg);
	}

});




TogetherJS.hub.on("MultipleStrokes", function (msg) {
    if (! msg.sameUrl) {
        return;
    }
    var index = partners.indexOf(msg.clientId);
    if (index >= NUM_PARTNERS) {
    	return;	
    }
    var ctx = document.getElementById("c-" + index.toString()).getContext('2d');



	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}


	ctx.lineWidth = 1;
	ctx.lineWidth = 1;
	ctx.lineJoin = ctx.lineCap = 'round';
	// ctx.strokeStyle = 'purple';

	var lastPoint;

	var onmousedown = function(e) {
	  partnersFlags[index] = true;
	  lastPoint = { x: e.clientX - buttonOffsetX, y: e.clientY - buttonOffsetY};
	  if (TogetherJS.running) {
        TogetherJS.send({type: "MultipleStrokes", e: 'mouseDown', clientX: e.clientX, clientY: e.clientY});
      }
	};

	var onmousemove = function(e) {
		if (!partnersFlags[index]) return;

		ctx.beginPath();

		ctx.strokeStyle = 'gray';
		ctx.moveTo(lastPoint.x - getRandomInt(0, 2), lastPoint.y - getRandomInt(0, 2));
		ctx.lineTo(e.clientX - buttonOffsetX - getRandomInt(0, 2), e.clientY - buttonOffsetY - getRandomInt(0, 2));
		ctx.stroke();


		ctx.strokeStyle = 'white';
	ctx.lineWidth = 1;
		ctx.moveTo(lastPoint.x, lastPoint.y);
		ctx.lineTo(e.clientX - buttonOffsetX, e.clientY - buttonOffsetY);
		ctx.stroke();
		var max = 2;
		var max2 = max*0.5;
	ctx.lineWidth = 1;
		ctx.strokeStyle = 'gray';
		ctx.moveTo(lastPoint.x + getRandomInt(0,2), lastPoint.y + getRandomInt(0,2));
		ctx.lineTo(e.clientX - buttonOffsetX + getRandomInt(0,2), e.clientY - buttonOffsetY + getRandomInt(0,2));
		ctx.stroke();

		lastPoint = { x: e.clientX - buttonOffsetX, y: e.clientY - buttonOffsetY};
		if (TogetherJS.running) {
        	TogetherJS.send({type: "MultipleStrokes", e: 'mouseMove', clientX: e.clientX, clientY: e.clientY});
      	}
	};

	var onmouseup = function() {
		ctx.strokeStyle = 'white';
	  partnersFlags[index] = false;
	  if (TogetherJS.running) {
        	TogetherJS.send({type: "MultipleStrokes", e: 'mouseUp', clientX: e.clientX, clientY: e.clientY});
      }
	};


	if (msg.e === 'mouseDown') {
		onmousedown(msg);
	} else if (msg.e === 'mouseMove') {
		onmousemove(msg);
	} else {
		onmouseup(msg);
	}

});
