/* Omnis Library */
/* Copyright Vlad Otrocol */
/*------------------------------------------------*/

// Get Html Elements From Source
	function get_html(sources){
		for(var src in sources){
			sources[src]  = document.getElementById(src);
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

// Style Canvas
	function style_canvas(main, which, x, y, w, h){
		var canvas = main.html["canvas"+which];
		resize_canvas(canvas, w, h);
		main[which+"Ctx"] = context_for(canvas);
		position_element(canvas, 0, 0);
	};