var Boards = Class.extend({
	
	init: function(boardNames){
		
		this.boardNames = boardNames;
		this.canvas = getEl(this.boardNames);
		return this.canvas;
	}
})


var Board=Boards.extend({

	init: function(){
	
		this.board=this._super("board"); //getEl("board");
		this.bctx=this.board.getContext("2d");
		
		board=this;
		
		this.width=this.board.width;
		this.height=this.board.height;

	this.cell = new Cell;	
	this.cell.width= Math.round(this.board.width/this.cell.liczbaCellWidth);
	this.cell.height = Math.round(this.board.height/this.cell.liczbaCellHeight);

	this.cellsize=this.cell.width=this.cell.height;
	this.NumbBoardCellsWidth=this.cell.liczbaCellWidth-1;
	this.NumbBoardCellsHeight=this.cell.liczbaCellHeight-1;
	
	},
	
	draw: function(){
	

		this.colors=["black"];
		this.lineCap=["butt"];
		this.lineJoin=["miter"];
	
		this.strokeStyle=this.colors[0];
		this.liniaEnd=this.lineCap[0];
		this.join=this.lineJoin[0];
		

		this.px=new Array();
		this.py=new Array();
		
		for (wiersz=0; wiersz<this.NumbBoardCellsWidth; wiersz++){
		
		this.thick=wiersz%3==0;
		
		this.lineWidth=this.thick ? 2 : 1;
		
		this.lineWidth=5;
		this.kWierszNumber=1+wiersz;
		this.px[wiersz]=this.cell.width*this.kWierszNumber;
		
		this.linia = new Linia(this.bctx);
		this.linia.draw(this.bctx,this.px[wiersz],0,this.px[wiersz],this.board.height,this.lineWidth,this.strokeStyle,this.liniaEnd,0,this.join);
		

		}
		
		for (kolumna=0; kolumna<this.NumbBoardCellsHeight; kolumna++){
		
			this.thick=kolumna%3==0;
	this.lineWidth=this.thick ? 2 : 1;
			
		//	this.this.lineWidth=1;
			this.kKolumnaNumber=1+kolumna;
			this.py[kolumna]=this.cell.height*this.kKolumnaNumber;
			
			this.linia = new Linia(this.bctx);
			this.linia.draw(this.bctx,0,this.py[kolumna],this.width,this.py[kolumna],this.lineWidth,this.strokeStyle,this.liniaEnd,0,this.join);
		
		}
		}
	
	



});
