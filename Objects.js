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
		function I(x, y, w, h, name){
			this.x = x||0;
			this.y = y||0;
			this.w = w||0;
			this.h = h||0;
			this.name = name||"";
			this.type = "image";
		};
	// Draw Image
	I.prototype.draw = function(ctx){
		ctx.drawImage(this.x, this.y, this.w, this.h);
	};