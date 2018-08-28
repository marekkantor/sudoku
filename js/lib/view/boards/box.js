var Box=SubCell.extend({
	
	init: function(wiersz,kolumna){
		
			this.hidden =[ ];
					for (var i = 0; i < 9*9*9; i++){
					this.hidden[i] = true;
				
				}
		this.hidden[0] = true;
				this.hidden[1] = true;
			this.wiersz = wiersz;
			this.kolumna = kolumna;
			
			this.light = getEl("light");
		//lctx = this.light.getContext("2d");
			this.width = this.light.width;
			this.cellsize = Math.round(this.width/3.0);
			this.subcellsize = Math.round(this.cellsize/3.0)
			this.picessize = Math.round(this.subcellsize/3.0);
		

			this.x = this.wiersz*this.subcellsize;
			this.y = (this.wiersz+1)*this.subcellsize
	},
	hide: function(i){
		
	return this.hidden[i];
	},
	update: function(){
		
		this.hidden();
	},
	draw: function(lctx){

			
				
			
				this.drawLines = function(){
					
						this.points = new Array();
			
			p = this.points;
			p[0] = 20;
			p[1] = 20 ;
			
			a = this.points;
			a[0] = 40;
			a[1] = 40;
					lctx.beginPath();
					lctx.moveTo(this.x,this.picessize+this.kolumna*this.subcellsize);
					lctx.lineTo(this.y,this.picessize+this.kolumna*this.subcellsize);
					lctx.stroke();
					
						lctx.beginPath();
					lctx.moveTo(this.wiersz*this.subcellsize,2*this.picessize+this.kolumna*this.subcellsize);
					lctx.lineTo((this.wiersz+1)*this.subcellsize,2*this.picessize+this.kolumna*this.subcellsize);
					lctx.stroke();
					
					lctx.beginPath();
					lctx.moveTo(this.picessize+this.wiersz*this.subcellsize, this.kolumna*this.subcellsize);
					lctx.lineTo(this.picessize+this.wiersz*this.subcellsize,this.subcellsize*(this.kolumna+1));
					lctx.stroke();
					
					lctx.beginPath();
					lctx.moveTo(2*this.picessize+this.wiersz*this.subcellsize, this.subcellsize*this.kolumna);
				lctx.lineTo(2*this.picessize+this.wiersz*this.subcellsize,this.subcellsize*(this.kolumna+1));
					lctx.stroke();
				
				
				};
			this.drawLines();
			
		},
		clearAll: function(lctx, wiersz,kolumna ){

		this.wiersz = wiersz;
		this.kolumna = kolumna;
		this.light = getEl("light");	
		lctx = this.light.getContext("2d");
		lctx.clearRect(this.subcellsize,this.subcellsize,0,0);


		}
});
