var LiniaPrzerywana=Class.extend({

	init: function(){
	
		this.set=function(lctx, x, y, xdo, ydo, lineWidth, strokeStyle, lineCap, lineJoin, doLenght, spaceLenght){
		
			this.lctx=lctx;
			this.x=x;
			this.y=y;
			this.xdo=xdo;
			this.ydo=ydo;
			this.lineWidth=lineWidth;
			this.strokeStyle=strokeStyle;
			this.lineCap=lineCap;
			this.lineJoin=lineJoin;
			this.doLenght=doLenght;
			this.spaceLenght=spaceLenght;
			
			
	
		}
		
		this.set();
	
	},
	
	draw: function(gctx,x,y,xdo,ydo, lineWidth, strokeStyle, lineCap, lineJoin, doLenght, spaceLenght){
	
	
		this.drawLine=function(){
				
				this.gctx=gctx;
				this.x=x;
				this.y=y;
				this.xdo=xdo;
				this.ydo=ydo;
				this.lineWidth=lineWidth;
				this.strokeStyle=strokeStyle;
				this.lineCap=lineCap;
				this.lineJoin=lineJoin;
				this.doLenght=doLenght;
				this.spaceLenght=spaceLenght;
				
				
				gctx.setLineDash([this.doLenght,this.spaceLenght]);
				//lctx.setLineDash([20, 20]);
							
				gctx.beginPath();
				gctx.lineWidth=this.lineWidth;
				gctx.strokeStyle=this.strokeStyle;
				gctx.moveTo(this.x,this.y);
				gctx.lineTo(this.xdo,this.ydo);
				gctx.stroke();
				gctx.closePath();
			
			
			
			
			
			}
				this.drawLine();
	
	}

});
