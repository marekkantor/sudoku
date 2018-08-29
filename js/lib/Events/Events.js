
var Mouse = Class.extend({
	
	x: 0,
	y: 0,
	
	init: function(x,y){
		
		this.x = x;
		this.y = y;
	}
	
});

var Buttons = {
	
	LEFT: 0,
	RIGHT: 2,

	
	
getCode: function(event){
	//alert('code');
	var t = event.type;

},
getMousePosition1: function(event){
	
		posx = 0;
	posy = 0;
		
		posx = event.pageX;
		posy = event.pageY;
		console.log('pagex' + posx);
		console.log('pagey' + posy);
posx2 = posx + document.body.scrollLeft

console.log('posx2' + posx2);
		var mouse = new Mouse(posx,posy);
		return mouse;
	
},
getMousePosition2: function(event){
	
		posx = 0;
	posy = 0;
		
		posx = event.screenX;
		posy = event.screenY;


		var mouse = new Mouse(posx,posy);
		return mouse;
	
},
getMousePosition: function(event){
	


	
	if (!event){
		event = window.event;
	} else {
		var el = event.target;
		var target = el || event.toElement || event.srcElement;
		var x = event.clientX - target.offsetLeft;
		var y = event.clientY - target.offsetTop;
		
		
		
	
		
mouse = new Mouse(x,y);


//alert('wiersz + clientX - target'+ Math.floor(mouse.x/this.pieces.height));	
	
		//alert(mouse.x);
		//alert(mouse.y);
		
		
	return mouse;
		
	
	
	}
}
};


var Mouse2 = Class.extend({ 

	init: function(){
		
		
		this.position = {x: null,
						y: null
		}
		this.Buttons = {
			
			LEFT: 0,
			MIDDLE: 1,
			RIGHT: 2
		}
	},
	getPosition: function(event){
		
		if (!event){
		event = window.event;
	} else {
		var el = event.target;
		var target = el || event.toElement || event.srcElement;
		var x = event.clientX - target.offsetLeft;
		var y = event.clientY - target.offsetTop;
		
		
		
	
		this.position.x = x;
		this.position.y = y;



//alert('wiersz + clientX - target'+ Math.floor(mouse.x/this.pieces.height));	
	
		//alert(mouse.x);
		//alert(mouse.y);
		
		
	return this.position;
		
	
	
	}
		
	}


});













var MouseEvent1 = Class.extend({
	
	init: function(event){

	
			if (!event){
		event = window.event;
	} else {
		var el = event.target;
		var target = el || event.toElement || event.srcElement;
		var x = event.clientX - target.offsetLeft;
		var y = event.clientY - target.offsetTop;
		
var x = x + document.body.scrollLeft	
		
		var mouse = new Mouse(x,y);
		

	

		
	return mouse;
		
	
	
	}
		
		
	}
})
var Xgrid = Class.extend({
	init: function(){
		
		empty = new Empty;

		piecesArray = [empty,empty,empty,
							empty,empty,empty,
							empty,empty,empty]
							 
					},
	
	checkedPieces: function(pieces){
		
		this.pieces = pieces;
		alert('checkedPieces' + this.pieces);
		var empty = true;
		if(this.pieces.isEmpty()){
			
			return empty;
		}
		if (!this.pieces.isEmpty()){
			
			var empty = false;
			return empty;
		}
	},
	skreslPieces: function(piecesSkreslony){
		
		this.piecesSkreslony = piecesSkreslony;
		return this.piecesSkreslony;
	},

	ClickOnEmptyPiece: function(){
		

				
		alert('ClickOnEmptyPiece');
	},
	 update: function(){
		 
		 if (this.pieces.isEmpty()){
			 
			 this.ClickOnEmptyPiece();
		 }
	 }
	
})

