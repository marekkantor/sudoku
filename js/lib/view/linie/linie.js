var Linia=Class.extend({

	

	init: function(){
	
		this.set=function(bctx, x, y, xdo, ydo, lineWidth, strokeStyle, lineCap, lineDash, lineJoin){

			this.x=x;
			this.y=y;
			this.xdo=xdo;
			this.ydo=ydo;
			this.lineWidth=lineWidth;
			this.strokeStyle=strokeStyle;
			this.lineCap=lineCap;
			this.lineDash=lineDash;
			this.lineJoin=lineJoin;
			this.bctx=bctx;
		}
		
		this.set();
	
	},
	
	
	draw: function(bctx,x,y,xdo,ydo,lineWidth,strokeStyle,lineCap,lineDash, lineJoin){
				this.drawLine=function(){
	

						
	
							
							this.bctx=bctx;
							this.x=x;
							this.y=y;
							
							this.xdo=xdo;
							
							this.ydo=ydo;
							
							this.lineWidth=lineWidth;
							
							this.strokeStyle=strokeStyle;
							this.lineCap=lineCap;
							this.lineDash=lineDash;
							this.lineJoin=lineJoin;
							
					
							bctx.beginPath();
							bctx.lineWidth=this.lineWidth;
							bctx.strokeStyle=this.strokeStyle;
							bctx.moveTo(this.x,this.y);
							bctx.lineTo(this.xdo,this.ydo);
							bctx.stroke();
							bctx.closePath();
				
				}
			this.drawLine();
		
			

			}
});


