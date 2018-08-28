
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
			},
	update5: function(){
		
		if(empty){
			alert('pieces is empty');
		this.wiersz = 0;
			this.kolumna = 0;
			console.log(this.wiersz);
			console.log(this.kolumna);
			this.pieces = new Pieces(this.wiersz,this.kolumna);
			piecesSkreslony = this.pieces.update();
			piecesSkreslony.draw();
			return;
		}
		else {
			alert('pieces is not empty');
			this.wiersz = - 1;
			this.kolumna = - 1;
			console.log(this.wiersz);
			console.log(this.kolumna);
			return;
		}
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
//		this._super(empty);
	
	
	/**piecesSelect(this)**/
		this.wiersz=wiersz;
		this.kolumna=kolumna;
//		this.box=box;
		//this.row=Math.round(this.wiersz/9)+1;
		//this.col=Math.round(this.kolumna/9)+1;
		//this.subcellsize=10;
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
  
  setTo: function(piecesArray){
		
		this.piecesArray = piecesArray;
	//	alert('setTo' + this.piecesArray);
		
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
  gSelectedPieceIndex: function(){
		
		return this.id;
	},
	isEmpty: function(){
		
		this._super();
	},
  	isClicked: function(){
		
		return this.clicked;
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

var Cell=Pieces.extend({

	width: null,
	height: null,
	liczbaCellWidth: 3,
	liczbaCellHeight: 3,

	
	init: function(wiersz,kolumna){
	
	this.wiersz=wiersz;
		this.kolumna=kolumna;
		
		/*
	this.cells=[new SubCell(3*(this.wiersz+1)-2,3*(this.kolumna+1)-2),new SubCell(3*(this.wiersz+1)-2,3*(this.kolumna+1)-1),new SubCell(3*(this.wiersz+1)-2,3*(this.kolumna+1)),
				new SubCell(3*(this.wiersz+1)-1,3*(this.kolumna+1)-2),new SubCell(3*(this.wiersz+1)-1,3*(this.kolumna+1)-1),new SubCell(3*(this.wiersz+1)-1,3*(this.kolumna+1)),
				new SubCell(3*(this.wiersz+1),3*(this.kolumna+1)-2),new SubCell(3*(this.wiersz+1),3*(this.kolumna+1)-1),new SubCell(3*(this.wiersz+1),3*(this.kolumna+1))
				];
		
		*/
		
	/*	
this.boxes=[new Box1(3*(this.wiersz+1)-3,3*(this.kolumna+1)-3),new Box1(3*(this.wiersz+1)-3,3*(this.kolumna+1)-2),new Box1(3*(this.wiersz+1)-3,3*(this.kolumna+1)-1),
new Box1(3*(this.wiersz+1)-2,3*(this.kolumna+1)-3),new Box1(3*(this.wiersz+1)-2,3*(this.kolumna+1)-2),new Box1(3*(this.wiersz+1)-2,3*(this.kolumna+1)-1),
new Box1(3*(this.wiersz+1)-1,3*(this.kolumna+1)-3),new Box1(3*(this.wiersz+1)-1,3*(this.kolumna+1)-2),new Box1(3*(this.wiersz+1)-1,3*(this.kolumna+1)-1)];
*/
		},
	draw: function(){
	/*
			var len = this.boxes.length;
			
for (var i=0; i<len; i++){
	this.boxes[i].draw();// !!!!!!!!!!!!!!!!!!!!!!!!!!!
}			
	*/
	}
  
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
		
		 this.wiersz=wiersz;
		this.kolumna=kolumna;

//linie dzielące subcell
this.boxes=[new Box1(0,0),new Box1(1,0),new Box1(2,0),new Box1(0,1),new Box1(1,1), new Box1(1,2), new Box1(0,2),new Box1(2,1),new Box1(2,2),
new Box1(3,0), new Box1(3,1), new Box1(3,2),new Box1(4,0),new Box1(4,1), new Box1(4,2), new Box1(5,0),new Box1(5,1),new Box1(5,2),
new Box1(6,0), new Box1(6,1), new Box1(6,2),new Box1(7,0),new Box1(7,1), new Box1(7,2), new Box1(8,0),new Box1(8,1),new Box1(8,2),

new Box1(0,3), new Box1(0,4), new Box1(0,5),new Box1(1,3),new Box1(1,4), new Box1(1,5), new Box1(2,3),new Box1(2,4),new Box1(2,5),
new Box1(3,3), new Box1(3,4), new Box1(3,5),new Box1(4,3),new Box1(4,4), new Box1(4,5), new Box1(5,3),new Box1(5,4),new Box1(5,5),
new Box1(6,3), new Box1(6,4), new Box1(6,5),new Box1(7,3),new Box1(7,4), new Box1(7,5), new Box1(8,3),new Box1(8,4),new Box1(8,5),

new Box1(0,6), new Box1(0,7), new Box1(0,8),new Box1(1,6),new Box1(1,7), new Box1(1,8), new Box1(2,6),new Box1(2,7),new Box1(2,8),
new Box1(3,6), new Box1(3,7), new Box1(3,8),new Box1(4,6),new Box1(4,7), new Box1(4,8), new Box1(5,6),new Box1(5,7),new Box1(5,8),
new Box1(6,6), new Box1(6,7), new Box1(6,8),new Box1(7,6),new Box1(7,7), new Box1(7,8), new Box1(8,6),new Box1(8,7),new Box1(8,8)
]



this.piecess = [new Pieces(3*(this.wiersz+1)-3,3*(this.kolumna+1)-3,1),new Pieces(3*(this.wiersz+1)-3,3*(this.kolumna+1)-2,2),new Pieces(3*(this.wiersz+1)-3,3*(this.kolumna+1)-1,3),new Pieces(3*(this.wiersz+1)-2,3*(this.kolumna+1)-3,4),new Pieces(3*(this.wiersz+1)-2,3*(this.kolumna+1)-2,5),new Pieces(3*(this.wiersz+1)-2,3*(this.kolumna+1)-1,6),new Pieces(3*(this.wiersz+1)-1,3*(this.kolumna+1)-3,7),new Pieces(3*(this.wiersz+1)-1,3*(this.kolumna+1)-2,8),new Pieces(3*(this.wiersz+1)-1,3*(this.kolumna+1)-1,9)];


			


	},
	getPieces: function(){
		return this.piecess;
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
	}
	
},
  hidden: function(){
		
		
		this.xctx.clearRect(this.kolumna*Math.floor(this.xboard.width/9.0), this.wiersz*Math.floor(this.xboard.height/9.0),Math.floor(this.xboard.width/9.0), Math.floor(this.xboard.height/9.0));
		this.lcxt.clearRect(Math.floor(this.subcellsize*this.kolumna),Math.floor(this.subcellsize*this.wiersz),this.subcellsize,this.subcellsize)
    this.numbersctx.clearRect(Math.floor(this.kolumna)*Math.floor(this.boardnumber.width/9.0),Math.floor(this.wiersz)*Math.floor(this.boardnumber.height/9.0),this.numbsubcellsize,Math.floor(this.boardnumber.height/9.0))
	
  },
  get: function(){
	
	
				
				[new Pieces(1,3*(this.wiersz+1)-3,3*(this.kolumna+1)-3),new Pieces(2,3*(this.wiersz+1)-3,3*(this.kolumna+1)-2),new Pieces(3,3*(this.wiersz+1)-3,3*(this.kolumna+1)-1),new Pieces(4,3*(this.wiersz+1)-2,3*(this.kolumna+1)-3),new Pieces(5,3*(this.wiersz+1)-2,3*(this.kolumna+1)-2),new Pieces(6,3*(this.wiersz+1)-2,3*(this.kolumna+1)-1),new Pieces(7,3*(this.wiersz+1)-1,3*(this.kolumna+1)-3),new Pieces(8,3*(this.wiersz+1)-1,3*(this.kolumna+1)-2),new Pieces(9,3*(this.wiersz+1)-1,3*(this.kolumna+1)-1)]
        return this.piecess;
	
		},


	draw: function(){
  
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
	}
  })
  
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
	}
  })
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
		
	}
  })
