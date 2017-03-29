'use strict';

var Painting = {};

/**
 * Width and height of canvas.
 */
Painting.WIDTH = 400;
Painting.HEIGHT = 400;

/**
 * Block type each level need.
 */
Painting.blocks = [
	['brush_move_north', 'brush_move_east', 'brush_move_south', 'brush_move_west'],
	[],
	[],
	[],
	[]
];

Painting.direction = {
	NORTH: 0,
	EAST: 1,
	SOUTH: 2,
	WEST: 3
};

/**
 * Default pen constants.
 */
Painting.DEFAULT_LINEWIDTH = 5;
Painting.DEFAULT_COLOR = 'white';
Painting.DEFAULT_

Painting.init = function() {
	var visilization = document.getElementById('visilazation');
	var canvas = document.createElement('canvas');
	canvas.id = 'canvas';
	canvas.className = 'canvas';
	visilization.appendChild(canvas);
	Painting.ctxUser = canvas.getContext('2d');
	
	var canvasAnswer = document.createElement('canvas');
	canvasAnswer.id = 'canvas-answer';
	canvasAnswer.className = 'canvas';
	visilization.appendChild(canvasAnswer);
	Painting.ctxAnswer = canvasAnswer.getContext('2d');
	
	var canvasDisplay = document.createElement('canvas');
	canvasDisplay.id = 'canvas-display';
	canvasDisplay.className = 'canvas';
	visilization.appendChild(canvasDisplay);
	Painting.ctxDisplay = canvasDisplay.getContext('2d');

	// Set width and height of canvas.
	canvas.width = Painting.WIDTH;
	canvas.height = Painting.HEIGHT;
	canvasAnswer.width = Painting.WIDTH;
	canvasAnswer.height = Painting.HEIGHT;
	canvasDisplay.width = Painting.WIDTH;
	canvasDisplay.height = Painting.HEIGHT;
	
	// Display backgroung.
	var bgImg = new Image();
	bgImg.src = 'img/bg.jpg';
	bgImg.onload = function() {
		Painting.ctxDisplay.drawImage(this, 0, 0);
	};	
	
	// Initialize pen width and pen color.
	Painting.ctxUser.lineWidth = Painting.DEFAULT_LINEWIDTH;
	Painting.ctxUser.strokeStyle = Painting.DEFAULT_COLOR;
	Painting.ctxAnswer.lineWidth = Painting.DEFAULT_LINEWIDTH;
	Painting.ctxAnswer.strokeStyle = Painting.DEFAULT_COLOR;

	// Set initial point in focus of canvas.
	Painting.ctxUser.moveTo(Painting.WIDTH / 2, Painting.HEIGHT / 2);
	Painting.ctxAnswer.moveTo(Painting.WIDTH / 2, Painting.HEIGHT / 2);
		
	// Initial pen position.
	Painting.position = {
		x: Painting.WIDTH / 2,
		y: Painting.HEIGHT / 2
	};
	
	Game.initToolbox(Painting);
	Game.initWorkspace();	
	
	Painting.initAnswer();
	
	document.getElementById('playBtn').addEventListener('click', Painting.run);
	document.getElementById('resetBtn').addEventListener('click', Painting.reset);
};

Painting.initAnswer = function() {
	switch(Game.LEVEL){
		case 1:
			Painting.move(Painting.ctxAnswer, 0);
			break;
		case 2:
		case 3:
		case 4:
		case 5:
		default:
			console.error('Level is undifined!');
	}	
};

/**
 * 
 * @param {Number} direction
 */
Painting.move = function(ctx, direction) {	
	switch(direction){
		case Painting.direction.NORTH:	
			Painting.position.y -= 50;
			ctx.lineTo(Painting.position.x, Painting.position.y);
			break;
		case Painting.direction.EAST:
			break;
		case Painting.direction.SOUTH:
			break;
		case Painting.direction.WEST:
			break;
	}
	ctx.stroke();
};

Painting.excute = function() {
	
};

Painting.run = function() {
	
};

Painting.reset = function() {
	
};

window.addEventListener('load', Painting.init);