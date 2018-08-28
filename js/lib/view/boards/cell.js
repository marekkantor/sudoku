

	var Empty = Class.extend({
	
	wiersz: - 1,
	kolumna: -1,
	
	isEmpty: function(){
		
		var empty = true;
		if ((this.wiersz != - 1) && (this.kolumna != -1)){
			
			var empty  = false;
			return empty;
		}
	return empty;
			}
})



var Pieces=Empty.extend({

	LeftClick: false,
	RightClick: false,
	
	id: null,
	value: null,
	clicked: null,
	init: function(wiersz,kolumna,value){
	
this.skresl = false;	
		empty = new Empty;

		this.wiersz=wiersz;
		this.kolumna=kolumna;

		this.value=value;
	
		
		this.light = getEl("light");
		this.lctx = this.light.getContext("2d");
		
		this.xboard = getEl("xboard");
		this.xctx = this.xboard.getContext("2d");
		
		this.light_width = this.light.width;
		this.light_height = this.light.height;
		this.cellsize =  Math.round(this.light_width/3.0);
this.cellsize = Math.round(this.light_height/3.0);
		this.subcellsize = Math.round(this.cellsize/3.0);
	this.width = this.height =	this.size=this.piecessize=Math.round(this.subcellsize/3.0);


				this.numbercanvas = getEl("boardnumber");
				this.numbctx = this.numbercanvas.getContext("2d");
				
		this.xPos = this.kolumna*this.width;
		this.yPos= this.wiersz*this.height;
		this.x__ = (this.kolumna+1)*this.width;
		this.y__ = (this.wiersz+1)*this.height;

					
		this.x=Math.round(this.piecessize*(this.wiersz+0.5));
		this.y=Math.round(this.piecessize*(this.kolumna+0.5));
		
 	},
	isLeftClick_: function(){
		
		return this.LeftClick;
		
	},
	isRightClick: function(){
		
		return this.RightClick;
	},
		render: function(){
	
if(this.skresl){
		
		this.xboard = getEl("xboard");
		this.xctx = this.xboard.getContext("2d");
		this.xctx.clearRect(this.kolumna*this.width,this.height*this.wiersz,this.width,this.height);
	
this.skresl = false;
	return;

		}	
			this.lcxt.clearRect(0,0,this.width,this.height);
			this.numbctx.clearRect(0,0,this.width,this.height);
		
	},
	
	flip: function(){
		
		this._super();
	},
	
	 
	

	checkPieces: function(pieces){
		this.pieces = pieces
		alert('pieces checkPieces');
		pieces = this.pieces;
		
		if (pieces.isEmpty()){
			
				EMPTY = true;
				alert(EMPTY);
				return;
			}
			if (!pieces.isEmpty()){
				
				EMPTY = false;
				alert(EMPTY);
				return;
			}		

	
	},
	
		handleInputs: function(pieces){
		
		this.pieces = pieces;
		
		alert('this._super pieces' + this.pieces.wiersz);
		
		alert('handleInputs on pieces');
		return this.pieces;
	},
	update4: function(){
		
		///DO DALSZEJ POPRAWY!!!!
		
		if(this.isLeftClick_()){
			
			this.LeftClick = true;

			console.log('is left click');
			return this.LeftClick;		
		}
		if(this.isRightClick()){
			
			console.log('is right click');
			console.log(this.isLeftClick_());
	
		}
	},
	update5: function(){
		
		this._super();
	},
	_update: function(){
		
		if(EMPTY){
			
			
			alert('update empty');
			this.ClickOnEmptyPiece();
		}
		alert('update3');
	},

	ClickOnEmptyPiece: function(){

		console.log('pieces' +this.pieces.wiersz);
		alert('ClickOnEmptyPiece');
	
	},
	
		update2: function(){

			
		if (pieces.isEmpty()){
			
					alert('empty' + empty);
			this.piecesSkreslony = this.pieces.update();
			alert('piecesSkreslony' + this.pieces.wiersz);
			gSelectedPieceIndex = this.id;
		this.piecesArray[gSelectedPieceIndex] = this.piecesSkreslony;
		
			
			return;
					
		}
		else {
		
			console.log("not empty");
			console.log(this.piecesArray[0].wiersz);
		this.piecesArray[gSelectedPieceIndex].render();
		empty = new Empty;
	this.piecesArray[gSelectedPieceIndex] = empty;
			console.log(this.piecesArray[0].wiersz);	
			
			
			return;
		}
		
	},
	draw: function(){


	if (this.skresl){
			this.piecesSkreslony.draw();
			console.log('rysuj pieces skreślony');
			return;
			}
			
		
	this.liczby = new Liczby(this.value,this.x,this.y);
	
	},
	rightClick: function(event){	
	
	alert('right pieces click');
	var Mouse = Buttons.getMousePosition(event);
				
				this.pieces = new Pieces;
			
				this.wiersz = Math.floor(Mouse.y/this.pieces.height);		
				this.kolumna = Math.floor(Mouse.x/this.pieces.width);
				this.pieces = new Pieces(this.wiersz,this.kolumna);
				
				this.pieces.check();
	
				if (pieces.isEmpty()){
					alert('empty');
			
				
				piecesSkreslony = this.pieces.update();
				
			piecesArray[gSelenctedPieceIndex] = piecesSkreslony;
			
			var len = piecesArray.length;
			for (var i = 0;i<len;i++){
				
				pieces = piecesArray[i];
				pieces.draw();
			
		
				return;
				}

				}
	},

	update1: function(event){
		
		var btn = event.button;
	//	alert(btn);
		switch(btn){
			case Buttons.LEFT:
		
		this.leftClick(event);
		
			return;

		case Buttons.RIGHT:
			
		this.rightClick(event);
			return;
		}
		/*
		if (btn == 0){
		
			alert('left pieces click');
			return;
		}
		if (btn == 2){
			
			alert('right pieces click');
		}*/
	},


	drawX1: function(){
	
		
		this.X = new X1(this.wiersz+1,this.kolumna+1);
	

	
	},	
	drawX: function(wiersz,kolumna){
	
		this.wiersz=wiersz+1;
		this.kolumna=kolumna+1;
		this.X = new X1(this.wiersz,this.kolumna);
	

	
	},
		isLeftClick: function(chooseSubcells){

		
			
	},
hasClicked: function(wiersz,kolumna){
	
		
			this.clicked = false;
			console.log(this.clicked);
		if ((this.wiersz == wiersz) && (this.kolumna == kolumna)){
			
			this.clicked = true;
			console.log(this.clicked);
		return this.clicked;
		
	
		}
		return this.clicked;

	},

		update: function(){
			
			
			if (this.clicked){
				
				console.log(this.clicked)
			this.skresl = true;
			console.log(this.skresl);
			this.piecesSkreslony = new PiecesSkreslony(this.wiersz,this.kolumna);
			return this.piecesSkreslony;
			}
	},	
	liczbaPiecesWidth: 3,
	liczbaPiecesHeight: 3,


	getValue: function(){
	console.log(this.value);
		return this.value;
	
	
	},
	click: function(){
		document.addEventListener('dblclick', this.dblclicked.bind(this), false);
		
	},
	dblclicked: function(){
	
		this.getValue();
	},
	gSelectedPieceIndex: function(){
		
		return this.id;
	},
	isEmpty: function(){
		
		this._super();
	},
	isLeftClick: function(chooseSubcells,control){
		
			
		this.chooseSubcells = chooseSubcells;

		this.control = control;

		var len = this.chooseSubcells.length;
		for (var i = 0;i<len; i++){
			//alert(!this.chooseSubcells[1].isEmpty())
			if (!this.chooseSubcells[i].isEmpty()){
			var ch =this.chooseSubcells[i];
			
			if ((ch.wiersz == Math.floor(this.wiersz/3)) && (ch.kolumna == Math.floor(this.kolumna/3))){
				
				this.control=!this.control;
			
				return this.control;
			}
			return this.control;
		}
		

	}
	},
	isClicked: function(){
		
		return this.clicked
	}
	

});