var InputHandler2 = Class.extend({
	
	
	init: function(mouse_key){
		
	this.buttons = { 
	
					LEFT: 0,
					RIGHT: 2
					
					},
			
			this.mouse = {x: 0, y: 0};
			
this.down = [false, false, false, false, false, false, false, false, false];

var mousePressed = false;

self = this;
self.mouse_key = mouse_key;
self.mouse_left = self.mouse_key.left;
self.down[self.mouse_left] = false;
alert(self.down[self.mouse_left]);
document.onclick = this.onclick;

	},
onclick: function(event){
	alert(event.button);
if(self.mouse_key[event.button]){
	
	self.down[self.mouse_key.left] = true;
alert("down " + self.down[self.mouse_key.left]);

}


	

	
/*
document.onmouseup = function(e) {
    buttonsArray[e.button] = false;
    mousePressed = false;


document.oncontextmenu = function() {
    return false;
}
	//	alert(this.mouse_key.left);
	},
	
	isDown: function(mouse_key){

	*/
	
	},
	isDown: function(mouse_key){
		
		self = this;
		self.mouse_key = mouse_key;
		alert("buttons" + self.mouse_key.left);

		return self.down[self.mouse_key];
	}
});

var PiecesSkreslony = Pieces.extend({
	
		id: null,
	init: function(wiersz,kolumna){
		 
		this.wiersz = wiersz;
		this.kolumna = kolumna;

		
			this.light = getEl("light");
			this.lcxt = this.light.getContext("2d");
			this.cellsize = Math.round(this.light.width/3.0);
			this.subcellsize = Math.round(this.cellsize/3.0);
			this.width = Math.round(this.subcellsize/3.0);
			this.height = Math.round(this.subcellsize/3.0);
			this.xboard = getEl("xboard");
			this.xctx = this.xboard.getContext("2d");

		this.boardnumber = getEl("boardnumber");
			this.numbersctx =  this.boardnumber.getContext("2d");
 						this.numbcellsize = Math.round(this.boardnumber.width/3.0);
			this.numbsubcellsize = Math.round(this.numbcellsize/3.0);
			
			this.skreslony = false; 
			
	},
	render: function(){
		this.xctx.clearRect(this.kolumna*this.width,this.wiersz*this.height,this.width,this.height);
	},
	isSkreslony: function(){
		
		return this.skreslony;
		
	},
	getSelectedPieceIndex: function(){
		return this.id;
	},
	skresl: function(){
		
		return this.skreslony = true; 
	},
	gSelectedPieceIndex: function(){
		
		this._super();
	},
	isEmpty: function(){
		
		this._super();
	},
		
hasSkreslony: function(wiersz,kolumna){
var c = false;
if ((this.wiersz == wiersz) && (this.kolumna == kolumna)){
	
	c = !c;
}
	
	return c;

},

		draw: function(){
	
this.pieces = new Pieces;
		var X = this.pieces.drawX(this.wiersz,this.kolumna);
		this.strikePieces = new strikePieces(this.wiersz,this.kolumna);
		this.strikePieces.strikes();
		
		
	},
		isEmpty: function(){
		
this._super();
			},
			flip1: function(){
				
				if ((this.wiersz!=-1) && (this.kolumna!=-1)){
					
					this.wiersz = - 1;
					this.kolumna = -1;
					
				}
			}

	
});


