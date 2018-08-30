


 
var Light=Boards.extend({



	init: function(nameCanvas){
		this.nameCanvas = nameCanvas;

	


this._super("light");
	this.cells=[this.cell = new Cell(1,1),this.cell = new Cell(1,2),this.cell = new Cell(1,3),
				this.cell = new Cell(2,1),this.cell = new Cell(2,2),this.cell = new Cell(3,2),
				this.cell = new Cell(3,1),this.cell = new Cell(3,2),this.cell = new Cell(3,3)];


	

this.subcells = [		
this.subcell = new SubCell(0,0),//0	
this.subcell = new SubCell(0,1),//1
this.subcell = new SubCell(0,2),//2
this.subcell = new SubCell(1,0),//3
this.subcell = new SubCell(1,1),//4
this.subcell = new SubCell(1,2),//5
this.subcell = new SubCell(2,0),//6
this.subcell = new SubCell(0,8),//7
this.subcell = new SubCell(2,1),
this.subcell = new SubCell(2,2),
this.subcell = new SubCell(0,3),
this.subcell = new SubCell(0,4),
this.subcell = new SubCell(0,5),
this.subcell = new SubCell(1,3),
this.subcell = new SubCell(1,4),
this.subcell = new SubCell(1,5),
this.subcell = new SubCell(2,3),
this.subcell = new SubCell(2,4),
this.subcell = new SubCell(2,5),
this.subcell = new SubCell(0,6),
this.subcell = new SubCell(1,6),
this.subcell = new SubCell(2,6),
this.subcell = new SubCell(0,7),
this.subcell = new SubCell(1,7),
this.subcell = new SubCell(2,7),

this.subcell = new SubCell(1,8),
this.subcell = new SubCell(2,8),

this.subcell = new SubCell(3,0),	
this.subcell = new SubCell(3,1),
this.subcell = new SubCell(3,2),
this.subcell = new SubCell(4,0),
this.subcell = new SubCell(4,1),
this.subcell = new SubCell(4,2),
this.subcell = new SubCell(5,0),
this.subcell = new SubCell(5,1),
this.subcell = new SubCell(5,2),
this.subcell = new SubCell(3,3),
this.subcell = new SubCell(3,4),
this.subcell = new SubCell(3,5),
this.subcell = new SubCell(4,3),
this.subcell = new SubCell(4,4),
this.subcell = new SubCell(4,5),
this.subcell = new SubCell(5,3),
this.subcell = new SubCell(5,4),
this.subcell = new SubCell(5,5),
this.subcell = new SubCell(3,6),
this.subcell = new SubCell(4,6),
this.subcell = new SubCell(5,6),
this.subcell = new SubCell(3,7),
this.subcell = new SubCell(4,7),
this.subcell = new SubCell(5,7),
this.subcell = new SubCell(3,8),
this.subcell = new SubCell(4,8),
this.subcell = new SubCell(5,8),

this.subcell = new SubCell(6,0),	
this.subcell = new SubCell(6,1),
this.subcell = new SubCell(6,2),
this.subcell = new SubCell(7,0),
this.subcell = new SubCell(7,1),
this.subcell = new SubCell(7,2),
this.subcell = new SubCell(8,0),
this.subcell = new SubCell(8,1),
this.subcell = new SubCell(8,2),
this.subcell = new SubCell(6,3),
this.subcell = new SubCell(6,4),
this.subcell = new SubCell(6,5),
this.subcell = new SubCell(7,3),
this.subcell = new SubCell(7,4),
this.subcell = new SubCell(7,5),
this.subcell = new SubCell(8,3),
this.subcell = new SubCell(8,4),
this.subcell = new SubCell(8,5),
this.subcell = new SubCell(6,3),
this.subcell = new SubCell(6,4),
this.subcell = new SubCell(6,5),
this.subcell = new SubCell(6,6),
this.subcell = new SubCell(6,7),
this.subcell = new SubCell(6,8),
this.subcell = new SubCell(7,4),
this.subcell = new SubCell(7,5),
this.subcell = new SubCell(7,6),
this.subcell = new SubCell(7,7),
this.subcell = new SubCell(7,8),
this.subcell = new SubCell(8,6),
this.subcell = new SubCell(8,7),
this.subcell = new SubCell(8,8)

]

this.piecess = this.subcells[0].get();

this.updateSubcells = false;


	_pressed = [ ];
	var len = this.subcells.length;
for (var i =0;i<len; i++){
	
	_pressed[i] = false;
}


this.choosenSubcells = [ ]; 
var sudNumbSubcell = 9 * 9;
empty = new Empty;
for (var i = 0; i<len; i++){
this.choosenSubcells[i] = empty; 
}
},

hasClicked: function(wiersz,kolumna){
	
	
	this.wiersz = wiersz;
	this.kolumna = kolumna;
	this.choosenSubcell = new SubCell(this.wiersz,this.kolumna);
	

		
	for (var i = 0;i<len;i++){
		this.subcell = this.subcells[i];
	if(this.subcell.isPressed2(this.choosenSubcell.wiersz,this.choosenSubcell.kolumna)){
		
		this.choosenSubcell.id =  (((this.choosenSubcell.wiersz )*9) +this.choosenSubcell.kolumna);
		var gSelectedPieceIndex = this.choosenSubcell.getSubCellIndex();
		_pressed[gSelectedPieceIndex] = true;
		
		}
	}

},

getPieces: function(pieces){
	
	this.pieces = pieces;
	this.choosenPieces = new Pieces(this.pieces.wiersz,this.pieces.kolumna);
	return this.choosenPieces;
},
isPressed: function(subcell){
	
	this.subcell = subcell;
//	alert('subcell pressed' + this.subcell);
			this.subcell.id =  (((this.subcell.wiersz )*9) +this.subcell.kolumna);
		this.gSelectedPieceIndex = this.subcell.getSubCellIndex();
		return _pressed[this.gSelectedPieceIndex];
},
	get: function(){ 
	
return this.piecess; 
		
	},
render: function(){

		this.subcell.hidden();	
	
},

	update: function(){
	
	//	alert('light update');
		
	
if (this.choosenPieces!= undefined){

			subcell = this.subcell;
			
	
					if (this.subcell!= null){
			this.subcell.id =  (((this.subcell.wiersz )*9) +this.subcell.kolumna);
			gSelectedPieceIndex = this.subcell.getSubCellIndex();
		chooseSubcell = this.choosenSubcells[gSelectedPieceIndex];
				
						if(chooseSubcell.isEmpty()){

		this.piecess = this.subcell.get();
		


s = this.subcell;

			var len = this.piecess.length;
			for (var i = 0; i<len; i++){
							

				var pieces = this.piecess[i];
				if (pieces.hasClicked(this.choosenPieces.wiersz,this.choosenPieces.kolumna)){
					this.pieces.value = pieces.getValue();
				
					
					 this.choosenSubcell =  new ChooseSubcell(this.pieces.value,this.subcell.wiersz,this.subcell.kolumna);
					 this.choosenSubcell.id = this.choosenSubcell.wiersz*9 + this.choosenSubcell.kolumna;
					 gSelectedPieceIndex = this.choosenSubcell.getID();
					 choosenSubcells[gSelectedPieceIndex] = this.choosenSubcell;
			choosenSubcells[gSelectedPieceIndex].draw();


					var len = choosenSubcells.length;
					
					for (var i = 0; i<len; i++){
						
						choosenSubcell = choosenSubcells[i];
						choosenSubcell.draw();
					}

				
			}
			}
		
		}
		}
			if(!chooseSubcell.isEmpty()){
				
		//		alert('subcell is clicked');
				return;
				}
		
		}
		
		},	
	draw: function(){

		if (this.updateSubcells){
	console.log(this.updateSubcells);
	 this.choosenSubcells[0].draw();
}
else {
len = this.subcells.length;
for (var i= 0; i < len; i++){	
	this.subcells[i].draw();
}

	}
	},
	restart: function(gameState){
		//działa, ale do poprawy
			this.gameState = gameState;
		
	//	alert(' light restart' + this.gameState);
		if (this.gameState){
this.pieces = new PiecesSkreslony(0,0);
		this.pieces.render();

		//trzeba dodać empty!!!
		
		//alert('light restart');

var len = this.subcells.length;
for (var i = 0; i<len; i++){
	if (!choosenSubcells[i].isEmpty()){
		choosenSubcell = choosenSubcells[i];
		choosenSubcell.hidden();
this.subcells[i].draw();	
}
}
	
		}
	}
	
	

});