var currentPieces = Class.extend({
	/*bieżący pieces, przed sprawdzeniem i update czyli zamianą w pieces skreślony */
	init: function(wiersz,kolumna){
		
		this.wiersz = wiersz;
		this.kolumna = kolumna;
	},
	check: function(cp,control){
		/*ct - tablica controlna, conntrol - controlka*/
			this.cp = cp;
			var len = this.cp.length;
			this.control = control;//false
			
			for (var i =0; i<this.cp.length; i++){
				
				 cp = this.cp[i];
				 this.wiersz_ = Math.floor(this.wiersz/3);
				 this.kolumna_ = Math.floor(this.kolumna/3);
				if ((this.wiersz_ == cp.wiersz) && (this.kolumna_ == cp.kolumna)){
					
					this.control =!this.control;//true
					return this.control;
				}
			}
			
			return this.control;
			


		
		
	}
})

var Location=Class.extend({

	init: function(wiersz,kolumna){
	
		this.wiersz=wiersz;
		this.kolumna=kolumna;
	
	}

});

var selectPieces = Class.extend({
	
	wiersz: null,
	kolumna: null,
	
	init: function(wiersz,kolumna){
			
			this.light = getEl("light");
			this.lcxt = this.light.getContext("2d");
			this.cellsize = Math.round(this.light.width/3.0);
			this.subcellsize = Math.round(this.cellsize/3.0);
			this.width = Math.round(this.subcellsize/3.0);
			this.height = Math.round(this.subcellsize/3.0);

		this.wiersz=wiersz;
		this.kolumna=kolumna;
	},
	update: function(){
		
		alert('right update');
	}
})

