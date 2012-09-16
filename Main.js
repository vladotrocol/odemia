/* Odemia Main JS */
/* Copyright Vlad Otrocol */

/*------------------------------------------------*/



function  MainObj(){
	this.init_html();
	this.Nav = new CanvasObj(this.html.Nav, 0, 0, window.innerWidth, 100,
	 "#00b");
	this.Panel = new CanvasObj(this.html.Panel, 0, 100, window.innerWidth/3+1,
	 window.innerHeight-100, "#aaa");
	this.Map = new CanvasObj(this.html.Map, window.innerWidth/3, 100, 
		window.innerWidth*2/3, window.innerHeight-100, "#fff");
	this.Map.add_shape(new R(0, 0, 10, 10, "0f0"));
	this.Map.add_shape(new C(400, 400, 100, "f00"));
	this.Map.draw();

};

MainObj.prototype.alert = function(what){
	alert(this[what]);
};

MainObj.prototype.initial_configuration(){
	this.html = {
		Nav: "Nav",
		Panel: "Panel",
		Map: "Map"
	};
	this.image_sources:{
			monkey: "monkey.png",
			pikachu:"pikachu.png",
			ninja: "ninja.png",
			chuck: "chuck.png"
		}
};
MainObj.prototype.init_html = function(){
	get_html(this.html);
};

function CanvasObj(canvas, x, y, w, h, fill){
	this.x = x||0;
	this.y = y||0;
	this.w = w||0;
	this.h = h||0;
	this.objects = [];
	this.ctx =  context_for(canvas);
	this.init(canvas, fill);
};

CanvasObj.prototype.init = function(canvas, fill){
	position_element(canvas, this.x, this.y);
	resize_canvas(canvas, this.w, this.h);
	draw_rect(this.ctx, 0, 0, this.w, this.h, fill);
};

CanvasObj.prototype.add_shape = function(shape) {
	this.objects.push(shape);
};

CanvasObj.prototype.draw = function(){
	for(var i=0; i<this.objects.length;i++){
		this.objects[i].draw(this.ctx);
	}
};

function R(x, y, w, h, fill){
	this.x = x||0;
	this.y = y||0;
	this.w = w||0;
	this.h = h||0;
	this.fill = fill||"fff";
	this.type = "rect";
};

R.prototype.draw = function(ctx){
	draw_rect(ctx, this.x, this.y, this.w, this.h, this.fill);
};

function C(x, y, r, fill){
	this.x = x||0;
	this.y = y||0;
	this.r = r||0;
	this.fill = fill||"#fff";
	this.type = "circle";
};

C.prototype.draw = function(ctx){
	draw_circle(ctx, this.x, this.y, this.r, this.fill);
};




function viewDidLoad(){
	var MM = new MainObj();
};

window.onload = viewDidLoad;