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

