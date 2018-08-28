var Mouse2 = Class.extend({
	
	x: null,
	y: null
})



var Buttons ={
	
	LEFT: 0,
	RIGHT: 2
}

/*
var InputHandler3 = Class.extend({
	
	init: function(){
		alert("input");
		var mouseDown = [0, 0, 0, 0, 0, 0, 0, 0, 0],
		
    mouseDownCount = 0;
document.body.onmousedown = function(evt) { 
if (mouseDown[evt.button] > 0){
	  --mouseDown[evt.button];
  --mouseDownCount;
  alert(mouseDown[evt.button]);
}
  ++mouseDown[evt.button];
  ++mouseDownCount;
  alert(mouseDown[evt.button]); //DZIAŁA

}
	},
	isPressed: function(){
		
		//if(mouseDownCount){
  // alright, let's lift the little bugger up!
  for(var i = 0; i < mouseDown.length; ++i){
    if(mouseDown[i]){
		return  mouseDown[i];
      // we found it right there!
    }
 // }
}
	}
});


*/


var Canvas=Class.extend({

	init: function(canvas_id,width,height){
	
		this.canvas=document.createElement("canvas");
		this.canvas.id=canvas_id;
			
				this.w=500;
	this.canvas.style.width =this.w+'px';
	
					this.h=500;
	this.canvas.style.height =this.h+'px'; 
	this.canvas.width =width;
		this.canvas.height=height;
		this.canvas.setAttribute('width',this.canvas.width);
		this.canvas.setAttribute('height',this.canvas.height);
		document.body.appendChild(this.canvas);
	
	

	
	
	
	}
	
});
/*


restartBtn = {
	w: 100,
	h: 50,
	x: W/2 - 50,
	y: H/2 - 50,
	
	draw: function() {
		ctx.strokeStyle = "white";
		ctx.lineWidth = "2";
		ctx.strokeRect(this.x, this.y, this.w, this.h);
		
		ctx.font = "18px Arial, sans-serif";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillStlye = "white";
		ctx.fillText("Restart", W/2, H/2 - 25 );
	}
};*/
// Restart Button object
var restartBtn = Class.extend({
	
	
	init: function(){}
	/*	width: 100,
		height: 100,
	init: function(text){
		
	
		   var text = text;
    var res = text.toString();
	this.textBtn = res.toUpperCase();
	},
	draw: function(ctx){
		
		ctx.font = "50px Arial, sans-serif";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		ctx.fillStlye = "white";
		ctx.fillText("restart"	,100,100);
		
	}*/
});

