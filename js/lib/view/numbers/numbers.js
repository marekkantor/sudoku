var AllowesValuesArray = {
  values: [1, 2, 3, 
		   4, 5, 6, 
		   7, 8, 9]
};


var Canvasnumbers=Class.extend({

init: function(canvasnumber){

/**
		
		inicjacja obszaru pisania liczzb
		
		**/
		
this.contextnumber=canvasnumber;

		this.canvasnumber=getEl(this.contextnumber);
		this.numbctx=this.canvasnumber.getContext("2d");
		
		this.width = this.canvasnumber.width;
		this.height = this.canvasnumber.height


}

});

var Liczby=Canvasnumbers.extend({

/**
	
		Tablica możliwych wartości pól
	
		*/
 
init: function(value,x,y){

this._super("boardnumber");
this.value=value;
this.x=x;
this.y=y;
this.drawValue(this.value,this.x,this.y);
},




 

	drawValue: function(value,x,y){
	
		/** 
		
		Wyświetlenie pojedynczej wartości
		
		*/
	
	
		this.value=value;
		
		this.x=y;
		this.y=x;
		this.numbctx.font="bold 12pt Courier";
		this.numbctx.textAlign="center";
		this.numbctx.textBaseline="middle";
		this.numbctx.color="black";
		this.numbctx.fillText(this.value,this.x,this.y);
		
	
	}
	

	


})

var ChoosenLiczby=Canvasnumbers.extend({

/**
	
		Tablica możliwych wartości pól
	
		*/
 
init: function(value,x,y){

this._super("lightnumber");
this.value=value;
this.x=x;
this.y=y;
this.drawValue(this.value,this.x,this.y);
},




 

	drawValue: function(value,x,y){
	
		/** 
		
		Wyświetlenie pojedynczej wartości
		
		*/
	
	
		this.value=value;
		
		this.x=y;
		this.y=x;
		this.numbctx.font="bold 30pt Courier";
		this.numbctx.textAlign="center";
		this.numbctx.textBaseline="middle";
		this.numbctx.color="black";
		this.numbctx.fillText(this.value,this.x,this.y);
		
	
	}
	

	


})
