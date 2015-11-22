// forked from alvarobyrne's "exploring-canvas-drawing-techniques" http://jsdo.it/alvarobyrne/exploring-canvas-drawing-techniques
var elG = document.getElementById('c');


// This makes the canvas's coordinate system the same as the actual pixels.  
//Note the offsets, which determine the position on the canvas given the size 
//of the collaborate button. - Jess
var collabButton = document.getElementById('collaborate');
var buttonOffsetX = 0;
buttonOffsetX = collabButton.offsetWidth;
var buttonOffsetY = 0;
elG.width = elG.offsetWidth - buttonOffsetX;
elG.height = elG.offsetHeight - buttonOffsetY;


// Initialize other canvases
var canvas1 = document.getElementById('c-0'); // Necessary if we want all the coordinates of the canvases to match
canvas1.width = elG.width;
canvas1.height = elG.height;
var canvas2 = document.getElementById('c-1'); // Necessary if we want all the coordinates of the canvases to match
canvas2.width = elG.width;
canvas2.height = elG.height;
var canvas3 = document.getElementById('c-2'); // Necessary if we want all the coordinates of the canvases to match
canvas3.width = elG.width;
canvas3.height = elG.height;
var canvas4 = document.getElementById('c-3'); // Necessary if we want all the coordinates of the canvases to match
canvas4.width = elG.width;
canvas4.height = elG.height;


console.log("offset width",elG.offsetWidth);
console.log("offset height",elG.offsetHeight);




var ctx = elG.getContext('2d');
// attach the mousedown, mousemove, mouseup event listeners.
ctx.strokeStyle = 'white';
setTimeout(function(){
	doSetSimplePencil(elG);

},16)
// doSetEdgeSmoothingEnhanced(elG);
// doSetEdgeSmoothing(elG);
// doSetEdgeSmoothShadow(elG);
// doSetBezierCurves(elG);
// doSetInclined(elG);
// doSetRotatinStrokes(elG);
// doSetVariableSegment(elG);
// doSetThickBrush(elG);
// doSetMultipleStrokes(elG);
// doSetMultipleStrokes2(elG);
// doSetThickBrush2(elG);
// doSetSlicedStroke(elG);
// doSetSlicedStrokesOpacity(elG);
// doSetMultipleLines(elG);
// doSetMultipleLinesOpacity(elG);
// doSetLinesPatternImage(elG);
// doSetSpray(elG);
// doSetSprayTimeBased(elG);
// doSetNeighbor(elG);
//doSetNeighborNearby(elG);
//doSetNeighborFur(elG);

var gui = new dat.GUI();
// gui.add(this,'doClearCanvas');

var folder_basics = gui.addFolder('basics');
folder_basics.open();
function doClearCanvas (argument) {
	var ctx = elG.getContext('2d');
	doclearCanvasProperties();
	ctx.clearRect(0,0,elG.width,elG.height);
	console.log('elG.height : '+elG.height);
	console.log('elG.width : '+elG.width);
	// ctx.fillStyle='white';
	// ctx.fillRect(0,0,elG.width,elG.height);
	// ctx.fill();
	ctx.strokeStyle = 'white';
}
folder_basics.add(this,'doSetSimplePencil');
function doSetSimplePencil (argument) {
	traceBrushName("Simple Pencil");
	doclearCanvasProperties();
	modeSimplePencil(elG);
	ctx.strokeStyle = "#"+((1<<24)*Math.random()|0).toString(16);
}
folder_basics.add(this,'doSetSmoothConnection');
function doSetSmoothConnection (argument) {
	traceBrushName("Smooth Connection");
	doclearCanvasProperties();
	modeSmoothConnection(elG);
}
folder_basics.add(this,'doSetEdgeSmoothShadow');
function doSetEdgeSmoothShadow (argument) {
	traceBrushName("Edge Smooth Shadow");
	doclearCanvasProperties();
	modeEdgeSmoothShadow(elG);
	
}
var folder_point_based = gui.addFolder('point_based');
folder_point_based.open();
var folder_point = folder_point_based.addFolder('point');
folder_point.open();
folder_point.add(this,'doSetPointBased');
function doSetPointBased (argument) {
	traceBrushName("Point Based");
	doclearCanvasProperties();
	modePointBased(elG);
}
folder_point.add(this,'doSetPointBasedShadow');
function doSetPointBasedShadow (argument) {
	traceBrushName("Point Based Shadow");
	doclearCanvasProperties();
	modePointBasedShadow(elG);
}
folder_point.add(this,'doSetEdgeSmoothing');
function doSetEdgeSmoothing (argument) {
	traceBrushName("Edge Smoothing");
	doclearCanvasProperties();
	modeEdgeSmoothing(elG);
}
folder_point.add(this,'doSetEdgeSmoothingEnhanced');
function doSetEdgeSmoothingEnhanced (argument) {
	traceBrushName("Edge Smoothing Enhanced");
	doclearCanvasProperties();
	modeEdgeSmoothingEnhanced(elG);
}
folder_point.add(this,'doSetBezierCurves');
function doSetBezierCurves (argument) {
	traceBrushName("Bezier Curves");
	doclearCanvasProperties();
	modeBezierCurves(elG);
}
var folder_images = folder_point_based.addFolder('images');
folder_images.open();
folder_images.add(this,'doSetInclined');
function doSetInclined (argument) {
	traceBrushName("Inclined");
	doclearCanvasProperties();
	modeInclined(elG);
}
folder_images.add(this,'doSetRotatinStrokes');
function doSetRotatinStrokes (argument) {
	traceBrushName("Rotatin Strokes");
	doclearCanvasProperties();
	modeRotatinStrokes(elG);
}
var folder_pen = folder_point_based.addFolder('pen');
folder_pen.open();
folder_pen.add(this,'doSetVariableSegment');
function doSetVariableSegment (argument) {
	traceBrushName("Variable Segment");
	doclearCanvasProperties();
	modeVariableSegment(elG);
}
folder_pen.add(this,'doSetMultipleStrokes');
function doSetMultipleStrokes (argument) {
	traceBrushName("Multiple Strokes");
	doclearCanvasProperties();
	modeMultipleStrokes(elG);
}
folder_pen.add(this,'doSetMultipleStrokes2');
function doSetMultipleStrokes2 (argument) {
	traceBrushName("Multiple Strokes");
	doclearCanvasProperties();
	modeMultipleStrokes2(elG);
}
var folder_brush = folder_point_based.addFolder('brush');
folder_brush.open();
folder_brush.add(this,'doSetThickBrush');
function doSetThickBrush (argument) {
	traceBrushName("Thick Brush");
	doclearCanvasProperties();
	modeThickBrush(elG);
}
folder_brush.add(this,'doSetThickBrush2');
function doSetThickBrush2 (argument) {
	traceBrushName("Thick Brush");
	doclearCanvasProperties();
	modeThickBrush2(elG);
}
folder_brush.add(this,'doSetSlicedStroke');
function doSetSlicedStroke (argument) {
	traceBrushName("Sliced Stroke");
	doclearCanvasProperties();
	modeSlicedStroke(elG);
}
folder_brush.add(this,'doSetSlicedStrokesOpacity');
function doSetSlicedStrokesOpacity (argument) {
	traceBrushName("Sliced Strokes Opacity");
	doclearCanvasProperties();
	modeSlicedStrokesOpacity(elG);
}
folder_brush.add(this,'doSetMultipleLines');
function doSetMultipleLines (argument) {
	traceBrushName("Multiple Lines");
	doclearCanvasProperties();
	modeMultipleLines(elG);
}
folder_brush.add(this,'doSetMultipleLinesOpacity');
function doSetMultipleLinesOpacity (argument) {
	traceBrushName("Multiple Lines Opacity");
	doclearCanvasProperties();
	modeMultipleLinesOpacity(elG);
}
var folder_stamp = folder_point_based.addFolder('stamp');
folder_stamp.open();

folder_stamp.add(this,'doSetColoredPixels');
function doSetColoredPixels (argument) {
	traceBrushName("Colored Pixels");
	doclearCanvasProperties();
	modeColoredPixels(elG);
}
var folder_pattern = folder_point_based.addFolder('pattern');
folder_pattern.open();

