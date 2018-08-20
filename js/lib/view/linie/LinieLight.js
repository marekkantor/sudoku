var LiniaLight=Class.extend({

	

	init: function(){
	
		this.set=function(lctx, x, y, xdo, ydo, lineWidth, strokeStyle, lineCap, lineDash, lineJoin){

			this.x=x;
			this.y=y;
			this.xdo=xdo;
			this.ydo=ydo;
			this.lineWidth=lineWidth;
			this.strokeStyle=strokeStyle;
			this.lineCap=lineCap;
			this.lineDash=lineDash;
			this.lineJoin=lineJoin;
			this.lctx=lctx;
		}
		
		this.set();
	
	},
	
	
	draw: function(lctx,x,y,xdo,ydo,lineWidth,strokeStyle,lineCap,lineDash, lineJoin){
				this.drawLine=function(){
	


							this.lctx=lctx;
							
							this.x=x;
							this.y=y;
							
							this.xdo=xdo;
							
							this.ydo=ydo;
							
							this.lineWidth=lineWidth;
							
							this.strokeStyle=strokeStyle;
							this.lineCap=lineCap;
							this.lineDash=lineDash;
							this.lineJoin=lineJoin;
							
					
							lctx.beginPath();
							lctx.lineWidth=this.lineWidth;
							lctx.strokeStyle=this.strokeStyle;
							lctx.moveTo(this.x,this.y);
							lctx.lineTo(this.xdo,this.ydo);
							lctx.stroke();
							lctx.closePath();
				
				}
			this.drawLine();
		
			

			}
});