var Frame = Canvas.extend({
	
	init: function(id,width,height){
		
		
		this.frame = document.createElement("canvas");
this.frame.id = id;
this.frame.width = width;
this.frame.height = height;
this.frame.backgroundColor = "white";
		
		document.body.appendChild(this.frame);
	},
	paintFrame: function(){

		
	}
});
var _MenuButtons = Class.extend({
	
	RESTART: 0
});
var MenuInputHandle = Class.extend({
	
	init: function(ButtonType){
		
		this.type = ButtonType;
		type = this.type;
		
	var RESTART =  0;
	var _Buttons = [ ];
Buttons[RESTART] = 0;
_pressed = [ ];
_pressed[Buttons[type]] = false;



	/*
	var Buttons[0] =[]
pressed = [ ],
	var pressed[Buttons['RESTART']] = false;*/
	},
	isPressed: function(Button){
		
		this.button = Button;
		var button = Buttons[this.button];
		return _pressed[button];
	}
});
var MouseEvents_ = Class.extend({
	

	init: function(x,y){
		this.x =x;
		this.y=y;
	}
})
var RestartBtn = Class.extend({
	x: 0,
	y: 0,
	w: 200,
	h: 100,
	init: function(){
		
		
		this.visible = true;
		return this.visible;
	},
	
	draw: function(fctx,x,y,w,h){		
		
		
		this.fctx = fctx;
	 	this.x =x;
		this.y = y;
		this.w = w;
		this.h=h;
		
	
		this.fctx.strokeRect(this.x,this.y,this.w,this.h);
	},
	isClicked: function(){

	
		alert('check if button is clicked');
	}
})
var TextButton = Class.extend({
	
	x: null,
	y: null
})
var MenuSudoku = RestartBtn.extend({
	
	LEFT: null,
	TOP: null,
	RIGHT: null,
	BOTTOM: null,
	x: 10,

	init: function(Buttons){
			
			
	bindKey=function(action,keys){
		
		Buttons = [ ]
		Buttons[keys] = action
		
	
	}
	
		this.buttons = Buttons;
	//alert('btn' + this.buttons);
			type = this.buttons;
		
	var RESTART =  0;
	//var Buttons = [ ];
//Buttons[RESTART] = 0;

bindKey(0,RESTART);
_pressed = [ ];
_pressed[Buttons[RESTART]] = false;
///alert(_pressed[Buttons[type]]);		
	/*	var MenuButtons = new _MenuButtons;
		var RESTART = MenuButtons.RESTART;
		var menu = new MenuInputHandle(RESTART);
		
	///	alert('M' +menu.isPressed(RESTART));*/
		//tworzenie obszaru menu

	this.frame = new Frame("sudokumenu",1000,2000);
	
	_frame = getEl("sudokumenu");

	this.fctx = _frame.getContext("2d");
	this.fctx.strokeStyle = "black";
		this.fctx.lineWidth = "2";
	this.restartBtn = new RestartBtn;
	
		H = _frame.height;
			W = _frame.width;
			this.x = 10;
			this.y = 0;
		text = "restart"

		/*textString = text.toString(); 
		
		text1=textString.toUpperCase()
		;
		alert(text1);*/
		this.textBtn = new TextButton;
		this.textBtn.x = this.restartBtn.w/3;
	
		this.fctx = (function(fctx){
	
		fctx.vectorText = function(text,x,y){
			this.restartBtn = new RestartBtn;
			if (this.restartBtn.visible){
			this.fillText(text,x,y);
			}
			this.font="bold 20pt Arial";

			len = text.length;
			for (var  i=0; i<len; i++){
				
				var ch =  text.charCodeAt(i);
			//	alert(ch);
			}
			this.ACODE = text.charCodeAt(7);
//		alert('acode' + this.ACODE);
		
			text = text.toString().toUpperCase();
	///		alert(text);
		}
				this.textBtn = new TextButton;
		
		
		
	
		
			
		})(_frame.getContext("2d"));
	},
	
	draw: function(){

		this.restartBtn.x=5;
		this.restartBtn.y = H/2 -150;
		this.textBtn.x = this.restartBtn.x+this.restartBtn.w/4;
		this.textBtn.y=this.y+this.restartBtn.h/4;
		
		this.fctx = _frame.getContext("2d");
		if(this.restartBtn.visible){
		this.restartBtn.draw(this.fctx,this.restartBtn.x,10,this.restartBtn.w,this.restartBtn.h);
			this.fctx.vectorText(text,this.textBtn.x,this.restartBtn.y+this.restartBtn.h/2);
	}
	},
	isClicked: function(x,y){
			console.log('menu click');
		this.x = x;
		this.y = y;


		MouseEvents = new MouseEvents_(this.x,this.y);

 

		_pressed = false;
		if (((MouseEvents.x>this.restartBtn.x) && (MouseEvents.x<(this.restartBtn.x+this.restartBtn.w))) && (MouseEvents.y>this.restartBtn.y) && (MouseEvents.y<(this.restartBtn.y+this.restartBtn.h))){
			
			alert('click Restart');
			_pressed = true;
				gameRestart = true;
	
 		console.log('gameRestart' + gameRestart);
	//light = new Light;
//	light.restart(gameRestart);		
		
return gameRestart;
		//	return _pressed[Buttons[RESTART]];   
		} else {
				gameRestart = false;
	
 		console.log('gameRestart' + gameRestart);			
		}

		

	}
})
var Buttons1 = Class.extend({
	
	RIGHT: 2
	
})