folder_pattern.add(this,'doSetPatternBased');
function doSetPatternBased (argument) {
	traceBrushName("Pattern Based");
	doclearCanvasProperties();
	modePatternBased(elG);
	
}
folder_pattern.add(this,'doSetLinesPattern');
function doSetLinesPattern (argument) {
	traceBrushName("Lines Pattern");
	doclearCanvasProperties();
	modeLinesPattern(elG);
}
folder_pattern.add(this,'doSetLinesPatternsDoubleColor');
function doSetLinesPatternsDoubleColor (argument) {
	traceBrushName("Lines Patterns Double Color");
	doclearCanvasProperties();
	modeLinesPatternsDoubleColor(elG);
}
folder_pattern.add(this,'doSetLinesPatternRaindow');
function doSetLinesPatternRaindow (argument) {
	traceBrushName("Lines Pattern Raindow");
	doclearCanvasProperties();
	modeLinesPatternRaindow(elG);
}
folder_pattern.add(this,'doSetLinesPatternImage');
function doSetLinesPatternImage (argument) {
	traceBrushName("Lines Pattern Image");
	doclearCanvasProperties();
	modeLinesPatternImage(elG);
}
var folder_spray = gui.addFolder('spray');
folder_spray.open();
folder_spray.add(this,'doSetSpray');
function doSetSpray (argument) {
	traceBrushName("Spray");
	doclearCanvasProperties();
	modeSpray(elG);
}
folder_spray.add(this,'doSetSprayTimeBased');
function doSetSprayTimeBased (argument) {
	traceBrushName("Spray Time Based");
	doclearCanvasProperties();
	modeSprayTimeBased(elG);
}
folder_spray.add(this,'doSetSprayRoundDistribution');
function doSetSprayRoundDistribution (argument) {
	traceBrushName("Spray Round Distribution");
	doclearCanvasProperties();
	modeSprayRoundDistribution(elG);
}
folder_spray.add(this,'doSetSprayRandom');
function doSetSprayRandom (argument) {
	traceBrushName("Spray Random Size");
	doclearCanvasProperties();
	modeSprayRandomSize(elG);
}
var folder_neighbour = gui.addFolder('neighbour');
folder_neighbour.open();
folder_neighbour.add(this,'doSetNeighbor');
function doSetNeighbor (argument) {
	traceBrushName("Neighbor");
	doclearCanvasProperties();
	modeNeighbor(elG);
}
folder_neighbour.add(this,'doSetNeighborNearby');
function doSetNeighborNearby (argument) {
	traceBrushName("Neighbor Nearby");
	doclearCanvasProperties();
	modeNeighborNearby(elG);
}
folder_neighbour.add(this,'doSetNeighborFur');
function doSetNeighborFur (argument) {
	traceBrushName("Neighbor Fur");
	doclearCanvasProperties();
	modeNeighborFur(elG);
}

document.addEventListener('keydown',function  (argument) {	
	var keyCode = argument.keyCode;
	console.log("keyCode : ",keyCode);
	if(argument.keyCode===81){console.clear();}//q
	if(argument.keyCode===32){doClearCanvas();}//space
})
function doclearCanvasProperties (argument) {
	var ctx = elG.getContext('2d');
	ctx.lineWidth = 1;
	ctx.lineJoin = 'mitter'
	ctx.lineCap = 'butt';
	ctx.shadowBlur = 0;
	ctx.shadowColor = 'rgb(0, 0, 0,0)';
}
function traceBrushName (argument) {
	// var label = document.getElementById('brush_label');
	// label.innerHTML=argument;
}
$('.property-name').css('overflow','inherit');

/////////////////////////////////////////
var global_styles = {};
global_styles.lineWidth=1;
global_styles.stroke_style='white';
global_styles.use_line_width=true;
global_styles.get_line_width=function  (argument) {
	this.use_line_width?this.lineWidth:argument;

	console.log("this : ",this);
}
var lw = global_styles.get_line_width();
console.log("lw : ",lw);



