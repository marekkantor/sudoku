var Grid=Boards.extend({

	init: function(){
	
		this.grid =this._super("grid");
		this.gctx = this.grid.getContext("2d");

		this.subcell=this.grid.subcell

		this.width = this.grid.width;
		this.height=this.grid.height;
		this.gridSize=this.width=this.height;
		
		this.cell = new Cell;
		this.subcell  = new SubCell;
		this.subcell.numbWidth=this.subcell.liczbaSubCellWidth*this.cell.liczbaCellWidth;
		this.subcell.numbHeight=this.subcell.liczbaSubCellHeight*this.cell.liczbaCellHeight;
		this.subcellsize=Math.round(board.cellsize/3.0);
		this.subcell.width=this.subcell.height=this.subcellsize;
	//	this.subcell.width=this.gridSize/this.subcell.numbWidth;
//		this.subcell.height=this.gridSize/this.subcell.numbHeight;
		
		this.subcell.NumWidth=this.subcell.numbWidth-1;
		this.subcell.NumHeight=this.subcell.numbHeight-1;
		
		
	
	},
	
	draw: function(){
	
	this.colors=["black"];
	this.lineCap=["butt"];
	this.lineJoin=["mitter"];
	
	this.LiniaPrzerywanaParam=[10,10];
	this.doLenght=this.LiniaPrzerywanaParam[0];
	this.spaceLenght=this.LiniaPrzerywanaParam[1];
	
	this.strokeStyle=this.colors[0];
	this.liniaEnd=this.lineCap[0];
	this.join=this.lineJoin[0];
	
	this.px=new Array();
	this.py=new Array();
	
	for (wiersz=0; wiersz<this.subcell.numbWidth; wiersz++){
	
		this.thick=wiersz%3==0;
		this.lineWidth=this.thick ? 2 : 1;
		this.lineWidth=3;
		this.kWierszNumber=1+wiersz;
		this.px[wiersz]=this.subcell.width*this.kWierszNumber;
	
		
		
		this.liniaPrzerywana= new LiniaPrzerywana;
		this.liniaPrzerywana.init(this.gctx);
		this.liniaPrzerywana.draw(this.gctx, this.px[wiersz],0,this.px[wiersz],this.grid.height,this.lineWidth,  this.strokeStyle,this.liniaEnd,this.join,this.doLenght,this.spaceLenght);
		
		}
		
	for (kolumna=0; kolumna<this.subcell.numbHeight; kolumna++){
	
		this.thick=wiersz%3==0;
		this.lineWidth=this.thick ? 2 : 1;
		this.lineWidth=3;
		this.kKolumnaNumber=1+kolumna;
		this.py[kolumna]=this.subcell.height*this.kKolumnaNumber;
		
		this.liniaPrzerywana = new LiniaPrzerywana;
		this.liniaPrzerywana.init(this.gctx);
		this.liniaPrzerywana.draw(this.gctx,0, this.py[kolumna],this.grid.width, this.py[kolumna], this.lineWidth, this.strokeStyle, this.liniaEnd,this.join,this.doLenght,this.spacLlenght);
	
	}
		
		
	
	
	}
	



});
