  var Sudoku = Class.extend({

	init: function(){
		
	

		//rysowanie sudoku
		this.sudokuArea = new SudokuArea(700,700);
		this.sudokuArea.getCanvas();
		this.sudokuArea.getContext();

		// rysowanie menu sudoku
	///	this.input = new InputHandler5;
//		menu = new MenuSudoku;
	//menu.draw();
//		this.state = new SudokuStates();
	


	
	
	},
	
	

	draw: function(){
		
		this.sudokuArea.paintCanvas();
		this.sudokuArea.draw();
		
	},

	
	run: function(){
	//merody modyfikujÄce sudoku

		//aktualizacja sudoku
	//this.input3 = new InputHandler1(this.sudokuArea);

	
		this.sudokuArea.update();	
		
		$(document).ready(function(){
	
		console.log("sudoku");


			});
			


	},
	restart: function(){
		
console.log('sudoku restart');
		
	}
	
});