// This function is modified from the original version to do two things
// 1. It has touch events
// 2. It sends the appropriate together.js message if together.js is enabled
function modeSimplePencil (el) {
	var ctx = el.getContext('2d');
	var isDrawing;


////////  Adds touch events ///////////
	var touchDown = function(e) {
	  e.preventDefault();
	  isDrawing = true;
	  ctx.beginPath();
	  console.log(e);
	  ctx.moveTo(e.targetTouches[0].clientX - buttonOffsetX, e.targetTouches[0].clientY - buttonOffsetY); // Note the offsets.  This is necessary because of the positioning of the togetherJS button - Jess
	  if (TogetherJS.running) {
        TogetherJS.send({type: "SimplePencil", e: 'mouseDown', clientX: e.targetTouches[0].clientX, clientY: e.targetTouches[0].clientY});
      }
	};
	var touchXY = function(e) {
	  e.preventDefault();
	  if (isDrawing) {
	    ctx.lineTo(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
	    ctx.stroke();
	    if (TogetherJS.running) {
        	TogetherJS.send({type: "SimplePencil", e: 'mouseMove', clientX: e.targetTouches[0].clientX, clientY: e.targetTouches[0].clientY});
      	}
	  }

	};
	var touchUp = function() {
	  isDrawing = false;
	  if (TogetherJS.running) {
        	TogetherJS.send({type: "SimplePencil", e: "mouseUp"});
      }
	};

	el.addEventListener("touchstart", touchDown, false);
    el.addEventListener("touchmove", touchXY, true);
    el.addEventListener("touchend", touchUp, false);
//////////////////////////////////////////////////////
	


	el.onmousedown = function(e) {
	  isDrawing = true;
	  ctx.beginPath();
	  console.log(e.clientX, e.clientY);
	  ctx.moveTo(e.clientX - buttonOffsetX, e.clientY - buttonOffsetY);
	  if (TogetherJS.running) {
        TogetherJS.send({type: "SimplePencil", e: "mouseDown", clientX: e.clientX, clientY: e.clientY});
      }
	};
	el.onmousemove = function(e) {
	  if (isDrawing) {
	  	
	    ctx.lineTo(e.clientX - buttonOffsetX, e.clientY - buttonOffsetY);
	    ctx.stroke();
	    if (TogetherJS.running) {
        	TogetherJS.send({type: "SimplePencil", e: "mouseMove", clientX: e.clientX, clientY: e.clientY});
      	}
	  }
	};
	el.onmouseup = function() {
	  isDrawing = false;
	  if (TogetherJS.running) {
        	TogetherJS.send({type: "SimplePencil", e: "mouseUp"});
      }
	};
}


function modeEdgeSmoothShadow (el) {
	console.log('edge');
// var el = document.getElementById('c');
	var ctx = el.getContext('2d');
	var isDrawing;

	el.onmousedown = function(e) {
	  isDrawing = true;
	  ctx.beginPath();
	  ctx.lineWidth = 10;
	  ctx.lineJoin = ctx.lineCap = 'round';
	  ctx.shadowBlur = 1;
	  ctx.shadowColor = ctx.strokeStyle;
	  ctx.moveTo(e.clientX, e.clientY);
	};
	el.onmousemove = function(e) {
	  if (isDrawing) {
	    ctx.lineTo(e.clientX, e.clientY);
	    ctx.stroke();
	  }
	};
	el.onmouseup = function() {
	  isDrawing = false;
	};
  // body...
}
function modeSmoothConnection (elArg) {
	var ctx = elArg.getContext('2d');
	var isDrawing;

	elArg.onmousedown = function(e) {
	  ctx.beginPath();
	  isDrawing = true;
	  ctx.lineWidth = 10;
	  ctx.lineJoin = ctx.lineCap = 'round';
	  ctx.moveTo(e.clientX, e.clientY);
	};
	elArg.onmousemove = function(e) {
	  if (isDrawing) {
	    ctx.lineTo(e.clientX, e.clientY);
	    ctx.stroke();
	  }
	};
	elArg.onmouseup = function() {
	  isDrawing = false;
	};
}
function modePointBased (elArg) {
	var ctx = elArg.getContext('2d');

	// ctx.lineWidth = 10;
	ctx.lineJoin = ctx.lineCap = 'round';

	var isDrawing, points = [ ];

	elArg.onmousedown = function(e) {
	  isDrawing = true;
	  points.push({ x: e.clientX, y: e.clientY });
	};

	elArg.onmousemove = function(e) {
	  if (!isDrawing) return;

	  // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	  points.push({ x: e.clientX, y: e.clientY });

	  ctx.beginPath();
	  ctx.moveTo(points[0].x, points[0].y);
	  for (var i = 1; i < points.length; i++) {
	    ctx.lineTo(points[i].x, points[i].y);
	  }
	  ctx.stroke();
	};

	elArg.onmouseup = function() {
	  isDrawing = false;
	  points.length = 0;
	};	// body...
}
function modePointBasedShadow (elArg) {
	var ctx = elArg.getContext('2d');

	ctx.lineWidth = 10;
	ctx.lineJoin = ctx.lineCap = 'round';
	ctx.shadowBlur = 10;
	ctx.shadowColor = ctx.strokeStyle;

	var isDrawing, points = [ ];

	elArg.onmousedown = function(e) {
	  isDrawing = true;
	  points.push({ x: e.clientX, y: e.clientY });
	};

	elArg.onmousemove = function(e) {
	  if (!isDrawing) return;

	  // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	  points.push({ x: e.clientX, y: e.clientY });

	  ctx.beginPath();
	  ctx.moveTo(points[0].x, points[0].y);
	  for (var i = 1; i < points.length; i++) {
	    ctx.lineTo(points[i].x, points[i].y);
	  }
	  ctx.stroke();
	};

	elArg.onmouseup = function() {
	  isDrawing = false;
	  points.length = 0;
	};
}
function modeEdgeSmoothing (elArg) {
	var ctx = elArg.getContext('2d');
	var isDrawing;

	elArg.onmousedown = function(e) {
	  isDrawing = true;
	  ctx.moveTo(e.clientX, e.clientY);
	};
	elArg.onmousemove = function(e) {
	  if (isDrawing) {
	  	var lineWidth = 7*ctx.lineWidth;
	  	var lineWidth2 = 2*lineWidth;
	  	var lineWidth4 = 2*lineWidth2;
	  	console.log("lineWidth : ",lineWidth);
	    var radgrad = ctx.createRadialGradient(e.clientX,e.clientY,lineWidth,e.clientX,e.clientY,lineWidth2);
	    var color_alpha = chroma(ctx.strokeStyle).alpha(0.5).css();
	    var color_alpha2 = chroma(ctx.strokeStyle).alpha(0).css();
	    radgrad.addColorStop(0 	, ctx.strokeStyle);
	    radgrad.addColorStop(0.5, color_alpha);
	    radgrad.addColorStop(1 	, color_alpha2);
	    ctx.fillStyle = radgrad;
	    
	    ctx.fillRect(e.clientX - lineWidth2, e.clientY - lineWidth2, lineWidth4, lineWidth4);
	  }
	};
	elArg.onmouseup = function() {
	  isDrawing = false;
	};
}
function modeEdgeSmoothingEnhanced (elArg) {
	function distanceBetween(point1, point2) {
	  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
	}
	function angleBetween(point1, point2) {
	  return Math.atan2( point2.x - point1.x, point2.y - point1.y );
	}
	var ctx = elArg.getContext('2d');
	ctx.lineJoin = ctx.lineCap = 'round';

	var lineWidth = 4*ctx.lineWidth;
	var lineWidth2 = 2*lineWidth;
	var lineWidth4 = 2*lineWidth2;


	var isDrawing, lastPoint;

	elArg.onmousedown = function(e) {
	  isDrawing = true;
	  lastPoint = { x: e.clientX, y: e.clientY };
	};

	elArg.onmousemove = function(e) {
	  if (!isDrawing) return;
	  
	  var currentPoint = { x: e.clientX, y: e.clientY };
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
	};

	elArg.onmouseup = function() {
	  isDrawing = false;
	};
}
function modeBezierCurves (elArg) {
	function midPointBtw(p1, p2) {
	  return {
	    x: p1.x + (p2.x - p1.x) *0.5,
	    y: p1.y + (p2.y - p1.y) *0.5
	  };
	}

	var ctx = elArg.getContext('2d');

	ctx.lineWidth = 1;
	ctx.lineJoin = ctx.lineCap = 'round';

	var isDrawing, points = [ ];

	elArg.onmousedown = function(e) {
	  isDrawing = true;
	  points.length=0;
	  points.push({ x: e.clientX, y: e.clientY });
	};

	elArg.onmousemove = function(e) {
	  if (!isDrawing) return;
	  
	  points.push({ x: e.clientX, y: e.clientY });

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
	};

	elArg.onmouseup = function() {
	  isDrawing = false;
	  points.length = 0;
	};
}
function modeInclined (elArg) {
	// based on http://www.tricedesigns.com/2012/01/04/sketching-with-html5-canvas-and-brush-images/

	var img = new Image();
	// img.src = 'http://www.tricedesigns.com/wp-content/uploads/2012/01/brush2.png';
	img.src = 'http://jsrun.it/assets/4/4/C/u/44CuF.png';

	function distanceBetween(point1, point2) {
	  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
	}
	function angleBetween(point1, point2) {
	  return Math.atan2( point2.x - point1.x, point2.y - point1.y );
	}

	var ctx = elArg.getContext('2d');
	ctx.lineJoin = ctx.lineCap = 'round';

	var isDrawing, lastPoint;

	elArg.onmousedown = function(e) {
	  isDrawing = true;
	  lastPoint = { x: e.clientX, y: e.clientY };
	};

	elArg.onmousemove = function(e) {
	  if (!isDrawing) return;
	  
	  var currentPoint = { x: e.clientX, y: e.clientY };
	  var dist = distanceBetween(lastPoint, currentPoint);
	  var angle = angleBetween(lastPoint, currentPoint);
	  
	  for (var i = 0; i < dist; i++) {
	    x = lastPoint.x + (Math.sin(angle) * i) - 25;
	    y = lastPoint.y + (Math.cos(angle) * i) - 25;
	    ctx.drawImage(img, x, y);
	  }
	  
	  lastPoint = currentPoint;
	};

	elArg.onmouseup = function() {
	  isDrawing = false;
	};
}
function modeRotatinStrokes (elArg) {
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

	var ctx = elArg.getContext('2d');
	ctx.lineJoin = ctx.lineCap = 'round';

	var isDrawing, lastPoint;

	elArg.onmousedown = function(e) {
	  isDrawing = true;
	  lastPoint = { x: e.clientX, y: e.clientY };
	};

	elArg.onmousemove = function(e) {
	  if (!isDrawing) return;
	  
	  var currentPoint = { x: e.clientX, y: e.clientY };
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
	};

	elArg.onmouseup = function() {
	  isDrawing = false;
	};
}
function modeVariableSegment (elArg) {
	function getRandomInt(min, max) {
	  return 0|(Math.random() * (max - min + 1)) + min;
	}
	var ctx = elArg.getContext('2d');

	ctx.lineJoin = ctx.lineCap = 'round';
	/*ctx.shadowBlur = 10;
	ctx.shadowColor = 'rgb(0, 0, 0)';*/

	var isDrawing, points = [ ];

	elArg.onmousedown = function(e) {
	  isDrawing = true;
	  points.push({ 
	    x: e.clientX, 
	    y: e.clientY,
	    width: getRandomInt(3, 5)
	  });
	};

	elArg.onmousemove = function(e) {
	  if (!isDrawing) return;

	  //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	  
	  points.push({ 
	    x: e.clientX, 
	    y: e.clientY,
	    width: getRandomInt(3, 5)
	  });

	  for (var i = 1; i < points.length; i++) {
	    ctx.beginPath();
	    ctx.moveTo(points[i-1].x, points[i-1].y);
	    ctx.lineWidth = points[i].width;
	    ctx.lineTo(points[i].x, points[i].y);
	    ctx.stroke();
	  }
	};

	elArg.onmouseup = function() {
	  isDrawing = false;
	  points.length = 0;
	};
}
function modeMultipleStrokes (elArg) {
	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var ctx = elArg.getContext('2d');

	ctx.lineWidth = 1;
	ctx.lineWidth = 1;
	ctx.lineJoin = ctx.lineCap = 'round';
	// ctx.strokeStyle = 'purple';

	var isDrawing, lastPoint;

	elArg.onmousedown = function(e) {
	  isDrawing = true;
	  lastPoint = { x: e.clientX, y: e.clientY };
	};

	elArg.onmousemove = function(e) {
		if (!isDrawing) return;

		ctx.beginPath();

		ctx.strokeStyle = 'gray';
		ctx.moveTo(lastPoint.x - getRandomInt(0, 2), lastPoint.y - getRandomInt(0, 2));
		ctx.lineTo(e.clientX - getRandomInt(0, 2), e.clientY - getRandomInt(0, 2));
		ctx.stroke();


		ctx.strokeStyle = 'white';
	ctx.lineWidth = 1;
		ctx.moveTo(lastPoint.x, lastPoint.y);
		ctx.lineTo(e.clientX, e.clientY);
		ctx.stroke();
		var max = 2;
		var max2 = max*0.5;
	ctx.lineWidth = 1;
		ctx.strokeStyle = 'gray';
		ctx.moveTo(lastPoint.x + getRandomInt(0,2), lastPoint.y + getRandomInt(0,2));
		ctx.lineTo(e.clientX + getRandomInt(0,2), e.clientY + getRandomInt(0,2));
		ctx.stroke();

		lastPoint = { x: e.clientX, y: e.clientY };
	};

	elArg.onmouseup = function() {
		ctx.strokeStyle = 'white';
	  isDrawing = false;
	};
}
function modeMultipleStrokes2 (elArg) {
	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var ctx = elArg.getContext('2d');

	ctx.lineWidth = 1;
	ctx.lineWidth = 1;
	ctx.lineJoin = ctx.lineCap = 'round';
	// ctx.strokeStyle = 'purple';

	var isDrawing, lastPoint;

	elArg.onmousedown = function(e) {
	  isDrawing = true;
	  lastPoint = { x: e.clientX, y: e.clientY };
	};

	elArg.onmousemove = function(e) {
		if (!isDrawing) return;

		ctx.beginPath();

		ctx.strokeStyle = 'gray';
		ctx.moveTo(lastPoint.x - getRandomInt(0, 2), lastPoint.y - getRandomInt(0, 2));
		ctx.lineTo(e.clientX - getRandomInt(0, 2), e.clientY - getRandomInt(0, 2));
		ctx.stroke();


		ctx.strokeStyle = 'white';
	ctx.lineWidth = 1;
		ctx.moveTo(lastPoint.x, lastPoint.y);
		ctx.lineTo(e.clientX, e.clientY);
		ctx.stroke();
		var max = 2;
		var max2 = max*0.5;
	ctx.lineWidth = 1;
		ctx.strokeStyle = 'gray';
		ctx.moveTo(lastPoint.x + getRandomInt(-max2, max2), lastPoint.y + getRandomInt(-max2, max2));
		ctx.lineTo(e.clientX + getRandomInt(-max2, max2), e.clientY + getRandomInt(-max2, max2));
		ctx.stroke();

		lastPoint = { x: e.clientX, y: e.clientY };
	};

	elArg.onmouseup = function() {
		ctx.strokeStyle = 'white';
	  isDrawing = false;
	};
}
function modeThickBrush(elArg){
	var ctx = elArg.getContext('2d');

	ctx.lineWidth = 1;
	ctx.lineWidth = 10;
	ctx.lineJoin = ctx.lineCap = 'butt';

	var isDrawing, lastPoint;

	elArg.onmousedown = function(e) {
	  isDrawing = true;
	  lastPoint = { x: e.clientX, y: e.clientY };
	};

	elArg.onmousemove = function(e) {
	  if (!isDrawing) return;

	  ctx.beginPath();
	  ctx.moveTo(lastPoint.x, lastPoint.y);
	  ctx.lineTo(e.clientX, e.clientY);
	  ctx.stroke();
	  
	  ctx.moveTo(lastPoint.x - 5, lastPoint.y - 5);
	  ctx.lineTo(e.clientX - 5, e.clientY - 5);
	  ctx.stroke();
	  
	  lastPoint = { x: e.clientX, y: e.clientY };
	};

	elArg.onmouseup = function() {
	  isDrawing = false;
	};
}
function modeThickBrush2(elArg){
	var ctx = elArg.getContext('2d');

	ctx.lineWidth = 1;
	ctx.lineWidth = 10;
	ctx.lineJoin = ctx.lineCap = 'butt';

	var isDrawing, lastPoint;

	elArg.onmousedown = function(e) {
	  isDrawing = true;
	  lastPoint = { x: e.clientX, y: e.clientY };
	};

	elArg.onmousemove = function(e) {
	  if (!isDrawing) return;

	  ctx.beginPath();
	  // ctx.strokeStyle = 'gray';
	  ctx.moveTo(lastPoint.x, lastPoint.y);
	  ctx.lineTo(e.clientX, e.clientY);
	  ctx.stroke();
	  // ctx.beginPath();
	  // ctx.strokeStyle = 'white';
	  // ctx.lineWidth = 1;
	  // var factor = 100;
	  // ctx.moveTo(lastPoint.x - factor, lastPoint.y - factor);
	  // ctx.lineTo(e.clientX - factor, e.clientY - factor);
	  // ctx.stroke();
	  
	  lastPoint = { x: e.clientX, y: e.clientY };
	};

	elArg.onmouseup = function() {
	  isDrawing = false;
	};
}
function modeSlicedStroke (elArg) {
	var ctx = elArg.getContext('2d');

	ctx.lineWidth = 3;
	ctx.lineJoin = ctx.lineCap = 'round';

	var isDrawing, lastPoint;

	elArg.onmousedown = function(e) {
	  isDrawing = true;
	  lastPoint = { x: e.clientX, y: e.clientY };
	};

	elArg.onmousemove = function(e) {
	  if (!isDrawing) return;

	  ctx.beginPath();
	  
	  ctx.globalAlpha = 1;
	  ctx.moveTo(lastPoint.x, lastPoint.y);
	  ctx.lineTo(e.clientX, e.clientY);
	  ctx.stroke();
	  
	  ctx.moveTo(lastPoint.x - 4, lastPoint.y - 4);
	  ctx.lineTo(e.clientX - 4, e.clientY - 4);
	  ctx.stroke();
	  
	  ctx.moveTo(lastPoint.x - 2, lastPoint.y - 2);
	  ctx.lineTo(e.clientX - 2, e.clientY - 2);
	  ctx.stroke();
	  
	  ctx.moveTo(lastPoint.x + 2, lastPoint.y + 2);
	  ctx.lineTo(e.clientX + 2, e.clientY + 2);
	  ctx.stroke();
	  
	  ctx.moveTo(lastPoint.x + 4, lastPoint.y + 4);
	  ctx.lineTo(e.clientX + 4, e.clientY + 4);
	  ctx.stroke();
	    
	  lastPoint = { x: e.clientX, y: e.clientY };
	};

	elArg.onmouseup = function() {
	  isDrawing = false;
	};
}
function modeSlicedStrokesOpacity (elArg) {
	var ctx = elArg.getContext('2d');

	ctx.lineWidth = 3;
	ctx.lineJoin = ctx.lineCap = 'round';

	var isDrawing, lastPoint;

	elArg.onmousedown = function(e) {
	  isDrawing = true;
	  lastPoint = { x: e.clientX, y: e.clientY };
	};

	elArg.onmousemove = function(e) {
	  if (!isDrawing) return;

	  ctx.beginPath();
	  
	  ctx.globalAlpha = 1;
	  ctx.moveTo(lastPoint.x - 4, lastPoint.y - 4);
	  ctx.lineTo(e.clientX - 4, e.clientY - 4);
	  ctx.stroke();
	  
	  ctx.globalAlpha = 0.6;
	  ctx.moveTo(lastPoint.x - 2, lastPoint.y - 2);
	  ctx.lineTo(e.clientX - 2, e.clientY - 2);
	  ctx.stroke();
	  
	  ctx.globalAlpha = 0.4;
	  ctx.moveTo(lastPoint.x, lastPoint.y);
	  ctx.lineTo(e.clientX, e.clientY);
	  ctx.stroke();
	  
	  ctx.globalAlpha = 0.3;
	  ctx.moveTo(lastPoint.x + 2, lastPoint.y + 2);
	  ctx.lineTo(e.clientX + 2, e.clientY + 2);
	  ctx.stroke();
	  
	  ctx.globalAlpha = 0.2;
	  ctx.moveTo(lastPoint.x + 4, lastPoint.y + 4);
	  ctx.lineTo(e.clientX + 4, e.clientY + 4);
	  ctx.stroke();
	    
	  lastPoint = { x: e.clientX, y: e.clientY };
	};

	elArg.onmouseup = function() {
	  isDrawing = false;
	};
}
function modeMultipleLines (elArg) {
	function midPointBtw(p1, p2) {
	  return {
	    x: p1.x + (p2.x - p1.x) / 2,
	    y: p1.y + (p2.y - p1.y) / 2
	  };
	}

	var ctx = elArg.getContext('2d');

	ctx.lineWidth = 1;
	ctx.lineJoin = ctx.lineCap = 'round';

	var isDrawing, points = [ ];

	elArg.onmousedown = function(e) {
	  isDrawing = true;
	  points.push({ x: e.clientX, y: e.clientY });
	};

	elArg.onmousemove = function(e) {
	  if (!isDrawing) return;
	  
	  points.push({ x: e.clientX, y: e.clientY });
	  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	   
	  stroke(offsetPoints(-4));
	  stroke(offsetPoints(-2));
	  stroke(points);
	  stroke(offsetPoints(2));
	  stroke(offsetPoints(4));
	};

	function offsetPoints(val) {
	  var offsetPoints = [ ];
	  for (var i = 0; i < points.length; i++) {
	    offsetPoints.push({ 
	      x: points[i].x + val,
	      y: points[i].y + val
	    });
	  }
	  return offsetPoints;
	}

	function stroke(points) {
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
	}

	elArg.onmouseup = function() {
	  isDrawing = false;
	  points.length = 0;
	};
}
function modeMultipleLinesOpacity (elArg) {
	function midPointBtw(p1, p2) {
	  return {
	    x: p1.x + (p2.x - p1.x) / 2,
	    y: p1.y + (p2.y - p1.y) / 2
	  };
	}

	var ctx = elArg.getContext('2d');

	ctx.lineWidth = 1;
	ctx.lineJoin = ctx.lineCap = 'round';

	var isDrawing, points = [ ];

	elArg.onmousedown = function(e) {
	  isDrawing = true;
	  points.push({ x: e.clientX, y: e.clientY });
	};

	elArg.onmousemove = function(e) {
	  if (!isDrawing) return;
	  
	  points.push({ x: e.clientX, y: e.clientY });
	  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	  var current_stroke_style = ctx.strokeStyle;
	  ctx.strokeStyle = chroma(current_stroke_style).alpha(1).css();
	  stroke(offsetPoints(-4));
	  ctx.strokeStyle = chroma(current_stroke_style).alpha(0.8).css();
	  stroke(offsetPoints(-2));
	  ctx.strokeStyle = chroma(current_stroke_style).alpha(0.6).css();
	  stroke(points);
	  ctx.strokeStyle = chroma(current_stroke_style).alpha(0.4).css();
	  stroke(offsetPoints(2));
	  ctx.strokeStyle = chroma(current_stroke_style).alpha(0.2).css();
	  stroke(offsetPoints(4));
	};

	function offsetPoints(val) {
	  var offsetPoints = [ ];
	  for (var i = 0; i < points.length; i++) {
	    offsetPoints.push({ 
	      x: points[i].x + val,
	      y: points[i].y + val
	    });
	  }
	  return offsetPoints;
	}

	function stroke(points) {
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
	}

	elArg.onmouseup = function() {
	  isDrawing = false;
	  points.length = 0;
	};
}
function modeStampBasic (elArg) {
	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	// var el = document.getElementById('c');
	var ctx = elArg.getContext('2d');

	ctx.lineJoin = ctx.lineCap = 'round';
	ctx.fillStyle = 'red';

	var isDrawing, points = [ ], radius = 15;

	elArg.onmousedown = function(e) {
	  isDrawing = true;
	  points.push({ x: e.clientX, y: e.clientY });
	};
	elArg.onmousemove = function(e) {
	  if (!isDrawing) return;
	  
	  points.push({ x: e.clientX, y: e.clientY });
	  
	  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	  for (var i = 0; i < points.length; i++) {
	    ctx.beginPath();
	    ctx.arc(points[i].x, points[i].y, radius, false, Math.PI * 2, false);
	    ctx.fill();
	    ctx.stroke();
	  }
	};
	elArg.onmouseup = function() {
	  isDrawing = false;
	  points.length = 0;
	};
}
function modeTrailEffect (elArg) {
	function distanceBetween(point1, point2) {
	  return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
	}
	function angleBetween(point1, point2) {
	  return Math.atan2( point2.x - point1.x, point2.y - point1.y );
	}

	var ctx = elArg.getContext('2d');
	ctx.fillStyle = 'red';
	ctx.strokeStyle = '#333';

	var isDrawing, lastPoint;

	elArg.onmousedown = function(e) {
	  isDrawing = true;
	  lastPoint = { x: e.clientX, y: e.clientY };
	};

	elArg.onmousemove = function(e) {
	  if (!isDrawing) return;
	  
	  var currentPoint = { x: e.clientX, y: e.clientY };
	  var dist = distanceBetween(lastPoint, currentPoint);
	  var angle = angleBetween(lastPoint, currentPoint);
	  
	  for (var i = 0; i < dist; i+=5) {
	    x = lastPoint.x + (Math.sin(angle) * i) - 25;
	    y = lastPoint.y + (Math.cos(angle) * i) - 25;
	    ctx.beginPath();
	    ctx.arc(x+10, y+10, 20, false, Math.PI * 2, false);
	    ctx.closePath();
	    ctx.fill();
	    ctx.stroke();
	  }
	  
	  lastPoint = currentPoint;
	};

	elArg.onmouseup = function() {
	  isDrawing = false;
	};
}
function modeRandomRadiusOpacity (elArg) {
	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var ctx = elArg.getContext('2d');

	ctx.lineJoin = ctx.lineCap = 'round';
	ctx.fillStyle = 'red';

	var isDrawing, points = [ ], radius = 15;

	elArg.onmousedown = function(e) {
	  isDrawing = true;
	  points.push({ 
	    x: e.clientX, 
	    y: e.clientY,
	    radius: getRandomInt(10, 30),
	    opacity: Math.random()
	  });
	};
	elArg.onmousemove = function(e) {
	  if (!isDrawing) return;
	  
	  points.push({ 
	    x: e.clientX, 
	    y: e.clientY,
	    radius: getRandomInt(5, 20),
	    opacity: Math.random()
	  });
	  
	  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	  for (var i = 0; i < points.length; i++) {
	    ctx.beginPath();
	    ctx.globalAlpha = points[i].opacity;
	    ctx.arc(
	      points[i].x, points[i].y, points[i].radius, 
	      false, Math.PI * 2, false);
	    ctx.fill();
	  }
	};
	elArg.onmouseup = function() {
	  isDrawing = false;
	  points.length = 0;
	};
}
function modeShapes (elArg) {
	// http://carisenda.com/blog/2012/howto-draw-a-star-with-canvas.html
	function drawStar(x, y) {
	  var length = 15;
	  ctx.save();
	  ctx.translate(x, y);
	  ctx.beginPath();
	  ctx.rotate((Math.PI * 1 / 10));
	  for (var i = 5; i--;) {
	    ctx.lineTo(0, length);
	    ctx.translate(0, length);
	    ctx.rotate((Math.PI * 2 / 10));
	    ctx.lineTo(0, -length);
	    ctx.translate(0, -length);
	    ctx.rotate(-(Math.PI * 6 / 10));
	  }
	  ctx.lineTo(0, length);
	  ctx.closePath();
	  ctx.stroke();
	  ctx.restore();
	}

	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var el = document.getElementById('c');
	var ctx = el.getContext('2d');

	ctx.lineJoin = ctx.lineCap = 'round';
	ctx.fillStyle = 'red';

	var isDrawing, points = [ ], radius = 15;

	el.onmousedown = function(e) {
	  isDrawing = true;
	  points.push({ x: e.clientX, y: e.clientY });
	};
	el.onmousemove = function(e) {
	  if (!isDrawing) return;
	  
	  points.push({ x: e.clientX, y: e.clientY });
	  
	  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	  for (var i = 0; i < points.length; i++) {
	    drawStar(points[i].x, points[i].y);
	  }
	};
	el.onmouseup = function() {
	  isDrawing = false;
	  points.length = 0;
	};
}
function modeShapesRotation (elArg) {
	// http://carisenda.com/blog/2012/howto-draw-a-star-with-canvas.html
	function drawStar(x, y, angle) {
	  var length = 15;
	  ctx.save();
	  ctx.translate(x, y);
	  ctx.beginPath();
	  ctx.rotate(Math.PI / 180 * angle);
	  for (var i = 5; i--;) {
	    ctx.lineTo(0, length);
	    ctx.translate(0, length);
	    ctx.rotate((Math.PI * 2 / 10));
	    ctx.lineTo(0, -length);
	    ctx.translate(0, -length);
	    ctx.rotate(-(Math.PI * 6 / 10));
	  }
	  ctx.lineTo(0, length);
	  ctx.closePath();
	  ctx.stroke();
	  ctx.restore();
	}

	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var ctx = elArg.getContext('2d');

	ctx.lineJoin = ctx.lineCap = 'round';
	ctx.strokeStyle = 'purple';

	var isDrawing, points = [ ], radius = 15;

	elArg.onmousedown = function(e) {
	  isDrawing = true;
	  points.push({ x: e.clientX, y: e.clientY, angle: getRandomInt(0, 180) });
	};
	elArg.onmousemove = function(e) {
	  if (!isDrawing) return;
	  
	  points.push({ x: e.clientX, y: e.clientY, angle: getRandomInt(0, 180) });
	  
	  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	  for (var i = 0; i < points.length; i++) {
	    drawStar(points[i].x, points[i].y, points[i].angle);
	  }
	};
	elArg.onmouseup = function() {
	  isDrawing = false;
	  points.length = 0;
	};
}
function modeRandomizeEverything (elArg) {
	// http://carisenda.com/blog/2012/howto-draw-a-star-with-canvas.html
	function drawStar(options) {
	  var length = 15;
	  ctx.save();
	  ctx.translate(options.x, options.y);
	  ctx.beginPath();
	  ctx.globalAlpha = options.opacity;
	  ctx.rotate(Math.PI / 180 * options.angle);
	  ctx.scale(options.scale, options.scale);
	  ctx.strokeStyle = options.color;
	  ctx.lineWidth = options.width;
	  for (var i = 5; i--;) {
	    ctx.lineTo(0, length);
	    ctx.translate(0, length);
	    ctx.rotate((Math.PI * 2 / 10));
	    ctx.lineTo(0, -length);
	    ctx.translate(0, -length);
	    ctx.rotate(-(Math.PI * 6 / 10));
	  }
	  ctx.lineTo(0, length);
	  ctx.closePath();
	  ctx.stroke();
	  ctx.restore();
	}

	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var ctx = elArg.getContext('2d');

	var isDrawing, points = [ ], radius = 15;

	function addRandomPoint(e) {
	  points.push({ 
	    x: e.clientX, 
	    y: e.clientY, 
	    angle: getRandomInt(0, 180),
	    width: getRandomInt(1,10),
	    opacity: Math.random(),
	    scale: getRandomInt(1, 20) / 10,
	    color: ('rgb('+getRandomInt(0,255)+','+getRandomInt(0,255)+','+getRandomInt(0,255)+')')
	  });
	}

	elArg.onmousedown = function(e) {
	  isDrawing = true;
	  addRandomPoint(e);
	};
	elArg.onmousemove = function(e) {
	  if (!isDrawing) return;
	  
	  addRandomPoint(e);
	  
	  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	  for (var i = 0; i < points.length; i++) {
	    drawStar(points[i]);
	  }
	};
	elArg.onmouseup = function() {
	  isDrawing = false;
	  points.length = 0;
	};
}
function modeColoredPixels (elArg) {
	function drawPixels(x, y) {
	  for (var i = -10; i < 10; i+= 4) {
	    for (var j = -10; j < 10; j+= 4) {
	      if (Math.random() > 0.5) {
	        ctx.fillStyle = ['#b54c9a', '#f57a00', '#F2EA40', '#151515', 
	                         '#F5F5F5', '#ff3895', '#65e0e0'][getRandomInt(0,6)];
	        ctx.fillRect(x+i, y+j, 4, 4);
	      }
	    }
	  }
	}

	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	var ctx = elArg.getContext('2d');

	ctx.lineJoin = ctx.lineCap = 'round';
	var isDrawing, lastPoint;

	elArg.onmousedown = function(e) {
	  isDrawing = true;
	  lastPoint = { x: e.clientX, y: e.clientY };
	};
	elArg.onmousemove = function(e) {
	  if (!isDrawing) return;
	  
	  drawPixels(e.clientX, e.clientY);
	  
	  lastPoint = { x: e.clientX, y: e.clientY };
	};
	elArg.onmouseup = function() {
	  isDrawing = false;
	};
}
function modePatternBased (elArg) {
	function midPointBtw(p1, p2) {
	  return {
	    x: p1.x + (p2.x - p1.x) / 2,
	    y: p1.y + (p2.y - p1.y) / 2
	  };
	}
	function getPattern() {
	  var patternCanvas = document.createElement('canvas'),
	      dotWidth = 20,
	      dotDistance = 5,
	      patternCtx = patternCanvas.getContext('2d');

	  patternCanvas.width = patternCanvas.height = dotWidth + dotDistance;

	  patternCtx.fillStyle = '#FF3895';
	  patternCtx.beginPath();
	  patternCtx.arc(dotWidth / 2, dotWidth / 2, dotWidth / 2, 0, Math.PI * 2, false);
	  patternCtx.closePath();
	  patternCtx.fill();
	  return ctx.createPattern(patternCanvas, 'repeat');
	}

	var ctx = elArg.getContext('2d');

	ctx.lineWidth = 25;
	ctx.lineJoin = ctx.lineCap = 'round';
	ctx.strokeStyle = getPattern();

	var isDrawing, points = [ ];

	elArg.onmousedown = function(e) {
	  isDrawing = true;
	  points.push({ x: e.clientX, y: e.clientY });
	};

	elArg.onmousemove = function(e) {
	  if (!isDrawing) return;
	  
	  points.push({ x: e.clientX, y: e.clientY });

	  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	  
	  var p1 = points[0];
	  var p2 = points[1];
	  
	  ctx.beginPath();
	  ctx.moveTo(p1.x, p1.y);

	  for (var i = 1, len = points.length; i < len; i++) {
	    var midPoint = midPointBtw(p1, p2);
	    ctx.quadraticCurveTo(p1.x, p1.y, midPoint.x, midPoint.y);
	    p1 = points[i];
	    p2 = points[i+1];
	  }
	  ctx.lineTo(p1.x, p1.y);
	  ctx.stroke();
	};

	elArg.onmouseup = function() {
	  isDrawing = false;
	  points.length = 0;
	};
}
function modeLinesPattern (elArg) {
	function midPointBtw(p1, p2) {
	  return {
	    x: p1.x + (p2.x - p1.x) / 2,
	    y: p1.y + (p2.y - p1.y) / 2
	  };
	}
	function getPattern() {
	  var patternCanvas = document.createElement('canvas'),
	      dotWidth = 20,
	      dotDistance = 5,
	      ctx = patternCanvas.getContext('2d');

	  patternCanvas.width = patternCanvas.height = 10;
	  ctx.strokeStyle = '#65e0e0';
	  ctx.lineWidth = 5;
	  ctx.beginPath();
	  ctx.moveTo(0, 5);
	  ctx.lineTo(10, 5);
	  ctx.closePath();
	  ctx.stroke();
	  return ctx.createPattern(patternCanvas, 'repeat');
	}

	var ctx = elArg.getContext('2d');

	ctx.lineWidth = 25;
	ctx.lineJoin = ctx.lineCap = 'round';
	ctx.strokeStyle = getPattern();

	var isDrawing, points = [ ];

	elArg.onmousedown = function(e) {
	  isDrawing = true;
	  points.push({ x: e.clientX, y: e.clientY });
	};

	elArg.onmousemove = function(e) {
	  if (!isDrawing) return;
	  
	  points.push({ x: e.clientX, y: e.clientY });

	  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	  
	  var p1 = points[0];
	  var p2 = points[1];
	  
	  ctx.beginPath();
	  ctx.moveTo(p1.x, p1.y);

	  for (var i = 1, len = points.length; i < len; i++) {
	    var midPoint = midPointBtw(p1, p2);
	    ctx.quadraticCurveTo(p1.x, p1.y, midPoint.x, midPoint.y);
	    p1 = points[i];
	    p2 = points[i+1];
	  }
	  ctx.lineTo(p1.x, p1.y);
	  ctx.stroke();
	};

	elArg.onmouseup = function() {
	  isDrawing = false;
	  points.length = 0;
	};
}
function modeLinesPatternsDoubleColor (elArg) {
	function midPointBtw(p1, p2) {
	  return {
	    x: p1.x + (p2.x - p1.x) / 2,
	    y: p1.y + (p2.y - p1.y) / 2
	  };
	}
	function getPattern() {
	  var patternCanvas = document.createElement('canvas'),
	      dotWidth = 20,
	      dotDistance = 5,
	      ctx = patternCanvas.getContext('2d');

	  patternCanvas.width = 10; patternCanvas.height = 20;
	  ctx.fillStyle = '#F57A00';
	  ctx.fillRect(0, 0, 5, 20);
	  ctx.fillStyle = '#F2EA40';
	  ctx.fillRect(5, 0, 10, 20);
	  return ctx.createPattern(patternCanvas, 'repeat');
	}

	var ctx = elArg.getContext('2d');

	ctx.lineWidth = 25;
	ctx.lineJoin = ctx.lineCap = 'round';
	ctx.strokeStyle = getPattern();

	var isDrawing, points = [ ];

	elArg.onmousedown = function(e) {
	  isDrawing = true;
	  points.push({ x: e.clientX, y: e.clientY });
	};

	elArg.onmousemove = function(e) {
	  if (!isDrawing) return;
	  
	  points.push({ x: e.clientX, y: e.clientY });

	  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	  
	  var p1 = points[0];
	  var p2 = points[1];
	  
	  ctx.beginPath();
	  ctx.moveTo(p1.x, p1.y);

	  for (var i = 1, len = points.length; i < len; i++) {
	    var midPoint = midPointBtw(p1, p2);
	    ctx.quadraticCurveTo(p1.x, p1.y, midPoint.x, midPoint.y);
	    p1 = points[i];
	    p2 = points[i+1];
	  }
	  ctx.lineTo(p1.x, p1.y);
	  ctx.stroke();
	};

	elArg.onmouseup = function() {
	  isDrawing = false;
	  points.length = 0;
	};
}
function modeLinesPatternRaindow (elArg) {
	function midPointBtw(p1, p2) {
	  return {
	    x: p1.x + (p2.x - p1.x) / 2,
	    y: p1.y + (p2.y - p1.y) / 2
	  };
	}
	function getPattern() {
	  var patternCanvas = document.createElement('canvas'),
	      dotWidth = 20,
	      dotDistance = 5,
	      ctx = patternCanvas.getContext('2d');

	  patternCanvas.width = 35; patternCanvas.height = 20;
	  ctx.fillStyle = 'red';
	  ctx.fillRect(0, 0, 5, 20);
	  ctx.fillStyle = 'orange';
	  ctx.fillRect(5, 0, 10, 20);
	  ctx.fillStyle = 'yellow';
	  ctx.fillRect(10, 0, 15, 20);
	  ctx.fillStyle = 'green';
	  ctx.fillRect(15, 0, 20, 20);
	  ctx.fillStyle = 'lightblue';
	  ctx.fillRect(20, 0, 25, 20);
	  ctx.fillStyle = 'blue';
	  ctx.fillRect(25, 0, 30, 20);
	  ctx.fillStyle = 'purple';
	  ctx.fillRect(30, 0, 35, 20);
	  return ctx.createPattern(patternCanvas, 'repeat');
	}

	var ctx = elArg.getContext('2d');

	ctx.lineWidth = 25;
	ctx.lineJoin = ctx.lineCap = 'round';
	ctx.strokeStyle = getPattern();

	var isDrawing, points = [ ];

	elArg.onmousedown = function(e) {
	  isDrawing = true;
	  points.push({ x: e.clientX, y: e.clientY });
	};

	elArg.onmousemove = function(e) {
	  if (!isDrawing) return;
	  
	  points.push({ x: e.clientX, y: e.clientY });

	  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	  
	  var p1 = points[0];
	  var p2 = points[1];
	  
	  ctx.beginPath();
	  ctx.moveTo(p1.x, p1.y);

	  for (var i = 1, len = points.length; i < len; i++) {
	    var midPoint = midPointBtw(p1, p2);
	    ctx.quadraticCurveTo(p1.x, p1.y, midPoint.x, midPoint.y);
	    p1 = points[i];
	    p2 = points[i+1];
	  }
	  ctx.lineTo(p1.x, p1.y);
	  ctx.stroke();
	};

	elArg.onmouseup = function() {
	  isDrawing = false;
	  points.length = 0;
	};
}
function modeLinesPatternImage (elArg) {
	function midPointBtw(p1, p2) {
	  return {
	    x: p1.x + (p2.x - p1.x) / 2,
	    y: p1.y + (p2.y - p1.y) / 2
	  };
	}

	function getPattern() {
	  return ctx.createPattern(img, 'repeat');
	}


	var ctx = elArg.getContext('2d');

	ctx.lineWidth = 25;
	ctx.lineJoin = ctx.lineCap = 'round';

	var img = new Image;
	img.onload = function() {
	  ctx.strokeStyle = getPattern();
	};
	// img.src = 'http://i.imgur.com/huy6X9t.png';
	img.src = 'pattern.png';

	var isDrawing, points = [ ];

	elArg.onmousedown = function(e) {
	  isDrawing = true;
	  points.push({ x: e.clientX, y: e.clientY });
	};

	elArg.onmousemove = function(e) {
	  if (!isDrawing) return;
	  
	  points.push({ x: e.clientX, y: e.clientY });

	  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	  
	  var p1 = points[0];
	  var p2 = points[1];
	  
	  ctx.beginPath();
	  ctx.moveTo(p1.x, p1.y);

	  for (var i = 1, len = points.length; i < len; i++) {
	    var midPoint = midPointBtw(p1, p2);
	    ctx.quadraticCurveTo(p1.x, p1.y, midPoint.x, midPoint.y);
	    p1 = points[i];
	    p2 = points[i+1];
	  }
	  ctx.lineTo(p1.x, p1.y);
	  ctx.stroke();
	};

	elArg.onmouseup = function() {
	  isDrawing = false;
	  points.length = 0;
	};
}
function modeSpray (elArg) {
	var ctx = elArg.getContext('2d');
	var isDrawing;
	var density = 50;
	ctx.fillStyle = global_styles.stroke_style;

	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	elArg.onmousedown = function(e) {
	  isDrawing = true;
	  ctx.lineWidth = 10;
	  ctx.lineJoin = ctx.lineCap = 'round';
	  ctx.moveTo(e.clientX, e.clientY);
	};
	elArg.onmousemove = function(e) {
	  if (isDrawing) {
	    for (var i = density; i--; ) {
	      var radius = 20;
	      var offsetX = getRandomInt(-radius, radius);
	      var offsetY = getRandomInt(-radius, radius);
	      ctx.fillRect(e.clientX + offsetX, e.clientY + offsetY, 1, 1);
	    }
	  }
	};
	elArg.onmouseup = function() {
	  isDrawing = false;
	};
}
function modeSprayTimeBased (elArg) {
	var ctx = elArg.getContext('2d');
	var clientX, clientY, timeout;
	var density = 50;
	ctx.fillStyle = global_styles.stroke_style;

	function getRandomInt(min, max) {
	  return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	elArg.onmousedown = function(e) {
	  ctx.lineJoin = ctx.lineCap = 'round';
	  clientX = e.clientX;
	  clientY = e.clientY;
	  
	  timeout = setTimeout(function draw() {
	    for (var i = density; i--; ) {
	      var radius = 30;
	      var offsetX = getRandomInt(-radius, radius);
	      var offsetY = getRandomInt(-radius, radius);
	      ctx.fillRect(clientX + offsetX, clientY + offsetY, 1, 1);
	    }
	    if (!timeout) return;
	    timeout = setTimeout(draw, 50);
	  }, 50);
	};
	elArg.onmousemove = function(e) {
	  clientX = e.clientX;
	  clientY = e.clientY;
	};
	elArg.onmouseup = function() {
	  clearTimeout(timeout);
	};
}
function modeSprayRoundDistribution (elArg) {
	var ctx = elArg.getContext('2d');
	var clientX, clientY, timeout;
	var density = 50;
	ctx.fillStyle = global_styles.stroke_style;

	function getRandomFloat(min, max) {
	  return Math.random() * (max - min) + min;
	}

	elArg.onmousedown = function(e) {
	  ctx.lineJoin = ctx.lineCap = 'round';
	  clientX = e.clientX;
	  clientY = e.clientY;
	  
	  timeout = setTimeout(function draw() {
	    for (var i = density; i--; ) {
	      var angle = getRandomFloat(0, Math.PI*2);
	      var radius = getRandomFloat(0, 20);
	      ctx.fillRect(
	        clientX + radius * Math.cos(angle),
	        clientY + radius * Math.sin(angle), 
	        1, 1);
	    }
	    if (!timeout) return;
	    timeout = setTimeout(draw, 50);
	  }, 50);
	};
	elArg.onmousemove = function(e) {
	  clientX = e.clientX;
	  clientY = e.clientY;
	};
	elArg.onmouseup = function() {
	  clearTimeout(timeout);
	};
}
function modeSprayRandomSize (elArg) {
	var ctx = elArg.getContext('2d');
	var clientX, clientY, timeout;
	var density = 40;
	ctx.strokeStyle = global_styles.stroke_style;

	function getRandomFloat(min, max) {
	  return Math.random() * (max - min) + min;
	}

	elArg.onmousedown = function(e) {
	  ctx.lineJoin = ctx.lineCap = 'round';
	  clientX = e.clientX;
	  clientY = e.clientY;
	  
	  timeout = setTimeout(function draw() {
	    for (var i = density; i--; ) {
	      var angle = getRandomFloat(0, Math.PI * 2);
	      var radius = getRandomFloat(0, 30);
	      ctx.globalAlpha = Math.random();
	      ctx.fillRect(
	        clientX + radius * Math.cos(angle),
	        clientY + radius * Math.sin(angle), 
	        getRandomFloat(1, 2), getRandomFloat(1, 2));
	    }
	    if (!timeout) return;
	    timeout = setTimeout(draw, 50);
	  }, 50);
	};
	elArg.onmousemove = function(e) {
	  clientX = e.clientX;
	  clientY = e.clientY;
	};
	elArg.onmouseup = function() {
	  clearTimeout(timeout);
	};
}
function modeNeighbor (elArg) {
	var ctx = elArg.getContext('2d');
	ctx.strokeStyle = global_styles.stroke_style;

	ctx.lineWidth = 1;
	ctx.lineJoin = ctx.lineCap = 'round';

	var isDrawing, points = [ ];

	elArg.onmousedown = function(e) {
	  isDrawing = true;
	  points.push({ x: e.clientX, y: e.clientY });
	};

	elArg.onmousemove = function(e) {
	  if (!isDrawing) return;

	  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	  points.push({ x: e.clientX, y: e.clientY });

	  ctx.beginPath();
	  ctx.moveTo(points[0].x, points[0].y);
	  for (var i = 1; i < points.length; i++) {
	    ctx.lineTo(points[i].x, points[i].y);
	    var nearPoint = points[i-5];
	    if (nearPoint) {
	      ctx.moveTo(nearPoint.x, nearPoint.y);
	      ctx.lineTo(points[i].x, points[i].y);
	    }
	  }
	  ctx.stroke();
	};

	elArg.onmouseup = function() {
	  isDrawing = false;
	  points.length = 0;
	};
}
function modeNeighborNearby (elArg) {
	var ctx = elArg.getContext('2d');
	ctx.strokeStyle = global_styles.stroke_style;

	ctx.lineWidth = 1;
	ctx.lineJoin = ctx.lineCap = 'round';

	var isDrawing, points = [ ];

	elArg.onmousedown = function(e) {
	  points = [ ];
	  isDrawing = true;
	  points.push({ x: e.clientX, y: e.clientY });
	};

	elArg.onmousemove = function(e) {
	  if (!isDrawing) return;

	  // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	  points.push({ x: e.clientX, y: e.clientY });

	  ctx.beginPath();
	  ctx.moveTo(points[points.length - 2].x, points[points.length - 2].y);
	  ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
	  ctx.stroke();
	  
	  for (var i = 0, len = points.length; i < len; i++) {
	    dx = points[i].x - points[points.length-1].x;
	    dy = points[i].y - points[points.length-1].y;
	    d = dx * dx + dy * dy;

	    if (d < 1000) {
	      ctx.beginPath();
	      ctx.strokeStyle = chroma(ctx.strokeStyle).alpha(0.3).css();
	      ctx.moveTo( points[points.length-1].x + (dx * 0.2), points[points.length-1].y + (dy * 0.2));
	      ctx.lineTo( points[i].x - (dx * 0.2), points[i].y - (dy * 0.2));
	      ctx.stroke();
	    }
	  }
	};

	elArg.onmouseup = function() {
	  isDrawing = false;
	  points.length = 0;
	};
}
function modeNeighborFur (elArg) {
	var ctx = elArg.getContext('2d');
	ctx.strokeStyle = global_styles.stroke_style;

	ctx.lineWidth = 1;
	ctx.lineJoin = ctx.lineCap = 'round';

	var isDrawing, points = [ ];

	elArg.onmousedown = function(e) {
	  points = [ ];
	  isDrawing = true;
	  points.push({ x: e.clientX, y: e.clientY });
	};

	elArg.onmousemove = function(e) {
	  if (!isDrawing) return;

	  //ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	  points.push({ x: e.clientX, y: e.clientY });

	  ctx.beginPath();
	  ctx.moveTo(points[points.length - 2].x, points[points.length - 2].y);
	  ctx.lineTo(points[points.length - 1].x, points[points.length - 1].y);
	  ctx.stroke();
	  
	  for (var i = 0, len = points.length; i < len; i++) {
	    dx = points[i].x - points[points.length-1].x;
	    dy = points[i].y - points[points.length-1].y;
	    d = dx * dx + dy * dy;

	    if (d < 2000 && Math.random() > d / 2000) {
	      ctx.beginPath();
	      ctx.strokeStyle = chroma(ctx.strokeStyle).alpha(0.3).css();
	      ctx.moveTo( points[points.length-1].x + (dx * 0.5), points[points.length-1].y + (dy * 0.5));
	      ctx.lineTo( points[points.length-1].x - (dx * 0.5), points[points.length-1].y - (dy * 0.5));
	      ctx.stroke();
	    }
	  }
	};

	elArg.onmouseup = function() {
	  isDrawing = false;
	  points.length = 0;
	};
}