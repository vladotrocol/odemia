/* Odemia Canvas Object */
/* Copyright Vlad Otrocol */

/*------------------------------------------------*/

// The standard canvas object
	function CanvasObj(canvas, x, y, w, h, fill){
		this.x = x||0;
		this.y = y||0;
		this.w = w||0;
		this.h = h||0;
		this.objects = [];
		this.ctx =  context_for(canvas);
		this.init(canvas, fill);
	};

// Initial set-up of the canvas
	CanvasObj.prototype.init = function(canvas, fill){
		position_element(canvas, this.x, this.y);
		resize_canvas(canvas, this.w, this.h);
		draw_rect(this.ctx, 0, 0, this.w, this.h, fill);
	};

// Insert a shape into canvas
	CanvasObj.prototype.add_shape = function(shape) {
		this.objects.push(shape);
	};

// Draw all objects on canvas
	CanvasObj.prototype.draw = function(){
		for(var i=0; i<this.objects.length;i++){
			this.objects[i].draw(this.ctx);
		}
	};