var Xboard = Pieces.extend({
	init: function(pieces){
		
		this.pieces = pieces;
		piecesArray = [ ];	
		///!!! DO POPRAWY
			var gNumbPieces = 9*9*9*9;
	
		
		for (var i = 0; i<gNumbPieces; i++){
			
			piecesArray[i] =  this.pieces;
			
		}
		piecesArray[9] = this.pieces;
		piecesArray[21] = this.pieces;
				piecesArray[64] = this.pieces;
		
		this.xboard = getEl('xboard');
	//	alert('offsetLeft' + this.xboard.offsetLeft);
		
				
		return piecesArray;
		/*
		empty = new Empty;

		piecesArray = [empty,empty,empty,
							empty,empty,empty,
							empty,empty,empty]
							*/
							
					},
		render: function(){
			if (!piecesArray[0].isEmpty()){
			piecesArray[0].render();
			}
		},

		checkPieces: function(pieces){
			
			var EMPTY = true;
		this.pieces = pieces;
		this.pieces.id = 3*this.pieces.wiersz + this.pieces.kolumna;
		var gSelectedPieceIndex = this.pieces.gSelectedPieceIndex();
		
		pieces = piecesArray[gSelectedPieceIndex];
		
		
		this._super(pieces);
			
			
		},
		hanndleInputs: function(pieces){
			alert('hanndleInputs');
			this.pieces = pieces;
		alert('hdl' + this.pieces.wiersz);
this._super(this.pieces);
		}, 
		update: function(){
			
			this._super();

		},
		_update: function(){
			
		this._super();	
		},
		draw: function(){
		
					var len = piecesArray.length;
			for (var i = 0; i<len; i++){
				if (!piecesArray[0].isEmpty()){
				piecesArray[0].draw();
				}
			}
			return;
			
		},
		
		reset: function(){
				var len = piecesArray.length;
				for (var i = 0; i<len; i++){
					piecesArray[i] = empty;
				}
				return;
		},
		get: function(id){
			
			this.id = id;
		
			return piecesArray[this.id];	
		},
		onclicked: function(){
			
			console.log("onclicked");
		}
})

var Block = Xboard.extend({
	
	
		init: function(id){
	//	this._super(empty);
this.id = id;		

		},
		set: function(piecesSkreslony,gSelectedPieceIndex,piecesIndex){
			
			this.piecesSkreslony = piecesSkreslony;
			piecesSkreslony = this.piecesSkreslony
			
			this.gSelectedPieceIndex = gSelectedPieceIndex;
			gSelectedPieceIndex = this.gSelectedPieceIndex;
			
			this.piecesIndex = piecesIndex; //=block.id
			
alert(this.piecesIndex);			
ID = this.id;			
this.block = [ ];


this.block[ID] = [];
this.block[0] = piecesArray;
alert('block[0]g: ' + this.block[0][0].wiersz);//-1
//this.block[ID][this.piecesIndex] = this.pieces;

/*
//alert(this.block[0][8].wiersz);
//return this.block[ID];
piecesArray = this.block[this.piecesIndex];
alert(piecesArray[0].wiersz);
	var len = piecesArray.length;
	for (var i = 0; i<len; i++){
		
		pieces = piecesArray[gSelectedPieceIndex];
			if(pieces.isEmpty()){
				
	piecesArray[gSelectedPieceIndex] = piecesSkreslony;
		
					
				pieces = piecesArray[gSelectedPieceIndex];
				pieces.draw();
				return;
			
		}
	 
		}
			/*if (!pieces.isEmpty()){
				pieces = piecesArray[gSelectedPieceIndex];
					if (this.chooseSubcell!= undefined){
					//	if (!this.chooseSubcell[0].isEmpty()){
							
							alert('true');
						//}
					}
		
					alert("not empty");
			piecesSkreslony.render();
	pieces = piecesArray[gSelectedPieceIndex];
	empty = new Empty;
	pieces = empty;
	piecesArray[gSelectedPieceIndex] = pieces;
							
			return;
		
		
		
		}*/
		}
})  /*
var SubCellStates = Class.extend({
	
	init: function(state){
		
		this.state = state;
					choosenSubcells =[];
					var gNumbPieces = 9*9*9
		for (var i=0; i<gNumbPieces;i++){
		choosenSubcells[i] = this.state;
		}
		
	},
	reset: function(){
		empty = new Empty;
			for (var i=0; i<gNumbPieces;i++){
				if (!choosenSubcells[i].isEmpty()){
		choosenSubcells[i] = empty;
				}
		}
		
	}
	
}) 
*/
var PiecesEvent = Class.extend({
	
	init: function(event){
	
	this.pieces = new PiecesSkreslony;

	this.wiersz = Math.floor(Mouse.y/this.pieces.height);		

		var Mouse = Buttons.getMousePosition(event);

	this.kolumna = Math.floor(Mouse.x/this.pieces.width);
	this.pieces = new PiecesSkreslony(this.wiersz,this.kolumna);
		xboard = new Xboard;
			xboard1 = new GameBoard("xboard");
		
	this.pieces = xboard.getPieces(this.pieces.wiersz,this.pieces.kolumna);
	this.pieces = new Pieces(this.wiersz,this.kolumna);
	piecesSkreslony = this.pieces.update();
	return piecesSkreslony;
	}
});
var SudokuEvents = Class.extend({
	
	init: function(event){
		
		
		alert("onclick");
	}
})

