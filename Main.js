/* Odemia Main JS */
/* Copyright Vlad Otrocol */

/*------------------------------------------------*/

// Main body object which runs general mechanics
	function  MainObj(){
		this.images = {};
		this.init();
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

// Display the value of a MainObj property
	MainObj.prototype.alert = function(what){
		alert(this[what]);
	};

// Sets up the original values for external resources paths
	MainObj.prototype.external_configuration = function(){
		this.html = {
			Nav: "Nav",
			Panel: "Panel",
			Map: "Map"
		};
		this.image_sources={
				monkey: "monkey.png",
				pikachu:"pikachu.png",
				ninja: "ninja.png",
				chuck: "chuck.png"
		};
	};

// Initializes main body object	
	MainObj.prototype.init = function(){
		this.external_configuration();
		get_html(this.html);
		load_images(this, this.image_sources, function(images){})
	};

// Triggers when window loads
	function viewDidLoad(){
		var MM = new MainObj();
	};

// Listeners
	window.onload = viewDidLoad;