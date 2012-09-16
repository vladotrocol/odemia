/* Odemia Object Types On Canvas*/
/* Copyright Vlad Otrocol */

/*------------------------------------------------*/

// Rectangle shape
	// Constructor
		function R(x, y, w, h, fill){
			this.x = x||0;
			this.y = y||0;
			this.w = w||0;
			this.h = h||0;
			this.fill = fill||"fff";
			this.type = "rect";
		};
	// Draw Rectangle
		R.prototype.draw = function(ctx){
			draw_rect(ctx, this.x, this.y, this.w, this.h, this.fill);
		};

// Circle shape
	// Constructor
		function C(x, y, r, fill){
			this.x = x||0;
			this.y = y||0;
			this.r = r||0;
			this.fill = fill||"#fff";
			this.type = "circle";
		};
	// Draw circle
		C.prototype.draw = function(ctx){
			draw_circle(ctx, this.x, this.y, this.r, this.fill);
		};

// Image shape
	// Constructor
		function I(x, y, w, h, img){
			this.x = x||0;
			this.y = y||0;
			this.w = w||0;
			this.h = h||0;
			this.img = img||null;
			this.type = "image";
		};
	// Draw image
	I.prototype.draw = function(ctx){
		ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
	};

// Text shape
	// Constructor
		function T(x, y, size, text){
			this.x = x||0;
			this.y = y||0;
			this.size = size||0;
			this.text = text||"";
			this.type = "text";
		};

	// Draw text
		T.prototype.draw=function(ctx){
		ctx.fillStyle    = '#ff0000';
		ctx.font         = "italic "+ this.size +"px sans-serif";
		ctx.textBaseline = 'top';
		ctx.fillText  (this.text,this.x, this.y);
	}