var InputHandler5 = Xboard.extend({
	

	init: function(piecess,light,restart){
		
		
		_Mouse = new Mouse2;
		
			this.piecess = piecess;
			piecess = this.piecess;
			
			var len = piecess.length;
			
			for (var i = 0; i<len; i++){
				
				__pieces = piecess[i];
				__pieces.clicked = false;
			}
			
			xboard = new Xboard;
			this.light = light;
		
			light = this.light;

		
		
		_pressed = [ ];
		

		this.gameRestart = [ ];
		this.gameRestart[this.res] = false;
		
		
		

		buttonsStates = [this.state];			
		empty = new Empty;
		this._super(empty);
		
		sudokuEvents = new SudokuEvents;
		choosenSubcells =sudokuEvents.getSubcells();
				
	gameRestart = false;
	var i=-1;
	 //document.onclick = new SudokuEvents;
/*	 MenuButtons = new _MenuButtons;
	 RESTART = MenuButtons.RESTART;

	MenuSudoku = new MenuSudoku(RESTART);

	MenuEvents = new MenuEvents(xboard,MenuSudoku);
*/
	this.onclicked(xboard,light,piecess);
	},
	onclicked: function(xboard,light,piecess){
		
		console.log("onclicked1");
		this._super();
		
		this.xboard = xboard;
		xboard = this.xboard;
		
		this.light = light;
		light = this.light;

		
this.piecess = piecess;
piecess = this.piecess;
	document.oncontextmenu = this.oncontextmenu;
		
		
	var blurred = false;
		window.onclick = function(event){
			
			
			var Mouse = Buttons.getMousePosition(event);

			console.log(Mouse.x);
			console.log(Mouse.y);
		}
		document.onclick = function(event){
			
			
			var Mouse = Buttons.getMousePosition(event);

			console.log(Mouse.x);
			console.log(Mouse.y);
/*			
	if(MenuEvents.isClicked(Mouse.x,Mouse.y)){
		
		MenuEvents.render();
		MenuEvents.update();
		
	}
	
	*/
/*
var len = piecesArray.length;
for (var i = 0; i<len; i++){
if(!piecesArray[i].isEmpty()){
if(	MenuSudoku.isClicked(Mouse.x,Mouse.y)){
		alert('MenuSudoku is Clicked');


		alert('piecesArray is not empty');	

	gameRestart = true;
	light.restart(gameRestart);
	
	alert('piecesArray is not empty');	
			window.onblur = function(){ 
		var blur = true;
		}
		window.onfocus = function(){

		if(blur){
			location.reload();
		}
		}
		
		return;
	
}	
}


}

var len = choosenSubcells.length;
for (var i = 0; i<len; i++){
if(!choosenSubcells[i].isEmpty()){
if(	MenuSudoku.isClicked(Mouse.x,Mouse.y)){
		alert('MenuSudoku is Clicked');

	choosenSubcells[i] = empty;
	
	gameRestart1 = true;
	light.restart(gameRestart1);
	
	alert('piecesArray is not empty');	
			window.onblur = function(){ 
		var blur = true;
		}
		window.onfocus = function(){

		if(blur){
			location.reload();
		}
		}
		
		return;
	
}	
}


}

if (this.gameRestart1){
	var len = piecesArray.length;
for (var i = 0; i<len; i++){
	piecesArray[i] = empty;
}
		window.onblur = function(){ 
		var blur = true;
		}
		window.onfocus = function(){

		if(blur){
			location.reload();
		}
		}
		light.restart(gameRestart);
	
	
var len = choosenSubcells.length;
for (var i = 0; i<len; i++){
	_choosenSubcell = choosenSubcells[i];
			this.lightnumber = getEl("lightnumber");
		this.lightctx = this.lightnumber.getContext("2d");
		this.lightctx.clearRect(0,0,1000,1000);
//choosenSubcell.hidden();
light = new Light;
subcell = new SubCell(0,0);
light.subcells[i].hidden();
light.subcells[i].draw();

this.gameRestart = false;
}

choosenSubcells[0] = empty;



	return;		
		}

	

//}
	
/***		pieces.update1(event);***/
		pieces = new Pieces;
			switch(event.button){
				
				case _Mouse.Buttons.LEFT:
					this.clicked = true;
					pieces.LeftClick = true;
					
					console.log(pieces.isLeftClick_());
				pieces.update4();
				
				
				_Mouse.position = _Mouse.getPosition(event);
				
	
				this.pieces = new PiecesSkreslony;

			
			this.wiersz = Math.round(_Mouse.position.y/this.pieces.height);
			
// błąd przy wierszu nr 5
	
				this.kolumna = Math.round(_Mouse.position.x/this.pieces.width);
					this.pieces = new PiecesSkreslony(this.wiersz,this.kolumna);
					light.getPieces(this.pieces);

				///if isClicked[this.subcell]
			
	
				this.subcell = new SubCell;
				this.subcell.clickLeft(event);
				this.pieces = this.subcell.onclick(event);
			
				var pi = this.pieces;
			p = this.pieces;		
			
	
				
						this.subcell = new SubCell(Math.floor(this.pieces.wiersz/3),Math.floor(this.pieces.kolumna/3)); 
									
	if (!gameRestart){	
						light.hasClicked(this.subcell.wiersz,this.subcell.kolumna);
							
							
		if(light.isPressed(this.subcell)){
			light.render();   
			light.update();
						
		}
	}
				
		
		
			
		
		
		
								this.subcell.id =  (((this.subcell.wiersz )*9) +this.subcell.kolumna);
						var gSelectedPieceIndex = this.subcell.getSubCellIndex();
						

				subcell = this.subcell;
						
		if (this.subcell!= null){
			this.subcell.id =  (((this.subcell.wiersz )*9) +this.subcell.kolumna);
			gSelectedPieceIndex = this.subcell.getSubCellIndex();
		 chooseSubcell = choosenSubcells[gSelectedPieceIndex];
			
				if(chooseSubcell.isEmpty()){

								
				
			light.update();			
			 // zamienia na choosenSubcell
			this.piecess = this.subcell.get(); //wczytuje this.piecess zalene wiersza i kolumny subcelli
			
		
			
		

		this.pressed = true;
		//**STARA WERSJA DO USUNIĘCIA **//*

			
			
			
			
			
			
			
			
	/// if isPressed[this.subcell].isEmpty { return };	
			



			
			s = this.subcell;

			var len = this.piecess.length;
			for (var i = 0; i<len; i++){
							
				//alert(s.hasClicked(this.pieces.wiersz,this.pieces.kolumna));
			//	alert(s.wiersz);
				var p = this.piecess[i];
				if (p.hasClicked(this.pieces.wiersz,this.pieces.kolumna)){
					
					
					//digist = new Digist(p,s.wiersz,s.kolumna);
					this.pieces.value = p.getValue();
	
			
					
					 this.chooseSubcell =  new ChooseSubcell(this.pieces.value,this.subcell.wiersz,this.subcell.kolumna);
	this.subcell.id =  (((this.subcell.wiersz )*9) +this.subcell.kolumna);
			gSelectedPieceIndex = this.subcell.getSubCellIndex();
			
			 choosenSubcells[gSelectedPieceIndex] = this.chooseSubcell;
			choosenSubcells[gSelectedPieceIndex].draw(); 
			
					
					
		

				
			}
				
				
				}
			
			return;
			}
				if(!chooseSubcell.isEmpty()){
				
		
				return;
				}
						}
			return Buttons.LEFT;
				case _Mouse.Buttons.RIGHT:
			
					pieces.RightClick = true;
					
					console.log(pieces.isRightClick());
					pieces.update4();
				
			_Mouse.position = _Mouse.getPosition(event);
				

		this.pieces = new PiecesSkreslony;
		

				this.kolumna = Math.floor(_Mouse.position.x/this.pieces.width);
			this.wiersz = Math.floor(_Mouse.position.y/this.pieces.height);
		
		
		console.log('wiersz clientY' + this.wiersz);
		console.log('kolumna clientY' + this.kolumna);

		
				this.pieces = new Pieces(this.wiersz,this.kolumna);
				


	
				this.currentPieces = this.pieces;
				ct = this.currentPieces;
	if (choosenSubcells!= undefined){
		
		var len = choosenSubcells.length;
		for (var i=0; i<len; i++){
		ch = choosenSubcells;
		
					if (this.pieces.isLeftClick(ch,0)){
						
	
			 p = new Xboard;
			 p.reset();
			 return;
					}
					}
	}

			
	

	
	this.pieces.id = 3*this.pieces.wiersz + this.pieces.kolumna;
		
		var gSelectedPieceIndex = this.pieces.gSelectedPieceIndex();
			
		
				
				block = new Block;
				block.id = (Math.floor(this.pieces.wiersz/3)*9) +Math.floor(this.pieces.kolumna/3);
	
	
		if (this.chooseSubcell!= undefined){
			
					}
					
	this.pieces.setTo(piecesArray);

 var len = piecess.length;

for (var i = 0; i<len; i++){
	
	_pieces = piecess[i];
	
	if (_pieces.hasClicked(this.pieces.wiersz,this.pieces.kolumna)){
		console.log(_pieces);
		_pieces.clicked = true;
		
		console.log(_pieces.clicked);
		console.log(" pieces.hasClicked true");
		
	}
	else {
		
		_pieces.clicked = false;
	}
}

for (var i = 0; i<len; i++){
	
	_pieces = piecess[i];
	
	if(_pieces.isClicked()){
console.log(_pieces.isClicked());	
		


	console.log(_pieces.wiersz);
	console.log(_pieces.kolumna);

	_pieces.id = _pieces.wiersz*27 + _pieces.kolumna;
	
		var gSelectedPieceIndex = _pieces.gSelectedPieceIndex();
				console.log("id: " + gSelectedPieceIndex);
	
				pieces = piecesArray[gSelectedPieceIndex];

	
			if (pieces.isEmpty()){
		
			
			piecesSkreslony = _pieces.update();	

				console.log(piecesSkreslony);

		
	piecesArray[gSelectedPieceIndex] = piecesSkreslony;

			console.log(piecesArray[0]);					
					console.log("empty");
				
				} else {
				
			console.log(_pieces);			
	_pieces.render();
	
//_pieces.render();	
					console.log("not empty");	
	//	

	
		
	piecesArray[gSelectedPieceIndex] = empty;

	break;
				
				}
	

		var len = piecesArray.length;
for (var i =0; i<len; i++){
	
	pieces = piecesArray[i];
	if(!pieces.isEmpty()){
		
		pieces.draw();
	}
	
}
break;
			}
	}			
		}
		
		}
},

	draw: function(){
		this._super();
	}, 
	oncontextmenu: function(event){
		return false;
	},
	isRestart: function(res){
		this.res = res;
		return this.gameRestart[this.res];
	}
})