var Cell=Pieces.extend({

	width: null,
	height: null,
	liczbaCellWidth: 3,
	liczbaCellHeight: 3,

	
	init: function(wiersz,kolumna){
	
	this.wiersz=wiersz;
		this.kolumna=kolumna;

		},
	draw: function(){

	},


});

var SubCell=Pieces.extend({
	
	id: null,
	index: null,
	wiersze: 9,
	kolumny: 9,
	liczbaSubCellWidth: 3,
	liczbaSubCellHeight: 3,


	
	init: function(wiersz,kolumna){
	
		
		this.xboard	= getEl("xboard");
		this.xctx = this.xboard.getContext("2d");
		
		this.boardnumber = getEl("boardnumber");
		this.numbersctx =  this.boardnumber.getContext("2d");

		this.numbcellsize = Math.round(this.boardnumber.width/3.0);
		this.numbsubcellsize = Math.round(this.numbcellsize/3.0);
		
		
		this.dblclicked = -1;

		
		 this.wiersz=wiersz;
		this.kolumna=kolumna;


		this.light = getEl("light");
		this.width = this.light.width;
		this.height = this.light.height;

			this.lcxt = this.light.getContext("2d");		
				this.boardnumber = getEl("boardnumber");
			this.numbersctx =  this.boardnumber.getContext("2d");

		

		




		
		this.cellsize =  Math.round(this.width/3.0);
this.cellsize = Math.round(this.height/3.0);
		this.subcellsize = Math.round(this.cellsize/3.0);
		this.width = this.height =this.size = Math.round(this.cellsize/3.0);
		this.piecessize=Math.round(this.subcellsize/3.0);

		
this.boxes=[new Box(0,0),new Box(1,0),new Box(2,0),new Box(0,1),new Box(1,1), new Box(1,2), new Box(0,2),new Box(2,1),new Box(2,2),
new Box(3,0), new Box(3,1), new Box(3,2),new Box(4,0),new Box(4,1), new Box(4,2), new Box(5,0),new Box(5,1),new Box(5,2),
new Box(6,0), new Box(6,1), new Box(6,2),new Box(7,0),new Box(7,1), new Box(7,2), new Box(8,0),new Box(8,1),new Box(8,2),

new Box(0,3), new Box(0,4), new Box(0,5),new Box(1,3),new Box(1,4), new Box(1,5), new Box(2,3),new Box(2,4),new Box(2,5),
new Box(3,3), new Box(3,4), new Box(3,5),new Box(4,3),new Box(4,4), new Box(4,5), new Box(5,3),new Box(5,4),new Box(5,5),
new Box(6,3), new Box(6,4), new Box(6,5),new Box(7,3),new Box(7,4), new Box(7,5), new Box(8,3),new Box(8,4),new Box(8,5),

new Box(0,6), new Box(0,7), new Box(0,8),new Box(1,6),new Box(1,7), new Box(1,8), new Box(2,6),new Box(2,7),new Box(2,8),
new Box(3,6), new Box(3,7), new Box(3,8),new Box(4,6),new Box(4,7), new Box(4,8), new Box(5,6),new Box(5,7),new Box(5,8),
new Box(6,6), new Box(6,7), new Box(6,8),new Box(7,6),new Box(7,7), new Box(7,8), new Box(8,6),new Box(8,7),new Box(8,8)
]




this.piecess = [new Pieces(3*(this.wiersz+1)-3,3*(this.kolumna+1)-3,1),new Pieces(3*(this.wiersz+1)-3,3*(this.kolumna+1)-2,2),new Pieces(3*(this.wiersz+1)-3,3*(this.kolumna+1)-1,3),new Pieces(3*(this.wiersz+1)-2,3*(this.kolumna+1)-3,4),new Pieces(3*(this.wiersz+1)-2,3*(this.kolumna+1)-2,5),new Pieces(3*(this.wiersz+1)-2,3*(this.kolumna+1)-1,6),new Pieces(3*(this.wiersz+1)-1,3*(this.kolumna+1)-3,7),new Pieces(3*(this.wiersz+1)-1,3*(this.kolumna+1)-2,8),new Pieces(3*(this.wiersz+1)-1,3*(this.kolumna+1)-1,9)];


			


	},
	getPieces: function(){
		return this.piecess;
	},
	getPieces1: function(wiersz,kolumna){
		this.wiersz = wiersz;
		this.kolumna = kolumna;
		this.id = 27*Math.floor((this.wiersz/3)*3)+Math.floor(3*(this.kolumna/3));
		this.pieces = this.piecess[this.id];
		return this.pieces;
	},
	flip: function(){
			this.lcxt.clearRect(0,0,this.width,this.height);
			this.numbersctx.clearRect(0,0,this.width,this.height);
		
	},
	isEmpty: function(){
		
		var empty = true;
		if ((this.wiersz != - 1) && (this.kolumna != -1)){
			
			var empty  = false;
			return empty;
		}
	return empty;
			},


		
	isPressed2: function(wiersz,kolumna){
		
			this.wiersz = wiersz;
			this.kolumna = kolumna;
			
			
		
		var c = false;
		
		
		if ((this.wiersz == wiersz) && (this.kolumna == kolumna)){
			
			var c = true;
			return c;
		}
	
	return c;

		

	
	
	},
hasClicked: function(wiersz,kolumna){
	
	this.wiersz = wiersz;
	this.kolumna = kolumna;


			
		var len = this.piecess.length;
		var p =this.piecess;
	for (var i = 0; i<len; i++){
		
		var p = this.piecess[i];
				if (p.hasClicked(this.wiersz,this.kolumna)){
					
					this.value = this.piecess[i].getValue();
					return this.value;	
				}
	}/*
		
	//	return this._super(this.wiersz,this.kolumna);
		
		if (p[i].hasClicked(this.wiersz,this.kolumna)){
			
		//	console.log(i);
		this.value =this.piecess[i].getValue();
		return this.value;
		
	
		}
	//	this.piecess[i].hasClicked(this.wiersz,this.kolumna);
	
	}*/
	
},
	hidden: function(){
		
		
		this.xctx.clearRect(this.kolumna*Math.floor(this.xboard.width/9.0), this.wiersz*Math.floor(this.xboard.height/9.0),Math.floor(this.xboard.width/9.0), Math.floor(this.xboard.height/9.0));
		this.lcxt.clearRect(Math.floor(this.subcellsize*this.kolumna),Math.floor(this.subcellsize*this.wiersz),this.subcellsize,this.subcellsize)

			
this.numbersctx.clearRect(Math.floor(this.kolumna)*Math.floor(this.boardnumber.width/9.0),Math.floor(this.wiersz)*Math.floor(this.boardnumber.height/9.0),this.numbsubcellsize,Math.floor(this.boardnumber.height/9.0))
	},
/*hidden: function(){
+this.piecess.splice(0,9);
//this.boxes.splice(0,1);
},*/
chooseValue: function(){
	var len = 9;
	
	for (var i = 0; i<len; i++){
		if (this.events.chooseValue[i]){
	this.value = this.events.piecess[i].getValue();
	return this.value;
		}
	}
	
},

getSubCell: function(){

	var choosenSubcell = new ChooseSubcell(this.value,this.wiersz,this.kolumna);		
	
},
get: function(){

	
				
				[new Pieces(1,3*(this.wiersz+1)-3,3*(this.kolumna+1)-3),new Pieces(2,3*(this.wiersz+1)-3,3*(this.kolumna+1)-2),new Pieces(3,3*(this.wiersz+1)-3,3*(this.kolumna+1)-1),new Pieces(4,3*(this.wiersz+1)-2,3*(this.kolumna+1)-3),new Pieces(5,3*(this.wiersz+1)-2,3*(this.kolumna+1)-2),new Pieces(6,3*(this.wiersz+1)-2,3*(this.kolumna+1)-1),new Pieces(7,3*(this.wiersz+1)-1,3*(this.kolumna+1)-3),new Pieces(8,3*(this.wiersz+1)-1,3*(this.kolumna+1)-2),new Pieces(9,3*(this.wiersz+1)-1,3*(this.kolumna+1)-1),new Pieces(1,1,4)]

var len = this.piecess.length;
	
	return this.piecess;
	
		},
		isClicked: function(wiersz,kolumna){
		
		this.wiersz = wiersz;
		this.kolumna = kolumna;
		console.log(this.wiersz);
		console.log( this.kolumna);
		
	},
update1: function(){
					
			piecess =	[new Pieces(1,3*(this.wiersz+1)-3,3*(this.kolumna+1)-3),new Pieces(2,3*(this.wiersz+1)-3,3*(this.kolumna+1)-2),new Pieces(3,3*(this.wiersz+1)-3,3*(this.kolumna+1)-1),new Pieces(4,3*(this.wiersz+1)-2,3*(this.kolumna+1)-3),new Pieces(5,3*(this.wiersz+1)-2,3*(this.kolumna+1)-2),new Pieces(6,3*(this.wiersz+1)-2,3*(this.kolumna+1)-1),new Pieces(7,3*(this.wiersz+1)-1,3*(this.kolumna+1)-3),new Pieces(8,3*(this.wiersz+1)-1,3*(this.kolumna+1)-2),new Pieces(9,3*(this.wiersz+1)-1,3*(this.kolumna+1)-1),new Pieces(1,1,4)]
			
			return piecess;
	
},
update: function(){
	
	this.choosenSubcell = new choosenSubcell(this.wiersz,this.kolumna); 
	return this.choosenSubcell;
},	

	

	draw: function(){
		this._super();
/** 	W TEJ WERSJI DZIAŁAJĄ SKRESLENIA Pieces **/
	//this.box.draw(1,1);
	
/** W TEJ WERSJI NIE DZIAŁAJĄ SKRESLENIA Pieces**/
var len = this.boxes.length;
					lctx = this.light.getContext("2d");
for (var i=0; i<len; i++){
	box = this.boxes[i];
	box.draw(lctx);
}
var len = this.piecess.length;

for (var i=0; i<len; i++){
		this.piecess[i].draw();
	
}

	},
	getSubCellIndex: function(){
		return this.id;
	},
	isClick: function(){
		
			this.subcell.id =  (((this.subcell.wiersz )*9) +this.subcell.kolumna);
			gSelectedPieceIndex = this.subcell.getSubCellIndex();
			alert('isClick' +gSelectedPieceIndex);
	}
});
var choosenSubcell = SubCell.extend({

	state: null,
	id: null,
	value: null,
	init: function(wiersz,kolumna){
					this.light = getEl("light");
			this.lcxt = this.light.getContext("2d");
			this.cellsize = Math.round(this.light.width/3.0);
			this.subcellsize = Math.round(this.cellsize/3.0);
			this.width = Math.round(this.subcellsize/3.0);
			this.height = Math.round(this.subcellsize/3.0);

		this.boardnumber = getEl("boardnumber");
			this.numbersctx =  this.boardnumber.getContext("2d");

						this.numbcellsize = Math.round(this.boardnumber.width/3.0);
			this.numbsubcellsize = Math.round(this.numbcellsize/3.0);
		
		
		this.wiersz = wiersz;
		this.kolumna = kolumna;
	this._super(this.wiersz,this.kolumna);

		this.xboard	= getEl("xboard");
		this.xctx = this.xboard.getContext("2d");
		
	},
	getID: function(){
		return this.id;
	},	
	
	
	hasClicked: function(wiersz,kolumna){
this.wiersz = wiersz;
this.kolumna = kolumna;

var len = this.piecess.length;
		for (var i = 0; i<len; i++){ 
			if(this.piecess[i].hasClicked(this.wiersz,this.kolumna)){
				
			this.value = this.piecess[i].getValue();
			return this.value;
			}
		}
	},
	hidden: function(){
		
this._super();
	},
	isEmpty: function(){
		
		this._super();
	}
})
var ChooseSubcell = SubCell.extend({
	
	
	id: null,

	init: function(value,wiersz,kolumna){
		
		
		
		this.wiersz = wiersz;
		this.kolumna = kolumna;
		this.value = value;
		
	
		this.lightnumber = getEl("lightnumber");
		this.lightctx = this.lightnumber.getContext("2d");
		this.width = this.lightnumber.width;
		this.height = this.lightnumber.height;
	
	
		this.cell = new Cell
		this.cell.width =  Math.round(this.lightnumber.width/3.0);
		this.cell.height = Math.round(this.lightnumber.height/3.0);
		
		this.subcell = new SubCell;
		this.subcell.width = Math.round(this.cell.width/3.0);
		this.subcell.height = Math.round(this.cell.height/3.0);
		
		},
	
	draw: function(){
	
	
		
		
		
		this.x=Math.round(this.subcell.height*(this.wiersz+0.5));
		this.y=Math.round(this.subcell.width*(this.kolumna+0.5));
		
 		
	this.liczby = new ChoosenLiczby(this.value,this.x,this.y);
		
	},	
	hasChoose: function(wiersz,kolumna){
		
				alert('hasC');
		
		var c = false;
		
		
		if ((this.wiersz == wiersz) && (this.kolumna == kolumna)){
			
			var c = true;
			return c;
		}
	
	return c;

		

	
	},
	hidden: function(){
					this.lightnumber = getEl("lightnumber");
		this.lightctx = this.lightnumber.getContext("2d");
		this.lightctx.clearRect(0,0,1000,1000);
	},
	isEmpty: function(){
		
		var empty = true;
		if ((this.wiersz != - 1) &&(this.kolumna !=-1)){
			empty = false;
			return empty;
		}
		return empty
	},
	getID: function(){
		return this.id;
	},
	hasClicked: function(wiersz,kolumna){
		
		var c = false;
		
	
		if ((this.wiersz == wiersz) && (this.kolumna == kolumna)){
			
			var c = true;
			return c;
		}
	
	return c;
	}
});
	 

strikePieces=Pieces.extend({

/**
"skreślone" pieces
**/

	init: function(wiersz,kolumna){
	
		this.wiersz=wiersz;
		this.kolumna=kolumna;
			this.pieces = new Pieces;
	},
	draw: function(){
	var X = this.pieces.drawX(this.wiersz,this.kolumna);
	},
	
	strikes: function(){
	return  X;
	}
	

});