var SudokuArea=Canvas.extend({
	
	x: null,
	y: null,
init: function(width,height){

		this.width=width;
		this.height=height;
		
					
		var gameRestart = false;
	
			var sudoku = new Canvas("sudoku",this.width,this.height);
			var board= new Canvas("board",this.width,this.height);
			var grid = new Canvas("grid",this.width,this.height);
			var light = new Canvas("light",this.width,this.height);
			var boardnumber = new Canvas("boardnumber",this.width,this.height);
			var xboard = new Canvas("xboard",this.width,this.height);
			
			var boardnumber = new Canvas("lightnumber",this.width,this.height);
			
			menu = new MenuSudoku;
			menu.draw();

			this.light = new Light;
			this.piecess = this.light.get();			
/*

		this.canvas=getEl("sudoku");
		
		
		this.ctx=(function(ctx){
		
		ctx.width=ctx.canvas.width;
		ctx.height=ctx.canvas.height;
		
	
		
	
		
		return ctx;
		
		})(this.canvas.getContext("2d"));
		
	


		

		return this.ctx;
	*/

	},
	getCanvas: function(){

	console.log('getCanvas');
		this.canvas=getEl("sudoku");
		return this.canvas;		
		
	},
	getContext: function(){
		
			this.ctx=(function(ctx){
		
		ctx.width=ctx.canvas.width;
		ctx.height=ctx.canvas.height;
		
	console.log('getContext');
		
	
		
		return ctx;
		
		})(this.canvas.getContext("2d"));
		
	
	},
	

	

	
		paintCanvas: function(){
  
  console.log(this.canvas);
		this.CanvasGrad=this.ctx.createLinearGradient(0,0,this.width,this.height);
		this.CanvasGrad.addColorStop(0,"#eee");
		this.CanvasGrad.addColorStop(1,"#fff");
		this.width=this.canvas.width;
		this.height=this.canvas.height;	
		//this.ctx.fillStyle="#eee";
		this.ctx.fillStyle=this.CanvasGrad;
		this.ctx.fillRect(0,0,this.width,this.height);

		

		},

		draw: function(){

	
			this.board= new Board;
			this.board.draw();
			this.grid = new Grid;
			this.grid.draw();


		//ev = new Events;
			


			this.light.draw();

	
//this.input = new InputHandler3;
		
		var button = new Buttons1;

	//DO POPRAWY
		/*this.xboard1 = new Xboard4;
		this.xboard1.update();
		this.xboard1.draw();**/
		

	/**	this.input = new _InputHandler;
		this.xboard1 = new _Xboard(button.RIGHT);



		
		this.xboard1.update();
		this.xboard1.draw();
**/		
		
	/*	
console.log(this.input);
console.log(this.xboard.get());


//alert(this.input);
	//this.xboard.handleInputs(this.input);
	this.xboard.flip1();	
	this.xboard.update();
 	this.xboard.flip();
		 this.xboard.draw();
*/
		},
		update: function(){

		var RESTART = 0;
		var MENU = 0;
		this.input = new InputHandler(this.piecess,this.light,RESTART);
	

	
	light = getEl("light");

//this.input2 = new InputHandler0({MENU: 0, SudokuArea: 1});
	//console.log(this.input2.isPressed(MENU));
	

					
		},
		restart: function(){
		/*	
		if (this.input.isRestart(RESTART)){
			alert('o' +this.input.isRestart(RESTART));
			this.light.restart();
		}
			*/				
		},
		isPressed1: function(){
			
			
			var control = false;
			
		},
		update1: function(){
			if (this.x && this.y){

				console.log("true");
				}
			console.log("update1");
		}
		
		




});

var InputHandler0 = SudokuArea.extend({
	
	init: function(type){
		console.log(this.piecess);
MenuSudoku = new MenuSudoku;		

	this.type = type;
	console.log(this.type);
	
	menu = this.type.MENU;
	console.log(menu);
	ObszarSudoku = this.type.sudokuArea;
	
	pressed = [ ];
	pressed[menu] = false;
	pressed[ObszarSudoku] = false;

console.log(pressed[menu]);
	
	var mouse = new Mouse2;
	
	window.onmousedown = function(event){
	
		mouse.x = event.pageX;
		mouse.y = event.pageY;
		
		console.log(mouse.x + " , " +mouse.y);
		
if (MenuSudoku.isClicked(mouse.x,mouse.y)){
	
		pressed[menu] = true;
		pressed[ObszarSudoku] = false;
			console.log(pressed[menu]);
			console.log(pressed[ObszarSudoku]);
} else {
	
	
			pressed[menu] = false;
		pressed[ObszarSudoku] = true;
			console.log(pressed[menu]);
			console.log(pressed[ObszarSudoku]);
}


		
		console.log('onmousedown');
	}
	},
	isPressed: function(ObszarGry){
		
		return pressed[ObszarGry];
	}
})
