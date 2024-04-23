//complete this code
class Rectangle {
	constructor(width,height){
		this.width = width;
		this.height = height;
	}

	get width(){
		return this._width;
	}

	get height(){
		return this._height;
	}

	set width(widthValue){
		this._width = widthValue;
	}

	set height(heightValue){
		this._height= heightValue;
	}
	getArea(){
		return this._width * this._height;
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side,side)
		this.side =side;
	}

	getPerimeter(){
		
		return 4 * this.side;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
