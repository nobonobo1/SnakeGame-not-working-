
window.onload = function() {
	
	// Creating game with field, snake and apple
	var game = new Game();
	game.create();

	// Handling keydown
	document.onkeydown = function(event)
	{
		// Handling keydown if arrow keys are downed, pass if other keys
		arr = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
		if (arr.includes(event.key))
		{
			game.changeSnakeDirection(event.key);
		} 
		else
		{
			//Pass
			console.log(event.key);
		}
	}
}

