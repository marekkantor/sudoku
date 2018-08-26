var X=Class.extend({

	init: function(x,y, isDown){
	
		this.isDown=isDown;
	
	if(this.isDown){
	
			this.xboard=getEl("xboard");
		this.xctx=this.xboard.getContext("2d");
	this.xcanvas=(function(xcanvas){
				xctx.drawX=function(x,y){
					this.strokeStyle="red";
			
			this.x=x;
			this.y=y;
			alert(this.x);
			
					this.beginPath();
					this.stroke();
					xctx.moveTo(this.x-10,this.y-10);
			xctx.lineTo(this.x+10,this.y+10);
			
			xctx.moveTo(this.x+10, this.y-10);
			xctx.lineTo(this.x-10, this.y+10);
					this.closePath();
			
			this.lineWidth=lineWidth;
			this.strokeStyle=strokeStyle;
			this.lineCap=lineCap;
			this.lineJoin=lineJoin;
			this.lineDash=lineDash;
			
			

			
		
	
				
				
				}
	
	
		return xcanvas;
	})(this.xboard.getContext("2d"));
	
	}
	},
	

drawX: function(xctx,x,y,lineWidth,strokeStyle,lineCap,lineJoin,lineDash){
 
	this.xdrawmethod=function(){
	
	this.xctx=xctx;
		this.strokeStyle="red";
			
			this.x=x;
			this.y=y;
			
			this.lineWidth=600;
			this.strokeStyle=strokeStyle;
			this.lineCap=lineCap;
			this.lineJoin=lineJoin;
			this.lineDash=lineDash;
			
			
	
//			xctx.beginPath();
			xctx.lineWidth='5';
			xctx.strokeStyle='red';
			xctx.moveTo(this.x-10,this.y-10);
			xctx.lineTo(this.x+10,this.y+10);
			
			xctx.moveTo(this.x+10, this.y-10);
			xctx.lineTo(this.x-10, this.y+10);
			xctx.stroke();
			xctx.closePath();
			
	
	
	
	}

		this.xdrawmethod();
}

});
var X1 = X.extend({

init: function(wiersz,kolumna){
			this.xboard=getEl("xboard");
		this.xctx=this.xboard.getContext("2d");
		
		this.wiersz=wiersz;
		this.kolumna=kolumna;
		this.x=Math.round(this.kolumna-1);//0
		this.y=Math.round(this.wiersz-1);//2
		this.X = new X;
		
		this.pieces = new Pieces;
		
		this.X.drawX(this.xctx,this.pieces.width*(this.x+1/2),this.pieces.height*(this.y+1/2));
		//this.X.drawX(this.xctx,pieces.width*(this.x+1/2),pieces.height*(this.y+1/2));
},
clearX: function(wiersz,kolumna){
		
		this.wiersz = wiersz;
		this.kolumna = kolumna;
		
		this.xctx.clearRect(this.wiersz*this.pieces.width,this.kolumna*this.pieces.height,(this.wiersz+1)*this.pieces.width,(this.kolumna+1)*this.pieces.height);
} 
});
