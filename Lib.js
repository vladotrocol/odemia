/* Odemia Library */
/* Copyright Vlad Otrocol */

/*------------------------------------------------*/

// Get Html Elements From Source
	function get_html(sources){
		for(var src in sources){
			sources[src]  = document.getElementById(src);
		}
	};

// Load all images from sources
	function load_images(sources, callback){
		var loadedImages = 0;
		var numImages = 0;
		for (var src in sources) {
			numImages++;
		}
		for (var src in sources) {
			global.images[src] = new Image();
			global.images[src].onload = function(){
				if (++loadedImages >= numImages) {
					callback(global.images);
				}
			};
			global.images[src].src = sources[src];
		}
	};

// Resize Canvas
	function resize_canvas(canvas, w, h){
		canvas.height = h;
		canvas.width = w;
	};

// Position Elements
	function position_element(element, x, y){
		element.style.position = "absolute";
		element.style.top = y + "px";
		element.style.left = x + "px";
	};

// Get 2D Context For
	function context_for(canvas){
		return canvas.getContext("2d");
	};

// Draw Rectangle
	function draw_rect(ctx, x, y, w, h, fill){
		ctx.fillStyle = fill;
		if(w=="auto")
			w=window.innerWidth;
		if(h=="auto")
			h=window.innerHeight;
		ctx.fillRect(x, y, w, h);
	};

// Draw Circle
	function draw_circle(ctx, x, y, r, fill){
		ctx.beginPath();
		ctx.arc(x, y, r, 0, 2*Math.PI, false);
		ctx.closePath();
		ctx.fillStyle = fill;
		ctx.fill();
	};

// Load all images from sources
	function load_images(mainObj, sources, callback){
		var loadedImages = 0;
		var numImages = 0;
		for (var src in sources) {
			numImages++;
		}
		for (var src in sources) {
			mainObj.images[src] = new Image();
			mainObj.images[src].onload = function(){
				if (++loadedImages >= numImages) {
					callback(mainObj.images);
				}
			};
			mainObj.images[src].src = sources[src];
		}
	};

//Get Mouse Position Whithin Layer(Canvas)
	function getMouse(e) {
		var x, y;
		if (e.layerX || e.layerY) {
			x = e.layerX;
			y = e.layerY;
		}
		else {
			x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}				
		return {x:x, y:y};
	};