States={

	NO_CHANGE: 0,
	MENU: 1,
	GANE: 2,
	END: 3,
	UNDO: 4,
	RESTART: 5
	

};


var Sudoku = Class.extend({

	 
	init: function(){
	


		this.currentState = null;
		this.nextState=States.GAME;

	
	},
	
	

	
	run: function(){
	
	var self = this;
	if (self.nextState !== States.NO_CHANGE){
	
		switch(self.nextState){
		
			case States.MENU:
				self.currentState = new State(self);
			break;
			
			case States.Game:
				self.currentState = new State(self);
			break;
			
			case States.END:
			self. currentState = new State(self);
			break;
				
		
		
		}
			self.nextState = States.NO_CHANGE;
			self.currentState.handleInputs;
			//self.currentState.update();
			self.currentState.render(self.canvas.ctx);
	
	}
		$(document).ready(function(){
	
		console.log("sudoku");

			});
	}


});

